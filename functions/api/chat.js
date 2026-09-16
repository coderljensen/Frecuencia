// Cloudflare Pages Function: POST /api/chat
// Proxies to the Google Gemini API (free tier). The API key lives only here
// (env var GEMINI_API_KEY), never in the browser. Models are whitelisted and
// output tokens are capped.

const MODEL_CAP = {
  "gemini-2.5-flash": 2000,
  "gemini-2.5-flash-lite": 2000,
  "gemini-2.5-pro": 2000,
  "gemini-2.0-flash": 2000
};

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { "content-type": "application/json" }
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const key = env.GEMINI_API_KEY;
  if (!key) return json({ error: "server_key_missing" }, 500);

  let body;
  try { body = await request.json(); } catch (e) { return json({ error: "bad_json" }, 400); }

  const model = MODEL_CAP[body.model] ? body.model : "gemini-2.5-flash";
  const cap = MODEL_CAP[model];
  let max_tokens = parseInt(body.max_tokens, 10);
  if (!Number.isFinite(max_tokens) || max_tokens < 1) max_tokens = 400;
  if (max_tokens > cap) max_tokens = cap;

  const messages = Array.isArray(body.messages) ? body.messages : null;
  if (!messages || !messages.length) return json({ error: "no_messages" }, 400);
  if (JSON.stringify(messages).length > 60000) return json({ error: "too_large" }, 413);

  // Gemini uses roles "user" / "model" and a `contents` array.
  const contents = messages.map((m) => ({
    role: (m.role === "assistant" || m.role === "model") ? "model" : "user",
    parts: [{ text: String(m.content || "") }]
  }));

  const generationConfig = {
    maxOutputTokens: max_tokens,
    temperature: body.json ? 0.4 : 0.85
  };
  if (body.json) generationConfig.responseMimeType = "application/json";

  const url = "https://generativelanguage.googleapis.com/v1beta/models/" +
    encodeURIComponent(model) + ":generateContent?key=" + encodeURIComponent(key);

  let up;
  try {
    up = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ contents, generationConfig })
    });
  } catch (e) {
    return json({ error: "network", detail: String(e) }, 502);
  }

  if (!up.ok) {
    const detail = await up.text().catch(() => "");
    return json({ error: "upstream", status: up.status, detail }, 502);
  }

  const data = await up.json();
  let text = "";
  try {
    const parts = data && data.candidates && data.candidates[0] &&
      data.candidates[0].content && data.candidates[0].content.parts;
    if (Array.isArray(parts)) text = parts.map((p) => p.text || "").join("");
  } catch (e) {}
  return json({ text });
}

export async function onRequestGet() {
  return json({ ok: true, service: "frecuencia-gemini-proxy" });
}
