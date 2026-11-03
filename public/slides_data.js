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
    cat: 'SLIDE 10 (REF) — PROFONDITÀ CLINICA',
    title: 'La profondità ideale del pigmento',
    desc: 'Target biologico nel derma papillare (0.08–0.15 mm). Confronto clinico tra impianto epidermico, target PMU e derma profondo.',
    thumb: 'img/anatomy_skin_3d_cube.png',
    refCrop: 'ref_crops/ref_slide_04.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">ANATOMIA DELLA PELLE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">10</strong></p>
            </div>

            <div class="flex w-full flex-grow items-stretch my-auto z-10">
              <!-- Left Column (54%) -->
              <div class="w-[54%] flex flex-col justify-center pr-6 my-auto py-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-3 leading-[0.96]">
                  La profondità<br><span class="pink-italic">ideale</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-6 max-w-md leading-[1.45]">
                  La stabilità del colore dipende dalla profondità d'impianto. Il derma papillare è l'unico distretto cutaneo che garantisce longevità senza viraggi.
                </p>

                <!-- 3 Editorial Feature Rows with solid Magenta Circle Badges -->
                <div class="flex flex-col space-y-4 max-w-md">
                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#f48fb1] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-arrow-up"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Superficiale &bull; Epidermide (&lt; 0.05 mm)</h4>
                      <p class="text-xs text-[#57534e]">Espulsione rapida col turnover cellulare (scomparsa in 28gg)</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-bullseye"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Target PMU &bull; Derma Papillare (0.08 – 0.15 mm)</h4>
                      <p class="text-xs text-[#57534e]">Stabilità cromatica, pixel trasparente e degradazione graduale</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#171412] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Profondo &bull; Ipoderma / Reticolare (&gt; 0.40 mm)</h4>
                      <p class="text-xs text-[#57534e]">Viraggio a grigio/blu (Effetto Tyndall) e allargamento irreversibile</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column (46%) with Organic Cutout and 3D Cube -->
              <div class="w-[46%] h-full relative overflow-hidden cut-slide3-pink shadow-2xl flex items-center justify-center bg-[#fdf2f8]">
                <img src="img/slide03_clean_model.jpg" class="w-full h-full object-cover object-top scale-105" alt="Modella profilo beauty">
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
    cat: 'SLIDE 11 (REF) — CICLO DI GUARIGIONE',
    title: 'Il ciclo di guarigione della pelle',
    desc: '4 dischi temporali con cornice rosa (#f48fb1): Ossidazione, Desquamazione, Ghost Phase e Stabilizzazione a 28 giorni.',
    thumb: 'img/diagram_healing_cycle.png',
    refCrop: 'ref_crops/ref_slide_06.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-8 md:p-12 select-none overflow-hidden text-[#171412]">
            <!-- Header -->
            <div class="flex justify-between items-start z-20">
              <div>
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-2 leading-[0.96]">
                  Il ciclo di<br><span class="pink-italic">guarigione</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] max-w-lg leading-[1.45]">
                  La rigenerazione epidermica dura 28 giorni. Conoscere le 4 tappe biologiche elimina ansie e guida la corretta cura domiciliare.
                </p>
              </div>
              <div class="flex flex-col items-end">
                <p class="header-meta">FISIOLOGIA DELLA PELLE</p>
                <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">11</strong></p>
              </div>
            </div>

            <!-- 4 Circular Stage Discs identical to Slide 06 aesthetic -->
            <div class="grid grid-cols-4 gap-6 w-full my-auto z-10 px-2">
              <!-- Disc 1 -->
              <div class="flex flex-col items-center text-center">
                <div class="w-32 h-32 md:w-36 md:h-36 rounded-full border-[3px] border-[#f48fb1] p-1.5 shadow-md bg-white flex flex-col items-center justify-center relative overflow-hidden group">
                  <span class="text-3xl font-normal serif-title text-[#d8318a]">01</span>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-[#78716c] mt-0.5">Giorni 1–3</span>
                </div>
                <h4 class="serif-title text-lg md:text-xl text-[#171412] mt-3">Ossidazione</h4>
                <p class="text-[11px] md:text-xs text-[#57534e] max-w-[170px] leading-snug mt-1">Colore scuro e intenso, lieve edema fisiologico.</p>
              </div>

              <!-- Disc 2 -->
              <div class="flex flex-col items-center text-center">
                <div class="w-32 h-32 md:w-36 md:h-36 rounded-full border-[3px] border-[#f48fb1] p-1.5 shadow-md bg-white flex flex-col items-center justify-center relative overflow-hidden group">
                  <span class="text-3xl font-normal serif-title text-[#d8318a]">02</span>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-[#78716c] mt-0.5">Giorni 4–7</span>
                </div>
                <h4 class="serif-title text-lg md:text-xl text-[#171412] mt-3">Desquamazione</h4>
                <p class="text-[11px] md:text-xs text-[#57534e] max-w-[170px] leading-snug mt-1">Distacco spontaneo delle pellicine: divieto di strappo.</p>
              </div>

              <!-- Disc 3 -->
              <div class="flex flex-col items-center text-center">
                <div class="w-32 h-32 md:w-36 md:h-36 rounded-full border-[3px] border-[#f48fb1] p-1.5 shadow-md bg-white flex flex-col items-center justify-center relative overflow-hidden group">
                  <span class="text-3xl font-normal serif-title text-[#d8318a]">03</span>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-[#78716c] mt-0.5">Giorni 8–14</span>
                </div>
                <h4 class="serif-title text-lg md:text-xl text-[#171412] mt-3">Ghost Phase</h4>
                <p class="text-[11px] md:text-xs text-[#57534e] max-w-[170px] leading-snug mt-1">Il nuovo strato corneo opacizza: il colore sembra sparito.</p>
              </div>

              <!-- Disc 4 -->
              <div class="flex flex-col items-center text-center">
                <div class="w-32 h-32 md:w-36 md:h-36 rounded-full border-[3px] border-[#d8318a] p-1.5 shadow-md bg-[#fdf2f8] flex flex-col items-center justify-center relative overflow-hidden group">
                  <span class="text-3xl font-normal serif-title text-[#d8318a]">04</span>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-[#d8318a] mt-0.5">Giorno 28</span>
                </div>
                <h4 class="serif-title text-lg md:text-xl text-[#171412] mt-3">Stabilizzazione</h4>
                <p class="text-[11px] md:text-xs text-[#57534e] max-w-[170px] leading-snug mt-1">Riemersione del tono reale: momento per il ritocco.</p>
              </div>
            </div>

            <!-- Footer -->
            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">FISIOLOGIA DELLA PELLE</p>
            </div>
          </div>`
  },

  {
    num: '12',
    cat: 'SLIDE 12 (REF) — FITZPATRICK SCALE',
    title: 'I fototipi di Fitzpatrick',
    desc: 'Classificazione dermatologica della melanina (I–VI) con modella beauty e campioni colore incarnato.',
    thumb: 'img/ai_cover_model.jpg',
    refCrop: 'ref_crops/ref_slide_01.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">ANALISI DELLA PELLE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">12</strong></p>
            </div>

            <div class="flex w-full flex-grow items-stretch my-auto z-10">
              <!-- Left Column (54%) -->
              <div class="w-[54%] flex flex-col justify-center pr-6 my-auto py-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-3 leading-[0.96]">
                  I fototipi di<br><span class="pink-italic">Fitzpatrick</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-5 max-w-md leading-[1.45]">
                  La concentrazione di feomelanina ed eumelanina determina la tolleranza solare e agisce come filtro ottico sul pigmento guarito.
                </p>

                <!-- 6 Minimalist Tone Chips -->
                <div class="grid grid-cols-2 gap-x-4 gap-y-3 max-w-md">
                  <div class="flex items-center space-x-3">
                    <span class="w-7 h-7 rounded-full bg-[#fde8e8] border border-[#fca5a5] flex items-center justify-center text-[10px] font-bold text-[#991b1b]">I</span>
                    <div>
                      <h5 class="text-xs font-bold text-[#1c1917]">Celtico</h5>
                      <p class="text-[10px] text-[#57534e]">Efelidi, zero abbronzatura. Usare toni caldi.</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3">
                    <span class="w-7 h-7 rounded-full bg-[#fef3c7] border border-[#fde68a] flex items-center justify-center text-[10px] font-bold text-[#92400e]">II</span>
                    <div>
                      <h5 class="text-xs font-bold text-[#1c1917]">Nordico</h5>
                      <p class="text-[10px] text-[#57534e]">Capelli chiari, occhi chiari. Base neutro-calda.</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3">
                    <span class="w-7 h-7 rounded-full bg-[#fed7aa] border border-[#fdba74] flex items-center justify-center text-[10px] font-bold text-[#9a3412]">III</span>
                    <div>
                      <h5 class="text-xs font-bold text-[#1c1917]">Mediterraneo</h5>
                      <p class="text-[10px] text-[#57534e]">Carnagione media, massima versatilità.</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3">
                    <span class="w-7 h-7 rounded-full bg-[#e0e7ff] border border-[#a5b4fc] flex items-center justify-center text-[10px] font-bold text-[#3730a3]">IV</span>
                    <div>
                      <h5 class="text-xs font-bold text-[#1c1917]">Olivastro</h5>
                      <p class="text-[10px] text-[#57534e]">Sottotono freddo: aggiungere correttivo caldo.</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3">
                    <span class="w-7 h-7 rounded-full bg-[#d7b49e] border border-[#b08968] flex items-center justify-center text-[10px] font-bold text-[#43281c]">V</span>
                    <div>
                      <h5 class="text-xs font-bold text-[#1c1917]">Mediorientale</h5>
                      <p class="text-[10px] text-[#57534e]">Pelle scura: rischio viraggio a cenere.</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3">
                    <span class="w-7 h-7 rounded-full bg-[#3d2b24] border border-[#211510] flex items-center justify-center text-[10px] font-bold text-white">VI</span>
                    <div>
                      <h5 class="text-xs font-bold text-[#1c1917]">Ebano</h5>
                      <p class="text-[10px] text-[#57534e]">Attenzione a iperpigmentazione e traumi.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column (46%) Model Cutout -->
              <div class="w-[46%] h-full relative overflow-hidden cut-slide1-pink shadow-2xl">
                <img src="img/slide01_model_layer.png" class="w-full h-full object-cover object-top" alt="Modella Fototipi">
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">ANALISI DELLA PELLE</p>
            </div>
          </div>`
  },

  {
    num: '13',
    cat: 'SLIDE 13 (REF) — TIPOLOGIE CUTANEE',
    title: 'Tipologie cutanee & tecnica',
    desc: '4 colonne editoriali pulite con numeri Playfair Display e raccomandazione tecnica d\'elezione.',
    thumb: 'img/texture_swatch.jpg',
    refCrop: 'ref_crops/ref_slide_02.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">DIAGNOSI CLINICA</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">13</strong></p>
            </div>

            <div class="flex w-full flex-grow items-stretch my-auto z-10">
              <!-- Left Column: 56% -->
              <div class="w-[56%] flex flex-col justify-center pr-6 my-auto py-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-5 leading-[0.96]">
                  Tipologia di pelle &<br><span class="pink-italic">tecnica d'elezione</span>
                </h2>

                <!-- 4 Rows with Large Editorial Numerals (As in Slide 02) -->
                <div class="flex flex-col space-y-3.5">
                  <div class="flex items-start space-x-4">
                    <span class="text-xl md:text-2xl font-semibold text-[#c0568f] min-w-[32px]">01</span>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Pelle Normale / Mista</h4>
                      <p class="text-xs text-[#57534e]">Ideale per ogni tecnica: pelo a pelo (Hair Stroke), Powder e Combo.</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <span class="text-xl md:text-2xl font-semibold text-[#c0568f] min-w-[32px]">02</span>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Pelle Grassa & Pori Dilatati</h4>
                      <p class="text-xs text-[#57534e]">Il sebo allarga il pelo: <strong>scelta d'elezione Powder Brows (Pixel)</strong>.</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <span class="text-xl md:text-2xl font-semibold text-[#c0568f] min-w-[32px]">03</span>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Pelle Sottile & Sensibile</h4>
                      <p class="text-xs text-[#57534e]">Capillari reattivi: richiede aghi nano 0.25 mm e pressione piuma.</p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-4">
                    <span class="text-xl md:text-2xl font-semibold text-[#c0568f] min-w-[32px]">04</span>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Pelle Matura & Atrofica</h4>
                      <p class="text-xs text-[#57534e]">Minore elasticità: vietati passaggi ripetuti; optare per sfumatura soft.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column (44%) Swatch Cutout -->
              <div class="w-[44%] h-full relative overflow-hidden cut-slide2-swatch shadow-inner">
                <img src="img/texture_swatch.jpg" class="w-full h-full object-cover object-center scale-105" alt="Texture pelle e siero">
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
    cat: 'SLIDE 14 (REF) — OPENER COLORIMETRIA',
    title: 'Colorimetria e Pigmentologia',
    desc: 'Apertura ufficiale del Capitolo 1.3: la scienza chimica del colore applicata alla biologia cutanea.',
    thumb: 'img/cover_model.jpg',
    refCrop: 'ref_crops/ref_slide_01.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <!-- Left Column (54%) -->
            <div class="w-[54%] h-full flex flex-col justify-between pr-4 z-20">
              <div>
                <p class="header-meta">CAPITOLO 1.3 &bull; FONDAMENTI</p>
              </div>

              <div class="my-auto py-2">
                <svg width="68" height="22" viewBox="0 0 68 22" class="mb-4">
                  <path d="M4,15 Q28,3 62,8 Q45,16 12,18 Z" fill="#f48fb1" opacity="0.75"></path>
                  <path d="M10,12 Q34,5 54,9" stroke="#d8318a" stroke-width="2.5" stroke-linecap="round" fill="none"></path>
                </svg>

                <h1 class="serif-title text-5xl md:text-6xl lg:text-[5.5rem] text-[#171412] leading-[0.94] tracking-tight mb-5">
                  Colorimetria<br>& <span class="pink-italic">Pigmentologia</span>
                </h1>

                <p class="text-xs md:text-sm text-[#292524] max-w-md leading-[1.5] mb-4">
                  Il colore non si sceglie ad occhio. Il risultato guarito è la fusione algebrica tra la chimica del pigmento e la luce filtrata dal sottotono biologico della pelle.
                </p>

                <div class="flex items-center space-x-3 text-xs text-[#d8318a] font-semibold tracking-wide uppercase">
                  <span>Itten</span> &bull; <span>Sottotono</span> &bull; <span>Neutralizzazione</span>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-[2px] bg-[#d8318a]"></div>
                <p class="header-meta text-[#78716c]">MODULO 1 &bull; FOUNDATION</p>
              </div>
            </div>

            <!-- Right Column (46%) Model Layer -->
            <div class="w-[46%] h-full relative overflow-hidden cut-slide1-pink shadow-2xl">
              <img src="img/slide01_model_layer.png" class="w-full h-full object-cover object-top" alt="Modella Colorimetria">
            </div>
          </div>`
  },

  {
    num: '15',
    cat: 'SLIDE 15 (REF) — CERCHIO DI ITTEN',
    title: 'Il cerchio cromatico di Itten',
    desc: 'La ruota cromatica dei primari, secondari e la legge dei complementari neutralizzanti.',
    thumb: 'img/diagram_color_wheel.png',
    refCrop: 'ref_crops/ref_slide_08.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">COLORIMETRIA APPLICATA</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">15</strong></p>
            </div>

            <div class="flex w-full flex-grow items-stretch my-auto z-10">
              <!-- Left Column: 54% -->
              <div class="w-[54%] flex flex-col justify-center pr-6 my-auto py-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-3 leading-[0.96]">
                  Il cerchio di <span class="pink-italic">Itten</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-5 max-w-md leading-[1.45]">
                  La base di ogni miscela: i colori opposti sono complementari. Quando entrano in contatto nel tessuto cutaneo, si annullano e bilanciano reciprocamente.
                </p>

                <!-- 3 Editorial Rows with Badges -->
                <div class="flex flex-col space-y-3.5 max-w-md">
                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-palette"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Colori Primari: Giallo &bull; Rosso &bull; Blu</h4>
                      <p class="text-xs text-[#57534e]">Colori puri base. Il blu ha la molecola più stabile e fredda.</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-shapes"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Colori Secondari: Arancio &bull; Verde &bull; Viola</h4>
                      <p class="text-xs text-[#57534e]">Nati dall'unione dei primari: i veri correttivi per i viraggi.</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-arrows-rotate"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">La Legge dei Complementari (Neutralizzazione)</h4>
                      <p class="text-xs text-[#57534e]">L'arancio annulla il grigio; l'oliva corregge il rosso.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column (46%) Floating Color Wheel -->
              <div class="w-[46%] h-full flex items-center justify-center relative">
                <div class="w-72 h-72 md:w-80 md:h-80 relative flex items-center justify-center">
                  <img src="img/diagram_color_wheel.png" class="w-full h-full object-contain drop-shadow-xl" alt="Ruota cromatica Itten">
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
    cat: 'SLIDE 16 (REF) — STATEMENT BLUSH',
    title: '«Il fototipo è in superficie, il sottotono decide il colore.»',
    desc: 'Layout editoriale su fondo blush (#F1B5CB) con macro occhio e formula aurea in corsivo magenta.',
    thumb: 'img/slide05_macro_model.jpg',
    refCrop: 'ref_crops/ref_slide_05.png',
    render: () => `<div class="w-full h-full relative select-none overflow-hidden flex flex-col justify-between p-10 md:p-14" style="background-color: #F1B5CB;">
            <!-- Header matching slide 5 -->
            <div class="flex justify-between items-center z-20">
              <p class="header-meta text-[#171412]/75">FILOSOFIA DEL COLORE</p>
              <p class="header-meta text-[#171412]/75">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">16</strong></p>
            </div>

            <!-- Main Content Area with Model Right & Quote Left -->
            <div class="flex w-full flex-grow items-center z-10">
              <!-- Left Column: Giant Editorial Serif Statement -->
              <div class="w-[58%] flex flex-col justify-center pr-6 py-2">
                <h1 class="serif-title text-[#171412] leading-[0.94] tracking-tight mb-5" style="font-size: clamp(34px, 4.4cqw, 62px);">
                  «Il fototipo vive<br>
                  in superficie.<br>
                  Il sottotono è la luce<br>
                  che <span style="color: #a55572; font-style: italic;">decide il colore.»</span>
                </h1>

                <!-- Subtext Formula in Editorial Style -->
                <p class="text-sm md:text-base text-[#171412]/85 max-w-md leading-relaxed font-normal">
                  La formula aurea della guarigione:<br>
                  <strong class="text-[#171412]">Pigmento Scelto + Sottotono Biologico = Risultato a 28 Giorni</strong>.
                </p>
              </div>

              <!-- Right Column: High-Res Macro Model Bleed -->
              <div class="w-[42%] h-full relative flex items-center justify-end">
                <div class="w-full h-[90%] rounded-2xl overflow-hidden shadow-2xl relative">
                  <img src="img/slide05_macro_model.jpg" class="w-full h-full object-cover object-center" alt="Dettaglio sguardo e sottotono">
                </div>
              </div>
            </div>

            <!-- Footer matching reference -->
            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#171412]/75">FORMULA AUREA CROMATICA</p>
            </div>
          </div>`
  },

  {
    num: '17',
    cat: 'SLIDE 17 (REF) — VIRAGGI E NEUTRALIZZAZIONE',
    title: 'Viraggi & neutralizzazione',
    desc: '3 casi di correzione cromatica con campioni colore e neutralizzatori complementari.',
    thumb: 'img/ai_texture_cream.jpg',
    refCrop: 'ref_crops/ref_slide_06.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">CORREZIONE CROMATICA</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">17</strong></p>
            </div>

            <div class="flex w-full flex-grow flex-col justify-center my-auto z-10 py-1">
              <div class="mb-5 max-w-xl">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-2 leading-[0.96]">
                  Viraggi & <span class="pink-italic">neutralizzazione</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] leading-[1.45]">
                  Neutralizzare non significa coprire con uno strato scuro, ma applicare il complementare esatto per assorbire la lunghezza d'onda indesiderata.
                </p>
              </div>

              <!-- 3 Case Rows with Pure Color Transitions -->
              <div class="grid grid-cols-3 gap-6 w-full max-w-5xl">
                <!-- Case 1 -->
                <div class="flex flex-col space-y-2">
                  <div class="flex items-center space-x-3 mb-1">
                    <span class="w-6 h-6 rounded-full bg-[#64748b] shadow"></span>
                    <i class="fa-solid fa-arrow-right text-xs text-[#d8318a]"></i>
                    <span class="w-6 h-6 rounded-full bg-[#ea580c] shadow"></span>
                  </div>
                  <h4 class="text-sm font-bold text-[#1c1917]">Sopracciglia Grigie / Blu</h4>
                  <p class="text-xs text-[#57534e]">Causa: impianto troppo profondo o base fredda.</p>
                  <p class="text-xs font-semibold text-[#d8318a]">Neutralizzatore: Arancio Caldo / Zucca</p>
                </div>

                <!-- Case 2 -->
                <div class="flex flex-col space-y-2">
                  <div class="flex items-center space-x-3 mb-1">
                    <span class="w-6 h-6 rounded-full bg-[#ef4444] shadow"></span>
                    <i class="fa-solid fa-arrow-right text-xs text-[#d8318a]"></i>
                    <span class="w-6 h-6 rounded-full bg-[#65a30d] shadow"></span>
                  </div>
                  <h4 class="text-sm font-bold text-[#1c1917]">Sopracciglia Rosse / Salmone</h4>
                  <p class="text-xs text-[#57534e]">Causa: degradazione rapida del nero organico.</p>
                  <p class="text-xs font-semibold text-[#d8318a]">Neutralizzatore: Verde Oliva Desaturato</p>
                </div>

                <!-- Case 3 -->
                <div class="flex flex-col space-y-2">
                  <div class="flex items-center space-x-3 mb-1">
                    <span class="w-6 h-6 rounded-full bg-[#701a75] shadow"></span>
                    <i class="fa-solid fa-arrow-right text-xs text-[#d8318a]"></i>
                    <span class="w-6 h-6 rounded-full bg-[#f97316] shadow"></span>
                  </div>
                  <h4 class="text-sm font-bold text-[#1c1917]">Labbra Violacee / Fredde</h4>
                  <p class="text-xs text-[#57534e]">Causa: melanina fredda intensa della mucosa.</p>
                  <p class="text-xs font-semibold text-[#d8318a]">Neutralizzatore: Arancio Mandarino puro</p>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">PROTOCOLLO DI NEUTRALIZZAZIONE</p>
            </div>
          </div>`
  },

  {
    num: '18',
    cat: 'SLIDE 18 (REF) — OPENER STRUMENTAZIONE',
    title: 'Strumentazione e Aghi',
    desc: 'Apertura del Capitolo 1.5: la meccanica del dermografo, corsa (stroke) e fisica della penetrazione.',
    thumb: 'img/sample_model_profile.jpg',
    refCrop: 'ref_crops/ref_slide_01.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <!-- Left Column (54%) -->
            <div class="w-[54%] h-full flex flex-col justify-between pr-4 z-20">
              <div>
                <p class="header-meta">CAPITOLO 1.5 &bull; MECCANICA DI PRECISIONE</p>
              </div>

              <div class="my-auto py-2">
                <svg width="68" height="22" viewBox="0 0 68 22" class="mb-4">
                  <path d="M4,15 Q28,3 62,8 Q45,16 12,18 Z" fill="#f48fb1" opacity="0.75"></path>
                  <path d="M10,12 Q34,5 54,9" stroke="#d8318a" stroke-width="2.5" stroke-linecap="round" fill="none"></path>
                </svg>

                <h1 class="serif-title text-5xl md:text-6xl lg:text-[5.5rem] text-[#171412] leading-[0.94] tracking-tight mb-5">
                  Strumentazione<br>& <span class="pink-italic">Aghi</span>
                </h1>

                <p class="text-xs md:text-sm text-[#292524] max-w-md leading-[1.5] mb-4">
                  La mano è la sensibilità dell'artista; il dermografo è il condotto di precisione della scienza. Corsa, frequenza e calibro trasformano il tocco in perfezione.
                </p>

                <div class="flex items-center space-x-3 text-xs text-[#d8318a] font-semibold tracking-wide uppercase">
                  <span>Dermografi</span> &bull; <span>Stroke</span> &bull; <span>Configurazioni RL / RS</span>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-[2px] bg-[#d8318a]"></div>
                <p class="header-meta text-[#78716c]">MODULO 1 &bull; FOUNDATION</p>
              </div>
            </div>

            <!-- Right Column (46%) Model Layer -->
            <div class="w-[46%] h-full relative overflow-hidden cut-slide3-pink shadow-2xl">
              <img src="img/slide03_model_layer.png" class="w-full h-full object-cover object-top" alt="Strumentazione Dermografo">
            </div>
          </div>`
  },

  {
    num: '19',
    cat: 'SLIDE 19 (REF) — CONFIGURAZIONE AGHI',
    title: 'Configurazione degli aghi',
    desc: 'Round Liner per linee e pelo singolo vs Round Shader per sfumature e campiture vellutate.',
    thumb: 'img/diagram_needles.png',
    refCrop: 'ref_crops/ref_slide_07.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-6 md:p-8 lg:p-10 select-none overflow-hidden text-[#171412]">
            <!-- Header Meta -->
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">STRUMENTAZIONE DI PRECISIONE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">19</strong></p>
            </div>

            <!-- Main Content Area: Perfectly proportioned to 16:9 canvas -->
            <div class="flex w-full flex-grow items-center my-auto z-10 gap-6 lg:gap-8">
              <!-- Left Column: Editorial Intro & Technical Parameters (32%) -->
              <div class="w-[32%] flex flex-col justify-center pr-1">
                <h2 class="serif-title text-3xl md:text-4xl lg:text-[2.85rem] text-[#171412] mb-2 leading-[0.96]">
                  Configurazione<br>degli <span class="pink-italic">aghi</span>
                </h2>
                <p class="text-[11px] md:text-xs text-[#292524] mb-5 leading-[1.48]">
                  La cartuccia PMU modula la dispersione del pigmento nel derma papillare. Diametro, conicit&agrave; e geometria governano nitidezza del pixel e campitura.
                </p>

                <!-- Technical Parameters Editorial List -->
                <div class="flex flex-col space-y-3.5">
                  <div class="flex items-start space-x-3">
                    <div class="w-7 h-7 rounded-full bg-[#171412] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm mt-0.5">
                      <i class="fa-solid fa-gauge"></i>
                    </div>
                    <div>
                      <h4 class="text-[11px] font-bold text-[#1c1917] uppercase tracking-wider">Calibri di Riferimento</h4>
                      <p class="text-[11px] text-[#57534e] mt-0.5 leading-snug">
                        <strong class="text-[#171412]">0.18–0.22 mm:</strong> Nano pelo ultra-sottile<br>
                        <strong class="text-[#171412]">0.25 mm:</strong> Jolly universale sfumature<br>
                        <strong class="text-[#171412]">0.30–0.35 mm:</strong> Lip blush &amp; campitura
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start space-x-3">
                    <div class="w-7 h-7 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm mt-0.5">
                      <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                      <h4 class="text-[11px] font-bold text-[#1c1917] uppercase tracking-wider">Membrana di Sicurezza</h4>
                      <p class="text-[11px] text-[#57534e] mt-0.5 leading-snug">
                        Isolamento ermetico: previene il reflusso di fluidi biologici nel motore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column: Needle Configurations Cards (68%) -->
              <div class="w-[68%] flex flex-col justify-center">
                <!-- 3 Needle Cards Grid -->
                <div class="grid grid-cols-3 gap-3.5 w-full">
                  <!-- Card 1: Round Liner (RL) -->
                  <div class="bg-white rounded-xl p-4 border-t-[3px] border-t-[#d8318a] border border-[#e7e5e4] shadow-md flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-1.5">
                        <span class="px-2 py-0.5 rounded bg-[#d8318a]/10 text-[#d8318a] text-[9px] font-bold tracking-wider uppercase">ROUND LINER</span>
                        <span class="text-[10px] font-extrabold text-[#d8318a]">1RL / 3RL</span>
                      </div>
                      <h3 class="serif-title text-lg md:text-xl text-[#171412] font-semibold">Singolo Ago</h3>
                      <p class="text-[10px] text-[#78716c] mb-2.5">Punte saldate convergenti</p>

                      <!-- Needle Illustration SVG -->
                      <div class="h-28 w-full bg-[#faf7f2] rounded-lg flex items-center justify-center py-1.5 mb-2.5 border border-[#eee8df]">
                        <svg viewBox="0 0 80 120" class="h-24 w-auto">
                          <defs>
                            <linearGradient id="metal1RL" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stop-color="#64748b"/>
                              <stop offset="30%" stop-color="#f1f5f9"/>
                              <stop offset="60%" stop-color="#cbd5e1"/>
                              <stop offset="100%" stop-color="#475569"/>
                            </linearGradient>
                          </defs>
                          <!-- Main shaft -->
                          <rect x="33" y="6" width="14" height="64" rx="1.5" fill="url(#metal1RL)"/>
                          <!-- Taper -->
                          <polygon points="33,70 47,70 40,105" fill="url(#metal1RL)"/>
                          <!-- Tip line highlight -->
                          <line x1="40" y1="70" x2="40" y2="105" stroke="#ffffff" stroke-width="0.7" opacity="0.6"/>
                          <!-- Ink dot at tip -->
                          <circle cx="40" cy="107" r="2.8" fill="#d8318a"/>
                          <!-- Pixel dot -->
                          <circle cx="40" cy="114" r="1.3" fill="#d8318a" opacity="0.8"/>
                        </svg>
                      </div>

                      <div class="space-y-0.5">
                        <p class="text-[11px] font-bold text-[#171412] mb-0.5">Linea Ultra-Definita</p>
                        <p class="text-[10px] text-[#57534e] leading-tight">• Pelo a pelo iperrealistico</p>
                        <p class="text-[10px] text-[#57534e] leading-tight">• Pixel nitidi e controllati</p>
                        <p class="text-[10px] text-[#57534e] leading-tight">• Contorno &amp; infracigliare</p>
                      </div>
                    </div>

                    <div class="mt-3 pt-2 border-t border-[#f1ede6] text-[9.5px] text-[#78716c] flex justify-between items-center">
                      <span>Calibro ideale:</span>
                      <strong class="text-[#d8318a] text-[10px] font-bold">0.18 – 0.25 mm</strong>
                    </div>
                  </div>

                  <!-- Card 2: Round Shader (RS) -->
                  <div class="bg-white rounded-xl p-4 border-t-[3px] border-t-[#d8318a] border border-[#e7e5e4] shadow-md flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-1.5">
                        <span class="px-2 py-0.5 rounded bg-[#d8318a]/10 text-[#d8318a] text-[9px] font-bold tracking-wider uppercase">ROUND SHADER</span>
                        <span class="text-[10px] font-extrabold text-[#d8318a]">3RS / 5RS</span>
                      </div>
                      <h3 class="serif-title text-lg md:text-xl text-[#171412] font-semibold">Fascio Aperto</h3>
                      <p class="text-[10px] text-[#78716c] mb-2.5">Punte parallele distanziate</p>

                      <!-- Needle Illustration SVG -->
                      <div class="h-28 w-full bg-[#faf7f2] rounded-lg flex items-center justify-center py-1.5 mb-2.5 border border-[#eee8df]">
                        <svg viewBox="0 0 80 120" class="h-24 w-auto">
                          <defs>
                            <linearGradient id="metal3RS" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stop-color="#64748b"/>
                              <stop offset="30%" stop-color="#f1f5f9"/>
                              <stop offset="60%" stop-color="#cbd5e1"/>
                              <stop offset="100%" stop-color="#475569"/>
                            </linearGradient>
                          </defs>
                          <!-- Needle 1 -->
                          <rect x="22" y="6" width="9" height="64" rx="1" fill="url(#metal3RS)"/>
                          <polygon points="22,70 31,70 25.5,103" fill="url(#metal3RS)"/>
                          <!-- Needle 2 -->
                          <rect x="36" y="6" width="9" height="64" rx="1" fill="url(#metal3RS)"/>
                          <polygon points="36,70 45,70 40.5,106" fill="url(#metal3RS)"/>
                          <!-- Needle 3 -->
                          <rect x="50" y="6" width="9" height="64" rx="1" fill="url(#metal3RS)"/>
                          <polygon points="50,70 59,70 55.5,103" fill="url(#metal3RS)"/>
                          <!-- Soft powder dots -->
                          <circle cx="25.5" cy="110" r="1.6" fill="#d8318a" opacity="0.6"/>
                          <circle cx="40.5" cy="113" r="1.8" fill="#d8318a" opacity="0.8"/>
                          <circle cx="55.5" cy="110" r="1.6" fill="#d8318a" opacity="0.6"/>
                        </svg>
                      </div>

                      <div class="space-y-0.5">
                        <p class="text-[11px] font-bold text-[#171412] mb-0.5">Sfumatura Morbida</p>
                        <p class="text-[10px] text-[#57534e] leading-tight">• Powder &amp; Ombr&eacute; Brows</p>
                        <p class="text-[10px] text-[#57534e] leading-tight">• Riempimento labbra vellutato</p>
                        <p class="text-[10px] text-[#57534e] leading-tight">• Minore densit&agrave; di trauma</p>
                      </div>
                    </div>

                    <div class="mt-3 pt-2 border-t border-[#f1ede6] text-[9.5px] text-[#78716c] flex justify-between items-center">
                      <span>Calibro ideale:</span>
                      <strong class="text-[#d8318a] text-[10px] font-bold">0.25 – 0.30 mm</strong>
                    </div>
                  </div>

                  <!-- Card 3: Curved Magnum (CM) -->
                  <div class="bg-white rounded-xl p-4 border-t-[3px] border-t-[#d8318a] border border-[#e7e5e4] shadow-md flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-1.5">
                        <span class="px-2 py-0.5 rounded bg-[#d8318a]/10 text-[#d8318a] text-[9px] font-bold tracking-wider uppercase">MAGNUM / CURVED</span>
                        <span class="text-[10px] font-extrabold text-[#d8318a]">Curved Mag</span>
                      </div>
                      <h3 class="serif-title text-lg md:text-xl text-[#171412] font-semibold">Fila Curva</h3>
                      <p class="text-[10px] text-[#78716c] mb-2.5">Disposizione ad arco anatomico</p>

                      <!-- Needle Illustration SVG -->
                      <div class="h-28 w-full bg-[#faf7f2] rounded-lg flex items-center justify-center py-1.5 mb-2.5 border border-[#eee8df]">
                        <svg viewBox="0 0 95 120" class="h-24 w-auto">
                          <defs>
                            <linearGradient id="metalMag" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stop-color="#64748b"/>
                              <stop offset="30%" stop-color="#f1f5f9"/>
                              <stop offset="60%" stop-color="#cbd5e1"/>
                              <stop offset="100%" stop-color="#475569"/>
                            </linearGradient>
                          </defs>
                          <!-- 6 needles curved -->
                          <rect x="12" y="6" width="7.5" height="64" fill="url(#metalMag)"/>
                          <polygon points="12,70 19.5,70 15.7,100" fill="url(#metalMag)"/>

                          <rect x="24" y="6" width="7.5" height="64" fill="url(#metalMag)"/>
                          <polygon points="24,70 31.5,70 27.7,103" fill="url(#metalMag)"/>

                          <rect x="36" y="6" width="7.5" height="64" fill="url(#metalMag)"/>
                          <polygon points="36,70 43.5,70 39.7,106" fill="url(#metalMag)"/>

                          <rect x="48" y="6" width="7.5" height="64" fill="url(#metalMag)"/>
                          <polygon points="48,70 55.5,70 51.7,106" fill="url(#metalMag)"/>

                          <rect x="60" y="6" width="7.5" height="64" fill="url(#metalMag)"/>
                          <polygon points="60,70 67.5,70 63.7,103" fill="url(#metalMag)"/>

                          <rect x="72" y="6" width="7.5" height="64" fill="url(#metalMag)"/>
                          <polygon points="72,70 79.5,70 75.7,100" fill="url(#metalMag)"/>

                          <!-- Broad soft blush dots -->
                          <circle cx="15.7" cy="106" r="1.3" fill="#d8318a" opacity="0.5"/>
                          <circle cx="27.7" cy="109" r="1.5" fill="#d8318a" opacity="0.6"/>
                          <circle cx="39.7" cy="112" r="1.7" fill="#d8318a" opacity="0.7"/>
                          <circle cx="51.7" cy="112" r="1.7" fill="#d8318a" opacity="0.7"/>
                          <circle cx="63.7" cy="109" r="1.5" fill="#d8318a" opacity="0.6"/>
                          <circle cx="75.7" cy="106" r="1.3" fill="#d8318a" opacity="0.5"/>
                        </svg>
                      </div>

                      <div class="space-y-0.5">
                        <p class="text-[11px] font-bold text-[#171412] mb-0.5">Saturazione Rapida</p>
                        <p class="text-[10px] text-[#57534e] leading-tight">• Grandi campiture labbra</p>
                        <p class="text-[10px] text-[#57534e] leading-tight">• Meno passaggi = minor trauma</p>
                        <p class="text-[10px] text-[#57534e] leading-tight">• Sfumatura di bordo naturale</p>
                      </div>
                    </div>

                    <div class="mt-3 pt-2 border-t border-[#f1ede6] text-[9.5px] text-[#78716c] flex justify-between items-center">
                      <span>Calibro ideale:</span>
                      <strong class="text-[#d8318a] text-[10px] font-bold">0.30 – 0.35 mm</strong>
                    </div>
                  </div>
                </div>

                <!-- Bottom Technical Banner -->
                <div class="mt-3 w-full bg-white rounded-lg p-2.5 px-3.5 border border-[#e7e5e4] shadow-sm flex items-center space-x-3">
                  <div class="w-6 h-6 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-[10px] shadow-sm">
                    <i class="fa-solid fa-microscope"></i>
                  </div>
                  <p class="text-[10px] md:text-[11px] text-[#44403c] leading-snug">
                    <strong class="text-[#171412]">Conicit&agrave; Long Taper (5–7 mm):</strong> la rastremazione allungata riduce la superficie frontale d'impatto, consentendo un rilascio pigmentario fluido a minima resistenza elastica cutanea.
                  </p>
                </div>
              </div>
            </div>

            <!-- Footer Meta -->
            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">TECNOLOGIA DELLE CARTUCCE</p>
            </div>
          </div>`
  },

  {
    num: '20',
    cat: 'SLIDE 20 (REF) — STATEMENT OBSIDIAN',
    title: '«Velocità, Pressione e Tensione a tre vie.»',
    desc: 'Sfondo nero puro (#000000) con modella in penombra a filo bordo destro e titolo editoriale Playfair Display.',
    thumb: 'img/dark_model_highres.jpg',
    refCrop: 'ref_crops/ref_slide_09.png',
    render: () => `<div class="w-full h-full bg-[#000000] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-white">
            <img src="img/slide09_model.jpg" class="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none z-0" alt="Modella Statement">

            <div class="flex justify-between items-center z-20 relative">
              <p class="header-meta text-white/80" style="letter-spacing: 0.16em;">REGOLA AUREA &bull; FONDAMENTI</p>
              <p class="header-meta text-white/80" style="letter-spacing: 0.16em;">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-white text-sm">20</strong></p>
            </div>

            <div class="my-auto z-20 py-1 pl-2 max-w-2xl">
              <h1 class="serif-title text-white font-normal select-none" style="font-size: clamp(34px, 4.85rem, 78px); line-height: 0.93; letter-spacing: -0.02em;">
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
