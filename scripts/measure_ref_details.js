const sharp = require('sharp');

async function measureExactText() {
  const targetPath = 'C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793356636887_e4341e30.jpg';
  const img = sharp(targetPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  function isText(r, g, b) {
    // White text: r, g, b all high and close to neutral
    const isWhite = (r > 170 && g > 170 && b > 170 && Math.abs(r - g) < 15 && Math.abs(r - b) < 20);
    // Rose text ("mondo."): reddish/pinkish berry (r > 130, g < 100, b > 70)
    const isRose = (r > 120 && g < 100 && b > 70 && (r - g > 25));
    return isWhite || isRose;
  }

  const lines = [
    { name: "La pelle", yMin: 180, yMax: 260 },
    { name: "è il nostro", yMin: 260, yMax: 330 },
    { name: "primo contatto", yMin: 330, yMax: 410 },
    { name: "con il mondo.", yMin: 410, yMax: 480 }
  ];

  for (const l of lines) {
    let rX = 0, topY = h, botY = 0, lX = w;
    for (let y = l.yMin; y <= l.yMax; y++) {
      for (let x = 30; x < 600; x++) {
        const idx = (y * w + x) * info.channels;
        const r = data[idx], g = data[idx+1], b = data[idx+2];
        if (isText(r, g, b)) {
          if (x > rX) rX = x;
          if (x < lX) lX = x;
          if (y < topY) topY = y;
          if (y > botY) botY = y;
        }
      }
    }
    console.log(`${l.name}: X from ${lX} (${(lX/w*100).toFixed(1)}%) to ${rX} (${(rX/w*100).toFixed(1)}%), Y ${topY}..${botY} (h=${botY-topY})`);
  }

  // Chin position:
  let minChinX = w, chinY = 0;
  for (let y = 300; y < 450; y++) {
    for (let x = 450; x < 650; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // skin
      if (r > 80 && g > 40 && b > 25 && (r - b > 25)) {
        if (x < minChinX) {
          minChinX = x;
          chinY = y;
        }
        break;
      }
    }
  }
  console.log(`Min Chin X in reference: ${minChinX} (${(minChinX/w*100).toFixed(1)}%) at y=${chinY}`);
}
measureExactText();
