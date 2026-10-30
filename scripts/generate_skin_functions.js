// scripts/generate_skin_functions.js
// Generates the 4-petal overlapping translucent pink diagram from Slide 8 of reference
const sharp = require('sharp');
const path = require('path');

async function generateFunctionsDiagram() {
  const size = 600;
  const cx = 300;
  const cy = 300;
  const r = 120;
  const dist = 75;

  const svg = `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    <!-- 4 Overlapping Petals -->
    <!-- Top: Protezione -->
    <circle cx="${cx}" cy="${cy - dist}" r="${r}" fill="#F8DFE8" fill-opacity="0.75" stroke="#EAD7DF" stroke-width="1.5"/>
    
    <!-- Right: Sensibilità -->
    <circle cx="${cx + dist}" cy="${cy}" r="${r}" fill="#F8DFE8" fill-opacity="0.75" stroke="#EAD7DF" stroke-width="1.5"/>

    <!-- Bottom: Metabolismo -->
    <circle cx="${cx}" cy="${cy + dist}" r="${r}" fill="#F8DFE8" fill-opacity="0.75" stroke="#EAD7DF" stroke-width="1.5"/>

    <!-- Left: Termoregolazione -->
    <circle cx="${cx - dist}" cy="${cy}" r="${r}" fill="#F8DFE8" fill-opacity="0.75" stroke="#EAD7DF" stroke-width="1.5"/>

    <!-- Center core intersection -->
    <circle cx="${cx}" cy="${cy}" r="45" fill="#D82572" fill-opacity="0.15"/>

    <!-- Labels -->
    <text x="${cx}" y="${cy - dist - 25}" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#D82572">Protezione</text>
    <text x="${cx + dist + 25}" y="${cy + 5}" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#D82572">Sensibilità</text>
    <text x="${cx}" y="${cy + dist + 40}" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#D82572">Metabolismo</text>
    <text x="${cx - dist - 25}" y="${cy + 5}" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#D82572">Termoregolazione</text>
  </svg>
  `;

  await sharp(Buffer.from(svg)).png().toFile('assets/img/diagram_skin_functions.png');
  console.log('Generated assets/img/diagram_skin_functions.png');
}

generateFunctionsDiagram().catch(console.error);

