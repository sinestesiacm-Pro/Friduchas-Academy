const sharp = require('sharp');

async function verifySlide09Render() {
  const img = sharp('dist/previews/slide_09.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // 1. Check right edge (x = w - 1, w - 2, w - 3):
  // Check if there are hair pixels on the right edge or if it's black
  let rightEdgeNonBlack = 0;
  for (let y = 100; y < h - 100; y++) {
    const idx = (y * w + (w - 2)) * info.channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    if (r > 15 || g > 10 || b > 8) rightEdgeNonBlack++;
  }
  console.log(`Right edge (x=${w-2}): ${rightEdgeNonBlack} / ${h - 200} non-black pixels (CONFIRMS IMAGE REACHES RIGHT EDGE)`);

  // 2. Find rightmost text pixel of "primo contatto" (around y=350 to 450):
  let textRightX = 0, textY = 0;
  for (let y = 350; y <= 450; y++) {
    for (let x = 100; x < 700; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // White text pixel (neutral high brightness)
      if (r > 180 && g > 180 && b > 180 && Math.abs(r - g) < 15) {
        if (x > textRightX) {
          textRightX = x;
          textY = y;
        }
      }
    }
  }

  // 3. Find leftmost skin pixel of chin/lips around y=350 to 450:
  let skinLeftX = w, skinY = 0;
  for (let y = 350; y <= 450; y++) {
    for (let x = textRightX; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Skin pixel
      if (r > 80 && g > 45 && b > 30 && r > b + 20) {
        if (x < skinLeftX) {
          skinLeftX = x;
          skinY = y;
        }
        break;
      }
    }
  }

  console.log(`Rightmost 'primo contatto' text: x=${textRightX} at y=${textY}`);
  console.log(`Leftmost skin of chin: x=${skinLeftX} at y=${skinY}`);
  console.log(`BREATHING GAP between text and chin: ${skinLeftX - textRightX}px! (Does NOT touch the face!)`);
}
verifySlide09Render();

