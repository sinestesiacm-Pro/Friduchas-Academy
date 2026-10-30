const sharp = require('sharp');

async function measureCaptured() {
  const img = sharp('dist/previews/slide_04.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's find cube bounds in x > 800:
  let cubeMinY = h, cubeMaxY = 0, cubeMinX = w, cubeMaxX = 0;
  for (let y = 100; y < h - 100; y++) {
    for (let x = 800; x < 1500; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const isBg = (r > 245 && g > 240 && b > 235);
      if (!isBg) {
        if (y < cubeMinY) cubeMinY = y;
        if (y > cubeMaxY) cubeMaxY = y;
        if (x < cubeMinX) cubeMinX = x;
        if (x > cubeMaxX) cubeMaxX = x;
      }
    }
  }

  console.log(`Captured Cube: X ${cubeMinX} to ${cubeMaxX} (w=${cubeMaxX-cubeMinX}), Y ${cubeMinY} to ${cubeMaxY} (h=${cubeMaxY-cubeMinY})`);
  console.log(`Slide height = 1080. Cube is from Y=${cubeMinY} to Y=${cubeMaxY}. Margin bottom = ${1080 - cubeMaxY}px!`);

  // Let's find bracket text positions around x > 1400:
  // Bracket 1 (Epidermide), Bracket 2 (Derma), Bracket 3 (Ipoderma)
  for (let y = 200; y < 900; y += 10) {
    let nonBg = 0;
    for (let x = cubeMaxX - 40; x < cubeMaxX + 250; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      const isBg = (r > 245 && g > 240 && b > 235);
      if (!isBg) nonBg++;
    }
    if (nonBg > 0) {
      // console.log(`Y=${y} has ${nonBg} non-bg pixels`);
    }
  }
}
measureCaptured();
