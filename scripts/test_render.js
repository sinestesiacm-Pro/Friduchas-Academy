// scripts/test_render.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function test() {
  const fontRegular = fs.readFileSync('assets/fonts/CormorantGaramond-Regular.ttf').toString('base64');
  const fontItalic = fs.readFileSync('assets/fonts/CormorantGaramond-Italic.ttf').toString('base64');
  const fontInter = fs.readFileSync('assets/fonts/Inter-Variable.ttf').toString('base64');
  const coverImg = fs.readFileSync('assets/img/sample_cover.jpg').toString('base64');

  const svg = `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
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
      </style>
    </defs>

    <rect width="1920" height="1080" fill="#FCFAF8"/>

    <!-- Image on right -->
    <image href="data:image/jpeg;base64,${coverImg}" x="980" y="0" width="940" height="1080" preserveAspectRatio="xMidYMid slice"/>

    <!-- Left Content -->
    <text x="120" y="240" font-family="Inter" font-size="14" letter-spacing="4" fill="#9C9498">FRIDUCHAS ACADEMY • CORSO BASE IN PRESENZA</text>
    
    <text x="120" y="380" font-family="Cormorant" font-size="74" fill="#1F1D1E">Master PMU</text>
    <text x="120" y="465" font-family="Cormorant" font-size="74" font-style="italic" fill="#D82572">Dermopigmentazione</text>
    <text x="120" y="550" font-family="Cormorant" font-size="74" fill="#1F1D1E">Professionale</text>

    <line x1="120" y1="620" x2="320" y2="620" stroke="#D82572" stroke-width="2"/>

    <text x="120" y="690" font-family="Inter" font-size="20" fill="#665F63">Manuale didattico completo per la formazione estetica avanzata.</text>
    
    <text x="120" y="960" font-family="Inter" font-size="13" letter-spacing="3" fill="#9C9498">EDIZIONE 2026 — DOCENTE: GIULIA</text>
  </svg>
  `;

  await sharp(Buffer.from(svg)).png().toFile('dist/test_slide1.png');
  console.log('Generated dist/test_slide1.png');
}

test().catch(console.error);

