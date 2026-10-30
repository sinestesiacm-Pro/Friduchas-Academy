// src/slides/mod05_business.js — Modulo 5: Business, Carriera & Chiusura
const layouts = require('../layouts');
const path = require('path');

const img = (file) => path.join(__dirname, '..', '..', 'assets', 'img', file);

function buildMod05Slides(pres) {
  // Slide 95: Opener Modulo 5 (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '05',
    eyebrow: 'MODULO 5 • IMPRESA E SUCCESSO',
    title: 'Business, Branding\ne *Carriera*',
    description: 'La mentalità imprenditoriale, fotografia beauty con lenti polarizzate, social media strategy, pricing premium e fidelizzazione.',
    moduleName: 'MODULO 5 — BUSINESS & CARRIERA',
    slideNum: '95',
    imagePath: img('sample_cover.jpg')
  });

  // Slide 96: La Mentalità Imprenditoriale (L4)
  layouts.createExplainSlide(pres, {
    title: 'La mentalità:\n*da operatrice a brand*',
    moduleName: 'MODULO 5 — BUSINESS & CARRIERA',
    slideNum: '96',
    leadText: 'Essere un’artista straordinaria non basta se nessuno sa chi sei o quanto vali. Il successo del tuo studio dipende dall’armonia tra arte e strategia di impresa.',
    features: [
      'Passaggio mentale: smetti di vendere "ore di lavoro" e inizia a vendere "fiducia e trasformazione"',
      'Costanza e disciplina: la reputazione si costruisce con centinaia di trattamenti eseguiti a regola d’arte',
      'Investimento continuo: formarsi ogni anno per rimanere un passo avanti alla concorrenza',
      'Cura dei dettagli: dall’accoglienza con tisana personalizzata al profumo del tuo studio'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 97: Fotografia Macro e Illuminazione (L4)
  layouts.createExplainSlide(pres, {
    title: 'La Fotografia Beauty:\n*luci e lenti macro*',
    moduleName: 'MODULO 5 — BUSINESS & CARRIERA',
    slideNum: '97',
    leadText: 'Una foto scadente sminuisce un lavoro stupendo. Una fotografia pulita, luminosa e nitida fa apparire il tuo studio un centro medico-estetico di lusso.',
    features: [
      'Lente Macro con Filtro Polarizzatore CPL: elimina i riflessi bianchi del sebo e della linfa rivelando i dettagli',
      'Illuminazione: luce neutra a 5000-5500 Kelvin (luce giorno naturale); no luci gialle casalinghe',
      'Pulizia pre-scatto: asciugare accuratamente ogni traccia di rossore o pigmento prima di fotografare',
      'Angolazioni costanti: foto prima e dopo scattate alla stessa identica distanza e inclinazione'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 98: Foto di Stock vs Portfolio Reale (L6)
  layouts.createCompareSlide(pres, {
    title: 'Comunicazione Social:\n*Improvvisazione vs Brand di Lusso*',
    moduleName: 'MODULO 5 — BUSINESS & CARRIERA',
    slideNum: '98',
    leadText: 'La percezione visiva del tuo profilo Instagram determina la disponibilità della cliente a spendere per il tuo lavoro.',
    colA: {
      badge: 'IL PROFILO DI SUCCESSO',
      title: 'Studio Friduchas Standard',
      isHighlighted: true,
      rows: [
        { label: 'FOTOGRAFIE', value: 'Macro professionali a fuoco, con luce morbida e pelle reale pulita' },
        { label: 'CONTENUTI', value: 'Video educativi che spiegano la guarigione, l’igiene e il visagismo' },
        { label: 'STORIES', value: 'Il dietro le quinte: preparazione sterile e spiegazione delle scelte' },
        { label: 'BIO', value: 'Posizionamento chiaro: chi sei, cosa risolvi e link diretto per prenotare' },
        { label: 'PERCEZIONE', value: 'Autorevolezza clinica e fiducia immediata' }
      ]
    },
    colB: {
      badge: 'ERRORI FREQUENTI',
      title: 'Profilo Amatoriale',
      isHighlighted: false,
      rows: [
        { label: 'FOTOGRAFIE', value: 'Foto sfuocate, con luce gialla o filtri bellezza che alterano la realtà' },
        { label: 'CONTENUTI', value: 'Solo volantini promozionali di sconti o immagini prese da Google' },
        { label: 'STORIES', value: 'Contenuti personali confusi mescolati all’attività professionale' },
        { label: 'BIO', value: 'Generica lista di trattamenti senza città né chiara identità' },
        { label: 'PERCEZIONE', value: 'Basso valore e attrazione di clienti che cercano solo il prezzo stracciato' }
      ]
    }
  });

  // Slide 99: Politica di Prezzo (Pricing Strategy) (L4)
  layouts.createExplainSlide(pres, {
    title: 'Pricing Strategy:\n*mai svendere il tuo talento*',
    moduleName: 'MODULO 5 — BUSINESS & CARRIERA',
    slideNum: '99',
    leadText: 'Il prezzo non è solo un numero: è il primo segnale di qualità e sicurezza che trasmetti al mercato.',
    features: [
      'Calcolo del costo vivo: aghi REACH, guanti, DPI, monouso, usura macchina e affitto cabina',
      'La trappola del prezzo basso: chi paga poco pretende di più, rispetta meno il tuo tempo e annulla gli appuntamenti',
      'Prezzo corretto: commisurato all’investimento formativo, all’igiene ospedaliera e alla tutela legale',
      'Includere sempre il ritocco a 30-45 giorni nel pacchetto iniziale per garantire la perfezione del lavoro'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 100: Prezzo Low-Cost vs Posizionamento Premium (L6)
  layouts.createCompareSlide(pres, {
    title: 'La Trappola del Low-Cost\n*vs Posizionamento Premium*',
    moduleName: 'MODULO 5 — BUSINESS & CARRIERA',
    slideNum: '100',
    leadText: 'Scegliere a quale fascia di mercato rivolgersi cambia radicalmente la serenità e il fatturato della tua attività.',
    colA: {
      badge: 'IL MODELLO VIRTUOSO',
      title: 'Specialista Premium',
      isHighlighted: true,
      rows: [
        { label: 'TARIFFA', value: 'Tariffa adeguata al valore: 350€ – 600€ a trattamento' },
        { label: 'RITMO', value: '1 o 2 trattamenti al giorno eseguiti con calma, dedizione e cura estrema' },
        { label: 'CLIENTI', value: 'Donne consapevoli che cercano sicurezza, igiene e naturalezza' },
        { label: 'REPUTAZIONE', value: 'Bocca a bocca spontaneo di alto livello e passaparola tra amiche' },
        { label: 'SOSTENIBILITÀ', value: 'Meno stress fisico, margini alti e tempo per continuare a formarsi' }
      ]
    },
    colB: {
      badge: 'IL MODELLO PERDENTE',
      title: 'Guerra del Prezzo (Discount)',
      isHighlighted: false,
      rows: [
        { label: 'TARIFFA', value: 'Tariffe stracciate da 100€ – 150€ per competere con i saloni generici' },
        { label: 'RITMO', value: '4 o 5 clienti al giorno in catena di montaggio frenetica' },
        { label: 'CLIENTI', value: 'Cacciatrici di sconti, mai soddisfatte e inclini a polemiche' },
        { label: 'RISCHIO', value: 'Affaticamento, errori per fretta e burnout professionale rapido' },
        { label: 'SOSTENIBILITÀ', value: 'Margini risicati dopo aver pagato materiali e tasse' }
      ]
    }
  });

  // Slide 101: La Gestione della Cliente Ansiosa (L4)
  layouts.createExplainSlide(pres, {
    title: 'Gestire le emozioni:\n*la cliente ansiosa*',
    moduleName: 'MODULO 5 — BUSINESS & CARRIERA',
    slideNum: '101',
    leadText: 'Il volto è la parte più intima dell’identità. Durante i giorni di desquamazione e ghost phase, la cliente può essere presa dall’ansia.',
    features: [
      'Messaggio di check-up al Giorno 3: «Ciao Maria, oggi le tue sopracciglia saranno più scure: è il normale processo di ossidazione!»',
      'Messaggio al Giorno 10: «Se il colore sembra svanito, niente paura: sei nella ghost phase. La cheratina si sta rigenerando»',
      'Ascolto empatico: mai minimizzare la paura della cliente; spiegare sempre il processo biologico scientifico',
      'La tua sicurezza trasmette serenità e trasforma una cliente spaventata nella tua più grande sostenitrice'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 102: Fidelizzazione e Richiamo Annuale (L4)
  layouts.createExplainSlide(pres, {
    title: 'La Fidelizzazione:\n*il richiamo annuale*',
    moduleName: 'MODULO 5 — BUSINESS & CARRIERA',
    slideNum: '102',
    leadText: 'Una cliente soddisfatta di dermopigmentazione è una cliente per la vita. Il richiamo annuale garantisce stabilità economica costante allo studio.',
    features: [
      'Database clienti strutturato con data del trattamento, pigmento utilizzato, ago e note fisionomiche',
      'Messaggio promemoria a 10 mesi: «È trascorso quasi un anno: verifichiamo insieme la freschezza del colore!»',
      'Tariffa dedicata per il rinfresco annuale (Touch-up annuale a prezzo agevolato rispetto al primo impianto)',
      'Cross-selling naturale: la cliente che si innamora delle sopracciglia tornerà per le labbra e gli occhi'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // Slide 103: Il Giuramento della Dermopigmentista (L8 Dark)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'CONCLUSIONE • GIURAMENTO PROFESSIONALE',
    slideNum: '103',
    eyebrow: 'IL NOSTRO IMPEGNO SACRO',
    quote: 'Prometto di rispettare la pelle,\n*onorare l’armonia del volto*\n*e custodire la fiducia di chi si affida a me.*',
    subtext: 'Giuro di non anteporre mai il guadagno alla salute, di rifiutare ciò che danneggia l’estetica naturale, di utilizzare solo strumenti sterili e sicuri, e di dedicare ogni giorno della mia carriera allo studio, alla precisione e alla bellezza autentica.',
    bottomTag: 'GIURAMENTO PROFESSIONALE FRIDUCHAS ACADEMY',
    imagePath: img('sample_dark_model.jpg')
  });

  // Slide 104: Lettera Finale di Giulia (L4 Explain)
  layouts.createExplainSlide(pres, {
    title: 'Il tuo percorso\n*inizia adesso*',
    moduleName: 'CONCLUSIONE • IL MESSAGGIO DI GIULIA',
    slideNum: '104',
    leadText: '«Oggi non si conclude un corso: oggi nasce la tua professione. Ricorda che la sicurezza nella mano arriva con la pratica, ma la grandezza nasce dall’amore per ciò che fai.» — Giulia',
    features: [
      'Esercitati ogni giorno su pelle sintetica: 30 minuti di pendolo costante creano la memoria muscolare',
      'Non avere fretta di arrivare: ogni errore analizzato e compreso è un passo verso la maestria',
      'La community di Friduchas Academy è la tua casa: saremo sempre al tuo fianco per supportarti',
      'Sii fiera del tuo percorso: hai scelto l’eccellenza, la precisione e il rispetto per la bellezza autentica'
    ],
    imagePath: img('sample_cover.jpg')
  });

  // Slide 105: Congratulazioni e Chiusura Master (L1 Cover)
  layouts.createCoverSlide(pres, {
    eyebrow: 'FRIDUCHAS ACADEMY • CERTIFIED MASTER PMU',
    title: 'Congratulazioni\n*Dermopigmentista*',
    subtitle: 'Hai completato il Corso Base Professionale in Presenza. Benvenuta nella famiglia Friduchas Academy.',
    footerTag: 'WWW.STUDIOFRIDUCHAS.COM • INFO@STUDIOFRIDUCHAS.COM • MILANO / ROMA',
    imagePath: img('sample_cover.jpg')
  });
}

module.exports = { buildMod05Slides };

