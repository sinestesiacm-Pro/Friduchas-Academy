const fs = require('fs');

const jsPath = 'public/slides_data.js';
let js = fs.readFileSync(jsPath, 'utf8');

const newSlide9Render = `render: () => \`
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

            <!-- Main Title Area: Elegant Large Magazine Typography with Breathing Room (Does NOT touch the face) -->
            <div class="my-auto z-20 py-1 pl-2 max-w-[560px]">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: italic; font-size: 5.1rem; line-height: 0.94; letter-spacing: -0.02em;">
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

js = js.substring(0, s9RenderStart) + newSlide9Render + js.substring(s9RenderEnd);

fs.writeFileSync(jsPath, js, 'utf8');
console.log('Successfully updated Slide 09 in public/slides_data.js');

