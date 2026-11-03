const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const slideNum = process.argv[2] || '19';
const padNum = String(slideNum).padStart(2, '0');

const outDir = path.join(__dirname, '..', 'dist', 'previews');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const artifactDir = path.join('C:', 'Users', 'carlo', '.gemini', 'antigravity', 'brain', '2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434', 'previews');
if (!fs.existsSync(artifactDir)) fs.mkdirSync(artifactDir, { recursive: true });

const outFile = path.join(outDir, `slide_${padNum}.png`);
const artifactFile = path.join(artifactDir, `slide_${padNum}.png`);
const url = `http://localhost:3000/render_slide.html?slide=${slideNum}`;

console.log(`Capturing Slide ${padNum} from ${url}...`);
const cmd = `"${chromePath}" --headless --disable-gpu --window-size=1920,1080 --screenshot="${outFile}" "${url}"`;
execSync(cmd, { stdio: 'inherit' });

if (fs.existsSync(outFile)) {
  fs.copyFileSync(outFile, artifactFile);
  console.log(`Saved to ${outFile} and ${artifactFile}`);
}
