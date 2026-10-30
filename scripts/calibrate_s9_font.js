const fs = require('fs');
const { execSync } = require('child_process');
const sharp = require('sharp');

const jsPath = 'public/slides_data.js';

function setFontSize(remSize) {
  let js = fs.readFileSync(jsPath, 'utf8');

  const html = `render: () => \`
          <div class="w-full h-full bg-[#000000] relative flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden text-white">
            <!-- Full-bleed Model Photo: Anchored to 100% right edge, zero black gap -->
            <div class="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden">
              <img src="img/slide09_model.jpg" 
                   alt="Profilo donna pelle luminosa su sfondo nero" 
                   class="w-full h-full object-cover object-right">
            </div>

            <!-- Top Header matching reference e4341e30 -->
            <div class="flex justify-between items-center z-20 w-full px-2">
              <p class="header-meta text-[#a89f97] text-xs tracking-[0.20em]">CONSULTA EDITORIALE PELLE</p>
              <p class="header-meta text-white font-bold text-sm tracking-wider">03</p>
            </div>

            <!-- Main Title Area: Sized at ${remSize}rem -->
            <div class="my-auto z-20 py-1 pl-2 max-w-[680px]">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: italic; font-size: ${remSize}rem; line-height: 0.92; letter-spacing: -0.02em;">
                La pelle<br>
                è il nostro<br>
                primo contatto<br>
                con il <span style="color: #a55572; font-style: italic;">mondo.</span>
              </h1>
            </div>

            <!-- Bottom Accent Bar & Category matching reference -->
            <div class="flex flex-col space-y-2.5 z-20 pl-2">
              <div style="width: 44px; height: 2px; background: #a55572;"></div>
              <p class="header-meta text-[#a89f97] text-[11px] tracking-[0.22em] uppercase">ANALISOLA DELLA PELLE</p>
            </div>
          </div>
        \``;

  const s9Index = js.indexOf("cat: 'SLIDE 09");
  const s9RenderStart = js.indexOf("render: () => `", s9Index);
  const s9RenderEnd = js.indexOf("`\n      }\n    ];", s9RenderStart) + 1;

  js = js.substring(0, s9RenderStart) + html + js.substring(s9RenderEnd);
  fs.writeFileSync(jsPath, js, 'utf8');
}

async function testFontSize(remSize) {
  setFontSize(remSize);
  execSync('node scripts/render_slide09_preview.js', { stdio: 'inherit' });

  const img = sharp('dist/previews/slide_09.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;

  let textRightX = 0, textY = 0;
  for (let y = 330; y <= 450; y++) {
    for (let x = 300; x < 700; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 180 && g > 180 && b > 180 && Math.abs(r - g) < 15) {
        if (x > textRightX) {
          textRightX = x;
          textY = y;
        }
      }
    }
  }

  let skinLeftX = w;
  for (let y = 330; y <= 450; y++) {
    for (let x = textRightX; x < w; x++) {
      const idx = (y * w + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 80 && g > 45 && b > 30 && r > b + 20) {
        if (x < skinLeftX) skinLeftX = x;
        break;
      }
    }
  }

  console.log(`>>> Size ${remSize}rem: textRightX=${textRightX}, skinLeftX=${skinLeftX}, GAP=${skinLeftX - textRightX}px`);
}

async function run() {
  for (const s of [5.6, 5.8, 6.0]) {
    await testFontSize(s);
  }
}
run();
