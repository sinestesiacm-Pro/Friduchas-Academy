const sharp = require('sharp');

async function analyzeSlide9Assets() {
  const rawPath = 'C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793326818336_6a3aac03.jpg';
  const refPath = 'C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793327090117_64a2f2e1.jpg';

  const rawMeta = await sharp(rawPath).metadata();
  const refMeta = await sharp(refPath).metadata();

  console.log('Raw model meta:', rawMeta);
  console.log('Ref composition meta:', refMeta);
}
analyzeSlide9Assets();

