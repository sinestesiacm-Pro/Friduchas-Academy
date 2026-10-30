const sharp = require('sharp');

async function findCircles() {
  const src = 'C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793326334103_3a54bbf8.jpg';
  const img = sharp(src);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Background is cream (#FAF7F2: r~250, g~247, b~242)
  // Each circle has a dark purple/pink outer border stroke!
  // Let's find all edge pixels of each circle:
  const circles = [
    { name: 'Keratinociti', xMin: 50, xMax: 220 },
    { name: 'Melanociti', xMin: 290, xMax: 470 },
    { name: 'Fibroblasti', xMin: 530, xMax: 710 },
    { name: 'Langerhans', xMin: 780, xMax: 970 }
  ];

  for (const c of circles) {
    let edgePts = [];
    for (let y = 330; y < 520; y++) {
      for (let x = c.xMin; x < c.xMax; x++) {
        const idx = (y * w + x) * info.channels;
        const r = data[idx], g = data[idx+1], b = data[idx+2];
        // Background is r>235, g>230, b>220
        const isBg = (r > 235 && g > 230 && b > 220);
        // Look for transition from bg to non-bg
        if (!isBg) {
          // Check neighbors
          const upIdx = ((y-1) * w + x) * info.channels;
          const dnIdx = ((y+1) * w + x) * info.channels;
          const lfIdx = (y * w + (x-1)) * info.channels;
          const rtIdx = (y * w + (x+1)) * info.channels;
          const hasBgNeighbor = 
            (data[upIdx] > 235 && data[upIdx+1] > 230 && data[upIdx+2] > 220) ||
            (data[dnIdx] > 235 && data[dnIdx+1] > 230 && data[dnIdx+2] > 220) ||
            (data[lfIdx] > 235 && data[lfIdx+1] > 230 && data[lfIdx+2] > 220) ||
            (data[rtIdx] > 235 && data[rtIdx+1] > 230 && data[rtIdx+2] > 220);
          if (hasBgNeighbor) {
            edgePts.push({ x, y });
          }
        }
      }
    }
    const xs = edgePts.map(p => p.x);
    const ys = edgePts.map(p => p.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const rx = (maxX - minX) / 2;
    const ry = (maxY - minY) / 2;
    console.log(`${c.name}: center=(${cx.toFixed(1)}, ${cy.toFixed(1)}), rx=${rx.toFixed(1)}, ry=${ry.toFixed(1)}, diameter=${(maxX - minX)}`);
  }
}
findCircles();
