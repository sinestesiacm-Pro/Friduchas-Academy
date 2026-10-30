// scripts/generate_needle_diagram.js
// Generates scientific needle configuration and taper diagrams
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateNeedleDiagram() {
  const w = 900;
  const h = 500;

  const svg = `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#78909C"/>
        <stop offset="35%" stop-color="#ECEFF1"/>
        <stop offset="65%" stop-color="#CFD8DC"/>
        <stop offset="100%" stop-color="#546E7A"/>
      </linearGradient>
      <filter id="soft" x="-5%" y="-5%" width="110%" height="110%">
        <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.08"/>
      </filter>
    </defs>

    <rect width="${w}" height="${h}" fill="#FCFAF8" rx="8"/>

    <!-- Title Header -->
    <text x="50" y="55" font-family="Georgia, serif" font-size="24" fill="#1F1D1E">Configurazioni <tspan fill="#D82572" font-style="italic">degli Aghi PMU</tspan></text>
    <text x="50" y="80" font-family="Arial, sans-serif" font-size="11" letter-spacing="1.5" fill="#665F63">GEOMETRIA DELLE PUNTE E PATTERN DI DEPOSITO</text>
    <line x1="50" y1="95" x2="850" y2="95" stroke="#EAD7DF" stroke-width="1"/>

    <!-- 1. Round Liner (1RL & 3RL) -->
    <g transform="translate(100, 140)">
      <!-- Card background -->
      <rect width="210" height="300" rx="4" fill="#FFFFFF" stroke="#EAD7DF" stroke-width="1" filter="url(#soft)"/>
      <rect width="210" height="4" fill="#D82572"/>
      
      <text x="105" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#D82572" letter-spacing="1">ROUND LINER (RL)</text>
      <text x="105" y="55" text-anchor="middle" font-family="Georgia, serif" font-size="15" fill="#1F1D1E">1RL • Singolo Ago</text>

      <!-- Needle Drawing -->
      <!-- Shaft -->
      <rect x="95" y="80" width="20" height="80" fill="url(#metalGrad)" rx="1"/>
      <!-- Taper point -->
      <polygon points="95,160 115,160 105,210" fill="url(#metalGrad)"/>
      <circle cx="105" cy="210" r="1.5" fill="#D82572"/>

      <!-- Specs -->
      <text x="105" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#1F1D1E">Linea ultra-sottile</text>
      <text x="105" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#665F63">Pelo a pelo iperrealistico</text>
      <text x="105" y="278" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#665F63">Pixel e contorni labbra</text>
    </g>

    <!-- 2. Round Shader (3RS & 5RS) -->
    <g transform="translate(345, 140)">
      <rect width="210" height="300" rx="4" fill="#FFFFFF" stroke="#EAD7DF" stroke-width="1" filter="url(#soft)"/>
      <rect width="210" height="4" fill="#D82572"/>
      
      <text x="105" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#D82572" letter-spacing="1">ROUND SHADER (RS)</text>
      <text x="105" y="55" text-anchor="middle" font-family="Georgia, serif" font-size="15" fill="#1F1D1E">3RS / 5RS • Fascio Aperto</text>

      <!-- 3 Needle Shafts -->
      <rect x="85" y="80" width="10" height="80" fill="url(#metalGrad)"/>
      <polygon points="85,160 95,160 88,208" fill="url(#metalGrad)"/>

      <rect x="100" y="80" width="10" height="80" fill="url(#metalGrad)"/>
      <polygon points="100,160 110,160 105,212" fill="url(#metalGrad)"/>

      <rect x="115" y="80" width="10" height="80" fill="url(#metalGrad)"/>
      <polygon points="115,160 125,160 122,208" fill="url(#metalGrad)"/>

      <!-- Specs -->
      <text x="105" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#1F1D1E">Sfumatura morbida</text>
      <text x="105" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#665F63">Sopracciglia Powder / Ombré</text>
      <text x="105" y="278" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#665F63">Riempimento labbra vellutato</text>
    </g>

    <!-- 3. Magnum / Flat (M1 / Flat) -->
    <g transform="translate(590, 140)">
      <rect width="210" height="300" rx="4" fill="#FFFFFF" stroke="#EAD7DF" stroke-width="1" filter="url(#soft)"/>
      <rect width="210" height="4" fill="#D82572"/>
      
      <text x="105" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#D82572" letter-spacing="1">MAGNUM / CURVED</text>
      <text x="105" y="55" text-anchor="middle" font-family="Georgia, serif" font-size="15" fill="#1F1D1E">Curved Magnum (CM)</text>

      <!-- Multi needle row -->
      <g transform="translate(45, 80)">
        <rect x="10" y="0" width="8" height="80" fill="url(#metalGrad)"/>
        <polygon points="10,80 18,80 14,128" fill="url(#metalGrad)"/>

        <rect x="25" y="0" width="8" height="80" fill="url(#metalGrad)"/>
        <polygon points="25,80 33,80 29,132" fill="url(#metalGrad)"/>

        <rect x="40" y="0" width="8" height="80" fill="url(#metalGrad)"/>
        <polygon points="40,80 48,80 44,134" fill="url(#metalGrad)"/>

        <rect x="55" y="0" width="8" height="80" fill="url(#metalGrad)"/>
        <polygon points="55,80 63,80 59,134" fill="url(#metalGrad)"/>

        <rect x="70" y="0" width="8" height="80" fill="url(#metalGrad)"/>
        <polygon points="70,80 78,80 74,132" fill="url(#metalGrad)"/>

        <rect x="85" y="0" width="8" height="80" fill="url(#metalGrad)"/>
        <polygon points="85,80 93,80 89,128" fill="url(#metalGrad)"/>
      </g>

      <!-- Specs -->
      <text x="105" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#1F1D1E">Saturazione rapida</text>
      <text x="105" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#665F63">Grandi campiture labbra</text>
      <text x="105" y="278" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#665F63">Meno passaggi, minor trauma</text>
    </g>
  </svg>
  `;

  const outPath = path.join(__dirname, '..', 'assets', 'img', 'diagram_needles.png');
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`Generated: ${outPath}`);
}

generateNeedleDiagram().catch(console.error);

