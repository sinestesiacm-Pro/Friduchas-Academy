// src/slides/mod04_eyes.js — Modulo 4: Eyes Specialist (Slide 84-103)
const layouts = require('../layouts');
const path = require('path');

const img = (file) => path.join(__dirname, '..', '..', 'assets', 'img', file);

function buildMod04Slides(pres) {
  // Slide 84: Opener Modulo 4 (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '04',
    eyebrow: 'MODULO 4 • MAGNETISMO E SICUREZZA',
    title: 'Eyes Specialist:\n*Infracigliare e Sfumato*',
    description: 'Anatomia palpebrale, prevenzione della migrazione perioculare, tecnica Infracigliare, Eyeliner grafico e sfumature Stardust.',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '84',
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 85: Anatomia della Cute Palpebrale (L4)
  layouts.createExplainSlide(pres, {
    title: 'La cute palpebrale:\n*la zona più sottile*',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '85',
    leadText: 'La palpebra presenta la cute più sottile e delicata dell’intero corpo umano: il suo spessore non supera gli 0.05 millimetri.',
    features: [
      'Totale assenza di tessuto adiposo sottocutaneo: il derma poggia quasi direttamente sul muscolo orbicolare',
      'Fittissima rete di capillari superficiali e terminazioni nervose ultrasensibili',
      'Ghiandole di Meibomio lungo la rima palpebrale: proteggono il film lacrimale e non vanno MAI occluse',
      'Richiede una pressione della mano infinitesimale: accarezzare senza mai affondare l’ago'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 86: Sicurezza Oculare e Prevenzione della Migrazione (L8 Dark)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '86',
    eyebrow: 'SICUREZZA ASSOLUTA',
    quote: 'La cornea è sacra.\n*La mano deve avere un punto*\n*di ancoraggio saldo e immobile.*',
    subtext: 'Lavorare a pochi millimetri dal bulbo oculare richiede una concentrazione zenitale. La mano dominante deve avere il mignolo fermamente ancorato sullo zigomo osseo della cliente, e gli occhi devono rimanere perfettamente chiusi e protetti per tutta la seduta.',
    bottomTag: 'PROTOCOLLO PROTEZIONE OCULARE',
    imagePath: img('sample_dark_model.jpg')
  });

  // Slide 87: Il Fenomeno della Migrazione Perioculare (L4)
  layouts.createExplainSlide(pres, {
    title: 'La migrazione:\n*cause e prevenzione*',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '87',
    leadText: 'La migrazione (blowout perioculare) è la diffusione incontrollata del pigmento nei vasi sanguigni o nei dotti linfatici della palpebra, creando un alone bluastro indelebile.',
    features: [
      'Causa 1: Ago inserito troppo in profondità che buca i vasi della rete sottocutanea',
      'Causa 2: Lavorare troppo vicino al canto interno o esterno (zone ad altissima capillarità vascolare)',
      'Causa 3: Uso di aghi a conicità troppo spessa o pigmenti liquidi troppo fluidi ricchi di carbon black instabile',
      'Regola aurea: Fermarsi sempre 2 millimetri prima della commessura palpebrale esterna e interna'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 88: Confronto Tecniche Occhi (L6)
  layouts.createCompareSlide(pres, {
    title: 'Infracigliare (Lashline)\n*vs Eyeliner Grafico Classico*',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '88',
    leadText: 'Due tecniche per intensità e stili diversi, da scegliere in base alla fisionomia dell’occhio.',
    colA: {
      badge: 'IL PIÙ RICHIESTO E NATURALE',
      title: 'Infracigliare (Lash Enhancement)',
      isHighlighted: true,
      rows: [
        { label: 'POSIZIONE', value: 'Esclusivamente NELLO spazio tra i singoli peli delle ciglia' },
        { label: 'EFFETTO', value: 'Intensifica la rima ciliare creando l’illusione di ciglia folte e nere' },
        { label: 'VERSATILITÀ', value: 'Adatto al 100% delle donne di qualsiasi età, con o senza make-up' },
        { label: 'DURATA', value: 'Straordinaria: svanisce molto lentamente senza mai cambiare forma' },
        { label: 'RISCHIO', value: 'Minimo rischio di imperfezioni estetiche nel tempo' }
      ]
    },
    colB: {
      badge: 'DEFINIZIONE DECISA',
      title: 'Eyeliner Grafico con Coda',
      isHighlighted: false,
      rows: [
        { label: 'POSIZIONE', value: 'Sopra la rima ciliare con codina esterna geometrica proiettata' },
        { label: 'EFFETTO', value: 'Linea netta e decisa stile trucco anni ’50 (Cat Eyes)' },
        { label: 'LIMITI', value: 'Sconsigliato su palpebre cadenti o mature (la piega spezza la coda)' },
        { label: 'INVECCHIAMENTO', value: 'Con il cedimento della pelle la coda può apparire storta nel tempo' },
        { label: 'PRECISIONE', value: 'Richiede una mano esperta capace di tirare linee rette perfette' }
      ]
    }
  });

  // Slide 89: Panoramica Tecniche Occhi (L3 Agenda)
  layouts.createAgendaSlide(pres, {
    title: 'Le Tecniche Master\n*per lo Sguardo*',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '89',
    items: [
      'Tecnica 1: Infracigliare Naturale (Lashline)',
      'Tecnica 2: Eyeliner Sfumato (Shaded Eyeliner / Smokey)',
      'Tecnica 3: Infracigliare Inferiore a Punti Sospesi',
      'Gestione degli occhi cadenti e della palpebra matura',
      'Cura domiciliare e controllo del gonfiore'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 90: L'Infracigliare: Esecuzione Tecnica (L4)
  layouts.createExplainSlide(pres, {
    title: 'L’Infracigliare:\n*tecnica di precisione*',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '90',
    leadText: 'L’infracigliare è il trattamento occhi più elegante in assoluto. Non si vede come trucco, ma dona una profondità magnetica allo sguardo.',
    features: [
      'Ago raccomandato: 1RL o 3RL (0.25 - 0.30 mm) con punta medio-corta per non flettere',
      'Movimento a piccoli micro-cerchi o punti ravvicinati tra follicolo e follicolo',
      'Vietato toccare la congiuntiva umida interna: il colore si deposita solo sul piano ciliare esterno',
      'Pigmento: Nero profondo con goccia di modificatore caldo per evitare riflessi bluastri'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 91: Eyeliner Sfumato (Shaded Eyeliner / Stardust) (L4)
  layouts.createExplainSlide(pres, {
    title: 'Eyeliner Sfumato:\n*l’eleganza dell’ombra*',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '91',
    leadText: 'L’eyeliner sfumato combina la definizione ciliare con una polvere di pixel morbida sulla palpebra mobile.',
    features: [
      'Ideale anche su palpebre che presentano una leggera piega o lassità cutanea',
      'Gradiente: infracigliare nero denso che sfuma verso l’alto in un marrone cioccolato o tortora',
      'Uso del movimento a frusta (whip shading) con ago 1RL o 3RS a bassissima saturazione',
      'Risultato guarito: un effetto trucco vellutato che solleva otticamente lo sguardo senza linee dure'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 92: Lo Stretching Palpebrale a 3 Punti (L4)
  layouts.createExplainSlide(pres, {
    title: 'Stretching Palpebrale:\n*il blocco di sicurezza*',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '92',
    leadText: 'La palpebra è un muscolo involontario che reagisce con spasmi (ammiccamento). Bloccarla saldamente è indispensabile per la precisione e l’incolumità della cliente.',
    features: [
      'Punto 1 (Pollice sinistro): blocca la palpebra superiore distendendola verso l’arcata ossea',
      'Punto 2 (Indice sinistro): stira la cute verso l’esterno rendendo la rima piatta',
      'Punto 3 (Mignolo destro): ancora il manipolo saldamente sullo zigomo della cliente',
      'In questo modo l’occhio è perfettamente immobilizzato senza applicare alcuna pressione sul bulbo oculare'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 93: Protocollo di Cura Domiciliare Occhi (L4)
  layouts.createExplainSlide(pres, {
    title: 'Aftercare Occhi:\n*fisiologia e recupero*',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '93',
    leadText: 'La palpebra reagisce con edema nelle prime 24-48 ore (specie al risveglio mattutino). Fornire le corrette istruzioni rasserena la cliente.',
    features: [
      'Applicare cold pack asciutto protetto da garza per 10 minuti più volte nelle prime 24 ore',
      'Dormire con la testa leggermente sollevata su due cuscini per favorire il drenaggio linfatico',
      'Non sfregare, non applicare mascara, eyeliner tradizionale o lenti a contatto per 7 giorni',
      'Sciacquare gli occhi con soluzione fisiologica sterile in caso di leggera lacrimazione'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 94: Statement di Chiusura Modulo 4 (L8 Dark)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'MODULO 4 — EYES SPECIALIST',
    slideNum: '94',
    eyebrow: 'IL MAGNETISMO DELLO SGUARDO',
    quote: 'Negli occhi vive l’anima.\n*La tua precisione le dona*\n*una cornice eterna.*',
    subtext: 'Hai completato tutti i moduli tecnici di sopracciglia, labbra e occhi. Ora entriamo nell’ultimo fondamentale capitolo: trasformare la tua arte in un’attività professionale e di successo.',
    bottomTag: 'FRIDUCHAS ACADEMY • PROSSIMO STEP: BUSINESS & CARRIERA',
    imagePath: img('sample_dark_model.jpg')
  });
}

module.exports = { buildMod04Slides };

