const { execSync } = require('child_process');
const path = require('path');
const sharp = require('sharp');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outFile = path.join(__dirname, '..', 'dist', 'previews', 'test_cqw_s9.png');

execSync(`"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=2000 --window-size=1280,800 --screenshot="${outFile}" "http://localhost:3000/test_cqw_s9.html"`);

async function measure() {
  const img = sharp(outFile);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Find rightmost text and leftmost skin inside the 960px container
  for (let y = 300; y < 450; y += 15) {
    let rightmostWhiteX = 0;
    let leftmostSkinX = w;
    for (let x = 160; x < 900; x++) {
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
    if (rightmostWhiteX > 0 || leftmostSkinX < w) {
      console.log(`y=${y}: rightmost text=${rightmostWhiteX}, leftmost skin=${leftmostSkinX}, gap=${leftmostSkinX - rightmostWhiteX}px`);
    }
  }
}
measure();
