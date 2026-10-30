// scripts/create_contact_sheet.js
const fs = require('fs');
const path = require('path');

const files = [
  'dark_model_option4.jpg',
  'test_portrait_1.jpg',
  'test_portrait_2.jpg',
  'test_portrait_3.jpg',
  'test_portrait_4.jpg',
  'test_portrait_5.jpg',
  'macro_eye_option1.jpg',
  'macro_eye_option2.jpg'
];

let html = `<!DOCTYPE html><html><head><title>Images</title><style>
body { background: #111; color: #fff; font-family: sans-serif; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; padding: 20px; }
.card { background: #222; border-radius: 8px; overflow: hidden; }
img { width: 100%; height: 350px; object-fit: cover; }
p { padding: 10px; margin: 0; font-size: 14px; word-break: break-all; }
</style></head><body>`;

files.forEach(f => {
  html += `<div class="card"><img src="${f}"><p>${f}</p></div>`;
});

html += `</body></html>`;
fs.writeFileSync(path.join(__dirname, '..', 'dist', 'contact_sheet.html'), html);
console.log('Saved dist/contact_sheet.html');

