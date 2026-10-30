const sharp = require('sharp');

async function checkRawLeft() {
  const rawPath = 'public/img/slide09_model.jpg';
  const img = sharp(rawPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's check x=0 to 300 in raw:
  let maxR = 0, maxG = 0, maxB = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < 350; x++) {
      const idx = (y * w + x) * info.channels;
      if (data[idx] > maxR) maxR = data[idx];
      if (data[idx+1] > maxG) maxG = data[idx+1];
      if (data[idx+2] > maxB) maxB = data[idx+2];
    }
  }
  console.log(`Max RGB in x=0..350 of raw photo: R=${maxR}, G=${maxG}, B=${maxB}`);
}
checkRawLeft();

