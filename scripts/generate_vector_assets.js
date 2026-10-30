// scripts/generate_vector_assets.js
// Generates mathematically precise, 100% vector SVG assets for:
// 1. Slide 08: 4-petal translucent Venn diagram (Protezione, Sensibilita, Termoregolazione, Metabolismo)
// 2. Slide 06: 4 biological histology micrographs (Cheratinociti, Melanociti, Fibroblasti, Cellule di Langerhans)

const fs = require('fs');
const path = require('path');

const pubImg = path.join(__dirname, '..', 'public', 'img');
if (!fs.existsSync(pubImg)) fs.mkdirSync(pubImg, { recursive: true });

// ==========================================
// 1. SLIDE 08: 4-PETAL TRANSLUCENT VENN DIAGRAM
// ==========================================
function generateVennSVG() {
  const size = 800;
  const center = size / 2; // 400
  const r = 180;           // circle radius
  const offset = 90;       // distance from center to circle centers

  const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Radial subtle gradient for soft luxury aesthetic -->
    <radialGradient id="petal-grad-1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 310) rotate(90) scale(180)">
      <stop offset="0%" stop-color="#FCE4EC" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#F8BBD0" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#F48FB1" stop-opacity="0.45"/>
    </radialGradient>
    <radialGradient id="petal-grad-2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(490 400) rotate(0) scale(180)">
      <stop offset="0%" stop-color="#FCE4EC" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#F8BBD0" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#F48FB1" stop-opacity="0.45"/>
    </radialGradient>
    <radialGradient id="petal-grad-3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 490) rotate(90) scale(180)">
      <stop offset="0%" stop-color="#FCE4EC" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#F8BBD0" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#F48FB1" stop-opacity="0.45"/>
    </radialGradient>
    <radialGradient id="petal-grad-4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(310 400) rotate(0) scale(180)">
      <stop offset="0%" stop-color="#FCE4EC" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#F8BBD0" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#F48FB1" stop-opacity="0.45"/>
    </radialGradient>
  </defs>

  <g style="mix-blend-mode: multiply;">
    <!-- Top Petal: Protezione -->
    <circle cx="400" cy="${center - offset}" r="${r}" fill="url(#petal-grad-1)" stroke="#D82572" stroke-width="1.2" stroke-opacity="0.35"/>
    <!-- Right Petal: Sensibilità -->
    <circle cx="${center + offset}" cy="400" r="${r}" fill="url(#petal-grad-2)" stroke="#D82572" stroke-width="1.2" stroke-opacity="0.35"/>
    <!-- Bottom Petal: Termoregolazione -->
    <circle cx="400" cy="${center + offset}" r="${r}" fill="url(#petal-grad-3)" stroke="#D82572" stroke-width="1.2" stroke-opacity="0.35"/>
    <!-- Left Petal: Metabolismo -->
    <circle cx="${center - offset}" cy="400" r="${r}" fill="url(#petal-grad-4)" stroke="#D82572" stroke-width="1.2" stroke-opacity="0.35"/>
  </g>

  <!-- Typography with Emil Kowalski Micro-spacing -->
  <!-- Top: Protezione -->
  <text x="400" y="275" font-family="'Inter', sans-serif" font-size="21" font-weight="600" fill="#1F1D1E" text-anchor="middle" letter-spacing="-0.02em">Protezione</text>
  <text x="400" y="297" font-family="'Inter', sans-serif" font-size="12" font-weight="400" fill="#665F63" text-anchor="middle">barriera biologica</text>

  <!-- Right: Sensibilità -->
  <text x="515" y="398" font-family="'Inter', sans-serif" font-size="21" font-weight="600" fill="#1F1D1E" text-anchor="middle" letter-spacing="-0.02em">Sensibilità</text>
  <text x="515" y="420" font-family="'Inter', sans-serif" font-size="12" font-weight="400" fill="#665F63" text-anchor="middle">recettori tattili</text>

  <!-- Bottom: Termoregolazione -->
  <text x="400" y="525" font-family="'Inter', sans-serif" font-size="21" font-weight="600" fill="#1F1D1E" text-anchor="middle" letter-spacing="-0.02em">Termoregolazione</text>
  <text x="400" y="547" font-family="'Inter', sans-serif" font-size="12" font-weight="400" fill="#665F63" text-anchor="middle">omeostasi termica</text>

  <!-- Left: Metabolismo -->
  <text x="285" y="398" font-family="'Inter', sans-serif" font-size="21" font-weight="600" fill="#1F1D1E" text-anchor="middle" letter-spacing="-0.02em">Metabolismo</text>
  <text x="285" y="420" font-family="'Inter', sans-serif" font-size="12" font-weight="400" fill="#665F63" text-anchor="middle">sintesi vit. D</text>

  <!-- Subtle Center Core Glow -->
  <circle cx="400" cy="400" r="45" fill="#D82572" fill-opacity="0.12" stroke="#D82572" stroke-width="0.8" stroke-dasharray="3 3"/>
  <circle cx="400" cy="400" r="4" fill="#D82572"/>
</svg>
`;

  fs.writeFileSync(path.join(pubImg, 'vector_venn_functions.svg'), svg.trim());
  console.log('✓ Generated vector_venn_functions.svg');
}

// ==========================================
// 2. SLIDE 06: 4 HISTOLOGICAL CELL MICROGRAPHS
// ==========================================
function generateCellSVG(name, type) {
  const size = 300;
  let content = '';

  if (type === 'keratinocyte') {
    // Cobblestone stratified cells with nuclei & keratin tonofilaments
    content = `
      <!-- Background stained stroma -->
      <circle cx="150" cy="150" r="145" fill="#FCE4EC"/>
      <!-- Intercellular mosaic -->
      <g stroke="#D82572" stroke-width="1.2" stroke-opacity="0.5" fill="#F8BBD0" fill-opacity="0.7">
        <polygon points="110,60 160,50 190,80 170,120 120,110"/>
        <polygon points="60,90 110,60 120,110 80,140 40,120"/>
        <polygon points="160,50 210,60 240,100 190,120 190,80"/>
        <polygon points="120,110 170,120 160,170 110,160 80,140"/>
        <polygon points="170,120 220,130 210,180 160,170"/>
        <polygon points="70,160 110,160 120,210 70,220 50,180"/>
        <polygon points="110,160 160,170 170,220 120,230 120,210"/>
        <polygon points="160,170 210,180 220,230 170,230"/>
        <polygon points="120,230 170,230 160,270 110,260"/>
      </g>
      <!-- Nuclei -->
      <g fill="#880E4F">
        <circle cx="150" cy="85" r="9"/>
        <circle cx="85" cy="105" r="8"/>
        <circle cx="205" cy="90" r="8"/>
        <circle cx="135" cy="140" r="10"/>
        <circle cx="190" cy="150" r="9"/>
        <circle cx="85" cy="190" r="8"/>
        <circle cx="140" cy="195" r="9"/>
        <circle cx="190" cy="205" r="8"/>
        <circle cx="140" cy="250" r="7"/>
      </g>
    `;
  } else if (type === 'melanocyte') {
    // Star-like dendritic cell branching out to transfer melanin granules
    content = `
      <circle cx="150" cy="150" r="145" fill="#FDF2F5"/>
      <!-- Surrounding tissue dots -->
      <g fill="#F48FB1" fill-opacity="0.3">
        <circle cx="60" cy="70" r="22"/>
        <circle cx="230" cy="60" r="25"/>
        <circle cx="60" cy="230" r="24"/>
        <circle cx="235" cy="220" r="26"/>
      </g>
      <!-- Dendritic arms -->
      <g stroke="#C2185B" stroke-width="6" stroke-linecap="round" fill="none">
        <path d="M 150 150 Q 110 100 65 80"/>
        <path d="M 150 150 Q 140 80 135 45"/>
        <path d="M 150 150 Q 190 90 235 70"/>
        <path d="M 150 150 Q 210 140 260 145"/>
        <path d="M 150 150 Q 200 200 230 240"/>
        <path d="M 150 150 Q 140 220 130 260"/>
        <path d="M 150 150 Q 90 190 60 220"/>
        <path d="M 150 150 Q 80 140 40 135"/>
      </g>
      <!-- Main cell body -->
      <ellipse cx="150" cy="150" rx="36" ry="32" fill="#AD1457"/>
      <!-- Nucleus -->
      <ellipse cx="148" cy="148" rx="16" ry="14" fill="#4A148C"/>
      <!-- Melanin granules (small dark pigment dots) -->
      <g fill="#3E2723">
        <circle cx="70" cy="82" r="3"/><circle cx="60" cy="80" r="2.5"/><circle cx="80" cy="90" r="2"/>
        <circle cx="134" cy="48" r="3"/><circle cx="136" cy="40" r="2.5"/>
        <circle cx="232" cy="72" r="3"/><circle cx="240" cy="68" r="2"/>
        <circle cx="258" cy="146" r="3"/><circle cx="265" cy="144" r="2.5"/>
        <circle cx="228" cy="238" r="3"/><circle cx="235" cy="245" r="2"/>
      </g>
    `;
  } else if (type === 'fibroblast') {
    // Spindle-shaped elongated cell with collagen fibrils mesh
    content = `
      <circle cx="150" cy="150" r="145" fill="#FCE4EC"/>
      <!-- Collagen and elastin fibrillar network -->
      <g stroke="#F06292" stroke-width="1.5" stroke-linecap="round" stroke-opacity="0.6">
        <path d="M 20 80 Q 90 110 160 70 T 280 60" fill="none"/>
        <path d="M 10 130 Q 80 150 150 120 T 290 140" fill="none"/>
        <path d="M 20 180 Q 100 160 170 190 T 280 170" fill="none"/>
        <path d="M 30 230 Q 110 210 180 240 T 270 220" fill="none"/>
        <path d="M 50 40 Q 120 70 200 40 T 260 80" fill="none"/>
        <path d="M 40 260 Q 130 240 200 270 T 270 260" fill="none"/>
      </g>
      <!-- Elongated Spindle Fibroblast Body -->
      <path d="M 40 150 C 90 115 210 115 260 150 C 210 185 90 185 40 150 Z" fill="#C2185B"/>
      <!-- Oval Nucleus -->
      <ellipse cx="150" cy="150" rx="34" ry="16" fill="#4A148C"/>
      <!-- Nucleolus -->
      <circle cx="145" cy="150" r="5" fill="#E1BEE7"/>
    `;
  } else if (type === 'langerhans') {
    // Dendritic immune surveillance cell (macrophage-like with Birbeck granules)
    content = `
      <circle cx="150" cy="150" r="145" fill="#FFF0F5"/>
      <!-- Surrounding epidermal cells -->
      <g stroke="#F8BBD0" stroke-width="1" fill="#FCE4EC" fill-opacity="0.4">
        <circle cx="65" cy="65" r="30"/>
        <circle cx="235" cy="65" r="30"/>
        <circle cx="65" cy="235" r="30"/>
        <circle cx="235" cy="235" r="30"/>
      </g>
      <!-- Stellate Immune Dendrites -->
      <g stroke="#E91E63" stroke-width="5" stroke-linecap="round" fill="none">
        <path d="M 150 150 L 100 80 L 80 50"/>
        <path d="M 100 80 L 60 85"/>
        <path d="M 150 150 L 150 70 L 140 40"/>
        <path d="M 150 150 L 195 85 L 225 55"/>
        <path d="M 195 85 L 235 95"/>
        <path d="M 150 150 L 220 150 L 260 145"/>
        <path d="M 150 150 L 205 210 L 235 245"/>
        <path d="M 150 150 L 150 225 L 160 260"/>
        <path d="M 150 150 L 95 210 L 65 240"/>
        <path d="M 150 150 L 80 155 L 45 160"/>
      </g>
      <!-- Central immune cell soma -->
      <circle cx="150" cy="150" r="34" fill="#D81B60"/>
      <!-- Lobulated Nucleus -->
      <ellipse cx="146" cy="147" rx="16" ry="18" fill="#311B92"/>
      <ellipse cx="158" cy="152" rx="12" ry="14" fill="#311B92"/>
    `;
  }

  const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cell-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#D82572" flood-opacity="0.15"/>
    </filter>
  </defs>
  <g filter="url(#cell-shadow)">
    ${content}
    <!-- Outer glassmorphic ring -->
    <circle cx="150" cy="150" r="145" stroke="#D82572" stroke-width="2.5" stroke-opacity="0.4" fill="none"/>
  </g>
</svg>
`;

  fs.writeFileSync(path.join(pubImg, name), svg.trim());
  console.log(`✓ Generated ${name}`);
}

generateVennSVG();
generateCellSVG('cell_keratinocyte.svg', 'keratinocyte');
generateCellSVG('cell_melanocyte.svg', 'melanocyte');
generateCellSVG('cell_fibroblast.svg', 'fibroblast');
generateCellSVG('cell_langerhans.svg', 'langerhans');
console.log('All vector SVG biological diagrams created successfully!');

