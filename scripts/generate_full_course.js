// scripts/generate_full_course.js
// Compiles the entire Friduchas Academy Master PMU Presentation into a single native PPTX

const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const { buildIntroSlides } = require('../src/slides/intro');
const { buildMod01Slides } = require('../src/slides/mod01_foundation');
const { buildMod02Slides } = require('../src/slides/mod02_brows');
const { buildMod03Slides } = require('../src/slides/mod03_lips');
const { buildMod04Slides } = require('../src/slides/mod04_eyes');
const { buildMod05Slides } = require('../src/slides/mod05_business');

async function compileFullCourse() {
  console.log('=== Friduchas Academy: Compiling Master PMU Presentation ===\n');

  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE'; // 16:9 widescreen 13.333 x 7.5 in
  pres.title = 'Friduchas Academy — Master PMU Professional';
  pres.subject = 'Corso Base Professionale di Dermopigmentazione';
  pres.author = 'Giulia — Friduchas Academy';
  pres.company = 'Studio Friduchas';

  // Ensure dist directory exists
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 1. Introductory Section
  console.log('-> Compiling Introductory Section (Welcome, Ethics, General Index)...');
  buildIntroSlides(pres);

  // 2. Modulo 1: Foundation
  console.log('-> Compiling Modulo 1: Foundation (Anatomia, Colorimetria, Sicurezza, Strumentazione)...');
  buildMod01Slides(pres);

  // 3. Modulo 2: Brows Specialist
  console.log('-> Compiling Modulo 2: Brows Specialist (Visagismo, Spine, Pelo a Pelo, Powder, Combo)...');
  buildMod02Slides(pres);

  // 4. Modulo 3: Lips Specialist
  console.log('-> Compiling Modulo 3: Lips Specialist (Mucosa, Dark Lips, Lip Blush, Velvet Lips)...');
  buildMod03Slides(pres);

  // 5. Modulo 4: Eyes Specialist
  console.log('-> Compiling Modulo 4: Eyes Specialist (Sicurezza perioculare, Infracigliare, Shaded Eyeliner)...');
  buildMod04Slides(pres);

  // 6. Modulo 5: Business & Carriera
  console.log('-> Compiling Modulo 5: Business, Fotografia, Social, Giuramento e Conclusione...');
  buildMod05Slides(pres);

  const outputPath = path.join(distDir, 'Friduchas_Master_PMU.pptx');
  console.log(`\nWriting presentation file to ${outputPath}...`);
  await pres.writeFile({ fileName: outputPath });

  const stats = fs.statSync(outputPath);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`\n✓ SUCCESS: Generated complete course presentation!`);
  console.log(`  File: ${outputPath}`);
  console.log(`  Size: ${sizeMb} MB`);
}

compileFullCourse().catch(err => {
  console.error('\n✗ Error during compilation:', err);
  process.exit(1);
});

