const { execSync } = require('child_process');
const sharp = require('sharp');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testViewer(fontSizeStr, maxWStr) {
  let s = fs.readFileSync('public/slides_data.js', 'utf8');
  
  // Find slide 9
  const p = s.lastIndexOf('<!-- Main Title Area');
  const endP = s.lastIndexOf('<!-- Bottom Accent Bar');
  
  const block = `<!-- Main Title Area: Calibrated Playfair -->
            <div class="my-auto z-20 py-1 pl-2 ${maxWStr}">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: normal; ${fontSizeStr} line-height: 0.94; letter-spacing: -0.02em;">
                La pelle<br>
                è il nostro<br>
                primo contatto<br>
                con il <span style="color: #a55572; font-style: italic;">mondo.</span>
              </h1>
            </div>\n\n            `;
            
  s = s.substring(0, p) + block + s.substring(endP);
  fs.writeFileSync('public/slides_data.js', s, 'utf8');

  // Capture from http://localhost:3000 (which runs index.html with slide 9 active)
  // Let's create a test html that loads index.html at slide 9
  const outFile = 'dist/previews/test_viewer_s9.png';
  execSync(`"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=2000 --window-size=1280,800 --screenshot="${outFile}" "http://localhost:3000"`);

  // Now measure the slide viewport inside test_viewer_s9.png
  const img = sharp(outFile);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Find slide 9 in the viewport:
  // First let's check if the viewer is currently on slide 9 or slide 1:
  // In index.html, currentSlide starts at 0 (slide 1).
  // To test slide 9 in the viewer, we can set default slide to 8 or use preview_slide_09.html!
}
