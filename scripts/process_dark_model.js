// scripts/process_dark_model.js
const sharp = require('sharp');
const path = require('path');

async function processDarkModel() {
  const w = 960;
  const h = 1080;

  // 1. Extract cleanly from the original reference without ANY surrounding white margins
  // Slide 9 is inside media_1793314176054_a0e5c456.jpg
  // The face of the model is located at left: 730, top: 436, width: 110, height: 138
  const rawModel = await sharp('C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793314176054_a0e5c456.jpg')
    .extract({ left: 730, top: 436, width: 110, height: 138 })
    .resize(w, h, { fit: 'cover' })
    .toBuffer();

  // 2. Create a smooth feather gradient mask (so left side blends seamlessly into the black background)
  const maskSvg = `
    <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fadeLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#000000" stop-opacity="1"/>
          <stop offset="35%" stop-color="#000000" stop-opacity="0.3"/>
          <stop offset="65%" stop-color="#000000" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="fadeRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="85%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="1"/>
        </linearGradient>
        <linearGradient id="fadeTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#000000" stop-opacity="1"/>
          <stop offset="15%" stop-color="#000000" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#121012"/>
      <rect width="${w}" height="${h}" fill="url(#fadeLeft)"/>
      <rect width="${w}" height="${h}" fill="url(#fadeRight)"/>
      <rect width="${w}" height="${h}" fill="url(#fadeTop)"/>
    </svg>
  `;

  // Composite model over black background and apply dark gradient overlay on borders
  const finalImage = await sharp(rawModel)
    .composite([
      {
        input: Buffer.from(`
          <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#121012" stop-opacity="1"/>
                <stop offset="30%" stop-color="#121012" stop-opacity="0.5"/>
                <stop offset="60%" stop-color="#121012" stop-opacity="0"/>
                <stop offset="92%" stop-color="#121012" stop-opacity="0"/>
                <stop offset="100%" stop-color="#121012" stop-opacity="1"/>
              </linearGradient>
            </defs>
            <rect width="${w}" height="${h}" fill="url(#edgeGrad)"/>
          </svg>
        `),
        blend: 'over'
      }
    ])
    .jpeg({ quality: 95 })
    .toFile('assets/img/sample_dark_model.jpg');

  console.log('Successfully regenerated assets/img/sample_dark_model.jpg without any cutoffs!');
}

processDarkModel().catch(console.error);

