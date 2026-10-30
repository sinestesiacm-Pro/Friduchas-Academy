const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outFile4 = path.join(__dirname, '..', 'dist', 'previews', 'slide_04_rendered.png');
const outFile6 = path.join(__dirname, '..', 'dist', 'previews', 'slide_06_rendered.png');

// Using --virtual-time-budget=3000 to give Chrome time to load and render all images and fonts
execSync(`"${chromePath}" --headless --disable-gpu --virtual-time-budget=3000 --window-size=1280,720 --screenshot="${outFile4}" "http://localhost:3000/render_slide.html?slide=4"`);
console.log('Captured slide 4');

execSync(`"${chromePath}" --headless --disable-gpu --virtual-time-budget=3000 --window-size=1280,720 --screenshot="${outFile6}" "http://localhost:3000/render_slide.html?slide=6"`);
console.log('Captured slide 6');
