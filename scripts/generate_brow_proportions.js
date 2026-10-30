// scripts/generate_brow_proportions.js
// Generates Golden Ratio brow geometry diagram for Modulo 2 (Brows)
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateBrowDiagram() {
  const w = 900;
  const h = 500;

  const svg = `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="browFill" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C2185B" stop-opacity="0.15"/>
        <stop offset="60%" stop-color="#D82572" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#880E4F" stop-opacity="0.2"/>
      </linearGradient>
    </defs>

    <rect width="${w}" height="${h}" fill="#FCFAF8" rx="8"/>

    <!-- Header -->
    <text x="50" y="55" font-family="Georgia, serif" font-size="24" fill="#1F1D1E">Geometria e Proporzioni <tspan fill="#D82572" font-style="italic">delle Sopracciglia</tspan></text>
    <text x="50" y="80" font-family="Arial, sans-serif" font-size="11" letter-spacing="1.5" fill="#665F63">CANONI AUREI DI VISAGISMO • PUNTI GUIDA A — B — C</text>
    <line x1="50" y1="95" x2="850" y2="95" stroke="#EAD7DF" stroke-width="1"/>

    <!-- Brow Curve Drawing -->
    <g transform="translate(150, 160)">
      <!-- Eyebrow Shape Area -->
      <path d="M 0,110 C 150,85 320,30 380,25 C 440,20 480,45 560,135 C 490,95 440,80 370,85 C 290,92 120,135 0,140 Z"
            fill="url(#browFill)" stroke="#D82572" stroke-width="2"/>

      <!-- Baseline and Grid -->
      <line x1="-30" y1="140" x2="600" y2="140" stroke="#EAD7DF" stroke-width="1" stroke-dasharray="4,4"/>
      <line x1="-30" y1="25" x2="600" y2="25" stroke="#EAD7DF" stroke-width="1" stroke-dasharray="4,4"/>

      <!-- Vertical Guideline A: Head / Testa -->
      <line x1="0" y1="-20" x2="0" y2="180" stroke="#D82572" stroke-width="1.5" stroke-dasharray="5,3"/>
      <circle cx="0" cy="125" r="5" fill="#D82572"/>
      <rect x="-40" y="-35" width="80" height="26" rx="13" fill="#D82572"/>
      <text x="0" y="-18" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">PUNTO A</text>
      <text x="0" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#1F1D1E">Testa (Head)</text>
      <text x="0" y="215" text-anchor="middle" font-family="Arial, sans-serif" font-size="8.5" fill="#665F63">Asse pinna nasale</text>

      <!-- Vertical Guideline B: Apex / Arco -->
      <line x1="380" y1="-20" x2="380" y2="180" stroke="#D82572" stroke-width="1.5" stroke-dasharray="5,3"/>
      <circle cx="380" cy="25" r="5" fill="#D82572"/>
      <rect x="340" y="-35" width="80" height="26" rx="13" fill="#D82572"/>
      <text x="380" y="-18" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">PUNTO B</text>
      <text x="380" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#1F1D1E">Arco (Arch / Apex)</text>
      <text x="380" y="215" text-anchor="middle" font-family="Arial, sans-serif" font-size="8.5" fill="#665F63">Canto esterno iride</text>

      <!-- Vertical Guideline C: Tail / Coda -->
      <line x1="560" y1="-20" x2="560" y2="180" stroke="#D82572" stroke-width="1.5" stroke-dasharray="5,3"/>
      <circle cx="560" cy="135" r="5" fill="#D82572"/>
      <rect x="520" y="-35" width="80" height="26" rx="13" fill="#D82572"/>
      <text x="560" y="-18" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">PUNTO C</text>
      <text x="560" y="200" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#1F1D1E">Coda (Tail)</text>
      <text x="560" y="215" text-anchor="middle" font-family="Arial, sans-serif" font-size="8.5" fill="#665F63">Asse naso - canto occhio</text>

      <!-- Ratio Bracket: 2/3 Corpo vs 1/3 Coda -->
      <line x1="0" y1="160" x2="380" y2="160" stroke="#1F1D1E" stroke-width="1"/>
      <text x="190" y="175" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-style="italic" fill="#1F1D1E">Corpo (2/3 della lunghezza totale)</text>

      <line x1="380" y1="160" x2="560" y2="160" stroke="#1F1D1E" stroke-width="1"/>
      <text x="470" y="175" text-anchor="middle" font-family="Georgia, serif" font-size="11" font-style="italic" fill="#1F1D1E">Coda (1/3)</text>
    </g>
  </svg>
  `;

  const outPath = path.join(__dirname, '..', 'assets', 'img', 'diagram_brow_golden_ratio.png');
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`Generated: ${outPath}`);
}

generateBrowDiagram().catch(console.error);

