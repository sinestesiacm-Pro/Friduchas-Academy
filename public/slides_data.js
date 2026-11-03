window.slideDefinitions = [
  {
    num: '01',
    cat: 'SLIDE 01 (REF 1) — APERTURA',
    title: 'Anatomia della pelle',
    desc: 'Cormorant Garamond con corsivo magenta su «pelle», pennellata soft rose e livello modella 3D.',
    thumb: 'ref_crops/ref_slide_01.png',
    refCrop: 'ref_crops/ref_slide_01.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <!-- Left Column (54%) -->
            <div class="w-[54%] h-full flex flex-col justify-between pr-4 z-20">
              <div>
                <p class="header-meta">ANATOMIA DELLA PELLE</p>
              </div>

              <div class="my-auto py-2">
                <!-- Soft pink brush-stroke accent SVG -->
                <svg width="68" height="22" viewBox="0 0 68 22" class="mb-4">
                  <path d="M4,15 Q28,3 62,8 Q45,16 12,18 Z" fill="#f48fb1" opacity="0.75"></path>
                  <path d="M10,12 Q34,5 54,9" stroke="#d8318a" stroke-width="2.5" stroke-linecap="round" fill="none"></path>
                </svg>

                <h1 class="serif-title text-5xl md:text-6xl lg:text-[5.5rem] text-[#171412] leading-[0.94] tracking-tight mb-5">
                  Anatomia<br>della <span class="pink-italic">pelle</span>
                </h1>
                <p class="text-sm md:text-base text-[#292524] max-w-md font-normal leading-[1.45]">
                  Conoscere la struttura della pelle<br>è il <span style="color: #d8318a; font-weight: 600;">primo passo</span> per comprendere<br>come lavorare in modo sicuro,<br>consapevole e professionale.
                </p>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-10 h-[2px] bg-[#d8318a]"></div>
                <p class="header-meta text-[#78716c]">FRIDUCHAS ACADEMY</p>
              </div>
            </div>

            <!-- Right 3D Motion Graphics Floating Layer (Cutout Model with organic pink background and soft realistic shadow) -->
            <div class="absolute right-0 top-0 bottom-0 w-[50%] overflow-visible flex items-center justify-end z-10 pointer-events-none">
              <img src="img/slide01_model_layer.png" 
                   class="h-full w-full object-cover object-right"
                   style="filter: drop-shadow(-28px 16px 45px rgba(0, 0, 0, 0.22)) drop-shadow(-12px 6px 20px rgba(216, 49, 138, 0.25));" 
                   alt="Motion Graphics 3D Cutout Beauty Model">
            </div>
          </div>`
  },
  {
    num: '02',
    cat: 'SLIDE 02 (REF 2) — AGENDA',
    title: 'Cosa vedremo in questo capitolo',
    desc: 'Lista numerata con sfumatura fucsia editoriale e texture crema cosmetica a taglio obliquo.',
    thumb: 'ref_crops/ref_slide_02.png',
    refCrop: 'ref_crops/ref_slide_02.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">ANATOMIA DELLA PELLE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">02</strong></p>
            </div>

            <div class="flex w-full flex-grow items-stretch my-auto z-10">
              <div class="w-[56%] flex flex-col justify-between pr-6 my-auto py-2">
                <div>
                  <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-6 leading-[0.96]">
                    Cosa vedremo<br>in questo <span class="pink-italic">capitolo</span>
                  </h2>

                  <div class="flex flex-col space-y-3.5">
                    <div class="flex items-center space-x-5">
                      <span class="text-xl md:text-2xl font-semibold text-[#c0568f] min-w-[36px]">01</span>
                      <span class="text-base md:text-lg font-medium text-[#1c1917]">La struttura della pelle</span>
                    </div>
                    <div class="flex items-center space-x-5">
                      <span class="text-xl md:text-2xl font-semibold text-[#c0568f] min-w-[36px]">02</span>
                      <span class="text-base md:text-lg font-medium text-[#1c1917]">Gli strati cutanei</span>
                    </div>
                    <div class="flex items-center space-x-5">
                      <span class="text-xl md:text-2xl font-semibold text-[#c0568f] min-w-[36px]">03</span>
                      <span class="text-base md:text-lg font-medium text-[#1c1917]">Le funzioni della pelle</span>
                    </div>
                    <div class="flex items-center space-x-5">
                      <span class="text-xl md:text-2xl font-semibold text-[#c0568f] min-w-[36px]">04</span>
                      <span class="text-base md:text-lg font-medium text-[#1c1917]">Le cellule principali</span>
                    </div>
                    <div class="flex items-center space-x-5">
                      <span class="text-xl md:text-2xl font-semibold text-[#c0568f] min-w-[36px]">05</span>
                      <span class="text-base md:text-lg font-medium text-[#1c1917]">Gli annessi cutanei</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Diagonal Velvet Swatch Texture -->
              <div class="w-[44%] h-full relative overflow-hidden cut-slide2-swatch shadow-inner">
                <img src="img/ai_texture_cream.jpg" class="w-full h-full object-cover" alt="Cosmetic cream texture">
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">ANATOMIA DELLA PELLE</p>
            </div>
          </div>`
  },
  {
    num: '03',
    cat: 'SLIDE 03 (REF 3) — ORGANO COMPLESSO',
    title: 'La pelle: un organo complesso',
    desc: 'Composizione asimmetrica con 4 icone scientifiche in badge fucsia e ritaglio diagonale della modella.',
    thumb: 'ref_crops/ref_slide_03.png',
    refCrop: 'ref_crops/ref_slide_03.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <!-- Left Column (54%) -->
            <div class="w-[54%] h-full flex flex-col justify-center pr-4 z-20">
              <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.5rem] text-[#171412] leading-[0.96] mb-4">
                <span style="font-style: italic;">La pelle:</span><br>
                <span class="pink-roman">un organo<br>complesso</span>
              </h2>

              <p class="text-xs md:text-sm text-[#292524] mb-5 max-w-md leading-[1.45]">
                La pelle è l'organo più esteso del nostro corpo, costituisce una barriera protettiva contro gli agenti esterni, chimici e fisici, e l'invasione dei patogeni. È inoltre coinvolta in molte funzioni importanti, tra cui:
              </p>

              <!-- 4 Feature Items with FontAwesome Badges -->
              <div class="flex flex-col space-y-2.5 max-w-sm">
                <div class="flex items-center space-x-3.5">
                  <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                    <i class="fa-solid fa-shield-halved"></i>
                  </div>
                  <p class="text-xs md:text-sm font-medium text-[#1c1917]">Protegge dagli agenti esterni</p>
                </div>

                <div class="flex items-center space-x-3.5">
                  <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                    <i class="fa-solid fa-temperature-half"></i>
                  </div>
                  <p class="text-xs md:text-sm font-medium text-[#1c1917]">Regola la temperatura corporea</p>
                </div>

                <div class="flex items-center space-x-3.5">
                  <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                    <i class="fa-solid fa-hand-dots"></i>
                  </div>
                  <p class="text-xs md:text-sm font-medium text-[#1c1917]">Permette la percezione sensoriale</p>
                </div>

                <div class="flex items-center space-x-3.5">
                  <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                    <i class="fa-solid fa-scale-balanced"></i>
                  </div>
                  <p class="text-xs md:text-sm font-medium text-[#1c1917]">Partecipa all’omeostasi</p>
                </div>
              </div>
            </div>

            <!-- Right 3D Motion Graphics Floating Layer (Clean Model with Diagonal Pink Plane) -->
            <div class="absolute right-0 top-0 bottom-0 w-[54%] overflow-visible flex items-center justify-end z-10 pointer-events-none">
              <img src="img/slide03_model_layer.png" 
                   class="h-full w-full object-cover object-right"
                   style="filter: drop-shadow(-24px 14px 40px rgba(0, 0, 0, 0.18)) drop-shadow(-10px 6px 18px rgba(216, 49, 138, 0.22));" 
                   alt="Motion Graphics 3D Model Shoulder Layer">
            </div>
          </div>`
  },
  {
    num: '04',
    cat: 'SLIDE 04 (REF 4) — ANATOMIA 3D',
    title: 'Gli strati della pelle',
    desc: 'Illustrazione 3D medica del blocco cutaneo perfettamente proporzionata, senza sbordature, con staffe rosa allineate.',
    thumb: 'ref_crops/ref_slide_04.png',
    refCrop: 'ref_crops/ref_slide_04.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden text-[#171412]">
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
                  Gli strati<br><span class="pink-italic">della pelle</span>
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
          </div>`
  },
  {
    num: '05',
    cat: 'SLIDE 05 (REF 5) — STATEMENT BLUSH',
    title: '«La pelle non è solo ciò che vediamo, ma tutto ciò che fa per noi.»',
    desc: 'Fondo rosa blush (#F1B5CB), testo editoriale gigante con accento antique rose (#a55572) e macro originale della modella.',
    thumb: 'ref_crops/ref_slide_05.png',
    refCrop: 'ref_crops/ref_slide_05.png',
    render: () => `<div class="w-full h-full relative flex p-0 select-none overflow-hidden text-[#0b090a]" style="background-color: #F1B5CB;">
            <!-- Top Right Slide Number matching reference -->
            <div class="absolute top-7 right-10 text-xs md:text-sm font-bold tracking-wider text-[#3d2b27] z-30">
              05
            </div>

            <div class="flex w-full h-full items-stretch">
              <!-- Left Column (48%) — Giant Magazine Editorial Typography -->
              <div class="w-[48%] p-10 md:p-14 flex flex-col justify-between z-20">
                <div></div>

                <div class="my-auto py-2">
                  <h2 style="line-height:1.15" class="serif-title text-3xl md:text-4xl lg:text-[3.25rem] text-[#0b090a] font-normal leading-[1.12] tracking-tight mb-5">
                    La pelle non è solo<br>ciò che vediamo,
                  </h2>

                  <h1 class="serif-title text-6xl md:text-7xl lg:text-[5.4rem] leading-[1.0] text-[#a55572] font-normal tracking-tight" style="font-style: italic;">
                    ma tutto<br>ciò che<br>fa per noi.
                  </h1>
                </div>

                <!-- Bottom Line & Tag -->
                <div class="flex items-center space-x-3 mt-4">
                  <div style="width: 44px; height: 2px; background: #a55572;"></div>
                  <p class="header-meta text-[#3d2b27] text-[10px] md:text-[11px] tracking-[0.22em] font-semibold uppercase">
                    PADOVANI PER DELLA PELLE
                  </p>
                </div>
              </div>

              <!-- Right Column (54%) with Seamless Feathered Macro Face -->
              <div class="absolute right-0 top-0 bottom-0 w-[54%] h-full overflow-hidden flex z-10 pointer-events-none"
                   style="-webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 8%, #000 20%); mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 8%, #000 20%);">
                <img src="img/slide05_macro_model.jpg" 
                     alt="Dettaglio macro occhio e pelle con lentiggini" 
                     class="w-full h-full object-cover object-right">
              </div>
            </div>
          </div>`
  },
  {
    num: '06',
    cat: 'SLIDE 06 (REF 6) — CELLULE PRINCIPALI',
    title: 'Le cellule principali',
    desc: '4 micrografie reali ad alta risoluzione con cornici circolari rosa (#f48fb1) e tipografia Cormorant.',
    thumb: 'ref_crops/ref_slide_06.png',
    refCrop: 'ref_crops/ref_slide_06.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden text-[#171412]">
            <!-- Header -->
            <div class="flex justify-between items-start z-20">
              <div>
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-2 leading-[0.96]">
                  Le cellule<br><span class="pink-italic">principali</span>
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
          </div>`
  },
  {
    num: '07',
    cat: 'SLIDE 07 (REF 7) — ANNESSI CUTANEI',
    title: 'Gli annessi cutanei',
    desc: '4 elementi con icone SVG e macro occhio ad alta risoluzione originale Canva con taglio diagonale.',
    thumb: 'ref_crops/ref_slide_07.png',
    refCrop: 'ref_crops/ref_slide_07.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <!-- Sfondo ad alta definizione con macro occhio e taglio diagonale originale -->
            <img src="img/slide07_macro_eye.jpg" class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0" style="object-position: right bottom;" alt="Macro occhio e annessi cutanei">

            <div class="flex justify-between items-center z-20">
              <p class="header-meta">ANATOMIA DELLA PELLE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">07</strong></p>
            </div>

            <div class="flex w-full flex-grow items-center my-auto z-10">
              <div class="w-[58%] max-w-xl flex flex-col justify-center pr-6 py-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-3 leading-[0.96]">
                  Gli annessi <span class="pink-italic">cutanei</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-6 max-w-md leading-[1.45]">
                  Gli annessi cutanei sono strutture connesse alla pelle e che partecipano alla sua funzione, contribuendo alla...
                </p>

                <!-- 4 Items with SVG Icons -->
                <div class="flex flex-col space-y-3.5 max-w-sm">
                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-feather"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Peli</h4>
                      <p class="text-xs text-[#57534e]">Proteggono da insulti termici</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-hand-sparkles"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Unghie</h4>
                      <p class="text-xs text-[#57534e]">Proteggono da traumi</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-droplet"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Ghiandole sebacee</h4>
                      <p class="text-xs text-[#57534e]">Lubrificano ed isolano</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-temperature-arrow-down"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Ghiandole sudoripare</h4>
                      <p class="text-xs text-[#57534e]">Regolano il microclima cutaneo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">ANATOMIA DELLA PELLE</p>
            </div>
          </div>`
  },
  {
    num: '08',
    cat: 'SLIDE 08 (REF 8) — LE FUNZIONI DELLA PELLE',
    title: 'Le funzioni della pelle',
    desc: 'Diagramma a 4 petali concentrici di Venn in trasparenza rosa con citazione in corsivo magenta.',
    thumb: 'ref_crops/ref_slide_08.png',
    refCrop: 'ref_crops/ref_slide_08.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">ANATOMIA DELLA PELLE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">08</strong></p>
            </div>

            <div class="flex w-full flex-grow items-center justify-between gap-10 my-auto z-10">
              <div class="w-[52%] flex flex-col justify-center">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-4 leading-[0.96]">
                  Le funzioni<br><span class="pink-italic">della pelle</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-5 max-w-md leading-[1.45]">
                  La pelle è un organo complesso che lavora instancabilmente per proteggerci, regolare la temperatura e permettere la percezione sensoriale.
                </p>
                <p class="serif-title text-xl md:text-2xl text-[#d8318a] italic">
                  Conoscila, amala<br>e proteggila sempre.
                </p>
              </div>

              <!-- Right 4-petal Venn Diagram -->
              <div class="w-[48%] flex items-center justify-center relative">
                <div class="relative w-64 h-64 md:w-80 md:h-80">
                  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#fbcfe8]/50 border border-[#f48fb1]/60 flex items-center justify-center text-[10px] md:text-xs font-semibold text-[#1c1917] text-center p-2">Protezione</div>
                  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#fbcfe8]/50 border border-[#f48fb1]/60 flex items-center justify-center text-[10px] md:text-xs font-semibold text-[#1c1917] text-center p-2">Sensorialità</div>
                  <div class="absolute left-0 top-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#fbcfe8]/50 border border-[#f48fb1]/60 flex items-center justify-center text-[10px] md:text-xs font-semibold text-[#1c1917] text-center p-2">Termoregolazione</div>
                  <div class="absolute right-0 top-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#fbcfe8]/50 border border-[#f48fb1]/60 flex items-center justify-center text-[10px] md:text-xs font-semibold text-[#1c1917] text-center p-2">Omeostasi</div>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">ANATOMIA DELLA PELLE</p>
            </div>
          </div>`
  },
  {
    num: '09',
    cat: 'SLIDE 09 (REF 9) — STATEMENT OBSIDIAN (1:1 CORRETTA)',
    title: '«La pelle è il nostro primo contatto con il mondo.»',
    desc: 'Sfondo nero puro con modella a tutto schermo fino al bordo destro, testo grande editoriale senza toccare il viso.',
    thumb: 'ref_crops/ref_slide_09.png',
    refCrop: 'ref_crops/ref_slide_09.png',
    render: () => `
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

            <!-- Main Title Area: Calibrated Grand Editorial -->
            <div class="my-auto z-20 py-1 pl-2 max-w-[560px]">
              <h1 class="serif-title text-white font-normal select-none" 
                  style="font-style: normal; font-size: 4.85rem; line-height: 0.93; letter-spacing: -0.02em;">
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
        `
  },
  {
    num: '10',
    cat: 'MODULO 1 | FOUNDATION 10',
    title: 'La profondità ideale del pigmento',
    desc: 'Target biologico nel derma papillare (0.08–0.15 mm). Differenza tra impianto superficiale, target PMU e profondità eccessiva.',
    thumb: 'img/anatomy_skin_3d_cube.png',
    refCrop: 'ref_crops/ref_slide_04.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">ANATOMIA &bull; PROFONDITÀ CLINICA</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">10</strong></p>
            </div>

            <div class="flex w-full flex-grow items-center my-auto z-10 gap-8">
              <!-- Left Column: 55% Content -->
              <div class="w-[55%] flex flex-col justify-center pr-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-3 leading-[0.96]">
                  La profondità <span class="pink-italic">ideale</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-5 max-w-lg leading-[1.5]">
                  Nel PMU le frazioni di millimetro determinano il destino del pigmento. L'obiettivo biologico è alloggiare le particelle nel derma papillare senza oltrepassare la membrana basale profonda.
                </p>

                <!-- 3 Depth Tiers Cards -->
                <div class="flex flex-col space-y-3 max-w-lg">
                  <!-- Tier 1 -->
                  <div class="bg-white/90 border border-[#e7e5e4] rounded-xl p-3 shadow-sm flex items-start space-x-3.5">
                    <div class="w-7 h-7 rounded-full bg-[#f3f4f6] text-[#78716c] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      <i class="fa-solid fa-arrow-up"></i>
                    </div>
                    <div>
                      <div class="flex items-center space-x-2 mb-0.5">
                        <h4 class="text-xs font-bold text-[#1c1917] uppercase tracking-wide">Troppo Superficiale &bull; Epidermide</h4>
                        <span class="text-[10px] font-semibold text-[#a8a29e]">&lt; 0.05 mm</span>
                      </div>
                      <p class="text-[11px] text-[#57534e] leading-snug">Espulsione rapida con il fisiologico turnover cellulare (28 giorni). Il colore svanisce precocemente e a chiazze.</p>
                    </div>
                  </div>

                  <!-- Tier 2 (Target) -->
                  <div class="bg-gradient-to-r from-[#fdf2f8] to-white border-2 border-[#d8318a] rounded-xl p-3.5 shadow-md flex items-start space-x-3.5 relative overflow-hidden">
                    <div class="w-7 h-7 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold shadow">
                      <i class="fa-solid fa-check"></i>
                    </div>
                    <div>
                      <div class="flex items-center space-x-2 mb-0.5">
                        <h4 class="text-xs font-extrabold text-[#d8318a] uppercase tracking-wide">Target Aureo PMU &bull; Derma Papillare</h4>
                        <span class="text-[10px] font-bold text-[#d8318a]">0.08 – 0.15 mm</span>
                      </div>
                      <p class="text-[11px] text-[#1c1917] font-medium leading-snug">Stabilità cromatica, minima reazione flogistica, ottima ritenzione del pixel e degradazione progressiva senza viraggi.</p>
                    </div>
                  </div>

                  <!-- Tier 3 -->
                  <div class="bg-white/90 border border-[#e7e5e4] rounded-xl p-3 shadow-sm flex items-start space-x-3.5">
                    <div class="w-7 h-7 rounded-full bg-[#fee2e2] text-[#ef4444] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      <i class="fa-solid fa-arrow-down"></i>
                    </div>
                    <div>
                      <div class="flex items-center space-x-2 mb-0.5">
                        <h4 class="text-xs font-bold text-[#1c1917] uppercase tracking-wide">Troppo Profondo &bull; Derma Reticolare</h4>
                        <span class="text-[10px] font-semibold text-[#a8a29e]">&gt; 0.40 mm</span>
                      </div>
                      <p class="text-[11px] text-[#57534e] leading-snug">Viraggio grigio/bluastro (Effetto Tyndall), migrazione laterale dell'inchiostro (*blow-out*) e micro-cicatrizzazione.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column: 45% Histological Diagram -->
              <div class="w-[45%] flex items-center justify-center">
                <div class="w-full max-w-md bg-white p-6 rounded-2xl border border-[#e7e5e4] shadow-xl relative">
                  <div class="flex justify-between items-center mb-4">
                    <h4 class="serif-title text-xl text-[#171412]">Sezione Istologica dell'Impianto</h4>
                    <span class="text-[10px] uppercase tracking-widest text-[#d8318a] font-bold">Micro-Target</span>
                  </div>
                  
                  <div class="w-full h-52 relative rounded-xl overflow-hidden border border-[#e7e5e4] flex flex-col">
                    <!-- Layer 1: Epidermide -->
                    <div class="h-[25%] bg-[#ffe4e6] border-b border-[#fda4af] flex items-center justify-between px-4">
                      <span class="text-[10px] font-bold text-[#9f1239] uppercase tracking-wider">Epidermide (0.05 mm)</span>
                      <span class="text-[9px] text-[#be123c] font-medium">Turnover continuo</span>
                    </div>
                    <!-- Layer 2: Derma Papillare -->
                    <div class="h-[38%] bg-[#fdf2f8] border-b-2 border-dashed border-[#d8318a] flex items-center justify-between px-4 relative">
                      <div class="flex items-center space-x-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-[#d8318a]"></span>
                        <span class="text-[11px] font-extrabold text-[#831843] uppercase tracking-wider">Derma Papillare</span>
                      </div>
                      <span class="px-2 py-0.5 rounded bg-[#d8318a] text-white text-[9px] font-bold uppercase tracking-wider">Target PMU</span>
                    </div>
                    <!-- Layer 3: Derma Reticolare -->
                    <div class="h-[37%] bg-[#f5f5f4] flex items-center justify-between px-4">
                      <span class="text-[10px] font-bold text-[#57534e] uppercase tracking-wider">Derma Reticolare / Ipoderma</span>
                      <span class="text-[9px] text-[#dc2626] font-semibold">Zona a rischio</span>
                    </div>
                  </div>

                  <p class="text-[11px] text-center text-[#78716c] mt-3.5 italic leading-tight">
                    «Una mano leggera e la giusta angolazione a 90° garantiscono che l'ago sfiori il derma senza violarlo.»
                  </p>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">ANATOMIA DELLA PELLE</p>
            </div>
          </div>`
  },

  {
    num: '11',
    cat: 'SLIDE 11 (REF) — PROCESSO DI GUARIGIONE',
    title: 'Il ciclo di guarigione della pelle',
    desc: 'Le 4 fasi biologiche del post-trattamento (G1-3 Ossidazione, G4-7 Desquamazione, G8-14 Ghost Phase, G28 Stabilizzazione).',
    thumb: 'img/diagram_healing_cycle.png',
    refCrop: 'ref_crops/ref_slide_01.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">FISIOLOGIA &bull; PROCESSO CLINICO</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">11</strong></p>
            </div>

            <div class="flex w-full flex-grow flex-col justify-center my-auto z-10 py-2">
              <div class="mb-5 max-w-2xl">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4rem] text-[#171412] mb-2 leading-[0.96]">
                  Il ciclo di <span class="pink-italic">guarigione</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] leading-[1.45]">
                  La rigenerazione tissutale richiede 28 giorni. Informare la cliente su queste 4 fasi evita ansie ingiustificate durante il naturale schiarimento del colore.
                </p>
              </div>

              <!-- 4 Sequential Phase Cards -->
              <div class="grid grid-cols-4 gap-4 w-full">
                <!-- Phase 1 -->
                <div class="bg-white p-4 rounded-xl border border-[#e7e5e4] shadow-sm flex flex-col justify-between">
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-[11px] font-bold text-[#d8318a] uppercase tracking-wider">FASE 01</span>
                      <span class="text-[10px] font-semibold text-[#78716c]">Giorno 1 – 3</span>
                    </div>
                    <h4 class="text-sm font-bold text-[#1c1917] mb-1.5">Micro-trauma & Ossidazione</h4>
                    <p class="text-[11px] text-[#57534e] leading-relaxed">
                      Il colore appare più scuro del 30–40% per l'ossidazione superficiale del pigmento e l'iperemia locale.
                    </p>
                  </div>
                  <div class="mt-3 pt-2 border-t border-[#f5f5f4] text-[10px] text-[#d8318a] font-medium">
                    &bull; Lieve edema &bull; Colore intenso
                  </div>
                </div>

                <!-- Phase 2 -->
                <div class="bg-white p-4 rounded-xl border border-[#e7e5e4] shadow-sm flex flex-col justify-between">
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-[11px] font-bold text-[#d8318a] uppercase tracking-wider">FASE 02</span>
                      <span class="text-[10px] font-semibold text-[#78716c]">Giorno 4 – 7</span>
                    </div>
                    <h4 class="text-sm font-bold text-[#1c1917] mb-1.5">Desquamazione</h4>
                    <p class="text-[11px] text-[#57534e] leading-relaxed">
                      Formazione e distacco spontaneo di micro-crosticine. È severamente vietato grattare o asportare le pellicine.
                    </p>
                  </div>
                  <div class="mt-3 pt-2 border-t border-[#f5f5f4] text-[10px] text-[#e11d48] font-medium">
                    &bull; Divieto di strappo &bull; Idratazione
                  </div>
                </div>

                <!-- Phase 3 -->
                <div class="bg-white p-4 rounded-xl border border-[#e7e5e4] shadow-sm flex flex-col justify-between">
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-[11px] font-bold text-[#d8318a] uppercase tracking-wider">FASE 03</span>
                      <span class="text-[10px] font-semibold text-[#78716c]">Giorno 8 – 14</span>
                    </div>
                    <h4 class="text-sm font-bold text-[#1c1917] mb-1.5">Ghost Phase (Schiarimento)</h4>
                    <p class="text-[11px] text-[#57534e] leading-relaxed">
                      Il pigmento sembra "sparito". Il nuovo strato corneo è lattiginoso e opaco, nascondendo il derma sottostante.
                    </p>
                  </div>
                  <div class="mt-3 pt-2 border-t border-[#f5f5f4] text-[10px] text-[#78716c] font-medium">
                    &bull; Velo opaco &bull; Nessun panico
                  </div>
                </div>

                <!-- Phase 4 -->
                <div class="bg-gradient-to-b from-white to-[#fdf2f8] p-4 rounded-xl border-2 border-[#d8318a] shadow-md flex flex-col justify-between">
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-[11px] font-extrabold text-[#d8318a] uppercase tracking-wider">FASE 04</span>
                      <span class="text-[10px] font-bold text-[#d8318a]">Giorno 28</span>
                    </div>
                    <h4 class="text-sm font-bold text-[#1c1917] mb-1.5">Stabilizzazione Definitiva</h4>
                    <p class="text-[11px] text-[#57534e] leading-relaxed">
                      La cute ritrova la trasparenza ottica. Il tono reale riemerge: momento ideale per valutare il ritocco (touch-up).
                    </p>
                  </div>
                  <div class="mt-3 pt-2 border-t border-[#fce7f3] text-[10px] text-[#d8318a] font-bold">
                    &bull; Risultato reale &bull; Seduta di ritocco
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">FISIOLOGIA DELLA GUARIGIONE</p>
            </div>
          </div>`
  },

  {
    num: '12',
    cat: 'SLIDE 12 (REF) — FITZPATRICK SCALE',
    title: 'I fototipi di Fitzpatrick',
    desc: 'Classificazione dermatologica della concentrazione di melanina e risposta ai raggi UV (Fototipi I–VI).',
    thumb: 'img/sample_texture.jpg',
    refCrop: 'ref_crops/ref_slide_03.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">DERMATOLOGIA &bull; CLASSIFICAZIONE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">12</strong></p>
            </div>

            <div class="flex w-full flex-grow flex-col justify-center my-auto z-10 py-1">
              <div class="mb-4">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4rem] text-[#171412] mb-2 leading-[0.96]">
                  I fototipi di <span class="pink-italic">Fitzpatrick</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] max-w-xl leading-[1.45]">
                  La concentrazione di feomelanina ed eumelanina definisce la tolleranza al sole e influenza l'interazione ottica con il pigmento impiantato.
                </p>
              </div>

              <!-- 6 Fitzpatrick Cards Grid -->
              <div class="grid grid-cols-3 gap-3.5 w-full max-w-5xl">
                <!-- Fototipo I -->
                <div class="bg-white p-3.5 rounded-xl border border-[#e7e5e4] shadow-sm flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-[#fef2f2] border-2 border-[#fca5a5] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#991b1b]">I</div>
                  <div>
                    <h4 class="text-xs font-bold text-[#1c1917]">Celtico / Molto Chiaro</h4>
                    <p class="text-[10px] text-[#78716c] mb-1">Capelli rossi/biondi, efelidi, si scotta sempre.</p>
                    <span class="text-[9px] font-semibold text-[#d8318a]">&bull; Usare toni biondo-caldi, zero cenere</span>
                  </div>
                </div>

                <!-- Fototipo II -->
                <div class="bg-white p-3.5 rounded-xl border border-[#e7e5e4] shadow-sm flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-[#fffbeb] border-2 border-[#fde68a] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#92400e]">II</div>
                  <div>
                    <h4 class="text-xs font-bold text-[#1c1917]">Nordico / Chiaro</h4>
                    <p class="text-[10px] text-[#78716c] mb-1">Capelli biondi/castani chiari, occhi azzurri/verdi.</p>
                    <span class="text-[9px] font-semibold text-[#d8318a]">&bull; Pigmenti neutro-caldi bilanciati</span>
                  </div>
                </div>

                <!-- Fototipo III -->
                <div class="bg-white p-3.5 rounded-xl border border-[#e7e5e4] shadow-sm flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-[#fef3c7] border-2 border-[#fbbf24] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#78350f]">III</div>
                  <div>
                    <h4 class="text-xs font-bold text-[#1c1917]">Mediterraneo Chiaro</h4>
                    <p class="text-[10px] text-[#78716c] mb-1">Carnagione media, castano, abbronzatura graduale.</p>
                    <span class="text-[9px] font-semibold text-[#d8318a]">&bull; Massima versatilità cromatica</span>
                  </div>
                </div>

                <!-- Fototipo IV -->
                <div class="bg-white p-3.5 rounded-xl border border-[#e7e5e4] shadow-sm flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-[#e0e7ff] border-2 border-[#a5b4fc] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#3730a3]">IV</div>
                  <div>
                    <h4 class="text-xs font-bold text-[#1c1917]">Mediterraneo Olivastro</h4>
                    <p class="text-[10px] text-[#78716c] mb-1">Pelle olivastra, occhi e capelli scuri. Si scotta raramente.</p>
                    <span class="text-[9px] font-semibold text-[#d8318a]">&bull; Aggiungere goccia calda antiriflesso</span>
                  </div>
                </div>

                <!-- Fototipo V -->
                <div class="bg-white p-3.5 rounded-xl border border-[#e7e5e4] shadow-sm flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-[#f5ebe6] border-2 border-[#d7b49e] flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#5c3826]">V</div>
                  <div>
                    <h4 class="text-xs font-bold text-[#1c1917]">Mediorientale / Latino</h4>
                    <p class="text-[10px] text-[#78716c] mb-1">Pelle scura naturale, alta concentrazione di melanina.</p>
                    <span class="text-[9px] font-semibold text-[#d8318a]">&bull; Rischio viraggi a freddo; correttivo caldo</span>
                  </div>
                </div>

                <!-- Fototipo VI -->
                <div class="bg-white p-3.5 rounded-xl border border-[#e7e5e4] shadow-sm flex items-start space-x-3">
                  <div class="w-8 h-8 rounded-full bg-[#3d2b24] border-2 border-[#1c130e] flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">VI</div>
                  <div>
                    <h4 class="text-xs font-bold text-[#1c1917]">Ebano / Molto Scuro</h4>
                    <p class="text-[10px] text-[#78716c] mb-1">Pelle nera, ricca di eumelanina densa. Non si scotta mai.</p>
                    <span class="text-[9px] font-semibold text-[#d8318a]">&bull; Monitorare rischio cheloidi / macchie</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">ANALISI DEL FOTOTIPO</p>
            </div>
          </div>`
  },

  {
    num: '13',
    cat: 'SLIDE 13 (REF) — TIPOLOGIE CUTANEE',
    title: 'Tipologie cutanee & tecnica',
    desc: 'Come produzione sebacea, spessore ed elasticità determinano la scelta tra Hair Stroke (pelo) e Powder Brows (sfumatura).',
    thumb: 'img/slide03_clean_model.jpg',
    refCrop: 'ref_crops/ref_slide_03.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">ANALISI CLINICA &bull; SCELTA DELLA TECNICA</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">13</strong></p>
            </div>

            <div class="flex w-full flex-grow flex-col justify-center my-auto z-10 py-1">
              <div class="mb-4">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4rem] text-[#171412] mb-2 leading-[0.96]">
                  Tipologia di pelle & <span class="pink-italic">tecnica d'elezione</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] max-w-xl leading-[1.45]">
                  Non tutte le pelli possono ricevere la stessa tecnica. Forzare un pelo iperrealistico su una cute inadatta produce risultati sgranati e allargati.
                </p>
              </div>

              <!-- 4 Skin Type Column Table -->
              <div class="grid grid-cols-4 gap-4 w-full">
                <!-- Col 1: Normale / Mista -->
                <div class="bg-white p-4 rounded-xl border border-[#e7e5e4] shadow-sm flex flex-col justify-between">
                  <div>
                    <span class="px-2 py-0.5 rounded bg-[#fce7f3] text-[#d8318a] text-[10px] font-bold uppercase tracking-wider">Ideale</span>
                    <h4 class="text-sm font-bold text-[#1c1917] mt-2 mb-1">Normale / Mista Secca</h4>
                    <p class="text-[11px] text-[#57534e] leading-relaxed mb-3">Trama cutanea fine, pori poco visibili, produzione sebacea equilibrata.</p>
                  </div>
                  <div class="bg-[#faf7f2] p-2.5 rounded-lg border border-[#e7e5e4]">
                    <span class="text-[10px] font-bold text-[#1c1917] block mb-0.5">TECNICA RACCOMANDATA:</span>
                    <span class="text-[11px] text-[#d8318a] font-semibold">Hair Stroke &bull; Combo &bull; Powder</span>
                  </div>
                </div>

                <!-- Col 2: Grassa / Pori dilatati -->
                <div class="bg-white p-4 rounded-xl border-2 border-[#d8318a] shadow-md flex flex-col justify-between">
                  <div>
                    <span class="px-2 py-0.5 rounded bg-[#d8318a] text-white text-[10px] font-bold uppercase tracking-wider">Attenzione</span>
                    <h4 class="text-sm font-bold text-[#1c1917] mt-2 mb-1">Grassa & Pori Dilatati</h4>
                    <p class="text-[11px] text-[#57534e] leading-relaxed mb-3">Sebo fluido continuo. Il pelo singolo tende ad allargarsi e sgranarsi nel tempo.</p>
                  </div>
                  <div class="bg-[#fdf2f8] p-2.5 rounded-lg border border-[#fbcfe8]">
                    <span class="text-[10px] font-bold text-[#831843] block mb-0.5">TECNICA RACCOMANDATA:</span>
                    <span class="text-[11px] text-[#d8318a] font-bold">Powder Brows (Pixel Sfumato)</span>
                  </div>
                </div>

                <!-- Col 3: Sensibile -->
                <div class="bg-white p-4 rounded-xl border border-[#e7e5e4] shadow-sm flex flex-col justify-between">
                  <div>
                    <span class="px-2 py-0.5 rounded bg-[#fef2f2] text-[#ef4444] text-[10px] font-bold uppercase tracking-wider">Reattiva</span>
                    <h4 class="text-sm font-bold text-[#1c1917] mt-2 mb-1">Sottile & Sensibile</h4>
                    <p class="text-[11px] text-[#57534e] leading-relaxed mb-3">Capillari superficiali, tendenza al rossore immediato ed edema.</p>
                  </div>
                  <div class="bg-[#faf7f2] p-2.5 rounded-lg border border-[#e7e5e4]">
                    <span class="text-[10px] font-bold text-[#1c1917] block mb-0.5">TECNICA RACCOMANDATA:</span>
                    <span class="text-[11px] text-[#d8318a] font-semibold">Mano piuma &bull; Aghi 0.25 mm nano</span>
                  </div>
                </div>

                <!-- Col 4: Matura -->
                <div class="bg-white p-4 rounded-xl border border-[#e7e5e4] shadow-sm flex flex-col justify-between">
                  <div>
                    <span class="px-2 py-0.5 rounded bg-[#f3f4f6] text-[#78716c] text-[10px] font-bold uppercase tracking-wider">Delicata</span>
                    <h4 class="text-sm font-bold text-[#1c1917] mt-2 mb-1">Matura & Atrofica</h4>
                    <p class="text-[11px] text-[#57534e] leading-relaxed mb-3">Perdita di collagene ed elastina. Spessore epidermico molto ridotto.</p>
                  </div>
                  <div class="bg-[#faf7f2] p-2.5 rounded-lg border border-[#e7e5e4]">
                    <span class="text-[10px] font-bold text-[#1c1917] block mb-0.5">TECNICA RACCOMANDATA:</span>
                    <span class="text-[11px] text-[#d8318a] font-semibold">Soft Shading &bull; No passaggi ripetuti</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">DIAGNOSI CLINICA</p>
            </div>
          </div>`
  },

  {
    num: '14',
    cat: 'SLIDE 14 (REF) — OPENER CAPITOLO 1.3',
    title: 'Colorimetria e Pigmentologia',
    desc: 'Apertura del Capitolo 1.3: la scienza del colore applicata alla chimica cutanea e la prevenzione dei viraggi.',
    thumb: 'img/cover_model.jpg',
    refCrop: 'ref_crops/ref_slide_01.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <!-- Left 54% Column -->
            <div class="w-[54%] h-full flex flex-col justify-between pr-4 z-20">
              <div>
                <p class="header-meta">CAPITOLO 1.3 &bull; FONDAMENTI</p>
              </div>

              <div class="my-auto py-2">
                <svg width="68" height="22" viewBox="0 0 68 22" class="mb-4">
                  <path d="M4,15 Q28,3 62,8 Q45,16 12,18 Z" fill="#f48fb1" opacity="0.75"></path>
                  <path d="M10,12 Q34,5 54,9" stroke="#d8318a" stroke-width="2.5" stroke-linecap="round" fill="none"></path>
                </svg>

                <h1 class="serif-title text-5xl md:text-6xl lg:text-[5.2rem] text-[#171412] leading-[0.94] tracking-tight mb-5">
                  Colorimetria &<br><span class="pink-italic">Pigmentologia</span>
                </h1>

                <p class="text-sm md:text-base text-[#292524] max-w-md leading-[1.5] mb-4">
                  Il colore non si sceglie "a occhio". Nel trucco semipermanente, il risultato guarito è la somma algebrica tra la chimica del pigmento e la luce filtrata dal sottotono biologico della pelle.
                </p>

                <div class="inline-block px-3.5 py-1.5 rounded-full bg-[#fce7f3] border border-[#fbcfe8] text-[#831843] text-xs font-bold uppercase tracking-wider">
                  Itten &bull; Sottotono &bull; Neutralizzazione
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-[2px] bg-[#d8318a]"></div>
                <p class="header-meta text-[#78716c]">MODULO 1 &bull; FOUNDATION</p>
              </div>
            </div>

            <!-- Right 46% Background / Model -->
            <div class="w-[46%] h-full relative overflow-hidden cut-slide1-pink shadow-2xl">
              <img src="img/slide01_model_layer.png" class="w-full h-full object-cover object-top" alt="Modella Colorimetria">
            </div>
          </div>`
  },

  {
    num: '15',
    cat: 'SLIDE 15 (REF) — CERCHIO DI ITTEN',
    title: 'Il cerchio cromatico di Itten',
    desc: 'Primari, secondari, terziari e la legge dei complementari opposti per la neutralizzazione dei viraggi.',
    thumb: 'img/diagram_color_wheel.png',
    refCrop: 'ref_crops/ref_slide_08.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">COLORIMETRIA APPLICATA</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">15</strong></p>
            </div>

            <div class="flex w-full flex-grow items-center my-auto z-10 gap-8">
              <!-- Left: Content -->
              <div class="w-[55%] flex flex-col justify-center pr-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4rem] text-[#171412] mb-3 leading-[0.96]">
                  Il cerchio di <span class="pink-italic">Itten</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-5 max-w-lg leading-[1.5]">
                  La base della pigmentologia: combinando i 3 colori primari si ottengono i secondari. I colori diametralmente opposti sono complementari e, se sovrapposti, si annullano a vicenda.
                </p>

                <div class="space-y-3 max-w-lg">
                  <div class="bg-white p-3 rounded-xl border border-[#e7e5e4] shadow-sm flex items-center space-x-3">
                    <div class="flex space-x-1">
                      <span class="w-4 h-4 rounded-full bg-[#eab308]"></span>
                      <span class="w-4 h-4 rounded-full bg-[#ef4444]"></span>
                      <span class="w-4 h-4 rounded-full bg-[#3b82f6]"></span>
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-[#1c1917]">Colori Primari: Giallo &bull; Rosso &bull; Blu</h4>
                      <p class="text-[11px] text-[#78716c]">Colori puri non ottenibili da altre miscele. Il blu ha la molecola più fredda e stabile.</p>
                    </div>
                  </div>

                  <div class="bg-white p-3 rounded-xl border border-[#e7e5e4] shadow-sm flex items-center space-x-3">
                    <div class="flex space-x-1">
                      <span class="w-4 h-4 rounded-full bg-[#f97316]"></span>
                      <span class="w-4 h-4 rounded-full bg-[#22c55e]"></span>
                      <span class="w-4 h-4 rounded-full bg-[#a855f7]"></span>
                    </div>
                    <div>
                      <h4 class="text-xs font-bold text-[#1c1917]">Colori Secondari: Arancio &bull; Verde &bull; Viola</h4>
                      <p class="text-[11px] text-[#78716c]">Nati dalla fusione di due primari. Strumenti cardine per le correzioni e viraggi.</p>
                    </div>
                  </div>

                  <div class="bg-[#fdf2f8] p-3 rounded-xl border border-[#fbcfe8] flex items-center space-x-3">
                    <div class="w-6 h-6 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                      <i class="fa-solid fa-arrows-rotate"></i>
                    </div>
                    <div>
                      <h4 class="text-xs font-extrabold text-[#831843]">Legge dei Complementari (Neutralizzazione)</h4>
                      <p class="text-[11px] text-[#1c1917]">Colori opposti si neutralizzano: <strong>Arancio annulla Grigio</strong> &bull; <strong>Verde annulla Rosso</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Color Wheel Graphic -->
              <div class="w-[45%] flex items-center justify-center">
                <div class="w-72 h-72 md:w-80 md:h-80 relative flex items-center justify-center">
                  <img src="img/diagram_color_wheel.png" class="w-full h-full object-contain drop-shadow-xl" alt="Ruota cromatica di Itten">
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">COLORIMETRIA SCIENTIFICA</p>
            </div>
          </div>`
  },

  {
    num: '16',
    cat: 'SLIDE 16 (REF) — SOTTOTONO CUTANEO',
    title: 'Fototipo vs Sottotono',
    desc: 'La formula aurea del risultato guarito: Pigmento Scelto + Sottotono Biologico = Colore Finale.',
    thumb: 'img/ai_cover_model.jpg',
    refCrop: 'ref_crops/ref_slide_05.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">PIGMENTOLOGIA &bull; EQUILIBRIO TERMICO</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">16</strong></p>
            </div>

            <div class="flex w-full flex-grow flex-col justify-center my-auto z-10 py-1">
              <div class="mb-4">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4rem] text-[#171412] mb-2 leading-[0.96]">
                  Fototipo vs <span class="pink-italic">Sottotono</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] max-w-xl leading-[1.45]">
                  Il fototipo è ciò che vediamo in superficie; il sottotono è la temperatura cromatica profonda che agisce come un filtro ottico sul pigmento guarito.
                </p>
              </div>

              <!-- Master Formula Box -->
              <div class="w-full max-w-4xl bg-gradient-to-r from-[#171412] to-[#2B2629] text-white p-4 rounded-2xl shadow-lg mb-5 flex items-center justify-around text-center">
                <div class="flex-1">
                  <span class="text-[10px] text-[#f48fb1] font-bold uppercase tracking-wider block">Flacone</span>
                  <h4 class="text-sm font-bold">Pigmento Impiantato</h4>
                </div>
                <span class="text-xl font-light text-[#f48fb1]">+</span>
                <div class="flex-1">
                  <span class="text-[10px] text-[#f48fb1] font-bold uppercase tracking-wider block">Filtro Biologico</span>
                  <h4 class="text-sm font-bold">Sottotono della Cute</h4>
                </div>
                <span class="text-xl font-light text-[#f48fb1]">=</span>
                <div class="flex-1 bg-[#d8318a] py-2 px-3 rounded-xl">
                  <span class="text-[10px] text-white font-extrabold uppercase tracking-wider block">Effetto a 28 Giorni</span>
                  <h4 class="text-sm font-extrabold">Risultato Guarito</h4>
                </div>
              </div>

              <!-- 3 Undertone Cards -->
              <div class="grid grid-cols-3 gap-4 w-full max-w-4xl">
                <div class="bg-white p-3.5 rounded-xl border border-[#e7e5e4] shadow-sm">
                  <div class="flex items-center space-x-2 mb-1.5">
                    <span class="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
                    <h4 class="text-xs font-bold text-[#1c1917] uppercase tracking-wide">Sottotono Caldo</h4>
                  </div>
                  <p class="text-[11px] text-[#57534e] leading-snug">Riflessi dorati, ambrati, pesca. Riscalda il pigmento. Tollera pigmenti neutri senza ingrigire.</p>
                </div>

                <div class="bg-white p-3.5 rounded-xl border border-[#e7e5e4] shadow-sm">
                  <div class="flex items-center space-x-2 mb-1.5">
                    <span class="w-3 h-3 rounded-full bg-[#3b82f6]"></span>
                    <h4 class="text-xs font-bold text-[#1c1917] uppercase tracking-wide">Sottotono Freddo</h4>
                  </div>
                  <p class="text-[11px] text-[#57534e] leading-snug">Riflessi bluastri, rosati o olivastri. Raffredda sensibilmente il colore. Richiede sempre una base calda.</p>
                </div>

                <div class="bg-white p-3.5 rounded-xl border border-[#e7e5e4] shadow-sm">
                  <div class="flex items-center space-x-2 mb-1.5">
                    <span class="w-3 h-3 rounded-full bg-[#10b981]"></span>
                    <h4 class="text-xs font-bold text-[#1c1917] uppercase tracking-wide">Sottotono Neutro</h4>
                  </div>
                  <p class="text-[11px] text-[#57534e] leading-snug">Perfetto equilibrio tra caldo e freddo. Massima fedeltà cromatica rispetto al colore visto nel flacone.</p>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">ANALISI CROMATICA BIOLOGICA</p>
            </div>
          </div>`
  },

  {
    num: '17',
    cat: 'SLIDE 17 (REF) — VIRAGGI E NEUTRALIZZAZIONE',
    title: 'Viraggi & Neutralizzazione',
    desc: 'Protocolli di correzione cromatica per sopracciglia grigie, rosse e labbra scure mediante complementari esatti.',
    thumb: 'img/ai_texture_cream.jpg',
    refCrop: 'ref_crops/ref_slide_06.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">CORREZIONE &bull; PROTOCOLLO DI NEUTRALIZZAZIONE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">17</strong></p>
            </div>

            <div class="flex w-full flex-grow flex-col justify-center my-auto z-10 py-1">
              <div class="mb-4">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4rem] text-[#171412] mb-2 leading-[0.96]">
                  Viraggi & <span class="pink-italic">neutralizzazione</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] max-w-xl leading-[1.45]">
                  Neutralizzare non significa coprire con toni scuri o compatti, ma ripristinare la neutralità cromatica usando il complementare della dominante indesiderata.
                </p>
              </div>

              <!-- 3 Case Studies -->
              <div class="grid grid-cols-3 gap-4 w-full max-w-5xl">
                <!-- Case 1: Sopracciglia Grigie / Bluastre -->
                <div class="bg-white p-4 rounded-xl border border-[#e7e5e4] shadow-sm flex flex-col justify-between">
                  <div>
                    <div class="flex items-center space-x-2 mb-2">
                      <span class="w-5 h-5 rounded-full bg-[#64748b] border border-[#cbd5e1]"></span>
                      <h4 class="text-xs font-bold text-[#1c1917] uppercase">Viraggio a Grigio / Blu</h4>
                    </div>
                    <p class="text-[11px] text-[#57534e] mb-2 leading-relaxed">
                      <strong>Causa:</strong> Impianto troppo profondo (effetto Tyndall) oppure pigmento a base fredda su sottotono freddo.
                    </p>
                  </div>
                  <div class="bg-[#fff7ed] p-2.5 rounded-lg border border-[#fed7aa] mt-2">
                    <span class="text-[10px] font-bold text-[#c2410c] block">NEUTRALIZZATORE:</span>
                    <span class="text-[11px] text-[#ea580c] font-bold">Arancio Caldo / Zucca</span>
                  </div>
                </div>

                <!-- Case 2: Sopracciglia Rosse / Aranciate -->
                <div class="bg-white p-4 rounded-xl border border-[#e7e5e4] shadow-sm flex flex-col justify-between">
                  <div>
                    <div class="flex items-center space-x-2 mb-2">
                      <span class="w-5 h-5 rounded-full bg-[#ef4444] border border-[#fca5a5]"></span>
                      <h4 class="text-xs font-bold text-[#1c1917] uppercase">Viraggio a Rosso / Salmone</h4>
                    </div>
                    <p class="text-[11px] text-[#57534e] mb-2 leading-relaxed">
                      <strong>Causa:</strong> Degradazione precoce del nero (ossido di ferro o carbon black) o pigmento con eccesso di ossido rosso.
                    </p>
                  </div>
                  <div class="bg-[#f0fdf4] p-2.5 rounded-lg border border-[#bbf7d0] mt-2">
                    <span class="text-[10px] font-bold text-[#15803d] block">NEUTRALIZZATORE:</span>
                    <span class="text-[11px] text-[#16a34a] font-bold">Oliva / Verde Desaturato</span>
                  </div>
                </div>

                <!-- Case 3: Labbra Violacee / Scure -->
                <div class="bg-white p-4 rounded-xl border border-[#e7e5e4] shadow-sm flex flex-col justify-between">
                  <div>
                    <div class="flex items-center space-x-2 mb-2">
                      <span class="w-5 h-5 rounded-full bg-[#701a75] border border-[#f0abfc]"></span>
                      <h4 class="text-xs font-bold text-[#1c1917] uppercase">Labbra Violacee / Fredde</h4>
                    </div>
                    <p class="text-[11px] text-[#57534e] mb-2 leading-relaxed">
                      <strong>Causa:</strong> Elevata concentrazione di melanina bluastra e vascolarizzazione profonda naturale.
                    </p>
                  </div>
                  <div class="bg-[#fdf2f8] p-2.5 rounded-lg border border-[#fbcfe8] mt-2">
                    <span class="text-[10px] font-bold text-[#831843] block">NEUTRALIZZATORE:</span>
                    <span class="text-[11px] text-[#d8318a] font-bold">Arancio Puro / Mandarino</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">PROTOCOLLO DI CORREZIONE</p>
            </div>
          </div>`
  },

  {
    num: '18',
    cat: 'SLIDE 18 (REF) — OPENER CAPITOLO 1.5',
    title: 'Strumentazione e Aghi',
    desc: 'Apertura del Capitolo 1.5: la meccanica del dermografo, corsa (stroke), calibri e configurazioni.',
    thumb: 'img/sample_model_profile.jpg',
    refCrop: 'ref_crops/ref_slide_01.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <!-- Left 54% Column -->
            <div class="w-[54%] h-full flex flex-col justify-between pr-4 z-20">
              <div>
                <p class="header-meta">CAPITOLO 1.5 &bull; FISICA DELLO STRUMENTO</p>
              </div>

              <div class="my-auto py-2">
                <svg width="68" height="22" viewBox="0 0 68 22" class="mb-4">
                  <path d="M4,15 Q28,3 62,8 Q45,16 12,18 Z" fill="#f48fb1" opacity="0.75"></path>
                  <path d="M10,12 Q34,5 54,9" stroke="#d8318a" stroke-width="2.5" stroke-linecap="round" fill="none"></path>
                </svg>

                <h1 class="serif-title text-5xl md:text-6xl lg:text-[5.2rem] text-[#171412] leading-[0.94] tracking-tight mb-5">
                  Strumentazione &<br><span class="pink-italic">Aghi</span>
                </h1>

                <p class="text-sm md:text-base text-[#292524] max-w-md leading-[1.5] mb-4">
                  La mano è l'artista, ma il dermografo è il condotto di precisione. Comprendere corsa (stroke), oscillazione e calibro dell'ago distingue una dilettante da una Master PMU.
                </p>

                <div class="inline-block px-3.5 py-1.5 rounded-full bg-[#fce7f3] border border-[#fbcfe8] text-[#831843] text-xs font-bold uppercase tracking-wider">
                  Dermografi &bull; Stroke &bull; Configurazioni RL / RS
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-[2px] bg-[#d8318a]"></div>
                <p class="header-meta text-[#78716c]">MODULO 1 &bull; FOUNDATION</p>
              </div>
            </div>

            <!-- Right 46% Background / Model -->
            <div class="w-[46%] h-full relative overflow-hidden cut-slide1-pink shadow-2xl">
              <img src="img/slide03_model_layer.png" class="w-full h-full object-cover object-top" alt="Strumentazione PMU">
            </div>
          </div>`
  },

  {
    num: '19',
    cat: 'SLIDE 19 (REF) — CONFIGURAZIONE AGHI',
    title: 'Anatomia e configurazione degli aghi',
    desc: 'Diametri da 0.18 mm a 0.35 mm, conicità taper e confronto operativo tra Round Liner e Round Shader.',
    thumb: 'img/diagram_needles.png',
    refCrop: 'ref_crops/ref_slide_07.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">STRUMENTAZIONE &bull; MECCANICA DI PRECISIONE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">19</strong></p>
            </div>

            <div class="flex w-full flex-grow items-center my-auto z-10 gap-8">
              <!-- Left Column: 55% Content -->
              <div class="w-[55%] flex flex-col justify-center pr-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4rem] text-[#171412] mb-3 leading-[0.96]">
                  Configurazione degli <span class="pink-italic">aghi</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-5 max-w-lg leading-[1.5]">
                  La cartuccia PMU controlla il flusso e la dispersione delle micro-gocce. Diametro e saldatura delle punte determinano la nitidezza del pixel.
                </p>

                <div class="space-y-3 max-w-lg">
                  <!-- Round Liner -->
                  <div class="bg-white p-3 rounded-xl border border-[#e7e5e4] shadow-sm flex items-start space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#fdf2f8] text-[#d8318a] flex items-center justify-center flex-shrink-0 text-xs font-bold border border-[#fbcfe8]">
                      1RL
                    </div>
                    <div>
                      <div class="flex items-center space-x-2">
                        <h4 class="text-xs font-bold text-[#1c1917]">Round Liner (1RL / 3RL)</h4>
                        <span class="text-[9px] bg-[#fce7f3] text-[#831843] px-1.5 py-0.2 rounded font-bold uppercase">Pelo & Pixel</span>
                      </div>
                      <p class="text-[11px] text-[#57534e] leading-snug mt-0.5">
                        Punte saldate convergenti. Ideale per Hair Stroke ultra-sottile, linee grafiche, infracigliare e pixel di massima definizione.
                      </p>
                    </div>
                  </div>

                  <!-- Round Shader -->
                  <div class="bg-white p-3 rounded-xl border border-[#e7e5e4] shadow-sm flex items-start space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#fdf2f8] text-[#d8318a] flex items-center justify-center flex-shrink-0 text-xs font-bold border border-[#fbcfe8]">
                      3RS
                    </div>
                    <div>
                      <div class="flex items-center space-x-2">
                        <h4 class="text-xs font-bold text-[#1c1917]">Round Shader (3RS / 5RS)</h4>
                        <span class="text-[9px] bg-[#fce7f3] text-[#831843] px-1.5 py-0.2 rounded font-bold uppercase">Sfumatura</span>
                      </div>
                      <p class="text-[11px] text-[#57534e] leading-snug mt-0.5">
                        Punte saldate parallele aperte. Deposita un'ombreggiatura morbida: perfetto per Powder Brows vellutata e Lip Blush.
                      </p>
                    </div>
                  </div>

                  <!-- Diametri -->
                  <div class="bg-[#faf7f2] p-3 rounded-xl border border-[#e7e5e4]">
                    <h5 class="text-[11px] font-bold text-[#1c1917] mb-1">DIAMETRI DI RIFERIMENTO (CALIBRI):</h5>
                    <div class="grid grid-cols-3 gap-2 text-[10px] text-[#57534e]">
                      <div><strong>0.18 – 0.22 mm:</strong> Nano pelo ultra-fine</div>
                      <div><strong>0.25 mm:</strong> Il jolly versatile per sopracciglia</div>
                      <div><strong>0.30 – 0.35 mm:</strong> Campiture piene e labbra</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column: 45% Graphic Diagram -->
              <div class="w-[45%] flex items-center justify-center">
                <div class="w-full max-w-sm bg-white p-5 rounded-2xl border border-[#e7e5e4] shadow-xl text-center">
                  <h4 class="serif-title text-lg text-[#171412] mb-2">Schema Tipologico dell'Ago</h4>
                  <img src="img/diagram_needles.png" class="w-full h-auto rounded-lg mb-2" alt="Diagramma aghi PMU">
                  <p class="text-[10px] text-[#78716c] italic">«Conicità Long Taper: penetrazione elastica, minor trauma e pixel nitido.»</p>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">TECNOLOGIA DELLE CARTUCCE</p>
            </div>
          </div>`
  },

  {
    num: '20',
    cat: 'SLIDE 20 (REF) — STATEMENT OBSIDIAN',
    title: 'La Triade della Precisione',
    desc: 'Velocità, Pressione e Tensione a 3 vie: la regola aurea della precisione nel dermografo.',
    thumb: 'img/dark_model_highres.jpg',
    refCrop: 'ref_crops/ref_slide_09.png',
    render: () => `<div class="w-full h-full bg-[#000000] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-white">
            <img src="img/slide09_model.jpg" class="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0" alt="Modella Dark Statement">

            <div class="flex justify-between items-center z-20 relative">
              <p class="header-meta text-white/80" style="letter-spacing: 0.16em;">REGOLA AUREA &bull; FONDAMENTI</p>
              <p class="header-meta text-white/80" style="letter-spacing: 0.16em;">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-white text-sm">20</strong></p>
            </div>

            <div class="my-auto z-20 py-1 pl-2 max-w-2xl">
              <h1 class="serif-title text-white font-normal select-none text-4xl md:text-5xl lg:text-[4.6rem] leading-[0.93] tracking-tight">
                Velocità, Pressione<br>
                e Tensione a tre vie.<br>
                La precisione è<br>
                <span style="color: #a55572; font-style: italic;">rispetto biologico.</span>
              </h1>
            </div>

            <div class="flex items-center space-x-3 z-20 relative">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-white/80" style="letter-spacing: 0.16em;">FRIDUCHAS ACADEMY &bull; MASTER PMU</p>
            </div>
          </div>`
  }
];
