const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function setSlide9(fontSizeRem, lineHeight) {
  let s = fs.readFileSync('public/slides_data.js', 'utf8');
  
  const p = s.lastIndexOf('<!-- Main Title Area');
  const endP = s.lastIndexOf('<!-- Bottom Accent Bar');
  
  const block = `<!-- Main Title Area: Calibrated Grand Editorial -->
            <div class="my-auto z-20 py-1 pl-2 max-w-[560px]">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: normal; font-size: ${fontSizeRem}rem; line-height: ${lineHeight}; letter-spacing: -0.02em;">
                La pelle<br>
                è il nostro<br>
                primo contatto<br>
                con il <span style="color: #a55572; font-style: italic;">mondo.</span>
              </h1>
            </div>\n\n            `;
            
  s = s.substring(0, p) + block + s.substring(endP);
  fs.writeFileSync('public/slides_data.js', s, 'utf8');
}

// Set 4.85rem with line-height 0.93
setSlide9(4.85, 0.93);

// Capture slide 9 in the standalone 1280x720 preview
execSync('node scripts/render_slide09_preview.js', { stdio: 'pipe' });

// Also copy to artifact previews
const outFile = path.join(__dirname, '..', 'dist', 'previews', 'slide_09.png');
const artifactFile = 'C:\\Users\\carlo\\.gemini\\antigravity\\brain\\2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434\\previews\\slide_09.png';
fs.copyFileSync(outFile, artifactFile);
console.log('Saved preview to', outFile, 'and', artifactFile);

