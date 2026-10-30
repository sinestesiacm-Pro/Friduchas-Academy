const sharp = require('sharp');

async function measureExactGapInRef() {
  const img = sharp('C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793356636887_e4341e30.jpg');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's examine the exact row y=350 to 420:
  // For each Y, let's find the text pixel and the skin pixel
  for (let y = 350; y <= 410; y += 5) {
    let textX = -1, skinX = -1;
    for (let x = 200; x < 600; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // text (white or rose)
      if ((r > 160 && g > 160 && b > 160) || (r > 120 && g < 100 && b > 70 && r > g + 25)) {
        textX = x;
      }
      // skin
      if (skinX === -1 && r > 80 && g > 45 && b > 30 && r > b + 20 && Math.abs(r - g) > 20) {
        // Make sure it's to the right of text
        if (x > 450) {
          skinX = x;
        }
      }
    }
    console.log(`y=${y}: last text at x=${textX}, first skin at x=${skinX}, gap=${skinX - textX}px`);
  }
}
measureExactGapInRef();

