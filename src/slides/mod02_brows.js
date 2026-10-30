// src/slides/mod02_brows.js — Modulo 2: Brows Specialist (Slide 51-85)
const layouts = require('../layouts');
const path = require('path');

const img = (file) => path.join(__dirname, '..', '..', 'assets', 'img', file);

function buildMod02Slides(pres) {
  // Slide 51: Opener Modulo 2 (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '02',
    eyebrow: 'MODULO 2 • ARCHITETTURA DELLO SGUARDO',
    title: 'Brows Specialist:\n*Visagismo e Tecniche*',
    description: 'Canoni aurei di proporzione fisionomica, studio delle spine naturali, tecnica a pelo iperrealistico con dermografo, Powder Brows e protocolli Combo.',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '51',
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 52: L'importanza del Progetto Preliminare (L4)
  layouts.createExplainSlide(pres, {
    title: 'Il progetto preliminare:\n*il 70% del successo*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '52',
    leadText: 'Un lavoro impeccabile di dermopigmentazione non nasce dal dermografo, ma dalla matita. Dedicare tempo al disegno preliminare garantisce il consenso totale della cliente.',
    features: [
      'Il disegno su misura valorizza la struttura ossea senza inseguire mode passeggere',
      'Accordo visivo preliminare: la cliente approva la forma prima di qualsiasi incisione',
      'Conserva l’arcata naturale: rimuovere solo i peli fuori dalla nuova geometria aurea',
      'Postura di verifica: controllare sempre la simmetria con la cliente seduta in piedi'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 53: Morfologia del Viso e Sezione Aurea (L4)
  layouts.createExplainSlide(pres, {
    title: 'Morfologia del volto:\n*i canoni classici*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '53',
    leadText: 'Il viso armonico si suddivide classicamente in tre terzi verticali: superiore (fronte), medio (naso) e inferiore (bocca e mento).',
    features: [
      'Terzo Superiore: dall’attaccatura dei capelli alla glabella (radice del naso)',
      'Terzo Medio: dalla glabella alla base della columella nasale',
      'Terzo Inferiore: dalla columella nasale alla punta del mento',
      'Le sopracciglia definiscono il confine superiore del terzo medio, bilanciando lo sguardo'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 54: I Tre Punti A-B-C (L4)
  layouts.createExplainSlide(pres, {
    title: 'I 3 Punti Aurei:\n*Guida Geometrica A-B-C*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '54',
    leadText: 'La Sezione Aurea applicata all’arcata sopraccigliare definisce con precisione millimetrica l’inizio, il vertice e la chiusura dell’arcata.',
    features: [
      'Punto A (Testa): linea retta passante per la pinna nasale e il canto interno dell’occhio',
      'Punto B (Arco / Apex): linea passante per la pinna nasale e il bordo esterno dell’iride (apice più alto)',
      'Punto C (Coda / Tail): linea passante per la pinna nasale e il canto esterno dell’occhio',
      'Regola proporzionale: il corpo (A-B) rappresenta i 2/3 della lunghezza; la coda (B-C) il terzo rimanente'
    ],
    imagePath: img('diagram_brow_golden_ratio.png')
  });

  // Slide 55: Correzione Morfologica per Forma del Viso (L6)
  layouts.createCompareSlide(pres, {
    title: 'Adattamento Fisionomico:\n*Viso Tondo vs Quadrato*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '55',
    leadText: 'La forma dell’arcata deve compensare otticamente i volumi del viso per ristabilire l’equilibrio dell’ovale.',
    colA: {
      badge: 'EFFETTO SLANCIANTE',
      title: 'Viso Tondo / Paffuto',
      isHighlighted: true,
      rows: [
        { label: 'OBIETTIVO', value: 'Verticalizzare e allungare otticamente i volumi del viso' },
        { label: 'ARCO', value: 'Arco pronunciato e angolato, con punto luce ben definito' },
        { label: 'SPESSORE', value: 'Spessore medio con coda affusolata e orientata verso l’alto' },
        { label: 'DA EVITARE', value: 'Sopracciglia arrotondate o piatte che accentuano la sfericità' },
        { label: 'TECNICA', value: 'Powder Brows con gradiente o Combo con definizione' }
      ]
    },
    colB: {
      badge: 'EFFETTO AMMORBIDENTE',
      title: 'Viso Quadrato / Mascellare',
      isHighlighted: false,
      rows: [
        { label: 'OBIETTIVO', value: 'Ammorbidire la spigolosità della mascella e degli zigomi' },
        { label: 'ARCO', value: 'Arco morbido, curvo e sinuoso senza spigoli geometrici rigidi' },
        { label: 'SPESSORE', value: 'Spessore generoso e pieno per bilanciare la forza della mandibola' },
        { label: 'DA EVITARE', value: 'Linee troppo sottili, diritte o angoli acuti aggressivi' },
        { label: 'TECNICA', value: 'Pelo realistico soffice o Powder degradé molto vellutata' }
      ]
    }
  });

  // Slide 56: Strumenti di Misurazione (L4)
  layouts.createExplainSlide(pres, {
    title: 'Gli strumenti\n*di precisione visagistica*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '56',
    leadText: 'La manualità artistica si supporta con strumenti calibrati che garantiscono simmetria e pulizia grafica.',
    features: [
      'Calibro Aureo (Sezione Aurea): apre e chiude mantenendo costante il rapporto 1:1.618',
      'Filo pre-inchiostrato: traccia linee guida rette perfette con pigmento idrosolubile',
      'Matita dermatografica dura: permette di temperare la mina a bisturi per tratti extra-fini',
      'Pasta bianca / Concealer: pulisce e definisce il contorno esterno bloccando il disegno'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 57: Simmetria vs Armonia Naturale (L4)
  layouts.createExplainSlide(pres, {
    title: 'Simmetria o armonia?\n*Il mito dei volti gemelli*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '57',
    leadText: '«Le sopracciglia sono sorelle, non gemelle». Il cranio umano presenta asimmetrie naturali: orbite diverse, muscoli corrugatori con toni differenti.',
    features: [
      'Forzare una simmetria millimetrica artificiale su un viso asimmetrico crea un effetto robotico',
      'L’obiettivo del PMU è l’armonia visiva dinamica, non la perfezione geometrica da righello',
      'Muscolo frontale: osservare sempre come si sollevano le sopracciglia mentre la cliente parla',
      'Comunicare chiaramente queste asimmetrie alla cliente durante la consulenza iniziale'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 58: La Spina Anatomica (Spine) (L4)
  layouts.createExplainSlide(pres, {
    title: 'La Spina (Spine):\n*il cardine del pelo*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '58',
    leadText: 'La spina è la linea immaginaria dove i peli della parte inferiore e superiore si incontrano e cambiano direzione di crescita naturale.',
    features: [
      'Identificare la spina naturale è il segreto per realizzare un effetto pelo davvero realistico',
      'Spina 3 (Bassa): comune nelle sopracciglia orientali o con coda discendente',
      'Spina 5 / Spina 6 (Centrale): la conformazione più frequente europea ed armoniosa',
      'Disegnare i peli seguendo la spina della cliente garantisce che i tratti non contrastino con i peli veri'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 59: Tipologie di Spine a Confronto (L6)
  layouts.createCompareSlide(pres, {
    title: 'Spina Centrale (5-6)\n*vs Spina Alta (Upper Spine)*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '59',
    leadText: 'La posizione della spina definisce l’orientamento dei singoli tratti di pelo.',
    colA: {
      badge: 'IL CLASSICO EUROPEO',
      title: 'Spina Centrale (Spine 5-6)',
      isHighlighted: true,
      rows: [
        { label: 'CORSO', value: 'I peli inferiori salgono dolcemente; i peli superiori scendono a pettine' },
        { label: 'EFFETTO', value: 'Naturalezza assoluta, volume tridimensionale al centro del corpo' },
        { label: 'ANATOMIA', value: 'Perfetta per il 70% delle clienti con crescita pilifera omogenea' },
        { label: 'CODA', value: 'La coda converge in una linea fluida ed elegante' },
        { label: 'DIFFUSIONE', value: 'La tecnica più richiesta e versatile nei corsi professionali' }
      ]
    },
    colB: {
      badge: 'TREND MODERNO / WILD',
      title: 'Spina Bassa o Alta (Breezy/Fluffy)',
      isHighlighted: false,
      rows: [
        { label: 'CORSO', value: 'I peli inferiori crescono quasi verticali fino al bordo superiore' },
        { label: 'EFFETTO', value: 'Aspetto pettinato verso l’alto, laminazione e look wild da passerella' },
        { label: 'ANATOMIA', value: 'Adatta a clienti giovani con arcate spesse e disordinate' },
        { label: 'CODA', value: 'Peli della coda aperti e ariosi senza chiusura geometrica rigida' },
        { label: 'ESECUZIONE', value: 'Richiede grandissima maestria per non apparire disordinata' }
      ]
    }
  });

  // Slide 60: Come Fissare il Disegno (L4)
  layouts.createExplainSlide(pres, {
    title: 'Come sigillare\n*il disegno preparatorio*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '60',
    leadText: 'Perdere il disegno durante il trattamento è il peggior incubo di una principiante. Ecco il protocollo di fissaggio a prova di sfregamento.',
    features: [
      'Disegnare i tratti guida con matita dermatografica a secco ben appuntita',
      'Applicare pasta bianca o correttore opaco lungo i bordi esterni con pennello piatto sintetico',
      'Primo passaggio: eseguire una punteggiatura leggera (frame dotting) o pelo leggerissimo con 1RL',
      'Pulire con fazzolettino a secco o leggermente inumidito con sapone a pH neutro (Green Soap delicato)'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 61: Panoramica delle Tecniche Sopracciglia (L3 Agenda)
  layouts.createAgendaSlide(pres, {
    title: 'Le 3 Tecniche Master\n*per le Sopracciglia*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '61',
    items: [
      'Tecnica 1: Pelo a Pelo con Dermografo (Nano Hair Stroke)',
      'Tecnica 2: Powder Brows (Effetto Polvere e Pixel Ombré)',
      'Tecnica 3: Combo Brows (Ibrido pelo e sfumatura 3D)',
      'Parametri Tecnici: Voltaggio, battuta e calibrazione aghi',
      'Protocollo di guarigione domiciliare e ritocco a 30 giorni'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 62: Pelo a Pelo vs Powder Brows (L6)
  layouts.createCompareSlide(pres, {
    title: 'Pelo a Pelo (Hair Stroke)\n*vs Powder Brows (Ombré)*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '62',
    leadText: 'Due stili estetici differenti, adatti a tipologie di pelle e gusti della cliente complementari.',
    colA: {
      badge: 'IPERREALISMO PURO',
      title: 'Pelo a Pelo con Dermografo',
      isHighlighted: true,
      rows: [
        { label: 'EFFETTO', value: 'Simulazione tridimensionale dei singoli peli naturali' },
        { label: 'TIPO PELLE', value: 'Ideale per pelli normali, secche e giovani (sconsigliata su pelle grassa)' },
        { label: 'STRUMENTO', value: 'Ago 1RL (0.25 - 0.30 mm) con tratto a pendolo fluido' },
        { label: 'RITENZIONE', value: 'Delicata; richiede precisione estrema per evitare sbavature' },
        { label: 'CLIENTE', value: 'Chi desidera un risultato invisibile, naturale e senza trucco' }
      ]
    },
    colB: {
      badge: 'MAKE-UP VELLUTATO',
      title: 'Powder Brows (Pixel Ombré)',
      isHighlighted: false,
      rows: [
        { label: 'EFFETTO', value: 'Sfumatura polverosa a pixel, morbida in testa e definita in coda' },
        { label: 'TIPO PELLE', value: 'Adatta a TUTTI i tipi di pelle, inclusa pelle grassa con pori dilatati' },
        { label: 'STRUMENTO', value: 'Ago 1RL o 3RS con movimento a spazzolatura veloce (whip shading)' },
        { label: 'RITENZIONE', value: 'Altissima e omogenea; svanisce in modo uniforme' },
        { label: 'CLIENTE', value: 'Chi ama l’effetto matita/ombretto sfumato e definizione duratura' }
      ]
    }
  });

  // Slide 63: La Tecnica a Pelo: Geometria e Tratti (L4)
  layouts.createExplainSlide(pres, {
    title: 'Nano Hair Stroke:\n*la geometria del pelo*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '63',
    leadText: 'I peli veri non sono linee dritte o stecchi. Hanno una curvatura fluida a "S" o a "C", radici sottili e sfumate.',
    features: [
      'Peli Primari: definiscono lo scheletro della spina e la direzione portante',
      'Peli Secondari: riempiono gli spazi vuoti aggiungendo densità e corpo',
      'Peli Terziari (Baby hairs): microscopici e sfumati sul perimetro per fondere il disegno con la pelle',
      'Regola d’oro: MAI incrociare due peli creando una "X" (provoca accumulo di pigmento e macchia)'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 64: Il Movimento dell'Ago: Pendolo e Whip (L4)
  layouts.createExplainSlide(pres, {
    title: 'La dinamica della mano:\n*pendolo e whip shading*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '64',
    leadText: 'La mano dell’operatrice compie un movimento ritmico a pendolo, con l’ago che entra ed esce sfiorando il tessuto.',
    features: [
      'Movimento a Pendolo: l’ago tocca la pelle solo al centro della traiettoria, creando tratti sfumati alle estremità',
      'Whip Shading (movimento a frusta): movimento rapido in una sola direzione per depositare pixel aperti',
      'Inclinazione dell’ago: rigorosamente tra 80° e 90° rispetto al piano cutaneo',
      'Se l’ago entra obliquo a 45°, il pigmento viene iniettato sotto la cute provocando espansione (blowout)'
    ],
    imagePath: img('diagram_needles.png')
  });

  // Slide 65: La Tecnica Powder Brows: I 3 Piani di Gradiente (L4)
  layouts.createExplainSlide(pres, {
    title: 'Powder Brows:\n*la piramide di densità*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '65',
    leadText: 'Un Powder Brows di alto livello non è mai un blocco scuro omogeneo. La bellezza risiede nel passaggio cromatico da trasparente a saturo.',
    features: [
      'Testa (Head): 10-20% di saturazione. Trasparente, pixelata, aperta e ariosa',
      'Bordo Superiore: sfumato e morbido, senza linee di demarcazione rigide',
      'Corpo Centrale: 50-60% di saturazione per dare profondità',
      'Coda e Linea Inferiore: 90-100% di saturazione per dare sostegno e pulizia visiva allo sguardo'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 66: Combo Brows: Il Matrimonio Perfetto (L4)
  layouts.createExplainSlide(pres, {
    title: 'Combo Brows:\n*il vertice dell’armonia*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '66',
    leadText: 'La tecnica combinata unisce il realismo dei peli nella parte iniziale della testa con la pienezza polverosa nel corpo e nella coda.',
    features: [
      'Testa naturale e impercettibile: solo singoli tratti a pelo con 1RL',
      'Transizione fluida: i peli si dissolvono dolcemente nella sfumatura centrale',
      'Corpo e coda definiti: ottima durata anche su pelli miste',
      'La soluzione più amata dalle clienti che desiderano definizione senza rinunciare alla naturalezza'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 67: Microblading vs Dermografo Meccanico (L6)
  layouts.createCompareSlide(pres, {
    title: 'Microblading Manuale\n*vs Dermografo Meccanico*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '67',
    leadText: 'Il confronto clinico tra la lama manuale (blade) e l’ago oscillante del dermografo.',
    colA: {
      badge: 'EVOLUZIONE MODERNA',
      title: 'Dermografo Meccanico (Nano)',
      isHighlighted: true,
      rows: [
        { label: 'AZIONE', value: 'Micro-perforazioni puntiformi verticali senza lacerazione tissutale' },
        { label: 'TRAUMA', value: 'Minimo trauma, zero tagli lineari, guarigione rapida e priva di croste dure' },
        { label: 'RETENZIONE', value: 'Controllo costante della profondità tramite motore elettronico' },
        { label: 'TESSUTO', value: 'Rispettoso nel tempo: ripetibile per anni senza creare fibrosi o tessuto cicatriziale' },
        { label: 'PELLI ADATTE', value: 'Adatto a tutte le pelli, incluse pelli grasse, sensibili e mature' }
      ]
    },
    colB: {
      badge: 'TECNICA TRADIZIONALE',
      title: 'Microblading Manuale',
      isHighlighted: false,
      rows: [
        { label: 'AZIONE', value: 'Incisione/taglio lineare continuo della cute con fascio di micro-lame' },
        { label: 'TRAUMA', value: 'Micro-ferita aperta lineare; rischio di sanguinamento e formazione di cheloidi' },
        { label: 'CONTROLLO', value: 'Profondità affidata solo alla sensibilità della mano (alto rischio di errore)' },
        { label: 'TESSUTO', value: 'Dopo 3-4 ritocchi negli anni genera spesso micro-cicatrici fibrose' },
        { label: 'LIMITI', value: 'Totalmente controindicato su pelle grassa, pori dilatati e cute sottile' }
      ]
    }
  });

  // Slide 68: Cover-up e Correzione Sopracciglia Virate (L4)
  layouts.createExplainSlide(pres, {
    title: 'Cover-Up e Correzioni:\n*quando e come intervenire*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '68',
    leadText: 'La maggior parte delle nuove clienti ha già un vecchio trattamento non eseguito a regola d’arte. Sapere quando accettare o rifiutare un cover-up è cruciale.',
    features: [
      'Regola del 50%: se il vecchio colore è sbiadito di almeno il 50%, puoi neutralizzare e coprire',
      'Se il vecchio tatuaggio è scuro, denso o fuori disegno: RIFIUTARE e inviare a rimozione laser/salina',
      'MAI usare il color carne/beige per coprire: con gli anni si trasforma in una macchia gessosa indelebile',
      'Spiegare alla cliente che la correzione richiederà quasi sempre 2 o 3 sedute'
    ],
    imagePath: img('diagram_color_wheel.png')
  });

  // Slide 69: Protocollo di Cura Domiciliare (Aftercare) (L4)
  layouts.createExplainSlide(pres, {
    title: 'Aftercare Sopracciglia:\n*Wet Healing vs Dry Healing*',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '69',
    leadText: 'La cura nei primi 10 giorni dopo la seduta influisce per il 50% sulla ritenzione finale del pigmento.',
    features: [
      'Protocollo Friduchas: Tamponare la linfa con dischetto sterile inumidito nelle prime 3 ore',
      'Lavaggio delicatissimo con acqua tiepida e detergente intimo/neutro dal giorno 2',
      'Applicare un velo quasi impercettibile di crema lenitiva specifica solo se c’è tensione (non soffocare)',
      'Divieto assoluto di trucco, sole, saune, piscina e sport intenso per 10-14 giorni'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 70: Statement di Chiusura Modulo 2 (L8 Dark)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'MODULO 2 — BROWS SPECIALIST',
    slideNum: '70',
    eyebrow: 'IL POTERE DELLO SGUARDO',
    quote: 'Le sopracciglia incorniciano il volto;\n*la tua mano ne rivela*\n*l’eleganza autentica.*',
    subtext: 'Hai completato il modulo più richiesto dal mercato. Con le sopracciglia padroneggiate, ci spostiamo sull’organo più sensuale e vascolarizzato: le labbra.',
    bottomTag: 'FRIDUCHAS ACADEMY • PROSSIMO STEP: LIPS',
    imagePath: img('sample_dark_model.jpg')
  });
}

module.exports = { buildMod02Slides };

