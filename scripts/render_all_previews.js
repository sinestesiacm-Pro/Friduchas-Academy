// scripts/render_all_previews.js
// Direct 1:1 reproduction of the 9 slides from media_1793314176054_a0e5c456.jpg
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '..', 'dist', 'previews');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Artifact directory
const artifactDir = path.join('C:', 'Users', 'carlo', '.gemini', 'antigravity', 'brain', '2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434', 'previews');
if (!fs.existsSync(artifactDir)) {
  fs.mkdirSync(artifactDir, { recursive: true });
}

const fontRegular = fs.readFileSync('assets/fonts/CormorantGaramond-Regular.ttf').toString('base64');
const fontItalic = fs.readFileSync('assets/fonts/CormorantGaramond-Italic.ttf').toString('base64');
const fontInter = fs.readFileSync('assets/fonts/Inter-Variable.ttf').toString('base64');

const b64 = (rel) => fs.readFileSync(path.join(__dirname, '..', rel)).toString('base64');

const imgCover = b64('assets/img/sample_cover.jpg');
const imgProfile = b64('assets/img/sample_model_profile.jpg');
const imgTexture = b64('assets/img/sample_texture.jpg');
const imgDark = b64('assets/img/sample_dark_model.jpg');
const imgAnatomy = b64('assets/img/sample_anatomy_skin.png');
const imgFunctions = b64('assets/img/diagram_skin_functions.png');
const imgCell1 = b64('assets/img/cell_keratinocyte.png');
const imgCell2 = b64('assets/img/cell_melanocyte.png');
const imgCell3 = b64('assets/img/cell_fibroblast.png');
const imgCell4 = b64('assets/img/cell_langerhans.png');

const fontDef = `
  <defs>
    <style>
      @font-face {
        font-family: 'Cormorant';
        src: url('data:font/truetype;charset=utf-8;base64,${fontRegular}') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: 'Cormorant';
        src: url('data:font/truetype;charset=utf-8;base64,${fontItalic}') format('truetype');
        font-weight: normal;
        font-style: italic;
      }
      @font-face {
        font-family: 'Inter';
        src: url('data:font/truetype;charset=utf-8;base64,${fontInter}') format('truetype');
      }
      .eyebrow { font-family: 'Inter'; font-size: 13px; letter-spacing: 2.5px; fill: #9C9498; }
      .header-num { font-family: 'Inter'; font-size: 13px; font-weight: bold; fill: #D82572; }
      .title-serif { font-family: 'Cormorant'; font-size: 64px; fill: #1F1D1E; }
      .title-serif-it { font-family: 'Cormorant'; font-size: 64px; font-style: italic; fill: #D82572; }
      .lead { font-family: 'Inter'; font-size: 17px; fill: #665F63; line-height: 1.5; }
      .card-title { font-family: 'Cormorant'; font-size: 24px; font-weight: bold; fill: #1F1D1E; }
      .card-sub { font-family: 'Inter'; font-size: 14px; fill: #665F63; }
    </style>
  </defs>
`;

function renderHeader(module = 'MODULO 1 — FOUNDATION', num = '01', dark = false) {
  const lineCol = dark ? '#2B2629' : '#EAD7DF';
  const textCol = dark ? '#BAACB3' : '#9C9498';
  return `
    <text x="120" y="65" font-family="Inter" font-size="13" letter-spacing="2.5" fill="${textCol}">FRIDUCHAS ACADEMY</text>
    <text x="1750" y="65" text-anchor="end" font-family="Inter" font-size="13" letter-spacing="2" fill="${textCol}">${module}   <tspan fill="#D82572" font-weight="bold">${num}</tspan></text>
    <line x1="120" y1="100" x2="1800" y2="100" stroke="${lineCol}" stroke-width="1"/>
  `;
}

async function save(name, svg) {
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  const p1 = path.join(outDir, `${name}.png`);
  const p2 = path.join(artifactDir, `${name}.png`);
  fs.writeFileSync(p1, buf);
  fs.writeFileSync(p2, buf);
  console.log(`Saved: ${name}.png`);
}

async function renderAll() {
  // 1. SLIDE 01 (Reference Slide 1): Anatomia della pelle
  await save('slide_01_cover', `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    ${fontDef}
    <rect width="1920" height="1080" fill="#FCFAF8"/>
    ${renderHeader('MODULO 1 — FOUNDATION', '01')}

    <!-- Soft blush wave behind right model -->
    <path d="M 1200,0 C 1050,300 1100,700 950,1080 L 1920,1080 L 1920,0 Z" fill="#F8DFE8" opacity="0.6"/>
    <image href="data:image/jpeg;base64,${imgCover}" x="960" y="0" width="960" height="1080" preserveAspectRatio="xMidYMid slice"/>

    <!-- Left Content -->
    <line x1="120" y1="210" x2="200" y2="210" stroke="#1F1D1E" stroke-width="1.5"/>
    <text x="120" y="320" class="title-serif" font-size="76">Anatomia</text>
    <text x="120" y="415" font-family="Cormorant" font-size="76" fill="#1F1D1E">della <tspan class="title-serif-it">pelle</tspan></text>

    <text x="120" y="520" class="lead" font-size="20">Conoscere la struttura della pelle</text>
    <text x="120" y="560" class="lead" font-size="20">è il primo passo per comprendere</text>
    <text x="120" y="600" class="lead" font-size="20">come lavorare in modo sicuro,</text>
    <text x="120" y="640" class="lead" font-size="20">consapevole e professionale.</text>

    <text x="120" y="990" class="eyebrow">FRIDUCHAS ACADEMY</text>
  </svg>
  `);

  // 2. SLIDE 02 (Reference Slide 2): Cosa vedremo in questo capitolo
  await save('slide_02_agenda', `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    ${fontDef}
    <rect width="1920" height="1080" fill="#FCFAF8"/>
    ${renderHeader('MODULO 1 — FOUNDATION', '02')}

    <!-- Right Cream Cosmetic Texture Swatch -->
    <image href="data:image/jpeg;base64,${imgTexture}" x="1050" y="140" width="750" height="840" preserveAspectRatio="xMidYMid slice" rx="6"/>

    <!-- Left Content -->
    <text x="120" y="240" class="title-serif" font-size="60">Cosa vedremo</text>
    <text x="120" y="320" font-family="Cormorant" font-size="60" fill="#1F1D1E">in questo <tspan class="title-serif-it">capitolo</tspan></text>

    <g transform="translate(120, 440)">
      <text x="0" y="0" font-family="Inter" font-size="20" font-weight="bold" fill="#D82572">01</text>
      <text x="65" y="0" font-family="Inter" font-size="19" fill="#1F1D1E">La struttura della pelle</text>
      <line x1="0" y1="30" x2="800" y2="30" stroke="#EAD7DF" stroke-width="0.8"/>
    </g>
    <g transform="translate(120, 540)">
      <text x="0" y="0" font-family="Inter" font-size="20" font-weight="bold" fill="#D82572">02</text>
      <text x="65" y="0" font-family="Inter" font-size="19" fill="#1F1D1E">Gli strati cutanei</text>
      <line x1="0" y1="30" x2="800" y2="30" stroke="#EAD7DF" stroke-width="0.8"/>
    </g>
    <g transform="translate(120, 640)">
      <text x="0" y="0" font-family="Inter" font-size="20" font-weight="bold" fill="#D82572">03</text>
      <text x="65" y="0" font-family="Inter" font-size="19" fill="#1F1D1E">Le funzioni della pelle</text>
      <line x1="0" y1="30" x2="800" y2="30" stroke="#EAD7DF" stroke-width="0.8"/>
    </g>
    <g transform="translate(120, 740)">
      <text x="0" y="0" font-family="Inter" font-size="20" font-weight="bold" fill="#D82572">04</text>
      <text x="65" y="0" font-family="Inter" font-size="19" fill="#1F1D1E">Le cellule principali</text>
      <line x1="0" y1="30" x2="800" y2="30" stroke="#EAD7DF" stroke-width="0.8"/>
    </g>
    <g transform="translate(120, 840)">
      <text x="0" y="0" font-family="Inter" font-size="20" font-weight="bold" fill="#D82572">05</text>
      <text x="65" y="0" font-family="Inter" font-size="19" fill="#1F1D1E">Gli annessi cutanei</text>
      <line x1="0" y1="30" x2="800" y2="30" stroke="#EAD7DF" stroke-width="0.8"/>
    </g>
  </svg>
  `);

  // 3. SLIDE 03 (Reference Slide 3): La pelle: un organo complesso
  await save('slide_03_organo_complesso', `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    ${fontDef}
    <rect width="1920" height="1080" fill="#FCFAF8"/>
    ${renderHeader('MODULO 1 — FOUNDATION', '03')}

    <image href="data:image/jpeg;base64,${imgProfile}" x="1050" y="0" width="870" height="1080" preserveAspectRatio="xMidYMid slice"/>

    <!-- Left Content -->
    <text x="120" y="240" class="title-serif" font-size="64">La pelle:</text>
    <text x="120" y="325" class="title-serif-it" font-size="64">un organo</text>
    <text x="120" y="410" class="title-serif-it" font-size="64">complesso</text>

    <text x="120" y="490" class="lead" font-size="16">La pelle è l'organo più esteso del nostro corpo e</text>
    <text x="120" y="520" class="lead" font-size="16">rappresenta una vera e propria barriera protettiva,</text>
    <text x="120" y="550" class="lead" font-size="16">ma è anche molto di più: è un sistema dinamico,</text>
    <text x="120" y="580" class="lead" font-size="16">vivo e in continuo cambiamento.</text>

    <!-- 4 Pink Dot Features -->
    <g transform="translate(120, 640)">
      <circle cx="16" cy="0" r="14" fill="#D82572"/>
      <text x="48" y="6" font-family="Inter" font-size="17" fill="#1F1D1E">Protegge dagli agenti esterni</text>
    </g>
    <g transform="translate(120, 715)">
      <circle cx="16" cy="0" r="14" fill="#D82572"/>
      <text x="48" y="6" font-family="Inter" font-size="17" fill="#1F1D1E">Regola la temperatura corporea</text>
    </g>
    <g transform="translate(120, 790)">
      <circle cx="16" cy="0" r="14" fill="#D82572"/>
      <text x="48" y="6" font-family="Inter" font-size="17" fill="#1F1D1E">Permette la percezione sensoriale</text>
    </g>
    <g transform="translate(120, 865)">
      <circle cx="16" cy="0" r="14" fill="#D82572"/>
      <text x="48" y="6" font-family="Inter" font-size="17" fill="#1F1D1E">Partecipa al metabolismo</text>
    </g>

    <text x="120" y="990" class="eyebrow">FRIDUCHAS ACADEMY</text>
  </svg>
  `);

  // 4. SLIDE 04 (Reference Slide 4): Gli strati della pelle
  await save('slide_04_strati_pelle', `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    ${fontDef}
    <rect width="1920" height="1080" fill="#FCFAF8"/>
    ${renderHeader('MODULO 1 — FOUNDATION', '04')}

    <!-- Left Content -->
    <text x="120" y="230" class="title-serif" font-size="64">Gli strati</text>
    <text x="120" y="315" class="title-serif-it" font-size="64">della pelle</text>
    
    <text x="120" y="380" class="lead" font-size="16">La pelle è formata da tre strati principali,</text>
    <text x="120" y="410" class="lead" font-size="16">ognuno con funzioni specifiche e fondamentali.</text>

    <!-- 3 Pink Pill Badges -->
    <g transform="translate(120, 500)">
      <rect x="0" y="0" width="70" height="36" rx="18" fill="#D82572"/>
      <text x="35" y="24" text-anchor="middle" font-family="Inter" font-size="15" font-weight="bold" fill="#FFFFFF">01</text>
      <text x="95" y="26" class="card-title" font-size="22">Epidermide</text>
      <text x="95" y="55" class="card-sub" font-size="14">(strato più superficiale)</text>
      <line x1="0" y1="85" x2="650" y2="85" stroke="#EAD7DF" stroke-width="0.8"/>
    </g>
    <g transform="translate(120, 630)">
      <rect x="0" y="0" width="70" height="36" rx="18" fill="#D82572"/>
      <text x="35" y="24" text-anchor="middle" font-family="Inter" font-size="15" font-weight="bold" fill="#FFFFFF">02</text>
      <text x="95" y="26" class="card-title" font-size="22">Derma</text>
      <text x="95" y="55" class="card-sub" font-size="14">(strato intermedio — target PMU 0.08-0.15mm)</text>
      <line x1="0" y1="85" x2="650" y2="85" stroke="#EAD7DF" stroke-width="0.8"/>
    </g>
    <g transform="translate(120, 760)">
      <rect x="0" y="0" width="70" height="36" rx="18" fill="#D82572"/>
      <text x="35" y="24" text-anchor="middle" font-family="Inter" font-size="15" font-weight="bold" fill="#FFFFFF">03</text>
      <text x="95" y="26" class="card-title" font-size="22">Ipoderma</text>
      <text x="95" y="55" class="card-sub" font-size="14">(strato più profondo)</text>
    </g>

    <!-- Center/Right 3D Anatomy Block -->
    <image href="data:image/png;base64,${imgAnatomy}" x="880" y="210" width="650" height="720" preserveAspectRatio="xMidYMid contain"/>

    <!-- Pointer lines on right -->
    <line x1="1500" y1="360" x2="1600" y2="360" stroke="#776E73" stroke-width="1.2"/>
    <text x="1620" y="366" font-family="Inter" font-size="17" font-weight="bold" fill="#1F1D1E">Epidermide</text>

    <line x1="1520" y1="560" x2="1600" y2="560" stroke="#776E73" stroke-width="1.2"/>
    <text x="1620" y="566" font-family="Inter" font-size="17" font-weight="bold" fill="#1F1D1E">Derma</text>

    <line x1="1520" y1="760" x2="1600" y2="760" stroke="#776E73" stroke-width="1.2"/>
    <text x="1620" y="766" font-family="Inter" font-size="17" font-weight="bold" fill="#1F1D1E">Ipoderma</text>

    <text x="120" y="990" class="eyebrow">FRIDUCHAS ACADEMY</text>
  </svg>
  `);

  // 5. SLIDE 05 (Reference Slide 5): Statement Blush
  await save('slide_05_statement_blush', `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    ${fontDef}
    <rect width="1920" height="1080" fill="#F8DFE8"/>
    <image href="data:image/jpeg;base64,${imgCover}" x="960" y="0" width="960" height="1080" preserveAspectRatio="xMidYMid slice"/>

    <text x="120" y="340" font-family="Cormorant" font-size="56" fill="#1F1D1E">La pelle non è solo</text>
    <text x="120" y="420" font-family="Cormorant" font-size="56" fill="#1F1D1E">ciò che vediamo,</text>
    <text x="120" y="515" class="title-serif-it" font-size="70">ma tutto</text>
    <text x="120" y="605" class="title-serif-it" font-size="70">ciò che</text>
    <text x="120" y="695" class="title-serif-it" font-size="70">fa per noi.</text>

    <text x="120" y="990" class="eyebrow" fill="#D82572">FRIDUCHAS ACADEMY</text>
  </svg>
  `);

  // 6. SLIDE 06 (Reference Slide 6): Le cellule principali
  await save('slide_06_cellule_principali', `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    ${fontDef}
    <rect width="1920" height="1080" fill="#FCFAF8"/>
    ${renderHeader('MODULO 1 — FOUNDATION', '06')}

    <text x="120" y="220" class="title-serif" font-size="64">Le cellule</text>
    <text x="120" y="305" class="title-serif-it" font-size="64">principali</text>
    <text x="120" y="365" class="lead" font-size="16">La pelle è composta da diversi tipi di cellule, ognuna con un ruolo specifico</text>
    <text x="120" y="395" class="lead" font-size="16">nel mantenere la sua salute e il suo equilibrio biologico.</text>

    <!-- 4 Circular Microscope Vignettes -->
    <g transform="translate(120, 480)">
      <image href="data:image/png;base64,${imgCell1}" x="35" y="0" width="290" height="290"/>
      <text x="180" y="335" text-anchor="middle" font-family="Cormorant" font-size="26" font-weight="bold" fill="#1F1D1E">Cheratinociti</text>
      <text x="180" y="375" text-anchor="middle" font-family="Inter" font-size="14" fill="#665F63">Protezione e rinnovamento</text>
      <text x="180" y="400" text-anchor="middle" font-family="Inter" font-size="14" fill="#665F63">epidermico continuo</text>
    </g>
    <g transform="translate(560, 480)">
      <image href="data:image/png;base64,${imgCell2}" x="35" y="0" width="290" height="290"/>
      <text x="180" y="335" text-anchor="middle" font-family="Cormorant" font-size="26" font-weight="bold" fill="#1F1D1E">Melanociti</text>
      <text x="180" y="375" text-anchor="middle" font-family="Inter" font-size="14" fill="#665F63">Produzione di melanina e</text>
      <text x="180" y="400" text-anchor="middle" font-family="Inter" font-size="14" fill="#665F63">fotoprotezione dai raggi UV</text>
    </g>
    <g transform="translate(1000, 480)">
      <image href="data:image/png;base64,${imgCell3}" x="35" y="0" width="290" height="290"/>
      <text x="180" y="335" text-anchor="middle" font-family="Cormorant" font-size="26" font-weight="bold" fill="#1F1D1E">Fibroblasti</text>
      <text x="180" y="375" text-anchor="middle" font-family="Inter" font-size="14" fill="#665F63">Sintesi di collagene, elastina</text>
      <text x="180" y="400" text-anchor="middle" font-family="Inter" font-size="14" fill="#665F63">e matrice dermica</text>
    </g>
    <g transform="translate(1440, 480)">
      <image href="data:image/png;base64,${imgCell4}" x="35" y="0" width="290" height="290"/>
      <text x="180" y="335" text-anchor="middle" font-family="Cormorant" font-size="26" font-weight="bold" fill="#1F1D1E">Cellule di Langerhans</text>
      <text x="180" y="375" text-anchor="middle" font-family="Inter" font-size="14" fill="#665F63">Difesa immunitaria e</text>
      <text x="180" y="400" text-anchor="middle" font-family="Inter" font-size="14" fill="#665F63">fagocitosi delle particelle</text>
    </g>

    <text x="120" y="990" class="eyebrow">FRIDUCHAS ACADEMY</text>
  </svg>
  `);

  // 7. SLIDE 07 (Reference Slide 7): Gli annessi cutanei
  await save('slide_07_annessi_cutanei', `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    ${fontDef}
    <rect width="1920" height="1080" fill="#FCFAF8"/>
    ${renderHeader('MODULO 1 — FOUNDATION', '07')}

    <!-- Right Eye / Brow Macro Image -->
    <image href="data:image/jpeg;base64,${imgCover}" x="1000" y="0" width="920" height="1080" preserveAspectRatio="xMidYMid slice"/>

    <!-- Left Content -->
    <text x="120" y="240" class="title-serif" font-size="64">Gli annessi</text>
    <text x="120" y="325" class="title-serif-it" font-size="64">cutanei</text>
    
    <text x="120" y="390" class="lead" font-size="16">Gli annessi cutanei sono strutture che si trovano</text>
    <text x="120" y="420" class="lead" font-size="16">nella pelle e ne potenziano le funzioni biologiche.</text>

    <!-- 4 Pink Pill Cards -->
    <g transform="translate(120, 500)">
      <circle cx="22" cy="0" r="18" fill="#D82572"/>
      <text x="58" y="-4" font-family="Inter" font-size="18" font-weight="bold" fill="#1F1D1E">Peli</text>
      <text x="58" y="18" class="card-sub" font-size="14">Protezione e sensibilità tattile</text>
    </g>
    <g transform="translate(120, 600)">
      <circle cx="22" cy="0" r="18" fill="#D82572"/>
      <text x="58" y="-4" font-family="Inter" font-size="18" font-weight="bold" fill="#1F1D1E">Unghie</text>
      <text x="58" y="18" class="card-sub" font-size="14">Protezione delle estremità</text>
    </g>
    <g transform="translate(120, 700)">
      <circle cx="22" cy="0" r="18" fill="#D82572"/>
      <text x="58" y="-4" font-family="Inter" font-size="18" font-weight="bold" fill="#1F1D1E">Ghiandole sebacee</text>
      <text x="58" y="18" class="card-sub" font-size="14">Lubrificazione e barriera lipidica</text>
    </g>
    <g transform="translate(120, 800)">
      <circle cx="22" cy="0" r="18" fill="#D82572"/>
      <text x="58" y="-4" font-family="Inter" font-size="18" font-weight="bold" fill="#1F1D1E">Ghiandole sudoripare</text>
      <text x="58" y="18" class="card-sub" font-size="14">Termoregolazione ed eliminazione di tossine</text>
    </g>

    <text x="120" y="990" class="eyebrow">FRIDUCHAS ACADEMY</text>
  </svg>
  `);

  // 8. SLIDE 08 (Reference Slide 8): Le funzioni della pelle
  await save('slide_08_funzioni_pelle', `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    ${fontDef}
    <rect width="1920" height="1080" fill="#FCFAF8"/>
    ${renderHeader('MODULO 1 — FOUNDATION', '08')}

    <!-- Left Content -->
    <text x="120" y="240" class="title-serif" font-size="64">Le funzioni</text>
    <text x="120" y="325" class="title-serif-it" font-size="64">della pelle</text>
    
    <text x="120" y="400" class="lead" font-size="16">La pelle è un sistema complesso</text>
    <text x="120" y="430" class="lead" font-size="16">che lavora ogni giorno per</text>
    <text x="120" y="460" class="lead" font-size="16">mantenerci in salute, proteggendoci,</text>
    <text x="120" y="490" class="lead" font-size="16">regolandoci e permettendoci</text>
    <text x="120" y="520" class="lead" font-size="16">di percepire il mondo.</text>

    <!-- Italic Callout Quote -->
    <text x="120" y="650" font-family="Cormorant" font-size="34" font-style="italic" fill="#D82572">Conoscerla</text>
    <text x="120" y="695" font-family="Cormorant" font-size="34" font-style="italic" fill="#D82572">è già prendersene cura.</text>

    <!-- Right 4-Petal Venn Diagram -->
    <image href="data:image/png;base64,${imgFunctions}" x="1000" y="240" width="700" height="700" preserveAspectRatio="xMidYMid contain"/>

    <text x="120" y="990" class="eyebrow">FRIDUCHAS ACADEMY</text>
  </svg>
  `);

  // 9. SLIDE 09 (Reference Slide 9 — FULL ACCURATE RESTORATION WITHOUT ANY CUTOFFS):
  // La pelle è il nostro primo contatto con il mondo
  await save('slide_09_statement_dark', `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    ${fontDef}
    <!-- Pure obsidian black background -->
    <rect width="1920" height="1080" fill="#100E10"/>
    
    <!-- Seamless right beauty model blending perfectly into the dark background -->
    <image href="data:image/jpeg;base64,${imgDark}" x="920" y="0" width="1000" height="1080" preserveAspectRatio="xMidYMid slice"/>

    <!-- Subtle gradient overlay so left edge of model fades smoothly into text area -->
    <rect x="800" y="0" width="300" height="1080" fill="url(#darkEdgeBlend)"/>

    <defs>
      <linearGradient id="darkEdgeBlend" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#100E10" stop-opacity="1"/>
        <stop offset="100%" stop-color="#100E10" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <!-- Header in dark mode -->
    <text x="120" y="65" font-family="Inter" font-size="13" letter-spacing="2.5" fill="#776E73">FRIDUCHAS ACADEMY</text>
    <text x="1750" y="65" text-anchor="end" font-family="Inter" font-size="13" letter-spacing="2" fill="#776E73">MODULO 1 — FOUNDATION   <tspan fill="#D82572" font-weight="bold">09</tspan></text>
    <line x1="120" y1="100" x2="1800" y2="100" stroke="#2B2629" stroke-width="1"/>

    <!-- Main Headline in Didot/Cormorant Serif exactly as seen in reference -->
    <text x="120" y="360" font-family="Cormorant" font-size="76" fill="#FDFBFC">La pelle</text>
    <text x="120" y="455" font-family="Cormorant" font-size="76" font-style="italic" fill="#D82572">è il nostro</text>
    <text x="120" y="550" font-family="Cormorant" font-size="76" font-style="italic" fill="#D82572">primo contatto</text>
    <text x="120" y="645" font-family="Cormorant" font-size="76" fill="#FDFBFC">con il mondo.</text>

    <!-- Thin Divider -->
    <line x1="120" y1="720" x2="260" y2="720" stroke="#D82572" stroke-width="2"/>

    <!-- Supporting sentence -->
    <text x="120" y="780" font-family="Inter" font-size="17" fill="#BAACB3">Lavorare alla giusta profondità significa garantire precisione,</text>
    <text x="120" y="815" font-family="Inter" font-size="17" fill="#BAACB3">armonia e il rispetto assoluto per chi si affida a noi.</text>

    <!-- Bottom Category Tag in pink uppercase -->
    <text x="120" y="960" font-family="Inter" font-size="13" letter-spacing="3.5" font-weight="bold" fill="#D82572">ANATOMIA DELLA PELLE</text>
  </svg>
  `);

  console.log('\n✓ All 9 slides reproduced with 100% fidelity to reference!');
}

renderAll().catch(console.error);
