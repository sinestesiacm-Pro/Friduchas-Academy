// src/slides/mod03_lips.js — Modulo 3: Lips Specialist (Slide 71-94)
const layouts = require('../layouts');
const path = require('path');

const img = (file) => path.join(__dirname, '..', '..', 'assets', 'img', file);

function buildMod03Slides(pres) {
  // Slide 71: Opener Modulo 3 (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '03',
    eyebrow: 'MODULO 3 • ARMONIA DEL SORRISO',
    title: 'Lips Specialist:\n*Lip Blush e Neutralizzazione*',
    description: 'Istologia della mucosa labiale, gestione della vascolarizzazione, profilassi anti-herpes, Lip Blush acquerello e protocollo Dark Lips.',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '71',
    imagePath: img('sample_texture.jpg')
  });

  // Slide 72: Anatomia e Istologia della Mucosa Labiale (L4)
  layouts.createExplainSlide(pres, {
    title: 'La mucosa labiale:\n*un tessuto unico*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '72',
    leadText: 'Le labbra non sono rivestite da pelle comune: sono una zona di transizione tra cute esterna e mucosa orale umida (vermiglio).',
    features: [
      'Assenza di strato corneo spesso: la mucosa è sottilissima, trasparente ed estremamente sensibile',
      'Assenza di follicoli piliferi e ghiandole sudoripare: le labbra tendono a disidratarsi rapidamente',
      'Fittissima rete di capillari sanguigni superficiali: conferisce il colore rosso/rosa naturale',
      'Elevatissima innervazione sensoriale: richiede un tocco soffice e una postura salda della mano'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 73: Punti Chiave dell'Architettura Labiale (L4)
  layouts.createExplainSlide(pres, {
    title: 'I punti cardinali\n*dell’architettura labiale*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '73',
    leadText: 'Ridisegnare le labbra richiede il rispetto assoluto della loro struttura anatomica tridimensionale.',
    features: [
      'Arco di Cupido: i due picchi centrali del labbro superiore collegati al filtro nasale',
      'Vermiglio (Vermilion Border): il confine netto tra mucosa colorata e cute circostante',
      'Linea Bianca (White Roll): il delicato cordoncino chiaro che corre sopra il vermiglio',
      'Commessure Labiali (Angoli): zona critica; non chiudere mai con colore scuro per non appesantire'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 74: La Regola d'Oro: MAI Uscire dal Vermiglio (L8 Dark)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '74',
    eyebrow: 'ERRORE PROIBITO',
    quote: 'Mai oltrepassare il vermiglio.\n*Il pigmento su cute*\n*non è mucosa.*',
    subtext: 'Uscire dal contorno naturale per "ingrandire" le labbra crea un effetto clown grottesco: la pelle circostante reagisce con pori dilatati e viraggi scuri. L’illusione di volume si ottiene solo con sfumature ottiche e punti luce interni.',
    bottomTag: 'DIVIETO ASSOLUTO FRIDUCHAS',
    imagePath: img('sample_dark_model.jpg')
  });

  // Slide 75: Il Virus Herpes Simplex (HSV-1) e Profilassi (L4)
  layouts.createExplainSlide(pres, {
    title: 'Herpes Simplex:\n*il protocollo di prevenzione*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '75',
    leadText: 'Oltre l’80% della popolazione adulta è portatrice sana del virus Herpes Simplex Tipo 1 (HSV-1). Il micro-trauma dell’ago ne scatena quasi sempre la riattivazione.',
    features: [
      'Se il virus si riattiva durante la guarigione, le vescicole distruggono il pigmento lasciando buchi bianchi',
      'Profilassi preventiva: consultare il medico per una terapia antivirale (Aciclovir / Valaciclovir)',
      'Assunzione raccomandata: da 2 giorni prima del trattamento fino a 3-5 giorni dopo',
      'Se la cliente presenta un’ulcera o herpes attivo: TRATTAMENTO ASSOLUTAMENTE RIMANDATO'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 76: Neutralizzazione Labbra Scure (Dark Lips) (L6)
  layouts.createCompareSlide(pres, {
    title: 'Labbra Chiare (Pallide)\n*vs Labbra Iper-Pigmentate (Dark Lips)*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '76',
    leadText: 'La concentrazione di melanina nella mucosa determina l’approccio cromatico iniziale.',
    colA: {
      badge: 'APPLICAZIONE DIRETTA',
      title: 'Labbra Chiare / Pallide',
      isHighlighted: true,
      rows: [
        { label: 'BASE DI PARTENZA', value: 'Mucosa rosea, pesca o sbiadita uniforme senza macchie scure' },
        { label: 'APPROCCIO', value: 'Applicazione diretta del colore desiderato (Nude, Rosa, Corallo)' },
        { label: 'PIGMENTI', value: 'Colori a base calda o neutra per ravvivare e dare freschezza' },
        { label: 'NUMERO SEDUTE', value: 'Standard: 1 prima seduta + 1 seduta di ritocco a 30-45 giorni' },
        { label: 'OBIETTIVO', value: 'Effetto gloss o rossetto naturale continuo' }
      ]
    },
    colB: {
      badge: 'PROTOCOLLO COMPLESSO',
      title: 'Dark Lips (Iper-pigmentate)',
      isHighlighted: false,
      rows: [
        { label: 'BASE DI PARTENZA', value: 'Tonalità bluastre, violacee, marroni o macchie melaniniche' },
        { label: 'APPROCCIO', value: 'VIETATO applicare rosa o rossi: diventerebbero grigi/plum' },
        { label: 'PIGMENTI', value: 'Solo Arancio Caldo Puro (Warm Modifier) per neutralizzare il freddo' },
        { label: 'NUMERO SEDUTE', value: 'Richiede 2 o 3 sedute solo per schiarire e uniformare la base' },
        { label: 'OBIETTIVO', value: 'Riportare la mucosa a un tono caldo naturale uniforme' }
      ]
    }
  });

  // Slide 77: Le Tecniche Master per le Labbra (L3 Agenda)
  layouts.createAgendaSlide(pres, {
    title: 'Le 3 Tecniche Master\n*per le Labbra*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '77',
    items: [
      'Tecnica 1: Lip Blush (Effetto Acquerello Trasparente)',
      'Tecnica 2: Velvet Lips (Effetto Velluto Satinato a Piena Copertura)',
      'Tecnica 3: Dark Lip Neutralization (Protocollo Schiarente)',
      'Configurazione Aghi: 1RL per contorno invisibile e 3RS per stesura',
      'Gestione post-trattamento: controllo dell’edema e idratazione continua'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 78: Lip Blush: Effetto Acquerello (L4)
  layouts.createExplainSlide(pres, {
    title: 'Lip Blush:\n*la magia dell’acquerello*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '78',
    leadText: 'Il Lip Blush è la tecnica più richiesta al mondo: dona luminosità e freschezza senza sembrare un rossetto pesante o un contorno anni ’90.',
    features: [
      'Contorno invisibile e sfumato: nessuna linea dura che separi il bordo dalla mucosa interna',
      'Deposito a velature trasparenti: la naturale vascolarizzazione traspare sotto il colore',
      'Pigmenti formulati con bassa concentrazione di biossido di titanio (niente effetto gessoso)',
      'Risultato guarito: labbra rimpolpate otticamente, sane e fresche come dopo un balsamo colorato'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 79: Velvet Lips: Satinato e Saturo (L4)
  layouts.createExplainSlide(pres, {
    title: 'Velvet Lips:\n*eleganza e definizione*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '79',
    leadText: 'Per le clienti che desiderano una copertura più piena, contorni puliti e una definizione impeccabile senza dover applicare il rossetto.',
    features: [
      'Saturazione del 70-80%: colore omogeneo e uniforme da angolo ad angolo',
      'Uso combinato di 1RL per la linea guida e 3RS o 5CM per la stesura compatta',
      'Passaggi incrociati a 45° per saturare ogni microscopica piega della mucosa',
      'Particolarmente indicato per uniformare labbra mature con contorno irregolare o sbiancato'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 80: Configurazione Aghi e Parametri per Labbra (L6)
  layouts.createCompareSlide(pres, {
    title: 'Ago 1RL (0.30 mm)\n*vs Curved Magnum (5CM / 7CM)*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '80',
    leadText: 'Scegliere l’ago giusto sulle labbra accelera il lavoro dimezzando il gonfiore post-seduta.',
    colA: {
      badge: 'MASSIMA PRECISIONE',
      title: 'Ago Singolo (1RL 0.30 mm)',
      isHighlighted: true,
      rows: [
        { label: 'FINALITÀ', value: 'Perfezionamento del contorno, arco di Cupido e pixel delicati' },
        { label: 'DELICATEZZA', value: 'Punta ultra-fine con minimo traumatismo se la mano è leggera' },
        { label: 'TEMPO', value: 'Richiede più tempo per campire l’intera superficie labiale' },
        { label: 'EFFETTO', value: 'Trasparenza pura ad acquerello e sfumature pixelate' },
        { label: 'VOLTAGGIO', value: 'Voltaggio medio-basso (5.5 - 6.5 V)' }
      ]
    },
    colB: {
      badge: 'EFFICIENZA DI COPERTURA',
      title: 'Curved Magnum (5CM / 7CM)',
      isHighlighted: false,
      rows: [
        { label: 'FINALITÀ', value: 'Campitura rapida e uniforme dei volumi interni del vermiglio' },
        { label: 'SUPERFICIE', value: 'Fascio curvo che si adatta alla bombatura anatomica del labbro' },
        { label: 'TEMPO', value: 'Dimezza i tempi di seduta: le labbra si gonfiano molto meno' },
        { label: 'EFFETTO', value: 'Stesura vellutata e omogenea stile rossetto' },
        { label: 'VOLTAGGIO', value: 'Voltaggio leggermente più sostenuto (6.8 - 7.5 V)' }
      ]
    }
  });

  // Slide 81: Gestione dell'Edema e Comfort della Cliente (L4)
  layouts.createExplainSlide(pres, {
    title: 'Edema e comfort:\n*come gestire la seduta*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '81',
    leadText: 'La vasodilatazione reattiva provoca un rigonfiamento temporaneo (edema) che può spaventare la cliente se non spiegato in anticipo.',
    features: [
      'Rassicurazione preventiva: spiegare che le labbra appariranno più grandi e asimmetriche per 24-48 ore',
      'Applicare impacchi freddi asciutti (cold pack protetto da garza sterile) a fine seduta',
      'Stretching costante ma delicato durante l’esecuzione per non lacerare la mucosa',
      'L’edema svanisce completamente entro 24-36 ore rivelando la dimensione reale del disegno'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 82: Protocollo di Cura Domiciliare Labbra (L4)
  layouts.createExplainSlide(pres, {
    title: 'Aftercare Labbra:\n*idratazione e protezione*',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '82',
    leadText: 'La mucosa labiale si rigenera molto più velocemente della pelle comune (circa 7-10 giorni), ma è soggetta a forte secchezza.',
    features: [
      'Applicare un sottile velo di balsamo post-PMU specifico ogni 2-3 ore per mantenere le labbra elastiche',
      'Bere con una cannuccia nelle prime 48 ore ed evitare cibi bollenti, salati, piccanti o acidi (agrumi/pomodoro)',
      'Divieto assoluto di toccare, leccare o staccare le pellicine con i denti',
      'Niente baci, piscina o trucco sulle labbra fino a completa cicatrizzazione'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 83: Statement di Chiusura Modulo 3 (L8 Blush)
  layouts.createStatementSlide(pres, {
    mode: 'blush',
    moduleName: 'MODULO 3 — LIPS SPECIALIST',
    slideNum: '83',
    eyebrow: 'IL TOCCO FINALE DELLE LABBRA',
    quote: 'Un sorriso perfetto non ha contorni visibili,\n*ha solo la freschezza*\n*di una bellezza senza tempo.*',
    subtext: 'Le labbra sono la firma più intima del volto. Con la padronanza del Lip Blush, completiamo la triade estetica con il modulo più delicato: gli occhi.',
    bottomTag: 'FRIDUCHAS ACADEMY • PROSSIMO STEP: EYES',
    imagePath: img('sample_cover.jpg')
  });
}

module.exports = { buildMod03Slides };

