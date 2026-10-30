// scripts/generate_sample.js
// Generates dist/sample.pptx demonstrating all editorial layouts matching the reference system

const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');
const theme = require('../src/theme');
const layouts = require('../src/layouts');

async function buildSample() {
  const pres = new pptxgen();

  // Configure presentation canvas (16:9 widescreen)
  pres.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5 inches

  // Ensure dist directory exists
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const img = (file) => path.join(__dirname, '..', 'assets', 'img', file);

  // 1. SLIDE 1: Master Cover (L1)
  layouts.createCoverSlide(pres, {
    eyebrow: 'FRIDUCHAS ACADEMY • CORSO BASE IN PRESENZA',
    title: 'Master PMU\n*Dermopigmentazione*\nProfessionale',
    subtitle: 'Manuale didattico e scientifico per la formazione estetica avanzata.',
    footerTag: 'EDIZIONE 2026 — DOCENTE: GIULIA',
    imagePath: img('sample_cover.jpg')
  });

  // 2. SLIDE 2: Module Opener (L2)
  layouts.createModuleOpenerSlide(pres, {
    moduleNum: '01',
    eyebrow: 'MODULO FORMATIVO • TEORIA FONDAMENTALE',
    title: 'Anatomia\ndella *pelle*',
    description: 'Conoscere la struttura cutanea e la biologia del tessuto è il primo passo per lavorare in modo sicuro, consapevole e professionale.',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '01',
    imagePath: img('sample_model_profile.jpg')
  });

  // 3. SLIDE 3: Agenda / Capitolo (L3)
  layouts.createAgendaSlide(pres, {
    title: 'Cosa vedremo\nin questo *capitolo*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '02',
    items: [
      'La struttura biologica della cute',
      'Gli strati cutanei: target e limiti',
      'Le funzioni primarie e la barriera',
      'Le cellule principali e rigenerazione',
      'Gli annessi cutanei e vascolarizzazione'
    ],
    imagePath: img('sample_texture.jpg')
  });

  // 4. SLIDE 4: Key Concept & Explanations (L4)
  layouts.createExplainSlide(pres, {
    title: 'La pelle:\n*un organo*\n*complesso*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '03',
    leadText: "La pelle è l'organo più esteso del corpo umano. Non è un semplice supporto inerte, ma un ecosistema vitale attivo che risponde ad ogni stimolo meccanico e chimico.",
    features: [
      'Barriera protettiva immunitaria contro patogeni e agenti esterni',
      'Termoregolazione attiva e mantenimento dell’omeostasi idrica',
      'Percezione sensoriale tattile, pressoria e termica',
      'Sintesi metabolica e continua rigenerazione cellulare (turnover 28gg)'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // 5. SLIDE 5: Scientific Anatomy Cutaway (L5)
  layouts.createAnatomySlide(pres, {
    title: 'Gli strati\n*della pelle*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '04',
    leadText: 'La cute è strutturata in tre strati sovrapposti con caratteristiche istologiche uniche. Riconoscere la profondità corretta determina il successo del PMU.',
    layers: [
      { num: '01', name: 'Epidermide', role: 'Barriera superficiale avascolare (0.05–0.1 mm). Il turnover continuo causa l’espulsione del pigmento superficiale.' },
      { num: '02', name: 'Derma', role: 'Strato connettivale vitale. Target corretto: derma papillare (0.08–0.15 mm) per stabilità e zero cicatrici.' },
      { num: '03', name: 'Ipoderma', role: 'Tessuto adiposo profondo. Superare il derma causa espansione incontrollata (blowout) e viraggio scuro.' }
    ],
    imagePath: img('anatomy_skin_3d_cube.png')
  });

  // 6. SLIDE 6: Comparative Analysis (L6)
  layouts.createCompareSlide(pres, {
    title: 'Dermopigmentazione\n*vs Tatuaggio*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '05',
    leadText: 'La differenza tra dermopigmentazione e tatuaggio non risiede solo nello strumento, ma soprattutto nella biologia del tessuto e nel destino cellulare del pigmento.',
    colA: {
      badge: 'STANDARD FRIDUCHAS ACADEMY',
      title: 'Dermopigmentazione (PMU)',
      isHighlighted: true,
      rows: [
        { label: 'PROFONDITÀ', value: 'Derma papillare superficiale (0.08 – 0.15 mm)' },
        { label: 'PIGMENTI', value: 'Micronizzati, bio-compatibili, certificati REACH' },
        { label: 'DESTINO', value: 'Degradazione progressiva naturale (12 – 24 mesi)' },
        { label: 'STRUMENTO', value: 'Dermografo ad alta precisione con battuta controllata' },
        { label: 'RISULTATO', value: 'Miglioramento naturale dei lineamenti senza alterazioni' }
      ]
    },
    colB: {
      badge: 'TATUAGGIO TRADIZIONALE',
      title: 'Tatuaggio Artistico',
      isHighlighted: false,
      rows: [
        { label: 'PROFONDITÀ', value: 'Derma reticolare profondo (oltre 1.5 – 2.0 mm)' },
        { label: 'PIGMENTI', value: 'Inchiostri permanenti ad altissima densità e carbon black' },
        { label: 'DESTINO', value: 'Permanente a vita, suscettibile a migrazione profonda' },
        { label: 'STRUMENTO', value: 'Bobine o rotative pesanti ad elevata penetrazione' },
        { label: 'RISULTATO', value: 'Disegno artistico corpo indelebile' }
      ]
    }
  });

  // 7. SLIDE 7: Microscope / Cells Showcase (L7)
  layouts.createGridCellsSlide(pres, {
    title: 'Le cellule\n*principali*',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '06',
    leadText: 'Ogni famiglia cellulare reagisce all’inserimento dell’ago e partecipa al processo di guarigione e ritenzione del colore.',
    cells: [
      {
        name: 'Cheratinociti',
        role: 'Formano la barriera cornea e guidano la riepitelizzazione rapida.',
        imagePath: img('cell_keratinocyte_pro.png')
      },
      {
        name: 'Melanociti',
        role: 'Producono melanina; determinano il sottotono cutaneo individuale.',
        imagePath: img('cell_melanocyte_pro.png')
      },
      {
        name: 'Fibroblasti',
        role: 'Sintetizzano collagene ed elastina riparando il tessuto dermico.',
        imagePath: img('cell_fibroblast_pro.png')
      },
      {
        name: 'Cellule di Langerhans',
        role: 'Fagocitano le particelle estranee e modulano la risposta immunitaria.',
        imagePath: img('cell_langerhans_pro.png')
      }
    ]
  });

  // 8. SLIDE 8: Statement Slide — Blush Mode (L8)
  layouts.createStatementSlide(pres, {
    mode: 'blush',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '07',
    eyebrow: 'FILOSOFIA PROFESSIONALE',
    quote: 'La pelle non è solo\nciò che vediamo,\n*ma tutto ciò che*\n*fa per noi.*',
    subtext: 'Rispettare la biologia cutanea è il segreto per ottenere lavori che guariscono in modo impeccabile e mantengono la loro purezza cromatica.',
    bottomTag: 'PRINCIPIO CLINICO FRIDUCHAS',
    imagePath: img('sample_model_profile.jpg')
  });

  // 9. SLIDE 9: Statement Slide — Obsidian Dark Mode (L8)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'MODULO 1 — FOUNDATION',
    slideNum: '08',
    eyebrow: 'REGOLA AUREA',
    quote: 'La pelle\n*è il nostro primo contatto*\ncon il mondo.',
    subtext: 'Lavorare alla giusta profondità significa garantire precisione, armonia e il rispetto assoluto per l’identità di chi si affida a noi.',
    bottomTag: 'ANATOMIA DELLA PELLE',
    imagePath: img('slide09_model.jpg')
  });

  // Output file
  const outputPath = path.join(distDir, 'sample.pptx');
  await pres.writeFile({ fileName: outputPath });
  console.log(`\n✓ Successfully generated sample presentation: ${outputPath}`);
}

buildSample().catch(err => {
  console.error('Error generating sample:', err);
  process.exit(1);
});

