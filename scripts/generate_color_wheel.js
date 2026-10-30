// scripts/generate_color_wheel.js
// Generates scientific luxury editorial colorimetry diagrams for Modulo 1
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateColorWheel() {
  const size = 600;
  // 12-hue color wheel with luxury editorial styling (Itten wheel calibrated for PMU)
  const hues = [
    { name: 'Giallo', angle: 0, color: '#FBC02D', type: 'Primario' },
    { name: 'Giallo-Arancio', angle: 30, color: '#FFA000', type: 'Terziario' },
    { name: 'Arancio', angle: 60, color: '#F57C00', type: 'Secondario' },
    { name: 'Rosso-Arancio', angle: 90, color: '#E64A19', type: 'Terziario' },
    { name: 'Rosso', angle: 120, color: '#D32F2F', type: 'Primario' },
    { name: 'Rosso-Viola', angle: 150, color: '#C2185B', type: 'Terziario' },
    { name: 'Viola', angle: 180, color: '#7B1FA2', type: 'Secondario' },
    { name: 'Blu-Viola', angle: 210, color: '#512DA8', type: 'Terziario' },
    { name: 'Blu', angle: 240, color: '#1976D2', type: 'Primario' },
    { name: 'Blu-Verde', angle: 270, color: '#00796B', type: 'Terziario' },
    { name: 'Verde', angle: 300, color: '#388E3C', type: 'Secondario' },
    { name: 'Giallo-Verde', angle: 330, color: '#689F38', type: 'Terziario' }
  ];

  let wedges = '';
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = 260;
  const rInner = 140;

  hues.forEach((h, i) => {
    const aStart = (h.angle - 15) * Math.PI / 180;
    const aEnd = (h.angle + 15) * Math.PI / 180;

    const x1 = cx + rOuter * Math.cos(aStart);
    const y1 = cy + rOuter * Math.sin(aStart);
    const x2 = cx + rOuter * Math.cos(aEnd);
    const y2 = cy + rOuter * Math.sin(aEnd);
    const x3 = cx + rInner * Math.cos(aEnd);
    const y3 = cy + rInner * Math.sin(aEnd);
    const x4 = cx + rInner * Math.cos(aStart);
    const y4 = cy + rInner * Math.sin(aStart);

    wedges += `
      <path d="M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z"
            fill="${h.color}" stroke="#FFFFFF" stroke-width="2"/>
    `;
  });

  const svg = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.08"/>
      </filter>
    </defs>
    <!-- Background Circle -->
    <circle cx="${cx}" cy="${cy}" r="275" fill="#FCFAF8" stroke="#EAD7DF" stroke-width="1.5" filter="url(#shadow)"/>
    
    <!-- Color Wedges -->
    <g transform="rotate(-90 ${cx} ${cy})">
      ${wedges}
    </g>

    <!-- Center Hub -->
    <circle cx="${cx}" cy="${cy}" r="${rInner - 5}" fill="#FFFFFF" stroke="#EAD7DF" stroke-width="1"/>
    
    <!-- Editorial Center Typography -->
    <text x="${cx}" y="${cy - 20}" text-anchor="middle" font-family="Georgia, serif" font-size="22" font-style="italic" fill="#D82572">Ruota dei Colori</text>
    <text x="${cx}" y="${cy + 6}" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" letter-spacing="2" fill="#1F1D1E">PIGMENTOLOGIA PMU</text>
    <line x1="${cx - 40}" y1="${cy + 18}" x2="${cx + 40}" y2="${cy + 18}" stroke="#D82572" stroke-width="1.5"/>
    <text x="${cx}" y="${cy + 34}" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" letter-spacing="1" fill="#665F63">NEUTRALIZZAZIONE</text>
  </svg>
  `;

  const outPath = path.join(__dirname, '..', 'assets', 'img', 'diagram_color_wheel.png');
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`Generated: ${outPath}`);
}

generateColorWheel().catch(console.error);

