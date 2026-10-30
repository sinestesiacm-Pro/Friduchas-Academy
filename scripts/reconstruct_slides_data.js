const fs = require('fs');
const path = require('path');

// Extract the inner HTML from preview_slide_01..08
function extractSlideBody(slideNum) {
  const pad = String(slideNum).padStart(2, '0');
  const filePath = path.join('public', `preview_slide_${pad}.html`);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find <div style="width: 1280px; height: 720px; overflow: hidden; position: relative;">
  const startToken = '<div style="width: 1280px; height: 720px; overflow: hidden; position: relative;">';
  const endToken = '</div>\n</body>';
  
  const startIdx = content.indexOf(startToken);
  const endIdx = content.lastIndexOf('</div>\n</body>');
  
  if (startIdx !== -1 && endIdx !== -1) {
    let body = content.substring(startIdx + startToken.length, endIdx).trim();
    // Revert base64 images back to img/...
    body = body.replace(/src="data:image\/[^;]+;base64,[^"]+"/g, (match) => {
      // Look at alt or nearby tags to determine filename
      return match; // or keep as base64 or clean path
    });
    return body;
  }
  return '';
}

// Better yet, let's look at `scripts/user_prompt_slides.html` which has the pristine clean HTML!
console.log('User prompt slides file exists:', fs.existsSync('scripts/user_prompt_slides.html'));

