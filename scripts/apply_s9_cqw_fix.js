const fs = require('fs');

// 1. Update public/index.html: add container-type: inline-size to .slide-canvas
let html = fs.readFileSync('public/index.html', 'utf8');
html = html.replace('.slide-canvas {\n      width: 100%;\n      aspect-ratio: 16 / 9;\n      position: relative;\n      overflow: hidden;\n    }', 
`.slide-canvas {
      width: 100%;
      aspect-ratio: 16 / 9;
      position: relative;
      overflow: hidden;
      container-type: inline-size;
    }`);
fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Updated index.html with container-type: inline-size');

// 2. Update public/slides_data.js: Slide 09 definition
let js = fs.readFileSync('public/slides_data.js', 'utf8');

const s9Render = `render: () => \`
          <div class="w-full h-full bg-[#000000] relative flex flex-col justify-between p-[3.5cqw] select-none overflow-hidden text-white">
            <!-- Full-bleed Model Photo: Anchored to 100% right edge, zero black gap -->
            <div class="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden">
              <img src="img/slide09_model.jpg" 
                   alt="Profilo donna pelle luminosa su sfondo nero" 
                   class="w-full h-full object-cover object-right">
            </div>

            <!-- Top Header matching reference e4341e30 -->
            <div class="flex justify-between items-center z-20 w-full px-1">
              <p class="header-meta text-[#a89f97] text-[1.1cqw] tracking-[0.20em]">CONSULTA EDITORIALE PELLE</p>
              <p class="header-meta text-white font-bold text-[1.2cqw] tracking-wider">03</p>
            </div>

            <!-- Main Title Area: Sized proportionally with cqw so it approaches the chin but NEVER touches it -->
            <div class="my-auto z-20 py-1 pl-1 max-w-[48cqw]">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: normal; font-size: clamp(34px, 4.7cqw, 68px); line-height: 0.94; letter-spacing: -0.02em;">
                La pelle<br>
                è il nostro<br>
                primo contatto<br>
                con il <span style="color: #a55572; font-style: italic;">mondo.</span>
              </h1>
            </div>

            <!-- Bottom Accent Bar & Category matching reference -->
            <div class="flex flex-col space-y-[0.6cqw] z-20 pl-1">
              <div style="width: 3.5cqw; height: 2px; background: #a55572;"></div>
              <p class="header-meta text-[#a89f97] text-[1.0cqw] tracking-[0.22em] uppercase">ANALISOLA DELLA PELLE</p>
            </div>
          </div>
        \``;

const s9Index = js.indexOf("cat: 'SLIDE 09");
const s9RenderStart = js.indexOf("render: () => `", s9Index);
const s9RenderEnd = js.indexOf("`\n  }\n];", s9RenderStart) + 1;

js = js.substring(0, s9RenderStart) + s9Render + js.substring(s9RenderEnd);
fs.writeFileSync('public/slides_data.js', js, 'utf8');
console.log('Updated slides_data.js with Slide 09 CQW scaling');

// 3. Update preview_slide_09.html and scripts/capture_perfect_previews.js
let previewJs = fs.readFileSync('scripts/capture_perfect_previews.js', 'utf8');
previewJs = previewJs.replace('.serif-title { font-family: var(--font-serif); font-weight: 400; letter-spacing: -0.02em; }',
`.serif-title { font-family: var(--font-serif); font-weight: 400; letter-spacing: -0.02em; }
    .slide-canvas { container-type: inline-size; }`);
fs.writeFileSync('scripts/capture_perfect_previews.js', previewJs, 'utf8');
console.log('Updated capture_perfect_previews.js');
