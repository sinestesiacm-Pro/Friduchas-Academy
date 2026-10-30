const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function extractCells() {
  const src = 'C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793326334103_3a54bbf8.jpg';
  
  const cells = [
    { name: 'cell_keratinocyte_pro.png', cx: 136.5, cy: 424.0, r: 83.5, label: 'Cheratinociti' },
    { name: 'cell_melanocyte_pro.png', cx: 378.5, cy: 424.0, r: 84.0, label: 'Melanociti' },
    { name: 'cell_fibroblast_pro.png', cx: 623.5, cy: 425.0, r: 82.0, label: 'Fibroblasti' },
    { name: 'cell_langerhans_pro.png', cx: 876.0, cy: 425.0, r: 84.0, label: 'Cellule di Langerhans' },
  ];

  for (const c of cells) {
    const size = Math.ceil(c.r * 2);
    const left = Math.round(c.cx - c.r);
    const top = Math.round(c.cy - c.r);
    
    // Generate high resolution SVG mask for smooth antialiased circular clipping
    const maskSvg = Buffer.from(`
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${c.r - 0.5}" fill="#ffffff" />
      </svg>
    `);

    // Extract square region first
    const croppedBuffer = await sharp(src)
      .extract({ left, top, width: size, height: size })
      .toBuffer();

    // Composite with circular alpha mask
    const finalBuffer = await sharp(croppedBuffer)
      .composite([{
        input: maskSvg,
        blend: 'dest-in'
      }])
      .png({ compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(path.join('public', 'img', c.name), finalBuffer);
    fs.writeFileSync(path.join('assets', 'img', c.name), finalBuffer);
    console.log(`Saved ${c.name} (${size}x${size})`);
  }
}
extractCells();

