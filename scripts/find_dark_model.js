// scripts/find_dark_model.js
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
  // Let's test a collection of the top-rated luxury dark beauty portraits on Unsplash
  const ids = [
    'photo-1508214751196-bcfd4ca60f91', // dark background woman glowing skin
    'photo-1544005313-94ddf0286df2',
    'photo-1573496359142-b8d87734a5a2',
    'photo-1517841905240-472988babdf9',
    'photo-1534528741775-53994a69daeb'  // famous beauty portrait
  ];

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=90`;
    const dest = path.join(__dirname, '..', 'dist', `test_portrait_${i+1}.jpg`);
    try {
      await download(url, dest);
      const meta = await sharp(dest).metadata();
      console.log(`Downloaded test_portrait_${i+1}.jpg (${meta.width}x${meta.height})`);
    } catch (e) {
      console.log(`Failed:`, e.message);
    }
  }
}

run();

