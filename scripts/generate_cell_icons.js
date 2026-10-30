// scripts/generate_cell_icons.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function renderCell(name, svgInner) {
  const size = 500;
  const svg = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#FFF5F8"/>
        <stop offset="70%" stop-color="#FCE4EC"/>
        <stop offset="100%" stop-color="#F8BBD0"/>
      </radialGradient>
      <radialGradient id="nucGrad" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#E91E63"/>
        <stop offset="100%" stop-color="#880E4F"/>
      </radialGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    <!-- Circular microscope vignette -->
    <circle cx="250" cy="250" r="235" fill="url(#bgGrad)" stroke="#EAD7DF" stroke-width="3"/>
    <circle cx="250" cy="250" r="225" fill="none" stroke="#D82572" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
    ${svgInner}
  </svg>
  `;

  const outPath = path.join(__dirname, '..', 'assets', 'img', `${name}.png`);
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`Generated: ${outPath}`);
}

async function run() {
  // 1. Cheratinociti (polygonal stratified cell structure)
  await renderCell('cell_keratinocyte', `
    <g transform="translate(250,250)">
      <polygon points="0,-130 110,-60 110,60 0,130 -110,60 -110,-60" fill="#F48FB1" opacity="0.6" stroke="#D82572" stroke-width="2"/>
      <polygon points="10,-90 80,-40 80,40 10,90 -70,50 -70,-30" fill="#F06292" opacity="0.7"/>
      <circle cx="5" cy="5" r="45" fill="url(#nucGrad)" filter="url(#softGlow)"/>
      <circle cx="-10" cy="-10" r="15" fill="#FFFFFF" opacity="0.4"/>
      <!-- Keratin filament streaks -->
      <line x1="-80" y1="-40" x2="-20" y2="-10" stroke="#AD1457" stroke-width="2" stroke-dasharray="3,3" opacity="0.7"/>
      <line x1="80" y1="40" x2="20" y2="10" stroke="#AD1457" stroke-width="2" stroke-dasharray="3,3" opacity="0.7"/>
      <line x1="-40" y1="80" x2="-10" y2="20" stroke="#AD1457" stroke-width="2" stroke-dasharray="3,3" opacity="0.7"/>
    </g>
  `);

  // 2. Melanociti (dendritic star-like branch arms releasing melanin granules)
  await renderCell('cell_melanocyte', `
    <g transform="translate(250,250)">
      <!-- Dendritic arms -->
      <path d="M 0,0 Q 40,-80 80,-140 Q 60,-90 10,-20 Q 90,-40 150,-30 Q 80,0 20,20 Q 80,80 120,130 Q 60,80 0,30 Q -60,90 -130,120 Q -70,60 -20,10 Q -90,-20 -150,-60 Q -70,-40 -10,-10 Z" fill="#E91E63" opacity="0.5"/>
      <circle cx="0" cy="0" r="55" fill="url(#nucGrad)" filter="url(#softGlow)"/>
      <circle cx="-12" cy="-12" r="16" fill="#FFFFFF" opacity="0.4"/>
      <!-- Melanosome granules -->
      <circle cx="85" cy="-120" r="7" fill="#4A154B"/>
      <circle cx="130" cy="-25" r="6" fill="#4A154B"/>
      <circle cx="105" cy="110" r="7" fill="#4A154B"/>
      <circle cx="-110" cy="100" r="6.5" fill="#4A154B"/>
      <circle cx="-130" cy="-50" r="7.5" fill="#4A154B"/>
      <circle cx="50" cy="-50" r="5" fill="#6A1B9A"/>
      <circle cx="-40" cy="40" r="5" fill="#6A1B9A"/>
    </g>
  `);

  // 3. Fibroblasti (spindle shaped with collagen fibril waves)
  await renderCell('cell_fibroblast', `
    <g transform="translate(250,250)">
      <!-- Collagen ECM wavy lines in background -->
      <path d="M -160,-100 Q -80,-60 0,-100 T 160,-100" fill="none" stroke="#F48FB1" stroke-width="4" opacity="0.6"/>
      <path d="M -160,100 Q -80,140 0,100 T 160,100" fill="none" stroke="#F48FB1" stroke-width="4" opacity="0.6"/>
      <!-- Spindle shaped cell body -->
      <path d="M -150,-10 C -80,-70 80,-70 150,-10 C 80,70 -80,70 -150,-10 Z" fill="#F06292" opacity="0.75" stroke="#C2185B" stroke-width="2"/>
      <ellipse cx="0" cy="0" rx="60" ry="32" fill="url(#nucGrad)" filter="url(#softGlow)"/>
      <ellipse cx="-15" cy="-8" rx="18" ry="10" fill="#FFFFFF" opacity="0.4"/>
    </g>
  `);

  // 4. Langerhans (dendritic immune sentinel cell)
  await renderCell('cell_langerhans', `
    <g transform="translate(250,250)">
      <!-- Immune dendritic branches -->
      <path d="M 0,0 L 0,-140 M 0,0 L 120,-80 M 0,0 L 130,50 M 0,0 L 60,130 M 0,0 L -70,130 M 0,0 L -130,40 M 0,0 L -110,-90" stroke="#D82572" stroke-width="8" stroke-linecap="round" opacity="0.7"/>
      <!-- Birbeck granules / branch nodes -->
      <circle cx="0" cy="-140" r="12" fill="#AD1457"/>
      <circle cx="120" cy="-80" r="12" fill="#AD1457"/>
      <circle cx="130" cy="50" r="12" fill="#AD1457"/>
      <circle cx="60" cy="130" r="12" fill="#AD1457"/>
      <circle cx="-70" cy="130" r="12" fill="#AD1457"/>
      <circle cx="-130" cy="40" r="12" fill="#AD1457"/>
      <circle cx="-110" cy="-90" r="12" fill="#AD1457"/>
      <!-- Central lobed nucleus -->
      <circle cx="0" cy="0" r="48" fill="url(#nucGrad)" filter="url(#softGlow)"/>
      <circle cx="-10" cy="-10" r="14" fill="#FFFFFF" opacity="0.45"/>
    </g>
  `);
}

run().catch(console.error);

