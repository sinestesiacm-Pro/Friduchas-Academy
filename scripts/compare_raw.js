const sharp = require('sharp');

async function compareWithRaw() {
  const targetPath = 'C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793356636887_e4341e30.jpg';
  const rawPath = 'public/img/slide09_model.jpg';

  const tImg = sharp(targetPath);
  const rImg = sharp(rawPath);

  const tData = (await tImg.raw().toBuffer({ resolveWithObject: true })).data;
  const rData = (await rImg.raw().toBuffer({ resolveWithObject: true })).data;

  // Let's sample pixels on the right side (x=800, y=300):
  const idx = (300 * 1024 + 800) * 3;
  console.log('Target pixel at (800, 300):', tData[idx], tData[idx+1], tData[idx+2]);
  console.log('Raw pixel at (800, 300):', rData[idx], rData[idx+1], rData[idx+2]);

  // Sample at (900, 400):
  const idx2 = (400 * 1024 + 900) * 3;
  console.log('Target pixel at (900, 400):', tData[idx2], tData[idx2+1], tData[idx2+2]);
  console.log('Raw pixel at (900, 400):', rData[idx2], rData[idx2+1], rData[idx2+2]);

  // Sample at (1020, 300) - near right edge:
  const idx3 = (300 * 1024 + 1020) * 3;
  console.log('Target pixel at (1020, 300):', tData[idx3], tData[idx3+1], tData[idx3+2]);
  console.log('Raw pixel at (1020, 300):', rData[idx3], rData[idx3+1], rData[idx3+2]);
}
compareWithRaw();

