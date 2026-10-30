const { execSync } = require('child_process');
const path = require('path');
const sharp = require('sharp');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testCQWSize(cqwVal) {
  let s = fs.readFileSync('public/slides_data.js', 'utf8');
  
  const p = s.lastIndexOf('<!-- Main Title Area');
  const endP = s.lastIndexOf('<!-- Bottom Accent Bar');
  
  const block = `<!-- Main Title Area: Calibrated ${cqwVal}cqw -->
            <div class="my-auto z-20 py-1 pl-2 max-w-[52cqw]">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: normal; font-size: ${cqwVal}cqw; line-height: 0.94; letter-spacing: -0.02em;">
                La pelle<br>
                è il nostro<br>
                primo contatto<br>
                con il <span style="color: #a55572; font-style: italic;">mondo.</span>
              </h1>
            </div>\n\n            `;
            
  s = s.substring(0, p) + block + s.substring(endP);
  fs.writeFileSync('public/slides_data.js', s, 'utf8');

  // Capture localhost:3000 (with slide 9 rendered inside index.html)
  // Let's create a script that navigates index.html to slide 9:
}

// Let's test different CQW values on preview_slide_09.html!
async function testOnPreview(cqwVal) {
  let s = fs.readFileSync('public/slides_data.js', 'utf8');
  
  const p = s.lastIndexOf('<!-- Main Title Area');
  const endP = s.lastIndexOf('<!-- Bottom Accent Bar');
  
  const block = `<!-- Main Title Area: Calibrated ${cqwVal}cqw -->
            <div class="my-auto z-20 py-1 pl-2 max-w-[52cqw]">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: normal; font-size: ${cqwVal}cqw; line-height: 0.94; letter-spacing: -0.02em;">
                La pelle<br>
                è il nostro<br>
                primo contatto<br>
                con il <span style="color: #a55572; font-style: italic;">mondo.</span>
              </h1>
            </div>\n\n            `;
            
  s = s.substring(0, p) + block + s.substring(endP);
  fs.writeFileSync('public/slides_data.js', s, 'utf8');

  execSync('node scripts/render_slide09_preview.js', { stdio: 'pipe' });

  const outFile = path.join(__dirname, '..', 'dist', 'previews', 'slide_09.png');
  const img = sharp(outFile);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  let maxTextX = 0, textY = 0;
  for (let y = 350; y <= 450; y++) {
    for (let x = 300; x < 750; x++) {
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

  let minSkinX = w, skinY = 0;
  for (let y = textY - 20; y <= textY + 20; y++) {
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
  console.log(`[${cqwVal}cqw] in ${w}x${h} canvas: text ends at ${maxTextX} (${(maxTextX/w*100).toFixed(1)}%), chin at ${minSkinX} (${(minSkinX/w*100).toFixed(1)}%) => GAP: ${gap}px (${(gap/w*100).toFixed(1)}%)`);
  return { cqwVal, gap, textPct: (maxTextX/w*100).toFixed(1), chinPct: (minSkinX/w*100).toFixed(1) };
}

async function run() {
  for (const cqw of [5.8, 6.0, 6.2, 6.4, 6.6]) {
    await testOnPreview(cqw);
  }
}
run();

