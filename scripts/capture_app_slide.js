const { execSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outFile = path.resolve(__dirname, '..', 'dist', 'previews', 'app_slide_19.png');
const artifactFile = path.resolve('C:\\Users\\carlo\\.gemini\\antigravity\\brain\\2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434\\previews\\app_slide_19.png');

console.log('Capturing full app interface...');
execSync(`"${chromePath}" --headless --disable-gpu --window-size=1920,1080 --screenshot="${outFile}" "http://localhost:3000/?slide=19"`, { stdio: 'inherit' });

const fs = require('fs');
if (fs.existsSync(outFile)) {
  fs.copyFileSync(outFile, artifactFile);
  console.log(`Saved to ${outFile} and ${artifactFile}`);
}
