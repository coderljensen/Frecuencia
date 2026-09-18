// Cloudflare Pages Function: POST /api/chat  (Gemini-Proxy + Test)
// Key lives only here (env GEMINI_API_KEY). Auto-fallback across free Flash
// models when one is temporarily overloaded (503/429/5xx).

const DEFAULT_MODEL = "gemini-flash-latest";
const FALLBACKS = ["gemini-flash-latest", "gemini-3.6-flash", "gemini-3.5-flash", "gemini-flash-lite-latest"];
const MODEL_CAP = {
  "gemini-flash-latest": 2000,
  "gemini-flash-lite-latest": 2000,
  "gemini-3.6-flash": 2000,
  "gemini-3.5-flash": 2000,
  "gemini-pro-latest": 2000
};

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "content-type": "application/json" }
  });
}

async function callGemini(model, key, payload) {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/" +
    encodeURIComponent(model) + ":generateContent?key=" + encodeURIComponent(key);
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
}

// Try the requested model, then fall back to other Flash models on 429/5xx.
async function generateWithFallback(key, payload, firstModel) {
  const order = [firstModel].concat(FALLBACKS.filter((m) => m !== firstModel));
  let lastStatus = 0, lastDetail = "";
  for (const m of order) {
    let r;
    try { r = await callGemini(m, key, payload); }
    catch (e) { lastDetail = String(e); continue; }
    if (r.ok) return { ok: true, resp: r, model: m };
    lastStatus = r.status;
    lastDetail = await r.text().catch(() => "");
    // retryable → try next model; hard error (400/404) → stop
    if (!(r.status === 429 || r.status >= 500)) break;
  }
  return { ok: false, status: lastStatus, detail: lastDetail };
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const key = env.GEMINI_API_KEY;
  if (!key) return json({ error: "server_key_missing" }, 500);

  let body;
  try { body = await request.json(); } catch (e) { return json({ error: "bad_json" }, 400); }

  const model = MODEL_CAP[body.model] ? body.model : DEFAULT_MODEL;
  const cap = MODEL_CAP[model];
  let max_tokens = parseInt(body.max_tokens, 10);
  if (!Number.isFinite(max_tokens) || max_tokens < 1) max_tokens = 400;
  if (max_tokens > cap) max_tokens = cap;

  const messages = Array.isArray(body.messages) ? body.messages : null;
  if (!messages || !messages.length) return json({ error: "no_messages" }, 400);
  if (JSON.stringify(messages).length > 60000) return json({ error: "too_large" }, 413);

  const contents = messages.map((m) => ({
    role: (m.role === "assistant" || m.role === "model") ? "model" : "user",
    parts: [{ text: String(m.content || "") }]
  }));
  const generationConfig = {
    maxOutputTokens: max_tokens,
    temperature: body.json ? 0.4 : 0.85,
    thinkingConfig: { thinkingBudget: 0 }   // no internal "thinking" -> fast replies
  };
  if (body.json) generationConfig.responseMimeType = "application/json";

  const out = await generateWithFallback(key, { contents, generationConfig }, model);
  if (!out.ok) return json({ error: "upstream", status: out.status, detail: out.detail }, 502);

  const data = await out.resp.json();
  let text = "";
  try {
    const parts = data && data.candidates && data.candidates[0] &&
      data.candidates[0].content && data.candidates[0].content.parts;
    if (Array.isArray(parts)) text = parts.map((p) => p.text || "").join("");
  } catch (e) {}
  return json({ text });
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  if (url.searchParams.get("test") === "1") {
    const key = env.GEMINI_API_KEY;
    if (!key) return json({ test: "fail", reason: "GEMINI_API_KEY fehlt in Cloudflare (oder nicht neu deployt)" });
    const out = await generateWithFallback(key, {
      contents: [{ role: "user", parts: [{ text: "Di hola en español." }] }],
      generationConfig: { maxOutputTokens: 50, thinkingConfig: { thinkingBudget: 0 } }
    }, DEFAULT_MODEL);
    if (out.ok) return json({ test: "ok", model: out.model, keyStart: String(key).slice(0, 4) });
    return json({ test: "fail", status: out.status, keyStart: String(key).slice(0, 4), detail: String(out.detail).slice(0, 900) });
  }
  return json({ ok: true, service: "frecuencia-gemini-proxy" });
}
