const { execSync } = require('child_process');
const path = require('path');
const sharp = require('sharp');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outFile = path.join(__dirname, '..', 'dist', 'previews', 'localhost_slide09_actual.png');

// First, let's inject currentSlide = 8 or click next slide to reach slide 9, or load render_slide.html?slide=9
execSync(`"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=2500 --window-size=1280,820 --screenshot="${outFile}" "http://localhost:3000/render_slide.html?slide=9"`);
console.log('Saved localhost_slide09_actual.png');
