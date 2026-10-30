// scripts/generate_healing_cycle.js
// Generates clinical healing timeline diagram for PMU
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateHealingDiagram() {
  const w = 900;
  const h = 500;

  const svg = `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
        <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.06"/>
      </filter>
    </defs>

    <rect width="${w}" height="${h}" fill="#FCFAF8" rx="8"/>

    <!-- Header -->
    <text x="50" y="55" font-family="Georgia, serif" font-size="24" fill="#1F1D1E">Il Ciclo di Guarigione <tspan fill="#D82572" font-style="italic">e Stabilizzazione</tspan></text>
    <text x="50" y="80" font-family="Arial, sans-serif" font-size="11" letter-spacing="1.5" fill="#665F63">CRONOBIOLOGIA DEL TESSUTO CUTANEO • LE 4 FASI CLINICHE</text>
    <line x1="50" y1="95" x2="850" y2="95" stroke="#EAD7DF" stroke-width="1"/>

    <!-- 4 Phases -->
    <!-- Phase 1 -->
    <g transform="translate(50, 140)">
      <rect width="180" height="280" rx="4" fill="#FFFFFF" stroke="#EAD7DF" stroke-width="1" filter="url(#cardShadow)"/>
      <rect width="180" height="4" fill="#D82572"/>
      <rect x="20" y="25" width="55" height="22" rx="11" fill="#D82572"/>
      <text x="47" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">FASE 1</text>
      <text x="20" y="75" font-family="Georgia, serif" font-size="16" fill="#1F1D1E">Giorno 1 — 3</text>
      <text x="20" y="95" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#D82572" letter-spacing="1">IPER-PIGMENTAZIONE</text>
      <line x1="20" y1="110" x2="160" y2="110" stroke="#EAD7DF" stroke-width="0.8"/>
      <text x="20" y="135" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">Ossidazione del pigmento</text>
      <text x="20" y="155" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">e formazione del film</text>
      <text x="20" y="175" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">protettivo sieroso.</text>
      <text x="20" y="205" font-family="Georgia, serif" font-size="11" font-style="italic" fill="#1F1D1E">«Il colore appare più scuro del 30-40%»</text>
    </g>

    <!-- Phase 2 -->
    <g transform="translate(250, 140)">
      <rect width="180" height="280" rx="4" fill="#FFFFFF" stroke="#EAD7DF" stroke-width="1" filter="url(#cardShadow)"/>
      <rect width="180" height="4" fill="#D82572"/>
      <rect x="20" y="25" width="55" height="22" rx="11" fill="#D82572"/>
      <text x="47" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">FASE 2</text>
      <text x="20" y="75" font-family="Georgia, serif" font-size="16" fill="#1F1D1E">Giorno 4 — 7</text>
      <text x="20" y="95" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#D82572" letter-spacing="1">DESQUAMAZIONE</text>
      <line x1="20" y1="110" x2="160" y2="110" stroke="#EAD7DF" stroke-width="0.8"/>
      <text x="20" y="135" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">Esfoliazione naturale</text>
      <text x="20" y="155" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">dello strato corneo.</text>
      <text x="20" y="175" font-family="Arial, sans-serif" font-size="9.5" fill="#D82572" font-weight="bold">VIETATO STACCARE!</text>
      <text x="20" y="205" font-family="Georgia, serif" font-size="11" font-style="italic" fill="#1F1D1E">«La cliente avverte prurito e leggere pellicine»</text>
    </g>

    <!-- Phase 3 -->
    <g transform="translate(450, 140)">
      <rect width="180" height="280" rx="4" fill="#FFFFFF" stroke="#EAD7DF" stroke-width="1" filter="url(#cardShadow)"/>
      <rect width="180" height="4" fill="#D82572"/>
      <rect x="20" y="25" width="55" height="22" rx="11" fill="#D82572"/>
      <text x="47" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">FASE 3</text>
      <text x="20" y="75" font-family="Georgia, serif" font-size="16" fill="#1F1D1E">Giorno 8 — 14</text>
      <text x="20" y="95" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#D82572" letter-spacing="1">GHOST PHASE</text>
      <line x1="20" y1="110" x2="160" y2="110" stroke="#EAD7DF" stroke-width="0.8"/>
      <text x="20" y="135" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">Nuovo epitelio opaco</text>
      <text x="20" y="155" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">che scherma la luce.</text>
      <text x="20" y="175" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">Il colore sbiadisce.</text>
      <text x="20" y="205" font-family="Georgia, serif" font-size="11" font-style="italic" fill="#1F1D1E">«Sembra scomparso: niente panico, è normale!»</text>
    </g>

    <!-- Phase 4 -->
    <g transform="translate(650, 140)">
      <rect width="180" height="280" rx="4" fill="#FFFFFF" stroke="#EAD7DF" stroke-width="1" filter="url(#cardShadow)"/>
      <rect width="180" height="4" fill="#D82572"/>
      <rect x="20" y="25" width="55" height="22" rx="11" fill="#D82572"/>
      <text x="47" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#FFFFFF">FASE 4</text>
      <text x="20" y="75" font-family="Georgia, serif" font-size="16" fill="#1F1D1E">Giorno 28 — 35</text>
      <text x="20" y="95" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#D82572" letter-spacing="1">STABILIZZAZIONE</text>
      <line x1="20" y1="110" x2="160" y2="110" stroke="#EAD7DF" stroke-width="0.8"/>
      <text x="20" y="135" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">Cheratinizzazione</text>
      <text x="20" y="155" font-family="Arial, sans-serif" font-size="9.5" fill="#665F63">completa e trasparente.</text>
      <text x="20" y="175" font-family="Arial, sans-serif" font-size="9.5" fill="#D82572" font-weight="bold">MOMENTO DEL RITOCCO</text>
      <text x="20" y="205" font-family="Georgia, serif" font-size="11" font-style="italic" fill="#1F1D1E">«Il colore riemerge puro e consolidato nel derma»</text>
    </g>
  </svg>
  `;

  const outPath = path.join(__dirname, '..', 'assets', 'img', 'diagram_healing_cycle.png');
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`Generated: ${outPath}`);
}

generateHealingDiagram().catch(console.error);

