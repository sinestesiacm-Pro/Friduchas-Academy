const sharp = require('sharp');

async function testRows() {
  const img = sharp('scripts/bracket_crop.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  for (let y = 350; y < 420; y += 5) {
    const pixels = [];
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r < 230 || g < 225 || b < 215) {
        pixels.push({ x: x + 800, r, g, b });
      }
    }
    if (pixels.length > 0) {
      console.log(`abs y=${y+160}: xs from ${pixels[0].x} to ${pixels[pixels.length-1].x}, sample rgb=(${pixels[0].r},${pixels[0].g},${pixels[0].b})`);
    }
  }
}
testRows();
