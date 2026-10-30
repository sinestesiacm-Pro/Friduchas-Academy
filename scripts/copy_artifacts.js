const fs = require('fs');
const path = require('path');

const artifactDir = path.join('C:', 'Users', 'carlo', '.gemini', 'antigravity', 'brain', '2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434', 'previews');
fs.copyFileSync('dist/previews/slide_04_rendered.png', path.join(artifactDir, 'slide_04.png'));
fs.copyFileSync('dist/previews/slide_06_rendered.png', path.join(artifactDir, 'slide_06.png'));
console.log('Updated artifact previews for slide 04 and slide 06');

