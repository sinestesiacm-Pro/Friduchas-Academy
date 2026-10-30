// src/slides/mod01_foundation.js — Modulo 1: Foundation (45 slide)
const layouts = require('../layouts');
const path = require('path');

const img = (file) => path.join(__dirname, '..', '..', 'assets', 'img', file);

function buildMod01Slides(pres) {
  // ==========================================
  // CAPITOLO 1.1: INTRODUZIONE AL PMU (Slide 06-13)
  // ==========================================

  // Slide 06: Opener Modulo 1 (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '01',
    eyebrow: 'MODULO 1 • BASI TEORICHE E SCIENTIFICHE',
    title: 'Fondamenti di\n*Dermopigmentazione*',
    description: 'Anatomia e fisiologia cutanea, chimica dei pigmenti, colorimetria applicata, protocolli di biosicurezza e fisica della strumentazione.',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '06',
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 07: Cos'è la Dermopigmentazione (L4)
  layouts.createExplainSlide(pres, {
    title: 'Cos’è la\n*Dermopigmentazione?*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '07',
    leadText: 'La dermopigmentazione (o Trucco Semipermanente PMU) è una disciplina estetica di precisione volta ad introdurre pigmenti bio-riassorbibili nel derma superficiale mediante micro-aghi controllati.',
    features: [
      'Finalità correttiva ed estetica: valorizzare lineamenti, asimmetrie e densità',
      'Carattere temporaneo controllato: il pigmento degrada dolcemente nel tempo',
      'Minima invasività: rispetto scrupoloso della barriera cutanea senza esiti cicatriziali',
      'Approccio visagistico personalizzato: nessun disegno standardizzato'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 08: PMU vs Tatuaggio Artistico (L6)
  layouts.createCompareSlide(pres, {
    title: 'Dermopigmentazione\n*vs Tatuaggio*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '08',
    leadText: 'Pur condividendo il principio dell’introduzione di pigmento mediante aghi, PMU e tatuaggio artistico differiscono radicalmente per biologia, chimica e profondità.',
    colA: {
      badge: 'STANDARD ACADEMY',
      title: 'Dermopigmentazione (PMU)',
      isHighlighted: true,
      rows: [
        { label: 'PROFONDITÀ', value: 'Derma papillare superficiale (0.08 – 0.15 mm)' },
        { label: 'PIGMENTI', value: 'Micronizzati, bio-riassorbibili, certificati REACH' },
        { label: 'DESTINO', value: 'Degradazione naturale graduale (12 – 24 mesi)' },
        { label: 'STRUMENTO', value: 'Dermografo ad alta frequenza e corsa corta' },
        { label: 'OBIETTIVO', value: 'Armonia estetica naturale e correzione fisionomica' }
      ]
    },
    colB: {
      badge: 'TATUAGGIO TRADIZIONALE',
      title: 'Tatuaggio Artistico',
      isHighlighted: false,
      rows: [
        { label: 'PROFONDITÀ', value: 'Derma reticolare profondo (oltre 1.5 – 2.0 mm)' },
        { label: 'PIGMENTI', value: 'Inchiostri permanenti, alta densità molecolare' },
        { label: 'DESTINO', value: 'Permanente a vita, suscettibile a viraggi e migrazione' },
        { label: 'STRUMENTO', value: 'Macchine pesanti ad elevata penetrazione d’urto' },
        { label: 'OBIETTIVO', value: 'Decorazione corporale artistica indelebile' }
      ]
    }
  });

  // Slide 09: Aree Applicative (L4)
  layouts.createExplainSlide(pres, {
    title: 'I tre campi\n*applicativi master*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '09',
    leadText: 'La dermopigmentazione moderna si articola in tre specializzazioni principali, ciascuna con un’anatomia tissutale e requisiti tecnici dedicati.',
    features: [
      'Sopracciglia (Brows): Morfologia aurea, tecniche a pelo iperrealistico, powder e combo',
      'Labbra (Lips): Definizione dei contorni, Lip Blush vellutato, neutralizzazione discromie',
      'Occhi (Eyes): Infracigliare profondo, eye-liner grafico e sfumature a farfalla',
      'Dermopigmentazione Paramedicale: Ricostruzione areola mammaria e camouflage cicatrici'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 10: Il Ruolo della Dermopigmentista (L4)
  layouts.createExplainSlide(pres, {
    title: 'L’identità della\n*professionista PMU*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '10',
    leadText: 'Non siamo semplici esecutrici tecniche: una Master PMU è una consulente d’immagine, una visagista esperta e un operatore sanitario-estetico consapevole.',
    features: [
      'Capacità di diagnosi fisionomica e cutanea prima di accendere il dermografo',
      'Gestione empatica delle aspettative e delle paure della cliente',
      'Padronanza chimica dei pigmenti e previsione del viraggio negli anni',
      'Responsabilità etica nel rifiutare trattamenti inadatti o rischiosi'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 11: Il Percorso di Valutazione (L3 Agenda)
  layouts.createAgendaSlide(pres, {
    title: 'Le fasi operative\ndi ogni *trattamento*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '11',
    items: [
      '01. Consulenza preventiva ed anamnesi medica',
      '02. Analisi del fototipo, sottotono e tipologia cutanea',
      '03. Progettazione visagistica preliminare e approvazione',
      '04. Esecuzione tecnica sterile e controllo del trauma',
      '05. Istruzioni di cura domiciliare e controllo a 30 giorni'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 12: Etica Professionale: Cosa Fare vs Non Fare (L6)
  layouts.createCompareSlide(pres, {
    title: 'Il codice etico\n*Friduchas Academy*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '12',
    leadText: 'La reputazione di una dermopigmentista si costruisce sull’integrità professionale e sulla tutela assoluta della cliente.',
    colA: {
      badge: 'COMPORTAMENTI VIRTUOSI',
      title: 'La Vera Professionista',
      isHighlighted: true,
      rows: [
        { label: 'DISEGNO', value: 'Disegna sempre a mano libera rispettando l’anatomia naturale' },
        { label: 'MATERIALI', value: 'Usa aghi sterili monouso aperti esclusivamente davanti alla cliente' },
        { label: 'COLORE', value: 'Seleziona toni armonici e chiari, preferendo scurire al ritocco' },
        { label: 'LIMITI', value: 'Rifiuta richieste estreme, fuori asse o fisionomicamente dannose' },
        { label: 'POST-CURA', value: 'Fornisce protocolli scritti di post-trattamento e segue la guarigione' }
      ]
    },
    colB: {
      badge: 'COMPORTAMENTI VIETATI',
      title: 'Errori Inaccettabili',
      isHighlighted: false,
      rows: [
        { label: 'STENCIL', value: 'Applicare dime e stencil identici a volti fisionomicamente diversi' },
        { label: 'RIUTILIZZO', value: 'Conservare aghi o cartucce usate per il ritocco della stessa cliente' },
        { label: 'AGGRESSIVITÀ', value: 'Saturare troppo in prima seduta provocando viraggi bluastri' },
        { label: 'PROMESSE', value: 'Promettere risultati permanenti o che non richiedono mai ritocchi' },
        { label: 'ABBANDONO', value: 'Non rendersi reperibile durante le fasi di desquamazione cutanea' }
      ]
    }
  });

  // Slide 13: Statement Capitolo 1 (L8 Dark)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '13',
    eyebrow: 'PRINCIPIO FONDAMENTALE',
    quote: 'La maestria non sta nel fare,\n*ma nel sapere esattamente*\n*cosa non fare mai.*',
    subtext: 'Un trattamento mal eseguito segna il volto di una donna per anni. La conoscenza teorica e la prudenza sono la tua prima polizza assicurativa.',
    bottomTag: 'FILOSOFIA DI METODO FRIDUCHAS',
    imagePath: img('sample_dark_model.jpg')
  });

  // ==========================================
  // CAPITOLO 1.2: ANATOMIA E FISIOLOGIA DELLA PELLE (Slide 14-25)
  // ==========================================

  // Slide 14: Opener Capitolo 1.2 (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '02',
    eyebrow: 'CAPITOLO 1.2 • BIOLOGIA CUTANEA',
    title: 'Anatomia e Fisiologia\ndella *Pelle*',
    description: 'Comprendere gli strati cutanei, la dinamica cellulare, la micro-vascolarizzazione e i tempi fisiologici di rigenerazione.',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '14',
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 15: La Pelle come Organo Complesso (L4)
  layouts.createExplainSlide(pres, {
    title: 'La pelle:\n*un organo vitale*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '15',
    leadText: 'La pelle non è una tela inanimata su cui dipingere. È l’organo più esteso del corpo, dinamico, vascolarizzato e dotato di memoria immunitaria.',
    features: [
      'Superficie media: 1.5 - 2 metri quadrati per circa 4 kg di peso corporeo',
      'Spessore variabile da 0.05 mm (palpebre) a oltre 4 mm (talloni e palmo)',
      'Funzione barriera chimico-fisica essenziale contro germi e disidratazione',
      'Risposta infiammatoria immediata ad ogni lesione meccanica'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 16: Gli Strati della Pelle (L5)
  layouts.createAnatomySlide(pres, {
    title: 'I tre strati\n*della cute*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '16',
    leadText: 'La struttura istologica cutanea si divide in tre livelli sovrapposti. Riconoscere la profondità corretta determina la durata e la brillantezza del pigmento.',
    layers: [
      { num: '01', name: 'Epidermide', role: 'Strato superficiale protettivo (avascolare). Il turnover continuo di 28 giorni espelle il pigmento superficiale.' },
      { num: '02', name: 'Derma', role: 'Strato connettivale vitale ricco di collagene ed elastina. TARGET PMU: Derma papillare (0.08–0.15 mm).' },
      { num: '03', name: 'Ipoderma', role: 'Tessuto adiposo profondo. ZONA PROIBITA: entrarvi provoca espansione a macchia d’olio (blowout) e viraggio.' }
    ],
    imagePath: img('sample_anatomy_skin.png')
  });

  // Slide 17: L'Epidermide e il Turn-over (L4)
  layouts.createExplainSlide(pres, {
    title: 'L’Epidermide e il\n*ciclo dei 28 giorni*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '17',
    leadText: 'L’epidermide è composta da cheratinociti che nascono dallo strato basale e migrano verso l’esterno trasformandosi in cellule cornee prive di nucleo.',
    features: [
      'Turnover cellulare completo: dura mediamente 28 giorni (più lungo nelle pelli mature)',
      'Assenza totale di vasi sanguigni: riceve nutrimento per diffusione dal derma',
      'Desquamazione fisiologica continua: le cellule superficiali si staccano spontaneamente',
      'Se il pigmento si ferma qui, sparirà completamente nell’arco di 3-4 settimane'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 18: Il Derma: Il Bersaglio Perfetto (L4)
  layouts.createExplainSlide(pres, {
    title: 'Il Derma:\n*il bersaglio ideale*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '18',
    leadText: 'Il derma è il tessuto connettivo che sostiene la pelle. È suddiviso in derma papillare (superficiale) e derma reticolare (profondo).',
    features: [
      'Target PMU: Derma Papillare, a ridosso della membrana basale (0.08–0.15 mm)',
      'I macrofagi inglobano le particelle di pigmento stabilizzandole nella matrice dermica',
      'Presenza di capillari sanguigni: una leggerissima puntina di rugiada sierosa è normale',
      'Evitare il derma reticolare: troppo profondo, sanguina e altera la rifrazione della luce'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 19: Le Cellule Principali della Cute (L7)
  layouts.createGridCellsSlide(pres, {
    title: 'Le cellule\n*protagoniste*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '19',
    leadText: 'Comprendere come reagiscono le singole famiglie cellulari durante il trattamento è fondamentale per governare guarigione e stabilità.',
    cells: [
      {
        name: 'Cheratinociti',
        role: 'Formano la barriera protettiva e guidano la rapida riepitelizzazione.',
        imagePath: img('cell_keratinocyte.png')
      },
      {
        name: 'Melanociti',
        role: 'Sintetizzano melanina; determinano il fototipo e il sottotono cutaneo.',
        imagePath: img('cell_melanocyte.png')
      },
      {
        name: 'Fibroblasti',
        role: 'Producono collagene ed elastina rigenerando il tessuto dermico traumatizzato.',
        imagePath: img('cell_fibroblast.png')
      },
      {
        name: 'Cellule di Langerhans',
        role: 'Sentinelle immunitarie che catturano le particelle e attivano le difese.',
        imagePath: img('cell_langerhans.png')
      }
    ]
  });

  // Slide 20: Il Ciclo Clinico di Guarigione (L4)
  layouts.createExplainSlide(pres, {
    title: 'Il ciclo clinico\n*di guarigione*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '20',
    leadText: 'La pelle attraversa quattro tappe biologiche immutabili tra la fine della seduta e la guarigione definitiva. Educare la cliente evita chiamate di panico.',
    features: [
      'Fase 1 (Giorno 1-3): Iper-pigmentazione ossidativa (colore più scuro del 30-40%)',
      'Fase 2 (Giorno 4-7): Desquamazione e micro-pellicine (vietato tirarle)',
      'Fase 3 (Giorno 8-14): Ghost Phase! Il colore sembra svanito sotto il nuovo epitelio opaco',
      'Fase 4 (Giorno 28-35): Stabilizzazione e riemersione del pigmento consolidato'
    ],
    imagePath: img('diagram_healing_cycle.png')
  });

  // Slide 21: Tipologie Cutanee a Confronto (L6)
  layouts.createCompareSlide(pres, {
    title: 'Pelle Grassa\n*vs Pelle Secca/Mista*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '21',
    leadText: 'La produzione sebacea e l’idratazione cutanea condizionano drasticamente la scelta della tecnica e la tenuta del tratto.',
    colA: {
      badge: 'SFIDA TECNICA',
      title: 'Pelle Grassa / Pori Dilatati',
      isHighlighted: false,
      rows: [
        { label: 'SEBO', value: 'Iper-produzione sebacea continua che diluisce il pigmento' },
        { label: 'TECNICA IDEALE', value: 'Powder Brows / Sfumatura ombré (Sconsigliato il pelo singolo)' },
        { label: 'RETENZIONE', value: 'Minore ritenzione (30-50%), richiede ritocchi più frequenti' },
        { label: 'RISCHIO', value: 'Espansione laterale dei micro-tratti (tratto sgranato)' },
        { label: 'AGO', value: 'Preferire 3RS o 1RL con battuta secca e poco passaggio' }
      ]
    },
    colB: {
      badge: 'CONDOTTA IDEALE',
      title: 'Pelle Normale / Secca',
      isHighlighted: true,
      rows: [
        { label: 'SEBO', value: 'Film idrolipidico equilibrato o sottile, grana fine e compatta' },
        { label: 'TECNICA IDEALE', value: 'Tutte le tecniche (Pelo a pelo ultra-definito, Combo, Powder)' },
        { label: 'RETENZIONE', value: 'Altissima ritenzione (70-85%), tratto netto e nitido nel tempo' },
        { label: 'RISCHIO', value: 'Cute sottile: rischio di andare troppo in profondità' },
        { label: 'AGO', value: '1RL diametro 0.25-0.30 mm con tocco vellutato e leggero' }
      ]
    }
  });

  // Slide 22: Fototipi Fitzpatrick (L4)
  layouts.createExplainSlide(pres, {
    title: 'La scala dei\n*Fototipi Fitzpatrick*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '22',
    leadText: 'La classificazione di Thomas B. Fitzpatrick cataloga la cute in 6 fototipi in base alla quantità di melanina e alla reazione all’esposizione solare.',
    features: [
      'Fototipo I e II: Pelle lattea, biondi/rossi, occhi chiari. Altissima fotosensibilità, si scotta sempre',
      'Fototipo III: Carnagione media europea, capelli castani. Si scotta moderatamente, si abbronza gradualmente',
      'Fototipo IV: Pelle olivastra mediterranea. Si abbronza rapidamente, rischio di iperpigmentazione post-infiammatoria (PIH)',
      'Fototipo V e VI: Carnagione scura/nera. Rischio elevatissimo di chelizzazione e viraggio grigio cenere'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 23: Pelli Mature e Invecchiamento (L4)
  layouts.createExplainSlide(pres, {
    title: 'La gestione delle\n*pelli mature*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '23',
    leadText: 'Con l’età, il derma perde fino al 50% di collagene ed elastina. L’epidermide si assottiglia e la giunzione dermo-epidermica si appiattisce.',
    features: [
      'Cute fragile come carta velina: dimezzare la pressione della mano',
      'Microcircolo rallentato: i tempi di guarigione passano da 28 a 45-60 giorni',
      'Capillari fragili: evitare strappi con lo stretching e manovre aggressive',
      'Scelta cromatica: prediligere tonalità calde e luminose, evitando pigmenti scuri e freddi'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 24: Profondità Millimetrica e Rischi (L5)
  layouts.createAnatomySlide(pres, {
    title: 'La profondità:\n*scienza del decimo di mm*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '24',
    leadText: 'Nel PMU la differenza tra un capolavoro e un disastro si misura in decimi di millimetro. Guarda cosa succede a ciascun livello.',
    layers: [
      { num: '0.05 mm', name: 'Troppo Superficiale', role: 'Pigmento depositato nello strato corneo/lucido. Svanisce totalmente in 15 giorni con il turnover.' },
      { num: '0.12 mm', name: 'Profondità Perfetta (Target)', role: 'Derma papillare superficiale. Colore stabile, luminoso, assenza di cicatrici, degradazione omogenea.' },
      { num: '0.80+ mm', name: 'Troppo Profondo (Errore)', role: 'Derma reticolare profondo / Ipoderma. Effetto Tyndall: il colore riflette blu/grigio e si espande a macchia.' }
    ],
    imagePath: img('sample_anatomy_skin.png')
  });

  // Slide 25: Statement Capitolo 2 (L8 Blush)
  layouts.createStatementSlide(pres, {
    mode: 'blush',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '25',
    eyebrow: 'REGOLA AUREA DELLA PROFONDITÀ',
    quote: 'La mano deve accarezzare la cute,\n*non perforarla.*\nAscolta il suono della pelle.',
    subtext: 'Il dermografo produce un ronzio differente quando tocca la corretta densità del derma papillare. La vera precisione nasce dall’ascolto e dal controllo millimetrico.',
    bottomTag: 'SEGRETO CLINICO FRIDUCHAS',
    imagePath: img('sample_texture.jpg')
  });

  // ==========================================
  // CAPITOLO 1.3: COLORIMETRIA E PIGMENTOLOGIA (Slide 26-36)
  // ==========================================

  // Slide 26: Opener Capitolo 1.3 (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '03',
    eyebrow: 'CAPITOLO 1.3 • SCIENZA DEI PIGMENTI',
    title: 'Colorimetria e\n*Pigmentologia*',
    description: 'La fisica della luce, la ruota di Itten, il sottotono cutaneo, la chimica inorganica vs organica e le formule di neutralizzazione.',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '26',
    imagePath: img('sample_texture.jpg')
  });

  // Slide 27: Cos'è la Colorimetria Applicata (L4)
  layouts.createExplainSlide(pres, {
    title: 'La Colorimetria:\n*chimica e biologia*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '27',
    leadText: 'Nel PMU il colore finale non corrisponde al colore che vedi nel flacone. Il risultato è la somma ottica di tre fattori imprescindibili.',
    features: [
      'Fattore 1: Il pigmento scelto (base chimica, densità e composizione degli ossidi)',
      'Fattore 2: Il sottotono biologico della pelle della cliente (caldo, freddo o neutro)',
      'Fattore 3: La melanina individuale e la profondità di deposito (filtro cutaneo)',
      'Formula aurea: [Pigmento Iniziale] + [Sottotono Cutaneo] = [Colore Guarito]'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 28: La Ruota di Itten e Colori Primari (L4)
  layouts.createExplainSlide(pres, {
    title: 'La Ruota di Itten:\n*la bussola cromatica*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '28',
    leadText: 'La teoria del colore di Johannes Itten è la base di ogni calcolo cromatico. Conoscere i colori complementari opposti è l’unica arma contro i viraggi.',
    features: [
      'Colori Primari: Giallo, Rosso, Blu. Non possono essere generati da altre combinazioni',
      'Colori Secondari: Arancio (Giallo+Rosso), Verde (Giallo+Blu), Viola (Rosso+Blu)',
      'Colori Complementari: Coppie diametralmente opposte che si annullano a vicenda',
      'In dermopigmentazione: Verde annulla Rosso, Arancio annulla Blu, Giallo illumina il Viola'
    ],
    imagePath: img('diagram_color_wheel.png')
  });

  // Slide 29: Fototipo vs Sottotono (L6)
  layouts.createCompareSlide(pres, {
    title: 'Fototipo\n*vs Sottotono*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '29',
    leadText: 'Confondere il fototipo con il sottotono è la causa del 90% degli errori cromatici e delle sopracciglia che virano al grigio.',
    colA: {
      badge: 'PARAMETRO DI SUPERFICIE',
      title: 'Fototipo (Carnagione)',
      isHighlighted: false,
      rows: [
        { label: 'COSA INDICA', value: 'Il livello di chiarezza o scurezza visibile della pelle (I-VI)' },
        { label: 'ORIGINE', value: 'Quantità e distribuzione della melanina nell’epidermide' },
        { label: 'VARIAZIONE', value: 'Varia con l’esposizione al sole e le stagioni (abbronzatura)' },
        { label: 'DETERMINA', value: 'Quanto chiaro o scuro deve essere il pigmento da utilizzare' },
        { label: 'ERRORE COMUNE', value: 'Scegliere il colore basandosi solo sulla pelle abbronzata' }
      ]
    },
    colB: {
      badge: 'PARAMETRO PROFONDO',
      title: 'Sottotono (Temperatura)',
      isHighlighted: true,
      rows: [
        { label: 'COSA INDICA', value: 'La temperatura cromatica intrinseca: Caldo, Freddo, Neutro' },
        { label: 'ORIGINE', value: 'Microcircolo sanguigno, carotene e matrice dermica' },
        { label: 'VARIAZIONE', value: 'Immutabile: non cambia mai, né con sole né con l’età' },
        { label: 'DETERMINA', value: 'La temperatura (calda/fredda) da miscelare nel pigmento' },
        { label: 'REGOLA AUREA', value: 'Cute fredda richiede pigmento caldo; cute calda richiede pigmento neutro/freddo' }
      ]
    }
  });

  // Slide 30: Come Riconoscere il Sottotono (L4)
  layouts.createExplainSlide(pres, {
    title: 'Come diagnosticare\n*il sottotono*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '30',
    leadText: 'La diagnosi del sottotono cutaneo si esegue prima del trattamento attraverso quattro test visivi immediati.',
    features: [
      'Test delle Vene: Vene verdi sul polso = Sottotono Caldo. Vene blu/violacee = Sottotono Freddo',
      'Reazione Solare: Si abbronza subito dorata = Caldo. Si scotta o arrossa = Freddo',
      'Iride e Sclera: Sclera bianco latte/azzurrata = Freddo. Sclera avorio/crema = Caldo',
      'Test Drappeggio: Armonia con metallo Oro (Caldo) vs Argento (Freddo)'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 31: Pigmenti Organici vs Inorganici (L6)
  layouts.createCompareSlide(pres, {
    title: 'Pigmenti Inorganici\n*vs Organici (Sintetici)*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '31',
    leadText: 'La chimica del pigmento determina la luminosità, la stabilità molecolare e il comportamento negli anni.',
    colA: {
      badge: 'PIÙ NATURALI E SICURI',
      title: 'Pigmenti Inorganici (Minerali)',
      isHighlighted: true,
      rows: [
        { label: 'COMPOSIZIONE', value: 'Ossidi di ferro (CI 77491, CI 77492, CI 77499), Biossido di Titanio' },
        { label: 'MOLECOLA', value: 'Particelle grandi e pesanti (facilmente fagocitate dai macrofagi)' },
        { label: 'FINITURA', value: 'Morbida, opaca, naturale, ideale per pelli chiare e principianti' },
        { label: 'DURATA', value: 'Semipermanente pura (12-18 mesi), svanisce senza lasciare residui duraturi' },
        { label: 'RIMOZIONE', value: 'Facilissima con laser Q-Switched o saline remover' }
      ]
    },
    colB: {
      badge: 'ALTA SATURAZIONE',
      title: 'Pigmenti Organici (Lacca/Carbon)',
      isHighlighted: false,
      rows: [
        { label: 'COMPOSIZIONE', value: 'Carbon Black (CI 77266), composti azoici sintetici' },
        { label: 'MOLECOLA', value: 'Molecole microscopiche ad altissima densità cromatica' },
        { label: 'FINITURA', value: 'Vibrante, intensissima, acquosa, effetto rossetto o eyeliner netto' },
        { label: 'DURATA', value: 'Lunghissima (3-5+ anni), non svanisce mai del tutto spontaneamente' },
        { label: 'RISCHIO', value: 'Rischio elevato di migrazione se introdotto troppo in profondità' }
      ]
    }
  });

  // Slide 32: I Viraggi: Perché Avvengono? (L4)
  layouts.createExplainSlide(pres, {
    title: 'I viraggi cromatici:\n*cause e prevenzione*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '32',
    leadText: 'Un pigmento che vira al rosso, all’arancio o al grigio/blu non è sfortuna: è sempre il risultato di una legge fisica o chimica violata.',
    features: [
      'Viraggio al Grigio / Blu: Errore di profondità! Pigmento inserito troppo a fondo nel derma reticolare (effetto Tyndall)',
      'Viraggio al Rosso / Rosa: Degradazione solare asimmetrica; l’ossido nero viene espulso prima del rosso più resistente',
      'Viraggio all’Arancione: Mancato uso di correttore freddo su fototipo I-II molto caldo',
      'Viraggio al Violaceo sulle Labbra: Inserimento di pigmento freddo su labbra già ipossiche o scure'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 33: Il Protocollo di Neutralizzazione (L4)
  layouts.createExplainSlide(pres, {
    title: 'Il protocollo di\n*neutralizzazione*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '33',
    leadText: 'Neutralizzare non significa coprire o stendere un colore beige sopra il vecchio lavoro (errore gravissimo!). Neutralizzare significa correggere la cromia con l’opposto complementare.',
    features: [
      'Sopracciglia virate al Grigio/Blu: Neutralizzare con Pigmento Arancio Caldo (Warm Modifier)',
      'Sopracciglia virate al Rosso/Viola: Neutralizzare con Pigmento Verde Oliva/Khaki',
      'Labbra scure/violacee (iper-pigmentate): Neutralizzare con Arancio puro prima di applicare rosa',
      'Regola d’oro: Eseguire la neutralizzazione in seduta dedicata; applicare il colore finale al ritocco'
    ],
    imagePath: img('diagram_color_wheel.png')
  });

  // Slide 34: Normative REACH e Sicurezza dei Pigmenti (L4)
  layouts.createExplainSlide(pres, {
    title: 'Normativa REACH:\n*conformità e garanzia*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '34',
    leadText: 'Dal 2022 il Regolamento Europeo REACH (UE 2020/2081) impone i requisiti di purezza chimica più severi al mondo per i pigmenti PMU.',
    features: [
      'Bando totale di ammine aromatiche cancerogene, conservanti allergenici e metalli pesanti',
      'Controllo rigoroso su Nichel, Cromo VI, Piombo, Mercurio e Arsenico',
      'Obbligo di tracciabilità: etichettatura in lingua italiana, lotto e data di scadenza',
      'In studio: conservare la scheda di sicurezza (MSDS) di ogni flacone per controlli sanitari'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 35: Le 5 Regole Auree della Colorimetria (L3 Agenda)
  layouts.createAgendaSlide(pres, {
    title: 'Le 5 regole auree\ndi *colorimetria*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '35',
    items: [
      '1. Meglio un tono più chiaro in prima seduta: si può sempre scurire',
      '2. Non fidarti del colore nel flacone: fai sempre la prova su pelle',
      '3. Cute fredda esige modificatore caldo nella miscela',
      '4. Non usare mai il nero puro sulle sopracciglia: virerà sempre a grigio',
      '5. Rispetta la profondità: la luce trasforma il colore in base al tessuto'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 36: Statement Capitolo 3 (L8 Dark)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '36',
    eyebrow: 'MEMENTO CROMATICO',
    quote: 'La luce rivela ciò che\n*la chimica nasconde.*\nIl colore vive nella pelle.',
    subtext: 'Padroneggiare la colorimetria ti libera dalla paura dei viraggi. Lavorare con formule chimiche sicure e certificazioni REACH tutela il tuo talento e la salute delle tue clienti.',
    bottomTag: 'PIGMENTOLOGIA DI PRECISIONE',
    imagePath: img('sample_dark_model.jpg')
  });

  // ==========================================
  // CAPITOLO 1.4: IGIENE, SICUREZZA E PROTOCOLLI (Slide 37-43)
  // ==========================================

  // Slide 37: Opener Capitolo 1.4 (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '04',
    eyebrow: 'CAPITOLO 1.4 • PROTOCOLLI SANITARI',
    title: 'Igiene, Biosicurezza\ne *Normative*',
    description: 'Protocolli di prevenzione della contaminazione crociata, DPI, sterilizzazione, controindicazioni cliniche e consenso informato.',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '37',
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 38: La Contaminazione Crociata (L4)
  layouts.createExplainSlide(pres, {
    title: 'La Contaminazione\n*crociata*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '38',
    leadText: 'La contaminazione crociata è il passaggio involontario di agenti patogeni (batteri, virus, funghi) da una superficie, strumento o guanto contaminato a una ferita aperta.',
    features: [
      'Il cellulare è il nemico numero 1: MAI toccare lo smartphone con i guanti da lavoro',
      'Flaconi dei pigmenti: prelevare il colore in anellini monouso prima di toccare la cliente',
      'Barriere protettive monouso su dermografo, cavi, alimentatore e lampada operatoria',
      'Regola sacra del "Clean / Dirty": dividere fisicamente la zona sterile dalla zona di scarto'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 39: Sterilizzazione vs Disinfezione (L6)
  layouts.createCompareSlide(pres, {
    title: 'Sterilizzazione\n*vs Disinfezione*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '39',
    leadText: 'Ogni livello di rischio biologico richiede il corretto trattamento delle superfici e degli strumenti.',
    colA: {
      badge: 'DISTRUZIONE TOTALE',
      title: 'Sterilizzazione (Spore & Virus)',
      isHighlighted: true,
      rows: [
        { label: 'DEFINIZIONE', value: 'Eliminazione assoluta di TUTTI i microrganismi viventi, incluse le spore' },
        { label: 'METODO', value: 'Autoclave di Classe B (vapore a 134°C per 15 min) o raggi Gamma industriali' },
        { label: 'APPLICAZIONE', value: 'Tutti gli aghi e cartucce PMU (rigorosamente monouso e pre-sterilizzati)' },
        { label: 'MONOUSO', value: 'Gli aghi NON si risterilizzano mai: si smaltiscono nel contenitore Halibox' },
        { label: 'NORMATIVA', value: 'Conformità CE medicale con busta sterile provvista di indicatore di viraggio' }
      ]
    },
    colB: {
      badge: 'RIDUZIONE DELLA CARICA',
      title: 'Disinfezione di Alto Livello',
      isHighlighted: false,
      rows: [
        { label: 'DEFINIZIONE', value: 'Distruzione della maggior parte dei patogeni, ma non delle spore più resistenti' },
        { label: 'METODO', value: 'Disinfettanti ospedalieri a base di sali di ammonio quaternario o clorexidina' },
        { label: 'APPLICAZIONE', value: 'Superfici di lavoro, lettino, carrello in acciaio, lampada e manipolo protetto' },
        { label: 'TEMPO', value: 'Rispettare scrupolosamente il tempo di contatto prescritto dal produttore' },
        { label: 'CUTE', value: 'Disinfezione cutanea pre-trattamento esclusivamente con clorexidina o iodopovidone' }
      ]
    }
  });

  // Slide 40: Controindicazioni al Trattamento (L4)
  layouts.createExplainSlide(pres, {
    title: 'Controindicazioni:\n*assolute e relative*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '40',
    leadText: 'Prima di toccare qualsiasi cliente, è obbligatorio accertare l’assenza di condizioni mediche che rendano il trattamento pericoloso o inefficace.',
    features: [
      'Controindicazioni Assolute: Gravidanza e allattamento, cheloidi attivi, diabete scompensato, terapie chemioterapiche, patologie autoimmuni in fase attiva',
      'Controindicazioni Temporanee: Febbre, herpes labiale attivo, congiuntivite, trattamenti con isotretinoina (attendere 6 mesi), filler/botox recenti (attendere 30 giorni)',
      'Controindicazioni Relative: Assunzione di anticoagulanti, ipertensione, dermatite seborroica',
      'In caso di dubbio: richiedere sempre il nulla osta scritto del medico curante'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 41: Il Consenso Informato e Aspetti Medico-Legali (L4)
  layouts.createExplainSlide(pres, {
    title: 'Il Consenso Informato:\n*la tua tutela legale*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '41',
    leadText: 'Il consenso informato non è una formalità burocratica, ma un contratto formale e trasparente tra la professionista e la cliente.',
    features: [
      'Dichiarazione medica dello stato di salute e allergie pregresse',
      'Accettazione esplicita del disegno preparatorio concordato e fotografato',
      'Comprensione del ciclo di guarigione, della ghost phase e dell’obbligo del ritocco',
      'Impegno formale a seguire la cura domiciliare e le indicazioni post-trattamento',
      'Consenso privacy e trattamento immagini per il portfolio commerciale'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 42: Smaltimento Rifiuti Speciali (L4)
  layouts.createExplainSlide(pres, {
    title: 'Smaltimento rifiuti:\n*sicurezza e ambiente*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '42',
    leadText: 'Gli aghi e il materiale contaminato da fluidi biologici sono classificati come Rifiuti Sanitari Pericolosi a Rischio Infettivo (CER 18.01.03*).',
    features: [
      'Aghi e cartucce: gettati immediatamente nel contenitore rigido imperforabile (Halibox)',
      'Guanti, garze, pellicole e cotton fioc sporchi: sacco giallo per rifiuti infettivi',
      'Contratto obbligatorio con ditta autorizzata per lo smaltimento e registro di carico/scarico',
      'Sanzioni severissime previste dalla legge per l’abbandono di aghi nei rifiuti urbani'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 43: Statement Capitolo 4 (L8 Blush)
  layouts.createStatementSlide(pres, {
    mode: 'blush',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '43',
    eyebrow: 'LA PRIORITÀ SUPREMA',
    quote: 'La bellezza non può mai esistere\n*a scapito della salute.*\nZero compromessi.',
    subtext: 'L’igiene impeccabile è il marchio di fabbrica di un istituto di eccellenza. Quando la cliente vede il tuo rigore, si affida con serenità e rispetto.',
    bottomTag: 'PROTOCOLLO SICUREZZA FRIDUCHAS',
    imagePath: img('sample_texture.jpg')
  });

  // ==========================================
  // CAPITOLO 1.5: STRUMENTAZIONE, DERMOGRAFI E AGHI (Slide 44-50)
  // ==========================================

  // Slide 44: Opener Capitolo 1.5 (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '05',
    eyebrow: 'CAPITOLO 1.5 • TECNOLOGIA ED EQUIPAGGIAMENTO',
    title: 'Strumentazione, Aghi\ne *Meccanica*',
    description: 'Anatomia del dermografo, controllo dei voltaggi, la corsa (stroke), geometria delle punte e stretching a tre vie.',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '44',
    imagePath: img('sample_texture.jpg')
  });

  // Slide 45: Anatomia del Dermografo Moderno (L4)
  layouts.createExplainSlide(pres, {
    title: 'Anatomia del\n*Dermografo*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '45',
    leadText: 'Il dermografo moderno è una penna rotativa di altissima ingegneria, progettata per garantire assenza di vibrazioni e costanza di battuta.',
    features: [
      'Motore Coreless: altissima stabilità di giri al minuto (RPM) anche sotto pressione cutanea',
      'Regolazione dell’uscita ago: ghiera millimetrica per settare la sporgenza (hang) da 1.5 a 2.5 mm',
      'Alimentatore digitale: eroga corrente continua costante senza cali di tensione',
      'Impugnatura bilanciata: ergonomia pensata per non affaticare l’articolazione del polso'
    ],
    imagePath: img('diagram_needles.png')
  });

  // Slide 46: La Corsa (Stroke) della Macchina (L6)
  layouts.createCompareSlide(pres, {
    title: 'Corsa Corta (Short Stroke)\n*vs Corsa Lunga (Hard Hit)*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '46',
    leadText: 'La corsa (stroke) è la distanza millimetrica percorsa dall’ago tra la massima estensione e il ritiro.',
    colA: {
      badge: 'IDEALE PER PMU DELICATO',
      title: 'Corsa Corta / Media (2.0 – 2.8 mm)',
      isHighlighted: true,
      rows: [
        { label: 'IMPATTO', value: 'Battuta morbida e vellutata, minimo trauma sul tessuto epidermico' },
        { label: 'PIGMENTAZIONE', value: 'Deposito graduale e trasparente, eccellente per pixel e sfumature' },
        { label: 'APPLICAZIONE', value: 'Sopracciglia Powder, Labbra delicate effetto acquerello, occhi sensibili' },
        { label: 'CONTROLLO', value: 'Perdona maggiormente la pressione della mano nelle principianti' },
        { label: 'VELOCITÀ', value: 'Richiede passaggi lenti e uniformi per raggiungere la saturazione' }
      ]
    },
    colB: {
      badge: 'ALTA SATURAZIONE',
      title: 'Corsa Lunga (3.2 – 3.8+ mm)',
      isHighlighted: false,
      rows: [
        { label: 'IMPATTO', value: 'Battuta secca, decisa ed energica ad ogni singolo ciclo motore' },
        { label: 'PIGMENTAZIONE', value: 'Impianto immediato e saturo con pochissimi passaggi' },
        { label: 'APPLICAZIONE', value: 'Pelo a pelo ultra-definito su pelli spesse, contorni grafici occhi' },
        { label: 'RISCHIO', value: 'Se la mano è pesante, rischio gravissimo di trauma, taglio e viraggio' },
        { label: 'ESPERIENZA', value: 'Riservata a dermopigmentiste con esperienza e tocco calibratissimo' }
      ]
    }
  });

  // Slide 47: Anatomia e Taper dell'Ago (L4)
  layouts.createExplainSlide(pres, {
    title: 'Anatomia dell’ago:\n*diametro e taper*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '47',
    leadText: 'Un ago da PMU non è un semplice pezzo di metallo: il suo diametro e la sua conicità (taper) definiscono la dimensione del micro-pixel.',
    features: [
      'Diametri PMU più usati: 0.25 mm (08), 0.30 mm (10), 0.35 mm (12)',
      'Long Taper (conicità lunga): punta affilata e sottile, penetrazione fluida con minimo trauma',
      'Medium/Short Taper: punta più tozza, rilascia più pigmento a parità di profondità',
      'Membrana di sicurezza interna: impedisce la risalita di sangue o pigmento nel motore'
    ],
    imagePath: img('diagram_needles.png')
  });

  // Slide 48: Configurazioni RL vs RS (L6)
  layouts.createCompareSlide(pres, {
    title: 'Round Liner (1RL)\n*vs Round Shader (3RS)*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '48',
    leadText: 'La disposizione delle punte sulla barra dell’ago determina la densità e la finitura del deposito.',
    colA: {
      badge: 'IL RE DEL DETTAGLIO',
      title: 'Round Liner (1RL)',
      isHighlighted: true,
      rows: [
        { label: 'GEOMETRIA', value: 'Unica punta concentrata per la massima precisione millimetrica' },
        { label: 'PIXEL', value: 'Puntino microscopico netto e puntiforme' },
        { label: 'APPLICAZIONI', value: 'Pelo a pelo iperrealistico, contorni labbra impercettibili, infracigliare' },
        { label: 'VANTAGGIO', value: 'Versatilità assoluta; consente di costruire sfumature per pixelazione' },
        { label: 'ATTENZIONE', value: 'Punta aguzza: non calcare mai la mano per non tagliare la cute' }
      ]
    },
    colB: {
      badge: 'LA REGINA DELLE SFUMATURE',
      title: 'Round Shader (3RS / 5RS)',
      isHighlighted: false,
      rows: [
        { label: 'GEOMETRIA', value: 'Fascio circolare aperto di 3 o 5 punte parallele non saldate all’apice' },
        { label: 'PIXEL', value: 'Rilascio polveroso e diffuso a nuvola' },
        { label: 'APPLICAZIONI', value: 'Sopracciglia Powder/Ombré, riempimento vellutato labbra (Velvet Lips)' },
        { label: 'VANTAGGIO', value: 'Copertura uniforme e rapida senza creare linee nette evidenti' },
        { label: 'ATTENZIONE', value: 'Superficie d’appoggio più ampia: richiede un voltaggio leggermente superiore' }
      ]
    }
  });

  // Slide 49: Lo Stretching Cutaneo a 3 Vie (L4)
  layouts.createExplainSlide(pres, {
    title: 'La Triade PMU:\n*velocità, mano e stretch*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '49',
    leadText: 'Il successo del trattamento risiede nell’armonia perfetta tra tre variabili che la professionista coordina contemporaneamente.',
    features: [
      'Voltaggio della macchina (Speed): regola la frequenza di battuta al secondo (Hz)',
      'Movimento della mano (Hand speed): deve essere fluido, ritmico e a pendolo uniforme',
      'Stretching a 3 vie: la pelle deve essere tesa come la pelle di un tamburo',
      'Senza uno stretch impeccabile, la cute vibra, l’ago rimbalza e il pigmento non entra'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 50: Statement di Chiusura Modulo 1 (L8 Dark)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '50',
    eyebrow: 'CONCLUSIONE FONDAMENTI',
    quote: 'Hai acquisito le radici.\n*Ora sei pronta per costruire*\n*il tuo capolavoro.*',
    subtext: 'Nessun artista può dipingere senza conoscere i suoi colori, la tela e i suoi pennelli. Con la teoria della Fondazione alle spalle, entriamo nel cuore della progettazione: le sopracciglia.',
    bottomTag: 'FRIDUCHAS ACADEMY • PROSSIMO STEP: BROWS',
    imagePath: img('sample_dark_model.jpg')
  });
}

module.exports = { buildMod01Slides };

