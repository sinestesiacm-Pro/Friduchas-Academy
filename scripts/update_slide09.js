const fs = require('fs');

const jsPath = 'public/slides_data.js';
let js = fs.readFileSync(jsPath, 'utf8');

const newSlide9Render = `render: () => \`
          <div class="w-full h-full bg-[#000000] relative flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden text-white">
            <!-- Full-height Model Photo Positioned for Exact Profile Interaction -->
            <div class="absolute top-0 bottom-0 pointer-events-none select-none overflow-hidden z-10" 
                 style="right: 75px; height: 100%; width: 1180px;">
              <img src="img/slide09_model.jpg" 
                   alt="Profilo donna pelle luminosa su sfondo nero" 
                   class="h-full w-full object-cover object-right"
                   style="-webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, #000 28%); mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, #000 28%);">
            </div>

            <!-- Top Header matching reference 64a2f2e1 -->
            <div class="flex justify-between items-center z-20 w-full px-2">
              <p class="header-meta text-[#8c827a] text-xs tracking-[0.18em]">ISPREZZIONAMI SULLA PELLE</p>
              <p class="header-meta text-white font-bold text-sm tracking-wider">09</p>
            </div>

            <!-- Main Title Area: Enlarged Magazine Typography Grazing Model Profile -->
            <div class="my-auto z-20 py-1 pl-2">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: italic; font-size: 7.1rem; line-height: 0.89; letter-spacing: -0.025em;">
                La pelle<br>
                è il nostro<br>
                primo contatto<br>
                con il <span style="color: #a55572; font-style: italic;">mondo.</span>
              </h1>
            </div>

            <!-- Bottom Accent Bar & Category matching reference -->
            <div class="flex flex-col space-y-2.5 z-20 pl-2">
              <div style="width: 48px; height: 2px; background: #a55572;"></div>
              <p class="header-meta text-[#8c827a] text-[11px] tracking-[0.22em] uppercase">ANATOMIA DELLA PELLE</p>
            </div>
          </div>
        \``;

const s9Index = js.indexOf("cat: 'SLIDE 09");
const s9RenderStart = js.indexOf("render: () => `", s9Index);
const s9RenderEnd = js.indexOf("`\n      }\n    ];", s9RenderStart) + 1;

js = js.substring(0, s9RenderStart) + newSlide9Render + js.substring(s9RenderEnd);

fs.writeFileSync(jsPath, js, 'utf8');
console.log('Successfully updated Slide 09 in public/slides_data.js');
