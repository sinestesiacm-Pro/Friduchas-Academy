const sharp = require('sharp');

async function testCrop() {
  const img = sharp('scripts/ref_interaction_crop.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's print ASCII representation of where the text and the chin are:
  // In x=0..250 (which corresponds to x=400..650 in original)
  // Let's find white text pixels (T) and skin pixels (S):
  console.log('ASCII of interaction (T=text, S=skin, .=black):');
  for (let y = 0; y < h; y += 10) {
    let line = '';
    for (let x = 0; x < w; x += 5) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 170 && g > 170 && b > 170) {
        line += 'T'; // text
      } else if (r > 70 && g > 35 && b > 25 && (r > b + 15)) {
        line += 'S'; // skin
      } else {
        line += '.';
      }
    }
    console.log(`${(y+250).toString().padStart(3)}: ${line}`);
  }
}
testCrop();
