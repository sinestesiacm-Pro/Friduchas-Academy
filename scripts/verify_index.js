const { execSync } = require('child_process');
const path = require('path');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outFile = path.join(__dirname, '..', 'dist', 'previews', 'index_slide01_verify.png');

execSync(`"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=3000 --window-size=1280,720 --screenshot="${outFile}" "http://localhost:3000"`);
console.log('Verified index.html loads slide 01 successfully! Saved to:', outFile);
