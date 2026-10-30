const sharp = require('sharp');

async function analyzeTarget() {
  const targetPath = 'C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793356636887_e4341e30.jpg';
  const rawPath = 'public/img/slide09_model.jpg';

  const tMeta = await sharp(targetPath).metadata();
  const rMeta = await sharp(rawPath).metadata();
  console.log('Target meta:', tMeta);
  console.log('Raw model meta:', rMeta);

  // In target image:
  const img = sharp(targetPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's find:
  // 1. Where skin starts on the left in target:
  const profile = [];
  for (let y = 50; y < h - 50; y += 15) {
    for (let x = 300; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 60 && g > 35 && b > 25 && (r > b + 15)) {
        profile.push({ y, x });
        break;
      }
    }
  }

  // Chin / lips leftmost point:
  let minX = w, minPt = null;
  for (const p of profile) {
    if (p.x < minX) {
      minX = p.x;
      minPt = p;
    }
  }
  console.log(`Target chin leftmost point: x=${minPt.x} (${(minPt.x / w * 100).toFixed(1)}%), y=${minPt.y} (${(minPt.y / h * 100).toFixed(1)}%) in ${w}x${h}`);

  // Let's check text lines in target:
  // Find bounding box of text lines:
  // "La pelle"
  // "è il nostro"
  // "primo contatto"
  // "con il mondo."
  for (let y = 100; y < 450; y += 10) {
    let rightmostTextX = 0;
    for (let x = 50; x < minPt.x; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Text pixel (white or rose)
      if ((r > 170 && g > 170 && b > 170) || (r > 120 && g < 100 && b > 70)) {
        if (x > rightmostTextX) rightmostTextX = x;
      }
    }
    if (rightmostTextX > 0) {
      console.log(`y=${y}: rightmost text at x=${rightmostTextX} (${(rightmostTextX / w * 100).toFixed(1)}%)`);
    }
  }

  // Check the right edge in target: is it black or hair?
  let rightEdgeHair = 0;
  for (let y = 50; y < h - 50; y++) {
    const idx = (y * w + (w - 5)) * info.channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    if (r > 30 || g > 20 || b > 15) rightEdgeHair++;
  }
  console.log(`Right edge has ${rightEdgeHair} hair pixels out of ${h - 100} lines`);
}
analyzeTarget();

