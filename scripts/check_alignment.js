const sharp = require('sharp');

async function findCube() {
  const img = sharp('dist/previews/slide_04_rendered.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 100; y < h - 50; y++) {
    for (let x = 600; x < w - 100; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // background is cream #faf7f2 (r~250, g~247, b~242)
      if (r < 240 || g < 235 || b < 230) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`Right column content: X ${minX} to ${maxX}, Y ${minY} to ${maxY}`);
}
findCube();
