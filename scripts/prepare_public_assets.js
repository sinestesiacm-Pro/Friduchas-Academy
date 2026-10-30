// scripts/prepare_public_assets.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const pubImg = path.join(__dirname, '..', 'public', 'img');
if (!fs.existsSync(pubImg)) {
  fs.mkdirSync(pubImg, { recursive: true });
}

async function prepare() {
  console.log('Preparing high-resolution magazine assets for public/img/...\n');

  // 1. Slide 1 Cover Model: High-res beauty portrait with radiant skin and feathered brows
  // test_portrait_5.jpg is 1600x2000
  await sharp('dist/test_portrait_5.jpg')
    .resize(1200, 1500, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 92 })
    .toFile(path.join(pubImg, 'cover_model.jpg'));
  console.log('✓ Created cover_model.jpg (1200x1500)');

  // 2. Slide 2 Texture: Velvet cream swatch
  await sharp('dist/cosmetic_swatch_option1.jpg')
    .resize(1200, 1400, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile(path.join(pubImg, 'texture_swatch.jpg'));
  console.log('✓ Created texture_swatch.jpg (1200x1400)');

  // 3. Slide 3 Shoulder Model: Glowing neck/shoulder profile
  await sharp('assets/img/sample_model_profile.jpg')
    .resize(1000, 1300, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile(path.join(pubImg, 'shoulder_model.jpg'));
  console.log('✓ Created shoulder_model.jpg (1000x1300)');

  // 4. Slide 4 3D Anatomy Skin
  fs.copyFileSync('assets/img/sample_anatomy_skin.png', path.join(pubImg, 'anatomy_skin.png'));
  console.log('✓ Copied anatomy_skin.png');

  // 5. Slide 5 & 7 Macro Eye & Brow: Extreme close-up with skin pores and micro-hairs
  await sharp('dist/macro_eye_option1.jpg')
    .resize(1200, 1400, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 92 })
    .toFile(path.join(pubImg, 'macro_brow.jpg'));
  console.log('✓ Created macro_brow.jpg (1200x1400)');

  // 6. Slide 6 Cells
  ['cell_keratinocyte.png', 'cell_melanocyte.png', 'cell_fibroblast.png', 'cell_langerhans.png'].forEach(c => {
    fs.copyFileSync(path.join('assets/img', c), path.join(pubImg, c));
  });
  console.log('✓ Copied cell icons');

  // 7. Slide 8 Venn Diagram
  fs.copyFileSync('assets/img/diagram_skin_functions.png', path.join(pubImg, 'functions_venn.png'));
  console.log('✓ Copied functions_venn.png');

  // 8. Slide 9 Dark Model: High-res portrait with golden skin on black background
  // Let's composite dark_model_option4 or test_portrait_4 with a seamless dark gradient on left edge
  const w = 1200;
  const h = 1400;

  // Let's use dark_model_option1 or dark_model_option4
  await sharp('dist/dark_model_option4.jpg')
    .resize(w, h, { fit: 'cover', position: 'centre' })
    .composite([
      {
        input: Buffer.from(`
          <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#0E0C0E" stop-opacity="1"/>
                <stop offset="35%" stop-color="#0E0C0E" stop-opacity="0.8"/>
                <stop offset="70%" stop-color="#0E0C0E" stop-opacity="0"/>
                <stop offset="100%" stop-color="#0E0C0E" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <rect width="${w}" height="${h}" fill="url(#fade)"/>
          </svg>
        `),
        blend: 'over'
      }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(pubImg, 'dark_model_highres.jpg'));
  console.log('✓ Created dark_model_highres.jpg (1200x1400 high-res seamless blend)');
}

prepare().catch(console.error);

