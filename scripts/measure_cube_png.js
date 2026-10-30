const sharp = require('sharp');

async function inspectBracketShape() {
  const img = sharp('scripts/bracket_crop.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Let's examine the Epidermide bracket (around crop y=40 to 160)
  // Let's print out an ASCII art representation of the bracket in crop x=15 to 45, y=40 to 170
  console.log('ASCII of Epidermide bracket:');
  for (let y = 40; y < 170; y += 4) {
    let line = '';
    for (let x = 15; x < 55; x += 2) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // berry color check
      if (r > 150 && b > 100 && g < 110) {
        line += '#';
      } else {
        line += ' ';
      }
    }
    if (line.trim().length > 0) {
      console.log(`${y}: ${line}`);
    }
  }
}
inspectBracketShape();
