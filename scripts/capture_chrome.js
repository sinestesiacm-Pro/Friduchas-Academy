const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = path.join('C:', 'Users', 'carlo', '.gemini', 'antigravity', 'brain', '2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434', 'previews');
if (!fs.existsSync(artifactDir)) fs.mkdirSync(artifactDir, { recursive: true });

async function captureSlide(num) {
  const padNum = String(num).padStart(2, '0');
  const outFile = path.join(__dirname, '..', 'dist', 'previews', `slide_${padNum}.png`);
  const artifactFile = path.join(artifactDir, `slide_${padNum}.png`);
  const url = `http://localhost:3000/render_slide.html?slide=${num}`;
  
  console.log(`Capturing Slide ${padNum} from ${url}...`);
  const cmd = `"${chromePath}" --headless --disable-gpu --window-size=1920,1080 --screenshot="${outFile}" "${url}"`;
  execSync(cmd, { stdio: 'inherit' });
  
  if (fs.existsSync(outFile)) {
    fs.copyFileSync(outFile, artifactFile);
    console.log(`Saved: ${outFile} and copied to artifact: ${artifactFile}`);
  }
}

async function run() {
  await captureSlide(4);
  await captureSlide(6);
}
run();

