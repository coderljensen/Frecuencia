/* Frecuencia — verb data for the "Verben" tab.
   Persons order everywhere: yo, tú, él/ella, nosotros, vosotros, ellos/ellas.
   VERBCONJ: hand-checked tables for key irregular verbs (pres/pret[indefinido]/fut).
   VERBLIST: infinitives + German meaning (+ reg flag for the regular engine). */

window.VERB_PERSONS = [
  ["yo","ich"],["tú","du"],["él/ella","er/sie"],
  ["nosotros","wir"],["vosotros","ihr"],["ellos/ellas","sie"]
];

// Pretérito perfecto = haber (present) + participio.
window.HABER_PRES = ["he","has","ha","hemos","habéis","han"];
// Irregular past participles (regular = -ado / -ido, handled by rule).
window.PART = {
  "escribir":"escrito", "abrir":"abierto", "hacer":"hecho", "decir":"dicho",
  "ver":"visto", "poner":"puesto", "volver":"vuelto", "traer":"traído",
  "leer":"leído", "romper":"roto", "morir":"muerto", "descubrir":"descubierto"
};

window.VERBCONJ = {
  "ser":     { pres:["soy","eres","es","somos","sois","son"], pret:["fui","fuiste","fue","fuimos","fuisteis","fueron"], fut:["seré","serás","será","seremos","seréis","serán"], imp:["era","eras","era","éramos","erais","eran"] },
  "estar":   { pres:["estoy","estás","está","estamos","estáis","están"], pret:["estuve","estuviste","estuvo","estuvimos","estuvisteis","estuvieron"], fut:["estaré","estarás","estará","estaremos","estaréis","estarán"] },
  "tener":   { pres:["tengo","tienes","tiene","tenemos","tenéis","tienen"], pret:["tuve","tuviste","tuvo","tuvimos","tuvisteis","tuvieron"], fut:["tendré","tendrás","tendrá","tendremos","tendréis","tendrán"] },
  "ir":      { pres:["voy","vas","va","vamos","vais","van"], pret:["fui","fuiste","fue","fuimos","fuisteis","fueron"], fut:["iré","irás","irá","iremos","iréis","irán"], imp:["iba","ibas","iba","íbamos","ibais","iban"] },
  "hacer":   { pres:["hago","haces","hace","hacemos","hacéis","hacen"], pret:["hice","hiciste","hizo","hicimos","hicisteis","hicieron"], fut:["haré","harás","hará","haremos","haréis","harán"] },
  "poder":   { pres:["puedo","puedes","puede","podemos","podéis","pueden"], pret:["pude","pudiste","pudo","pudimos","pudisteis","pudieron"], fut:["podré","podrás","podrá","podremos","podréis","podrán"] },
  "querer":  { pres:["quiero","quieres","quiere","queremos","queréis","quieren"], pret:["quise","quisiste","quiso","quisimos","quisisteis","quisieron"], fut:["querré","querrás","querrá","querremos","querréis","querrán"] },
  "decir":   { pres:["digo","dices","dice","decimos","decís","dicen"], pret:["dije","dijiste","dijo","dijimos","dijisteis","dijeron"], fut:["diré","dirás","dirá","diremos","diréis","dirán"] },
  "ver":     { pres:["veo","ves","ve","vemos","veis","ven"], pret:["vi","viste","vio","vimos","visteis","vieron"], fut:["veré","verás","verá","veremos","veréis","verán"], imp:["veía","veías","veía","veíamos","veíais","veían"] },
  "dar":     { pres:["doy","das","da","damos","dais","dan"], pret:["di","diste","dio","dimos","disteis","dieron"], fut:["daré","darás","dará","daremos","daréis","darán"] },
  "saber":   { pres:["sé","sabes","sabe","sabemos","sabéis","saben"], pret:["supe","supiste","supo","supimos","supisteis","supieron"], fut:["sabré","sabrás","sabrá","sabremos","sabréis","sabrán"] },
  "poner":   { pres:["pongo","pones","pone","ponemos","ponéis","ponen"], pret:["puse","pusiste","puso","pusimos","pusisteis","pusieron"], fut:["pondré","pondrás","pondrá","pondremos","pondréis","pondrán"] },
  "venir":   { pres:["vengo","vienes","viene","venimos","venís","vienen"], pret:["vine","viniste","vino","vinimos","vinisteis","vinieron"], fut:["vendré","vendrás","vendrá","vendremos","vendréis","vendrán"] },
  "salir":   { pres:["salgo","sales","sale","salimos","salís","salen"], pret:["salí","saliste","salió","salimos","salisteis","salieron"], fut:["saldré","saldrás","saldrá","saldremos","saldréis","saldrán"] },
  "traer":   { pres:["traigo","traes","trae","traemos","traéis","traen"], pret:["traje","trajiste","trajo","trajimos","trajisteis","trajeron"], fut:["traeré","traerás","traerá","traeremos","traeréis","traerán"] },
  "conocer": { pres:["conozco","conoces","conoce","conocemos","conocéis","conocen"], pret:["conocí","conociste","conoció","conocimos","conocisteis","conocieron"], fut:["conoceré","conocerás","conocerá","conoceremos","conoceréis","conocerán"] },
  "pensar":  { pres:["pienso","piensas","piensa","pensamos","pensáis","piensan"], pret:["pensé","pensaste","pensó","pensamos","pensasteis","pensaron"], fut:["pensaré","pensarás","pensará","pensaremos","pensaréis","pensarán"] },
  "volver":  { pres:["vuelvo","vuelves","vuelve","volvemos","volvéis","vuelven"], pret:["volví","volviste","volvió","volvimos","volvisteis","volvieron"], fut:["volveré","volverás","volverá","volveremos","volveréis","volverán"] },
  "dormir":  { pres:["duermo","duermes","duerme","dormimos","dormís","duermen"], pret:["dormí","dormiste","durmió","dormimos","dormisteis","durmieron"], fut:["dormiré","dormirás","dormirá","dormiremos","dormiréis","dormirán"] },
  "pedir":   { pres:["pido","pides","pide","pedimos","pedís","piden"], pret:["pedí","pediste","pidió","pedimos","pedisteis","pidieron"], fut:["pediré","pedirás","pedirá","pediremos","pediréis","pedirán"] },
  "jugar":   { pres:["juego","juegas","juega","jugamos","jugáis","juegan"], pret:["jugué","jugaste","jugó","jugamos","jugasteis","jugaron"], fut:["jugaré","jugarás","jugará","jugaremos","jugaréis","jugarán"] },
  "empezar": { pres:["empiezo","empiezas","empieza","empezamos","empezáis","empiezan"], pret:["empecé","empezaste","empezó","empezamos","empezasteis","empezaron"], fut:["empezaré","empezarás","empezará","empezaremos","empezaréis","empezarán"] },
  "sentir":  { pres:["siento","sientes","siente","sentimos","sentís","sienten"], pret:["sentí","sentiste","sintió","sentimos","sentisteis","sintieron"], fut:["sentiré","sentirás","sentirá","sentiremos","sentiréis","sentirán"] },
  "seguir":  { pres:["sigo","sigues","sigue","seguimos","seguís","siguen"], pret:["seguí","seguiste","siguió","seguimos","seguisteis","siguieron"], fut:["seguiré","seguirás","seguirá","seguiremos","seguiréis","seguirán"] },
  "conducir":{ pres:["conduzco","conduces","conduce","conducimos","conducís","conducen"], pret:["conduje","condujiste","condujo","condujimos","condujisteis","condujeron"], fut:["conduciré","conducirás","conducirá","conduciremos","conduciréis","conducirán"] },
  "leer":    { pres:["leo","lees","lee","leemos","leéis","leen"], pret:["leí","leíste","leyó","leímos","leísteis","leyeron"], fut:["leeré","leerás","leerá","leeremos","leeréis","leerán"] }
};

// Infinitives + German meaning. reg:true => fully regular (engine conjugates).
// grp = ar|er|ir. Verbs present in VERBCONJ are the "irregular" set for drills.
window.VERBLIST = [
  // --- key irregular / stem-changing (have tables where drillable) ---
  ["ser","sein",false,"er"],["estar","sein (Zustand/Ort)",false,"ar"],["tener","haben",false,"er"],
  ["ir","gehen",false,"ir"],["hacer","machen/tun",false,"er"],["poder","können",false,"er"],
  ["querer","wollen/lieben",false,"er"],["decir","sagen",false,"ir"],["ver","sehen",false,"er"],
  ["dar","geben",false,"ar"],["saber","wissen",false,"er"],["poner","stellen/legen",false,"er"],
  ["venir","kommen",false,"ir"],["salir","hinausgehen",false,"ir"],["traer","bringen",false,"er"],
  ["conocer","kennen(lernen)",false,"er"],["pensar","denken",false,"ar"],["volver","zurückkehren",false,"er"],
  ["dormir","schlafen",false,"ir"],["pedir","bitten/bestellen",false,"ir"],["jugar","spielen",false,"ar"],
  ["empezar","anfangen",false,"ar"],["sentir","fühlen",false,"ir"],["seguir","folgen/weitermachen",false,"ir"],
  ["conducir","fahren (lenken)",false,"ir"],["leer","lesen",false,"er"],
  // --- fully regular (engine) ---
  ["hablar","sprechen",true,"ar"],["trabajar","arbeiten",true,"ar"],["estudiar","lernen/studieren",true,"ar"],
  ["comprar","kaufen",true,"ar"],["tomar","nehmen",true,"ar"],["mirar","schauen",true,"ar"],
  ["escuchar","zuhören",true,"ar"],["esperar","warten/hoffen",true,"ar"],["ayudar","helfen",true,"ar"],
  ["necesitar","brauchen",true,"ar"],["usar","benutzen",true,"ar"],["cantar","singen",true,"ar"],
  ["bailar","tanzen",true,"ar"],["cocinar","kochen",true,"ar"],["preguntar","fragen",true,"ar"],
  ["contestar","antworten",true,"ar"],["viajar","reisen",true,"ar"],["descansar","sich ausruhen",true,"ar"],
  ["terminar","beenden",true,"ar"],["entrar","hineingehen",true,"ar"],["llevar","tragen/mitnehmen",true,"ar"],
  ["dejar","lassen",true,"ar"],["pasar","vorbeigehen/passieren",true,"ar"],["quedar","bleiben/verabreden",true,"ar"],
  ["mandar","schicken/befehlen",true,"ar"],["visitar","besuchen",true,"ar"],["invitar","einladen",true,"ar"],
  ["preparar","vorbereiten",true,"ar"],["desear","wünschen",true,"ar"],["cambiar","ändern/wechseln",true,"ar"],
  ["ganar","gewinnen/verdienen",true,"ar"],["llamar","rufen/anrufen",true,"ar"],["lavar","waschen",true,"ar"],
  ["caminar","gehen/spazieren",true,"ar"],["nadar","schwimmen",true,"ar"],["saltar","springen",true,"ar"],
  ["arreglar","reparieren/regeln",true,"ar"],["pintar","malen/streichen",true,"ar"],["comer","essen",true,"er"],
  ["beber","trinken",true,"er"],["aprender","lernen",true,"er"],["correr","rennen/laufen",true,"er"],
  ["vender","verkaufen",true,"er"],["comprender","verstehen",true,"er"],["deber","müssen/sollen",true,"er"],
  ["temer","fürchten",true,"er"],["vivir","leben/wohnen",true,"ir"],["escribir","schreiben",true,"ir"],
  ["recibir","erhalten",true,"ir"],["decidir","entscheiden",true,"ir"],["subir","hochgehen/steigen",true,"ir"],
  ["permitir","erlauben",true,"ir"],["existir","existieren",true,"ir"],["abrir","öffnen",true,"ir"],
  // --- more common verbs (infinitive learning; not drilled for conjugation) ---
  ["gustar","gefallen/mögen",false,"ar"],["encantar","begeistern",false,"ar"],["importar","wichtig sein",false,"ar"],
  ["parecer","scheinen",false,"er"],["creer","glauben",false,"er"],["entender","verstehen",false,"er"],
  ["perder","verlieren",false,"er"],["encontrar","finden",false,"ar"],["recordar","sich erinnern",false,"ar"],
  ["contar","zählen/erzählen",false,"ar"],["mostrar","zeigen",false,"ar"],["costar","kosten",false,"ar"],
  ["probar","probieren",false,"ar"],["cerrar","schließen",false,"ar"],["sentarse","sich setzen",false,"ar"],
  ["despertarse","aufwachen",false,"ar"],["acostarse","sich hinlegen",false,"ar"],["vestirse","sich anziehen",false,"ir"],
  ["ducharse","duschen",true,"ar"],["levantarse","aufstehen",true,"ar"],["llamarse","heißen",true,"ar"],
  ["quedarse","bleiben",true,"ar"],["irse","weggehen",false,"ir"],["sentirse","sich fühlen",false,"ir"],
  ["morir","sterben",false,"ir"],["nacer","geboren werden",false,"er"],["crecer","wachsen",false,"er"],
  ["ofrecer","anbieten",false,"er"],["reconocer","erkennen",false,"er"],["producir","produzieren",false,"ir"],
  ["traducir","übersetzen",false,"ir"],["construir","bauen",false,"ir"],["destruir","zerstören",false,"ir"],
  ["oír","hören",false,"ir"],["caer","fallen",false,"er"],["reír","lachen",false,"ir"],
  ["elegir","wählen",false,"ir"],["repetir","wiederholen",false,"ir"],["servir","dienen/servieren",false,"ir"],
  ["mentir","lügen",false,"ir"],["preferir","bevorzugen",false,"ir"],["divertirse","sich amüsieren",false,"ir"],
  ["convertir","verwandeln",false,"ir"],["conseguir","erreichen/bekommen",false,"ir"],["corregir","korrigieren",false,"ir"],
  ["mover","bewegen",false,"er"],["llover","regnen",false,"er"],["soler","pflegen zu",false,"er"],
  ["doler","wehtun",false,"er"],["oler","riechen",false,"er"],["contener","enthalten",false,"er"],
  ["mantener","behalten/halten",false,"er"],["obtener","erhalten/bekommen",false,"er"],["proponer","vorschlagen",false,"er"],
  ["suponer","annehmen",false,"er"],["componer","zusammensetzen",false,"er"],["deshacer","auflösen",false,"er"],
  ["aparecer","erscheinen",false,"er"],["desaparecer","verschwinden",false,"er"],["ofrecerse","sich anbieten",false,"er"],
  ["comenzar","beginnen",false,"ar"],["almorzar","zu Mittag essen",false,"ar"],["mostrarse","sich zeigen",false,"ar"],
  ["encender","anmachen/anzünden",false,"er"],["defender","verteidigen",false,"er"],["extender","ausdehnen",false,"er"],
  ["llegar","ankommen",false,"ar"],["pagar","bezahlen",false,"ar"],["jugarse","riskieren",false,"ar"],
  ["buscar","suchen",false,"ar"],["sacar","herausnehmen",false,"ar"],["tocar","berühren/spielen",false,"ar"],
  ["explicar","erklären",false,"ar"],["practicar","üben",false,"ar"],["organizar","organisieren",false,"ar"],
  ["utilizar","benutzen",false,"ar"],["realizar","durchführen",false,"ar"],["cruzar","überqueren",false,"ar"]
];
