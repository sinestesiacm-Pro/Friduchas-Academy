const sharp = require('sharp');

async function testSlide6Details() {
  const img = sharp('dist/previews/slide_06.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's find circular cell clusters along x:
  // Each cell is roughly centered around y=360-400
  console.log('Slide 6 image info:', info);
  // Find y bounds of non-bg in middle
  let minY = h, maxY = 0;
  for (let y = 150; y < h - 80; y++) {
    for (let x = 50; x < w - 50; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r < 240 || g < 235 || b < 230) {
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`Slide 6 content Y: ${minY} to ${maxY}, bottom margin = ${h - maxY}px`);
}
testSlide6Details();
