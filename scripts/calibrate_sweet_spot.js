const { execSync } = require('child_process');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testViewerFontSize(fontSizeRem) {
  // Update slides_data.js directly
  let s = fs.readFileSync('public/slides_data.js', 'utf8');
  
  // Replace font-size in slide 9
  const p = s.lastIndexOf('<!-- Main Title Area');
  const endP = s.lastIndexOf('<!-- Bottom Accent Bar');
  
  const block = `<!-- Main Title Area: Sweet Spot -->
            <div class="my-auto z-20 py-1 pl-2 max-w-[620px]">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: normal; font-size: ${fontSizeRem}rem; line-height: 0.93; letter-spacing: -0.02em;">
                La pelle<br>
                è il nostro<br>
                primo contatto<br>
                con il <span style="color: #a55572; font-style: italic;">mondo.</span>
              </h1>
            </div>\n\n            `;
            
  s = s.substring(0, p) + block + s.substring(endP);
  fs.writeFileSync('public/slides_data.js', s, 'utf8');

  // Capture screenshot of localhost:3000/render_slide.html?slide=9 with window-size=1280,820
  const outFile = path.join(__dirname, '..', 'dist', 'previews', `test_size_${fontSizeRem}.png`);
  execSync(`"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=2000 --window-size=1280,820 --screenshot="${outFile}" "http://localhost:3000/render_slide.html?slide=9"`);

  // Measure in image
  const img = sharp(outFile);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Find rightmost text pixel of 'primo contatto' around y=360-460
  let maxTextX = 0, textY = 0;
  for (let y = 350; y <= 450; y++) {
    for (let x = 300; x < 700; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 180 && g > 180 && b > 180 && Math.abs(r - g) < 15) {
        if (x > maxTextX) {
          maxTextX = x;
          textY = y;
        }
      }
    }
  }

  // Find skin of chin at that y level (textY - 25 to textY + 25)
  let minSkinX = w, skinY = 0;
  for (let y = textY - 25; y <= textY + 25; y++) {
    for (let x = 500; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 80 && g > 45 && b > 30 && r > b + 20) {
        if (x < minSkinX) {
          minSkinX = x;
          skinY = y;
        }
        break;
      }
    }
  }

  const gap = minSkinX - maxTextX;
  console.log(`[${fontSizeRem}rem] -> Text right: x=${maxTextX} (y=${textY}), Chin left: x=${minSkinX} (y=${skinY}) => GAP: ${gap}px`);
  return { fontSizeRem, gap, maxTextX, minSkinX };
}

async function run() {
  for (const size of [5.2, 5.1, 5.0, 4.9, 4.8]) {
    await testViewerFontSize(size);
  }
}
run();

