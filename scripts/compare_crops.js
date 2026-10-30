const sharp = require('sharp');

async function cropComparisons() {
  // Reference (1024x625):
  // Let's crop x=200 to 750, y=150 to 500
  await sharp('C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793356636887_e4341e30.jpg')
    .extract({ left: 100, top: 120, width: 600, height: 420 })
    .toFile('scripts/ref_gap_crop.png');

  // Our current render (1280x720):
  // Let's scale to match or extract proportional area (x=125 to 875, y=138 to 620)
  await sharp('dist/previews/slide_09.png')
    .extract({ left: 120, top: 130, width: 750, height: 500 })
    .toFile('scripts/render_gap_crop.png');

  console.log('Saved both crops!');
}
cropComparisons();

