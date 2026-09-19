/* Frecuencia — grammar STRUCTURES (Muster-Karten).
   Each structure teaches ONE construction through many sentences that share the
   same frame but vary the vocabulary → procedural, not rote. cards: [deutsch, español]. */
window.STRUCTURES = [
  {
    id:"presente-regular", name:"Präsens (regelmäßig)", formula:"Verbstamm + Endung", level:"A1",
    hint:"Die Gegenwart über alle Personen und die drei Verbklassen (-ar/-er/-ir).",
    cards:[
      ["Ich arbeite jeden Tag.","Trabajo todos los días."],
      ["Du lernst viel Spanisch.","Estudias mucho español."],
      ["Sie isst kein Fleisch.","Ella no come carne."],
      ["Wir leben in einer kleinen Stadt.","Vivimos en una ciudad pequeña."],
      ["Ihr sprecht sehr schnell.","Habláis muy rápido."],
      ["Die Kinder trinken Milch.","Los niños beben leche."],
      ["Ich schreibe eine E-Mail.","Escribo un correo."],
      ["Er kauft Brot im Supermarkt.","Compra pan en el supermercado."]
    ]
  },
  {
    id:"ser-estar", name:"Ser vs. Estar", formula:"ser (Eigenschaft) / estar (Zustand, Ort)", level:"A1",
    hint:"Wann „sein“ = ser (dauerhaft/Identität) und wann = estar (Zustand/Ort).",
    cards:[
      ["Ich bin Lehrer.","Soy profesor."],
      ["Heute bin ich müde.","Hoy estoy cansado."],
      ["Sie ist sehr nett.","Ella es muy simpática."],
      ["Das Essen ist kalt.","La comida está fría."],
      ["Wir sind aus Deutschland.","Somos de Alemania."],
      ["Madrid liegt in Spanien.","Madrid está en España."],
      ["Es ist drei Uhr.","Son las tres."],
      ["Die Tür ist offen.","La puerta está abierta."]
    ]
  },
  {
    id:"gustar", name:"Die gustar-Konstruktion", formula:"me/te/le + gusta(n) + …", level:"A1",
    hint:"„gefallen“: Singular gusta, Plural gustan; me/te/le/nos/os/les.",
    cards:[
      ["Mir gefällt diese Stadt.","Me gusta esta ciudad."],
      ["Mir gefallen deine Schuhe.","Me gustan tus zapatos."],
      ["Ihm gefällt Fußball nicht.","No le gusta el fútbol."],
      ["Ich reise gern.","Me gusta viajar."],
      ["Magst du Kaffee?","¿Te gusta el café?"],
      ["Den Kindern gefallen Süßigkeiten.","A los niños les gustan los dulces."],
      ["Dieses Lied gefällt mir sehr.","Me gusta mucho esta canción."],
      ["Uns gefällt das Meer.","Nos gusta el mar."]
    ]
  },
  {
    id:"querer-inf", name:"querer + Infinitiv", formula:"quiero + Infinitiv", level:"A1",
    hint:"Einen Wunsch/Willen ausdrücken: „ich will/möchte … tun“.",
    cards:[
      ["Ich möchte Spanisch lernen.","Quiero aprender español."],
      ["Willst du etwas essen?","¿Quieres comer algo?"],
      ["Sie will nach Hause gehen.","Ella quiere ir a casa."],
      ["Wir wollen einen Film sehen.","Queremos ver una película."],
      ["Ich will dir helfen.","Quiero ayudarte."],
      ["Wollt ihr mitkommen?","¿Queréis venir?"],
      ["Er will nicht arbeiten.","No quiere trabajar."],
      ["Ich möchte Wasser trinken.","Quiero beber agua."]
    ]
  },
  {
    id:"tener-que", name:"tener que + Infinitiv", formula:"tengo que + Infinitiv", level:"A2",
    hint:"Notwendigkeit/Verpflichtung: „ich muss … tun“.",
    cards:[
      ["Ich muss jetzt gehen.","Tengo que irme ahora."],
      ["Du musst mehr schlafen.","Tienes que dormir más."],
      ["Wir müssen die Rechnung bezahlen.","Tenemos que pagar la cuenta."],
      ["Sie muss viel lernen.","Ella tiene que estudiar mucho."],
      ["Ich muss meine Mutter anrufen.","Tengo que llamar a mi madre."],
      ["Ihr müsst vorsichtig sein.","Tenéis que tener cuidado."],
      ["Er muss früh aufstehen.","Tiene que levantarse temprano."],
      ["Ich muss noch arbeiten.","Todavía tengo que trabajar."]
    ]
  },
  {
    id:"ir-a-inf", name:"ir a + Infinitiv (nahe Zukunft)", formula:"voy a + Infinitiv", level:"A1",
    hint:"Absicht/Zukunft: „ich werde … tun / ich habe vor zu …“.",
    cards:[
      ["Ich werde nach Spanien reisen.","Voy a viajar a España."],
      ["Was wirst du morgen machen?","¿Qué vas a hacer mañana?"],
      ["Wir werden zu Abend essen.","Vamos a cenar."],
      ["Es wird regnen.","Va a llover."],
      ["Sie werden heiraten.","Van a casarse."],
      ["Ich werde ein Auto kaufen.","Voy a comprar un coche."],
      ["Wirst du mir helfen?","¿Me vas a ayudar?"],
      ["Ihr werdet es schaffen.","Vais a lograrlo."]
    ]
  },
  {
    id:"poder-inf", name:"poder + Infinitiv", formula:"puedo + Infinitiv", level:"A2",
    hint:"Können/Dürfen und höfliche Bitten.",
    cards:[
      ["Kann ich hereinkommen?","¿Puedo entrar?"],
      ["Kannst du mir helfen?","¿Puedes ayudarme?"],
      ["Wir können morgen kommen.","Podemos venir mañana."],
      ["Heute kann ich nicht.","Hoy no puedo."],
      ["Können Sie das wiederholen?","¿Puede repetir?"],
      ["Hier darf man nicht rauchen.","Aquí no se puede fumar."],
      ["Sie kann sehr gut singen.","Ella puede cantar muy bien."],
      ["Kannst du langsamer sprechen?","¿Puedes hablar más despacio?"]
    ]
  },
  {
    id:"reflexivos", name:"Reflexive Verben (Tagesablauf)", formula:"me/te/se + Verb", level:"A2",
    hint:"„sich …“: me levanto, te duchas, se viste …",
    cards:[
      ["Ich stehe um sieben auf.","Me levanto a las siete."],
      ["Ich dusche jeden Morgen.","Me ducho cada mañana."],
      ["Du ziehst dich schnell an.","Te vistes rápido."],
      ["Er rasiert sich.","Se afeita."],
      ["Wir setzen uns an den Tisch.","Nos sentamos a la mesa."],
      ["Ich gehe spät ins Bett.","Me acuesto tarde."],
      ["Wie heißt du?","¿Cómo te llamas?"],
      ["Ich fühle mich gut.","Me siento bien."]
    ]
  },
  {
    id:"estar-gerundio", name:"estar + Gerundio (Verlaufsform)", formula:"estoy + -ando/-iendo", level:"A2",
    hint:"Was gerade im Moment passiert: „ich bin am …“.",
    cards:[
      ["Ich esse gerade.","Estoy comiendo."],
      ["Was machst du gerade?","¿Qué estás haciendo?"],
      ["Sie arbeitet gerade.","Ella está trabajando."],
      ["Es regnet gerade.","Está lloviendo."],
      ["Wir schauen gerade einen Film.","Estamos viendo una película."],
      ["Die Kinder spielen gerade.","Los niños están jugando."],
      ["Ich lerne gerade Spanisch.","Estoy aprendiendo español."],
      ["Er schläft gerade.","Está durmiendo."]
    ]
  },
  {
    id:"me-gustaria", name:"me gustaría + Infinitiv (höflicher Wunsch)", formula:"me gustaría + Infinitiv", level:"A2",
    hint:"Höflich einen Wunsch ausdrücken: „ich würde gerne …“.",
    cards:[
      ["Ich würde gerne nach Spanien reisen.","Me gustaría viajar a España."],
      ["Ich würde gerne Paella essen.","Me gustaría comer paella."],
      ["Ich würde gerne früher gehen.","Me gustaría irme antes."],
      ["Würdest du gerne mitkommen?","¿Te gustaría venir?"],
      ["Ich hätte gerne einen Kaffee.","Me gustaría un café."],
      ["Wir würden gerne Spanisch lernen.","Nos gustaría aprender español."],
      ["Ich würde dich gerne wiedersehen.","Me gustaría verte otra vez."],
      ["Ich würde gerne am Meer leben.","Me gustaría vivir junto al mar."]
    ]
  },
  {
    id:"perfecto", name:"Pretérito perfecto", formula:"he/has/ha + Partizip", level:"A2",
    hint:"Abgeschlossenes mit Bezug zur Gegenwart (heute, schon, noch nicht …).",
    cards:[
      ["Heute habe ich viel gearbeitet.","Hoy he trabajado mucho."],
      ["Hast du schon gegessen?","¿Ya has comido?"],
      ["Wir haben einen Film gesehen.","Hemos visto una película."],
      ["Ich habe die Schlüssel verloren.","He perdido las llaves."],
      ["Sie ist noch nicht angekommen.","Todavía no ha llegado."],
      ["Ich habe das nie gemacht.","Nunca lo he hecho."],
      ["Habt ihr die Nachricht gelesen?","¿Habéis leído el mensaje?"],
      ["Diese Woche habe ich viel gelernt.","Esta semana he estudiado mucho."],
      ["Ich habe heute noch nicht gefrühstückt.","Hoy todavía no he desayunado."],
      ["Warst du schon mal in Spanien?","¿Has estado alguna vez en España?"],
      ["Wir sind schon angekommen.","Ya hemos llegado."],
      ["Sie haben mir nichts gesagt.","No me han dicho nada."],
      ["Ich habe meine Hausaufgaben gemacht.","He hecho los deberes."],
      ["Dieses Jahr sind wir viel gereist.","Este año hemos viajado mucho."]
    ]
  },
  {
    id:"indefinido", name:"Pretérito indefinido", formula:"-é/-aste/-ó …", level:"B1",
    hint:"Abgeschlossene Vergangenheit (gestern, letztes Jahr, plötzlich).",
    cards:[
      ["Gestern habe ich nicht gearbeitet.","Ayer no trabajé."],
      ["Ich habe gestern mit ihm gesprochen.","Hablé con él ayer."],
      ["Wir haben in einem Restaurant gegessen.","Comimos en un restaurante."],
      ["Sie reiste letztes Jahr nach Mexiko.","Viajó a México el año pasado."],
      ["Ich bin früh aufgestanden.","Me levanté temprano."],
      ["Was ist gestern passiert?","¿Qué pasó ayer?"],
      ["Sie kauften ein Haus.","Compraron una casa."],
      ["Ich habe den Film gestern Abend gesehen.","Vi la película anoche."],
      ["Kolumbus kam 1492 in Amerika an.","Colón llegó a América en 1492."],
      ["Ich wurde in Berlin geboren.","Nací en Berlín."],
      ["Sie gingen ins Kino.","Fueron al cine."],
      ["Wir hatten eine tolle Zeit.","Lo pasamos genial."],
      ["Er schrieb mir gestern.","Me escribió ayer."],
      ["Ich konnte nicht schlafen.","No pude dormir."]
    ]
  },
  {
    id:"imperfecto", name:"Pretérito imperfecto", formula:"-aba / -ía", level:"B1",
    hint:"Gewohnheiten und Zustände in der Vergangenheit („früher …, als ich Kind war …“).",
    cards:[
      ["Als Kind habe ich viel gespielt.","De niño jugaba mucho."],
      ["Früher wohnte ich in Berlin.","Antes vivía en Berlín."],
      ["Es war kalt und es regnete.","Hacía frío y llovía."],
      ["Wir gingen jeden Sommer ans Meer.","Íbamos al mar cada verano."],
      ["Sie war sehr schön.","Ella era muy guapa."],
      ["Ich hatte einen Hund.","Tenía un perro."],
      ["Während er las, kochte ich.","Mientras él leía, yo cocinaba."],
      ["Es war drei Uhr.","Eran las tres."],
      ["Als ich klein war, aß ich viele Süßigkeiten.","Cuando era pequeño, comía muchos dulces."],
      ["Es gab viele Leute auf der Straße.","Había mucha gente en la calle."],
      ["Wir sahen jeden Tag fern.","Veíamos la tele todos los días."],
      ["Ich dachte, du wärst zu Hause.","Pensaba que estabas en casa."],
      ["Sie trug immer ein rotes Kleid.","Siempre llevaba un vestido rojo."],
      ["Wie hieß dein erster Lehrer?","¿Cómo se llamaba tu primer profesor?"]
    ]
  },
  {
    id:"subjuntivo-espero", name:"Subjuntivo nach espero que / quiero que", formula:"espero que + Subjuntivo", level:"B1",
    hint:"Wunsch/Gefühl/Wertung über eine andere Person löst den Subjuntivo aus.",
    cards:[
      ["Ich hoffe, dass du kommst.","Espero que vengas."],
      ["Ich hoffe, dass alles gut geht.","Espero que todo salga bien."],
      ["Ich will, dass du mir hilfst.","Quiero que me ayudes."],
      ["Es ist wichtig, dass du lernst.","Es importante que estudies."],
      ["Ich hoffe, dass es dir gefällt.","Espero que te guste."],
      ["Sie will, dass wir früh kommen.","Quiere que vengamos temprano."],
      ["Ich hoffe, dass es dir besser geht.","Espero que te sientas mejor."],
      ["Vielleicht regnet es morgen.","Quizás llueva mañana."],
      ["Ich hoffe, dass ihr euch amüsiert.","Espero que os divirtáis."],
      ["Es ist besser, dass du früh schläfst.","Es mejor que duermas temprano."],
      ["Ich will nicht, dass du gehst.","No quiero que te vayas."],
      ["Ich hoffe, dass wir uns bald sehen.","Espero que nos veamos pronto."],
      ["Es freut mich, dass du hier bist.","Me alegro de que estés aquí."],
      ["Sie bittet mich, ihr zu helfen.","Me pide que la ayude."]
    ]
  },
  {
    id:"condicional-si", name:"Bedingungssatz (irreal)", formula:"si + Imperf. de subj., condicional", level:"B2",
    hint:"„Wenn ich …hätte/wäre/könnte, würde ich …“ — hypothetische Situationen.",
    cards:[
      ["Wenn ich Geld hätte, würde ich reisen.","Si tuviera dinero, viajaría."],
      ["Wenn ich du wäre, würde ich es tun.","Si yo fuera tú, lo haría."],
      ["Wenn ich Zeit hätte, würde ich dir helfen.","Si tuviera tiempo, te ayudaría."],
      ["Wenn es nicht regnen würde, würden wir rausgehen.","Si no lloviera, saldríamos."],
      ["Wenn ich Spanisch könnte, würde ich in Spanien arbeiten.","Si supiera español, trabajaría en España."],
      ["Was würdest du tun, wenn du gewinnen würdest?","¿Qué harías si ganaras?"],
      ["Wenn ich könnte, würde ich mehr schlafen.","Si pudiera, dormiría más."],
      ["Wenn du kämst, wäre ich glücklich.","Si vinieras, sería feliz."],
      ["Wenn ich reich wäre, würde ich nicht arbeiten.","Si fuera rico, no trabajaría."],
      ["Wenn wir mehr Zeit hätten, würden wir bleiben.","Si tuviéramos más tiempo, nos quedaríamos."],
      ["Wenn du mehr lernen würdest, würdest du bestehen.","Si estudiaras más, aprobarías."],
      ["Was würdest du sagen, wenn er käme?","¿Qué dirías si él viniera?"],
      ["Wenn ich in Madrid wäre, würde ich dich besuchen.","Si estuviera en Madrid, te visitaría."],
      ["Wenn es möglich wäre, würde ich es ändern.","Si fuera posible, lo cambiaría."]
    ]
  },
  {
    id:"comparativo", name:"Vergleich (Komparativ)", formula:"más/menos … que", level:"A2",
    hint:"Dinge vergleichen: „größer als, weniger als, besser als …“.",
    cards:[
      ["Ich bin größer als du.","Soy más alto que tú."],
      ["Dieses Buch ist interessanter als jenes.","Este libro es más interesante que ese."],
      ["Heute ist es kälter als gestern.","Hoy hace más frío que ayer."],
      ["Sie spricht besser Spanisch als ich.","Ella habla español mejor que yo."],
      ["Mein Auto ist älter als deins.","Mi coche es más viejo que el tuyo."],
      ["Madrid ist größer als Valencia.","Madrid es más grande que Valencia."],
      ["Das ist einfacher, als ich dachte.","Esto es más fácil de lo que pensaba."],
      ["Er hat mehr Geld als Zeit.","Tiene más dinero que tiempo."]
    ]
  },
  {
    id:"imperativo", name:"Imperativ (Befehle & Bitten)", formula:"¡Ven! / Cierra / No te preocupes", level:"A2",
    hint:"Jemandem sagen, was er tun (oder nicht tun) soll — tú und usted.",
    cards:[
      ["Komm her!","¡Ven aquí!"],
      ["Hör mir zu!","¡Escúchame!"],
      ["Mach die Tür zu!","¡Cierra la puerta!"],
      ["Setz dich, bitte.","Siéntate, por favor."],
      ["Sag mir die Wahrheit.","Dime la verdad."],
      ["Mach dir keine Sorgen.","No te preocupes."],
      ["Nimm nicht so viel.","No cojas tanto."],
      ["Warten Sie einen Moment.","Espere un momento."]
    ]
  },
  {
    id:"por-para", name:"por vs. para", formula:"por (Grund/durch) / para (Ziel/Zweck)", level:"B1",
    hint:"Die zwei „für“: para = Ziel/Empfänger/Zweck, por = Grund/Tausch/durch.",
    cards:[
      ["Danke für alles.","Gracias por todo."],
      ["Das ist für dich.","Esto es para ti."],
      ["Wir sind durch den Park gelaufen.","Paseamos por el parque."],
      ["Ich lerne, um zu reisen.","Estudio para viajar."],
      ["Ich zahle zwanzig Euro dafür.","Pago veinte euros por esto."],
      ["Der Zug fährt nach Madrid.","El tren sale para Madrid."],
      ["Wir treffen uns am Morgen.","Quedamos por la mañana."],
      ["Ich brauche es für morgen.","Lo necesito para mañana."],
      ["Dieses Geschenk ist für meine Mutter.","Este regalo es para mi madre."],
      ["Wir haben lange telefoniert.","Hablamos por teléfono mucho rato."],
      ["Ich mache das für dich.","Lo hago por ti."],
      ["Um gesund zu sein, muss man schlafen.","Para estar sano, hay que dormir."],
      ["Danke fürs Kommen.","Gracias por venir."],
      ["Er lernt, um Arzt zu werden.","Estudia para ser médico."]
    ]
  },
  {
    id:"pronombres", name:"Objektpronomen (lo/la/le, me/te)", formula:"te veo · lo compro · te lo doy", level:"B1",
    hint:"„ihn/es/dir …“ ersetzen und vor das Verb stellen (oder anhängen).",
    cards:[
      ["Ich sehe dich.","Te veo."],
      ["Ich sehe ihn.","Lo veo."],
      ["Ich kaufe es.","Lo compro."],
      ["Ich gebe es dir.","Te lo doy."],
      ["Ich schreibe ihr.","Le escribo."],
      ["Kannst du mir helfen?","¿Puedes ayudarme?"],
      ["Ich liebe dich.","Te quiero."],
      ["Sie erzählt es uns.","Nos lo cuenta."],
      ["Ich kenne sie (fem.).","La conozco."],
      ["Kannst du es mir geben?","¿Puedes dármelo?"],
      ["Ich habe ihm die Wahrheit gesagt.","Le dije la verdad."],
      ["Sie rufen uns morgen an.","Nos llaman mañana."],
      ["Ich sehe euch später.","Os veo luego."],
      ["Ich schicke es dir heute.","Te lo envío hoy."]
    ]
  },
  {
    id:"futuro", name:"Futuro simple", formula:"-é/-ás/-á (trabajaré …)", level:"B1",
    hint:"Die einfache Zukunft: „ich werde …“.",
    cards:[
      ["Morgen werde ich arbeiten.","Mañana trabajaré."],
      ["Wir werden nach Spanien reisen.","Viajaremos a España."],
      ["Ich werde es machen.","Lo haré."],
      ["Du wirst es schaffen.","Lo conseguirás."],
      ["Es wird morgen regnen.","Lloverá mañana."],
      ["Sie werden später kommen.","Vendrán más tarde."],
      ["Ich werde dich anrufen.","Te llamaré."],
      ["Alles wird gut.","Todo irá bien."],
      ["Nächstes Jahr werde ich Spanisch sprechen.","El año que viene hablaré español."],
      ["Wir werden zusammen essen.","Comeremos juntos."],
      ["Was wirst du am Wochenende machen?","¿Qué harás el fin de semana?"],
      ["Sie wird bald zurück sein.","Volverá pronto."],
      ["Ich werde es dir morgen sagen.","Te lo diré mañana."],
      ["Es wird sich lohnen.","Valdrá la pena."]
    ]
  },
  {
    id:"condicional", name:"Condicional simple", formula:"-ría (haría, podría …)", level:"B1",
    hint:"Höflichkeit und Hypothesen: „ich würde / könnte / sollte …“.",
    cards:[
      ["Ich würde das nicht machen.","Yo no haría eso."],
      ["Könntest du mir helfen?","¿Podrías ayudarme?"],
      ["An deiner Stelle würde ich gehen.","Yo que tú, me iría."],
      ["Das wäre toll.","Eso sería genial."],
      ["Würdest du mit mir kommen?","¿Vendrías conmigo?"],
      ["Wir sollten mehr lernen.","Deberíamos estudiar más."],
      ["Ich würde lieber zu Hause bleiben.","Preferiría quedarme en casa."],
      ["Das würde ich nie tun.","Eso nunca lo haría."],
      ["Ich würde gerne mit dir reisen.","Me gustaría viajar contigo."],
      ["Würdest du mir einen Gefallen tun?","¿Me harías un favor?"],
      ["Wir würden lieber Kaffee trinken.","Preferiríamos tomar café."],
      ["Das würde viel Zeit kosten.","Eso costaría mucho tiempo."],
      ["Könnten Sie das wiederholen?","¿Podría repetirlo?"],
      ["Ich würde sagen, dass es gut ist.","Yo diría que está bien."]
    ]
  },
  {
    id:"acabar-de", name:"acabar de + Infinitiv", formula:"acabo de + Infinitiv", level:"A2",
    hint:"Etwas gerade eben getan haben: „ich habe gerade …“.",
    cards:[
      ["Ich bin gerade angekommen.","Acabo de llegar."],
      ["Sie ist gerade gegangen.","Acaba de irse."],
      ["Wir haben gerade gegessen.","Acabamos de comer."],
      ["Der Film hat gerade angefangen.","La película acaba de empezar."],
      ["Ich habe gerade mit ihm gesprochen.","Acabo de hablar con él."],
      ["Sie sind gerade aufgewacht.","Acaban de despertarse."],
      ["Ich habe es gerade gesehen.","Acabo de verlo."],
      ["Wir haben gerade angefangen.","Acabamos de empezar."]
    ]
  },
  {
    id:"hay-que", name:"hay que + Infinitiv", formula:"hay que + Infinitiv", level:"A2",
    hint:"Unpersönliche Notwendigkeit: „man muss …“.",
    cards:[
      ["Man muss Geduld haben.","Hay que tener paciencia."],
      ["Man muss vorsichtig sein.","Hay que tener cuidado."],
      ["Man muss früh aufstehen.","Hay que levantarse temprano."],
      ["Man muss viel üben.","Hay que practicar mucho."],
      ["Man muss die Wahrheit sagen.","Hay que decir la verdad."],
      ["Das muss man machen.","Eso hay que hacerlo."],
      ["Man muss aufpassen.","Hay que prestar atención."],
      ["Man darf nicht aufgeben.","No hay que rendirse."]
    ]
  },
  {
    id:"slang-basico", name:"Umgangssprache: Grundausdrücke", formula:"vale · guay · tío · currar", level:"Slang",
    hint:"So reden Spanier wirklich im Alltag — die wichtigsten lockeren Ausdrücke.",
    cards:[
      ["Das ist echt cool!","¡Qué guay!"],
      ["Das gefällt mir voll.","Me mola un montón."],
      ["Kein Problem, Mann.","No pasa nada, tío."],
      ["Ich arbeite viel.","Curro mucho."],
      ["Er ist echt nett.","Es muy majo."],
      ["Ich bin total fertig.","Estoy hecho polvo."],
      ["Ich hab keinen Bock.","No me apetece nada."],
      ["Wir hatten mega Spaß.","Lo pasamos genial."]
    ]
  },
  {
    id:"slang-reacciones", name:"Umgangssprache: Reaktionen & Füllwörter", formula:"¡qué va! · ¡venga! · en plan", level:"Slang",
    hint:"Kurze gesprochene Reaktionen, die ein Gespräch natürlich klingen lassen.",
    cards:[
      ["Auf keinen Fall!","¡Ni de coña!"],
      ["Ach was! / Quatsch!","¡Qué va!"],
      ["Wie nervig!","¡Qué rollo!"],
      ["Zum Glück!","¡Menos mal!"],
      ["Keine Ahnung.","Ni idea."],
      ["Ist mir egal.","Me da igual."],
      ["Komm schon! / Los!","¡Venga!"],
      ["So in der Art / quasi.","En plan…"]
    ]
  },
  {
    id:"slang-expresiones", name:"Umgangssprache: nützliche Redewendungen", formula:"tener ganas · quedar · date prisa", level:"Slang",
    hint:"Alltagsredewendungen, die im echten Gespräch ständig vorkommen.",
    cards:[
      ["Ich hab richtig Lust auf Urlaub.","Tengo muchas ganas de vacaciones."],
      ["Mir ist total langweilig.","Me aburro un montón."],
      ["Ich hab die Nase voll.","Estoy hasta las narices."],
      ["Wir treffen uns um acht.","Quedamos a las ocho."],
      ["Das ist mir peinlich.","Me da vergüenza."],
      ["Beeil dich!","¡Date prisa!"],
      ["Reg dich nicht auf.","No te agobies."],
      ["Alles klar, super.","Vale, guay."]
    ]
  },
  {
    id:"modismos-verbos", name:"Alltags-Redewendungen I (Verben)", formula:"echar de menos · valer la pena · meter la pata", level:"Redewendung",
    hint:"Feste Wendungen mit Verben, die im Alltag ständig vorkommen.",
    cards:[
      ["Ich vermisse dich.","Te echo de menos."],
      ["Kannst du mir mal helfen (mit anpacken)?","¿Me echas una mano?"],
      ["Das ist nötig / das braucht man.","Eso hace falta."],
      ["Hör nicht auf ihn.","No le hagas caso."],
      ["Es lohnt sich.","Vale la pena."],
      ["Streng dich an / gib Gas.","Ponte las pilas."],
      ["Ich habe Mist gebaut.","He metido la pata."],
      ["Willst du mich veräppeln?","¿Me estás tomando el pelo?"]
    ]
  },
  {
    id:"modismos-frases", name:"Alltags-Redewendungen II (Wendungen)", formula:"buena pinta · por si acaso · poco a poco", level:"Redewendung",
    hint:"Häufige feste Ausdrücke für Situationen im Alltag.",
    cards:[
      ["Das sieht richtig gut aus.","Tiene muy buena pinta."],
      ["Das kostet ein Vermögen.","Cuesta un ojo de la cara."],
      ["Du bist mit den Gedanken woanders.","Estás en las nubes."],
      ["Wir hatten Riesenspaß.","Lo pasamos bomba."],
      ["Sicherheitshalber / für alle Fälle.","Por si acaso."],
      ["Ab und zu.","De vez en cuando."],
      ["Lass uns eine Runde drehen.","Vamos a dar una vuelta."],
      ["So nach und nach.","Poco a poco."]
    ]
  },
  {
    id:"flirteo", name:"Flirten & Komplimente", formula:"tienes… · me gustaría… · ¿te apetece…?", level:"Flirten",
    hint:"Natürlich und respektvoll flirten. Achtung: Adjektive ändern sich nach Geschlecht (guapo/guapa).",
    cards:[
      ["Du hast ein wunderschönes Lächeln.","Tienes una sonrisa preciosa."],
      ["Du hast wunderschöne Augen.","Tienes unos ojos preciosos."],
      ["Ich finde dich sehr interessant.","Me pareces muy interesante."],
      ["Mir gefällt, wie du bist.","Me gusta cómo eres."],
      ["Darf ich dich auf einen Drink einladen?","¿Te invito a una copa?"],
      ["Hast du Lust, mal einen Kaffee trinken zu gehen?","¿Te apetece tomar un café algún día?"],
      ["Gibst du mir deine Nummer?","¿Me das tu número?"],
      ["Tanzt du mit mir?","¿Bailas conmigo?"],
      ["Ich hatte einen tollen Abend mit dir.","He pasado una noche genial contigo."],
      ["Ich würde dich gerne wiedersehen.","Me gustaría volver a verte."]
    ]
  }
];
