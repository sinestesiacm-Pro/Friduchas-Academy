const sharp = require('sharp');

async function measureUserScreenshotExact() {
  const img = sharp('C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793391952842_55400340.jpg');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  for (let y = 300; y < 450; y += 10) {
    let rightmostWhiteX = 0;
    let leftmostSkinX = w;
    for (let x = 300; x < w - 100; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // White text
      if (r > 190 && g > 190 && b > 190 && Math.abs(r - g) < 15) {
        if (x > rightmostWhiteX) rightmostWhiteX = x;
      }
      // Skin
      if (r > 90 && g > 50 && b > 35 && r > b + 20) {
        if (x < leftmostSkinX) leftmostSkinX = x;
      }
    }
    console.log(`y=${y}: rightmost text=${rightmostWhiteX}, leftmost skin=${leftmostSkinX}, gap=${leftmostSkinX - rightmostWhiteX}px`);
  }
}
measureUserScreenshotExact();
