const fs = require('fs');
const { execSync } = require('child_process');
const sharp = require('sharp');

// Let's test different font sizes for Slide 9 in Playfair Display
// We want "primo contatto" to get close to the chin (e.g. 20-30px away) but NEVER touch or overlap the chin!
// Let's render each candidate into dist/previews/test_s9_candidate.png and find the exact pixel coordinates of the letter 'o' vs the chin!

async function testCandidate(fontSizeRem, isItalic) {
  let s = fs.readFileSync('public/slides_data.js', 'utf8');
  
  // Replace font-size and font-style for slide 9
  const p = s.lastIndexOf('<!-- Main Title Area');
  const endP = s.lastIndexOf('<!-- Bottom Accent Bar');
  
  const fontStyle = isItalic ? 'italic' : 'normal';
  const newTitleBlock = `<!-- Main Title Area: Calibrated Playfair -->
            <div class="my-auto z-20 py-1 pl-2 max-w-[620px]">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: ${fontStyle}; font-size: ${fontSizeRem}rem; line-height: 0.94; letter-spacing: -0.02em;">
                La pelle<br>
                è il nostro<br>
                primo contatto<br>
                con il <span style="color: #a55572; font-style: italic;">mondo.</span>
              </h1>
            </div>\n\n            `;
            
  s = s.substring(0, p) + newTitleBlock + s.substring(endP);
  fs.writeFileSync('public/slides_data.js', s, 'utf8');

  // Render preview
  execSync('node scripts/render_slide09_preview.js', { stdio: 'pipe' });

  // Measure
  const img = sharp('dist/previews/slide_09.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  // Find rightmost text pixel of 'primo contatto' around y=360-460
  let maxTextX = 0, textY = 0;
  for (let y = 350; y <= 450; y++) {
    for (let x = 300; x < 700; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // White text
      if (r > 180 && g > 180 && b > 180 && Math.abs(r - g) < 15) {
        if (x > maxTextX) {
          maxTextX = x;
          textY = y;
        }
      }
    }
  }

  // Find skin of chin at that y level (textY - 30 to textY + 30)
  let minSkinX = w, skinY = 0;
  for (let y = textY - 25; y <= textY + 25; y++) {
    for (let x = 500; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Skin
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
  console.log(`[${fontSizeRem}rem, ${fontStyle}] -> Text ends at x=${maxTextX} (y=${textY}), Chin at x=${minSkinX} (y=${skinY}) => GAP: ${gap}px ${gap <= 0 ? '!!! OVERLAP/TOUCHING !!!' : 'CLEAR'}`);
  return { fontSizeRem, fontStyle, gap, maxTextX, minSkinX };
}

async function run() {
  console.log('--- Testing Normal Style ---');
  for (const size of [5.4, 5.2, 5.0, 4.8, 4.6, 4.4]) {
    await testCandidate(size, false);
  }
  console.log('--- Testing Italic Style ---');
  for (const size of [5.4, 5.2, 5.0, 4.8, 4.6, 4.4]) {
    await testCandidate(size, true);
  }
}
run();
