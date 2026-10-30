const sharp = require('sharp');

async function inspectTarget() {
  const targetPath = 'C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793356636887_e4341e30.jpg';
  // Let's crop x=0 to 1024, y=0 to 625 into 2 parts:
  // Left half (x=0 to 600) and Right half (x=500 to 1024)
  await sharp(targetPath)
    .extract({ left: 400, top: 0, width: 624, height: 625 })
    .toFile('scripts/target_right_half.png');
  console.log('Saved target_right_half.png');

  // Let's find the chin in target_right_half:
  const img = sharp(targetPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's scan from right to left (w-1 down to 0) to find the face features:
  for (let y = 100; y < 550; y += 40) {
    let firstSkinX = -1;
    for (let x = 400; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // skin tone check
      if (r > 90 && g > 50 && b > 35 && r > b + 20) {
        firstSkinX = x;
        break;
      }
    }
    console.log(`y=${y}: skin starts at x=${firstSkinX}`);
  }
}
inspectTarget();

