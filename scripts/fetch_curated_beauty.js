// scripts/fetch_curated_beauty.js
const https = require('https');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

async function run() {
  const images = [
    // 1. Dark background editorial beauty models
    { id: 'photo-1531746020798-e6953c6e8e04', name: 'dark_model_option1.jpg' },
    { id: 'photo-1509967419530-da38b4704bc6', name: 'dark_model_option2.jpg' },
    { id: 'photo-1618005182384-a83a8bd57fbe', name: 'dark_model_option3.jpg' },
    { id: 'photo-1524504388940-b1c1722653e1', name: 'dark_model_option4.jpg' },
    // 2. Macro eye and eyebrow
    { id: 'photo-1583001809873-a128495da465', name: 'macro_eye_option1.jpg' },
    { id: 'photo-1598440947619-2c35fc9aa908', name: 'macro_eye_option2.jpg' },
    { id: 'photo-1512496015851-a90fb38ba796', name: 'cosmetic_swatch_option1.jpg' }
  ];

  for (const img of images) {
    const url = `https://images.unsplash.com/${img.id}?auto=format&fit=crop&w=1600&q=90`;
    const dest = path.join(__dirname, '..', 'dist', img.name);
    try {
      await download(url, dest);
      const meta = await sharp(dest).metadata();
      console.log(`Downloaded ${img.name}: ${meta.width}x${meta.height}`);
    } catch (e) {
      console.log(`Failed ${img.name}:`, e.message);
    }
  }
}

run();

