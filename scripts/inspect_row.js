const sharp = require('sharp');

async function inspectRow() {
  const img = sharp('C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793356636887_e4341e30.jpg');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's inspect y=340: from x=450 to 570
  for (let x = 450; x <= 560; x += 5) {
    const idx = (340 * w + x) * info.channels;
    console.log(`y=340, x=${x}: rgb=(${data[idx]}, ${data[idx+1]}, ${data[idx+2]})`);
  }
}
inspectRow();

