const fs = require('fs');

const html = fs.readFileSync('public/index.html', 'utf8');
const startToken = 'const slideDefinitions = [';
const endToken = '];\n\n    let currentSlide = 0;';

const startIdx = html.indexOf(startToken);
const endIdx = html.indexOf(endToken);

if (startIdx !== -1 && endIdx !== -1) {
  const definitionsJs = 'window.slideDefinitions = ' + html.substring(startIdx + startToken.length - 1, endIdx + 1) + ';\n';
  fs.writeFileSync('public/slides_data.js', definitionsJs, 'utf8');
  console.log('Saved public/slides_data.js, size:', definitionsJs.length);

  // Update index.html to load slides_data.js
  const replacement = '<script src="slides_data.js"></script>\n  <script>\n    const slideDefinitions = window.slideDefinitions;\n';
  const updatedHtml = html.substring(0, startIdx) + replacement + html.substring(endIdx + 3);
  fs.writeFileSync('public/index.html', updatedHtml, 'utf8');
  console.log('Updated public/index.html to use slides_data.js');
} else {
  console.error('Could not find slideDefinitions bounds', { startIdx, endIdx });
}

