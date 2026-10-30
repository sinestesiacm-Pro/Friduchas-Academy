const sharp = require('sharp');

async function measureDistance() {
  const img = sharp('dist/previews/slide_09.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Find rightmost pixel of white text around y=250-450
  let maxTextX = 0, textY = 0;
  for (let y = 200; y < 500; y++) {
    for (let x = 100; x < 900; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // White text
      if (r > 200 && g > 200 && b > 200) {
        if (x > maxTextX) {
          maxTextX = x;
          textY = y;
        }
      }
    }
  }

  // Find leftmost skin pixel of her chin / lips around y=textY-50 to textY+50
  let minFaceX = w, faceY = 0;
  for (let y = 200; y < 550; y++) {
    for (let x = maxTextX; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Skin detection
      if (r > 70 && g > 40 && b > 30 && r > b + 15) {
        if (x < minFaceX) {
          minFaceX = x;
          faceY = y;
        }
        break;
      }
    }
  }

  console.log(`Max Text X: ${maxTextX} at y=${textY}`);
  console.log(`Min Face X: ${minFaceX} at y=${faceY}`);
  console.log(`Gap between text and face: ${minFaceX - maxTextX}px in a 1280px wide canvas!`);
}
measureDistance();

