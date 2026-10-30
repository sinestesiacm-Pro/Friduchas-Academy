const fs = require('fs');

const htmlPath = 'public/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace Slide 4 render function with the mathematically exact aligned container
const newSlide4Render = `render: () => \`
          <div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden text-[#171412]">
            <!-- Header matching reference -->
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">ANATOMIA DELLA PELLE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">04</strong></p>
            </div>

            <!-- Main Content Area: Zero Overflow, perfectly proportioned -->
            <div class="flex w-full items-center justify-between gap-8 my-auto z-10">
              <!-- Left Column (42%) -->
              <div class="w-[42%] flex flex-col gap-3">
                <h1 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] leading-[0.94] tracking-tight">
                  <span style="font-style: italic;">Gli strati</span><br><span class="pink-italic">della pelle</span>
                </h1>
                <p class="text-xs md:text-sm text-[#292524] max-w-sm leading-[1.45] font-normal">
                  La pelle è formata da <strong style="color: #d8318a; font-weight: 600;">tre strati</strong> principali, ognuno con funzioni specifiche e fondamentali.
                </p>

                <div class="flex flex-col space-y-3 mt-1">
                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                      <p class="text-sm md:text-base font-bold text-[#1c1917] leading-none">Epidermide</p>
                      <p class="text-xs text-[#57534e] mt-0.5">(strato più superficiale)</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-water"></i>
                    </div>
                    <div>
                      <p class="text-sm md:text-base font-bold text-[#1c1917] leading-none">Derma</p>
                      <p class="text-xs text-[#57534e] mt-0.5">(strato intermedio — target PMU)</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-braille"></i>
                    </div>
                    <div>
                      <p class="text-sm md:text-base font-bold text-[#1c1917] leading-none">Ipoderma</p>
                      <p class="text-xs text-[#57534e] mt-0.5">(tessuto sottocutaneo)</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Center/Right: Perfectly Sized 3D Skin Cutaway with 100% Mathematically Aligned Brackets (58%) -->
              <div class="w-[58%] flex items-center justify-center">
                <div class="relative flex items-center" style="height: 310px;">
                  <!-- 3D Skin Cube (Constrained to 310px height, clean breathing room) -->
                  <img src="img/anatomy_skin_3d_cube.png" 
                       class="h-full w-auto select-none pointer-events-none" 
                       style="filter: drop-shadow(0 16px 28px rgba(0,0,0,0.10));"
                       alt="3D Skin Cutaway Pro">

                  <!-- Exact Layer-Aligned Brackets Container matching the 310px height -->
                  <div class="relative h-full flex flex-col justify-start ml-3 select-none" style="width: 140px;">
                    <!-- Hair Spacer (16.6%) -->
                    <div style="height: 16.6%;"></div>

                    <!-- Epidermide Bracket (16.1%) -->
                    <div style="height: 16.1%;" class="flex items-center space-x-2.5">
                      <svg width="10" height="100%" viewBox="0 0 10 100" preserveAspectRatio="none" fill="none" class="h-full w-2.5 flex-shrink-0">
                        <path d="M1 2 H8 V98 H1" stroke="#d8318a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="font-bold text-sm tracking-tight text-[#1c1917]">Epidermide</span>
                    </div>

                    <!-- Derma Bracket (33.7%) -->
                    <div style="height: 33.7%;" class="flex items-center space-x-2.5">
                      <svg width="10" height="100%" viewBox="0 0 10 100" preserveAspectRatio="none" fill="none" class="h-full w-2.5 flex-shrink-0">
                        <path d="M1 2 H8 V98 H1" stroke="#d8318a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="font-bold text-sm tracking-tight text-[#1c1917]">Derma</span>
                    </div>

                    <!-- Ipoderma Bracket (17.6%) -->
                    <div style="height: 17.6%;" class="flex items-center space-x-2.5">
                      <svg width="10" height="100%" viewBox="0 0 10 100" preserveAspectRatio="none" fill="none" class="h-full w-2.5 flex-shrink-0">
                        <path d="M1 2 H8 V98 H1" stroke="#d8318a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="font-bold text-sm tracking-tight text-[#1c1917]">Ipoderma</span>
                    </div>

                    <!-- Bottom Spacer (16.0%) -->
                    <div style="height: 16.0%;"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Line & Category -->
            <div class="flex items-center space-x-3">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">ANATOMIA DELLA PELLE</p>
            </div>
          </div>
        \``;

// Replace Slide 6 render function with the high-res extracted micrographs and clean editorial styling
const newSlide6Render = `render: () => \`
          <div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden text-[#171412]">
            <!-- Header -->
            <div class="flex justify-between items-start z-20">
              <div>
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-2 leading-[0.96]">
                  <span style="font-style: italic;">Le cellule</span><br><span class="pink-italic">principali</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] max-w-lg leading-[1.45]">
                  Le cellule di tipo diverso, ognuna con un ruolo specifico che garantisce il corretto funzionamento della pelle.
                </p>
              </div>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">06</strong></p>
            </div>

            <!-- 4 Microscope Circles: High-Res Real Cutouts from Reference Image -->
            <div class="grid grid-cols-4 gap-4 my-auto pt-2 w-full items-center">
              <!-- Cell 1: Cheratinociti -->
              <div class="flex flex-col items-center text-center">
                <div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden p-0.5 bg-white border-2 border-[#f48fb1]/60 shadow-[0_8px_20px_rgba(216,49,138,0.12)] mb-3 flex items-center justify-center">
                  <img src="img/cell_keratinocyte_pro.png" class="w-full h-full object-cover" alt="Cheratinociti">
                </div>
                <h3 class="text-sm md:text-base font-bold text-[#1c1917] mb-0.5">Cheratinociti</h3>
                <p class="text-[11px] md:text-xs text-[#57534e]">I cheratinociti formano lo strato</p>
              </div>

              <!-- Cell 2: Melanociti -->
              <div class="flex flex-col items-center text-center">
                <div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden p-0.5 bg-white border-2 border-[#f48fb1]/60 shadow-[0_8px_20px_rgba(216,49,138,0.12)] mb-3 flex items-center justify-center">
                  <img src="img/cell_melanocyte_pro.png" class="w-full h-full object-cover" alt="Melanociti">
                </div>
                <h3 class="text-sm md:text-base font-bold text-[#1c1917] mb-0.5">Melanociti</h3>
                <p class="text-[11px] md:text-xs text-[#57534e]">Sintetizzano la melanina</p>
              </div>

              <!-- Cell 3: Fibroblasti -->
              <div class="flex flex-col items-center text-center">
                <div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden p-0.5 bg-white border-2 border-[#f48fb1]/60 shadow-[0_8px_20px_rgba(216,49,138,0.12)] mb-3 flex items-center justify-center">
                  <img src="img/cell_fibroblast_pro.png" class="w-full h-full object-cover" alt="Fibroblasti">
                </div>
                <h3 class="text-sm md:text-base font-bold text-[#1c1917] mb-0.5">Fibroblasti</h3>
                <p class="text-[11px] md:text-xs text-[#57534e]">Produzione di collagene ed elastina</p>
              </div>

              <!-- Cell 4: Cellule di Langerhans (with elegant divider before it) -->
              <div class="flex flex-col items-center text-center relative">
                <!-- Hairline vertical divider on the left of cell 4 as in reference -->
                <div class="hidden md:block absolute -left-2 top-4 bottom-4 w-[1px] bg-[#e7e5e4]"></div>
                <div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden p-0.5 bg-white border-2 border-[#f48fb1]/60 shadow-[0_8px_20px_rgba(216,49,138,0.12)] mb-3 flex items-center justify-center">
                  <img src="img/cell_langerhans_pro.png" class="w-full h-full object-cover" alt="Cellule di Langerhans">
                </div>
                <h3 class="text-sm md:text-base font-bold text-[#1c1917] mb-0.5">Cellule di Langerhans</h3>
                <p class="text-[11px] md:text-xs text-[#57534e]">Difesa immunitaria cutanea</p>
              </div>
            </div>

            <!-- Bottom Line & Category -->
            <div class="flex items-center space-x-3">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">ANATOMIA DELLA PELLE</p>
            </div>
          </div>
        \``;

// Find Slide 04 block
const s4Index = html.indexOf("cat: 'SLIDE 04 (REF 4)");
const s4RenderStart = html.indexOf("render: () => `", s4Index);
const s4RenderEnd = html.indexOf("`\n      },", s4RenderStart) + 1;

html = html.substring(0, s4RenderStart) + newSlide4Render + html.substring(s4RenderEnd);

// Find Slide 06 block
const s6Index = html.indexOf("cat: 'SLIDE 06 (REF 6)");
const s6RenderStart = html.indexOf("render: () => `", s6Index);
const s6RenderEnd = html.indexOf("`\n      },", s6RenderStart) + 1;

html = html.substring(0, s6RenderStart) + newSlide6Render + html.substring(s6RenderEnd);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Successfully updated Slide 04 and Slide 06 in public/index.html');

