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
    desc: '4 elementi con icone SVG e macro occhio ad alta risoluzione con taglio diagonale.',
    thumb: 'ref_crops/ref_slide_07.png',
    refCrop: 'ref_crops/ref_slide_07.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">ANATOMIA DELLA PELLE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">07</strong></p>
            </div>

            <div class="flex w-full flex-grow items-stretch my-auto z-10">
              <div class="w-[58%] flex flex-col justify-center pr-6 py-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-3 leading-[0.96]">
                  Gli annessi <span class="pink-italic">cutanei</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-6 max-w-md leading-[1.45]">
                  Gli annessi cutanei sono strutture connesse alla pelle e che partecipano alla sua funzione, contribuendo alla...
                </p>

                <!-- 4 Items with SVG Icons -->
                <div class="flex flex-col space-y-3 max-w-sm">
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

              <!-- Right Diagonal Macro Crop -->
              <div class="w-[42%] h-full relative overflow-hidden cut-slide7-eye shadow-inner">
                <img src="img/slide05_macro_model.jpg" class="w-full h-full object-cover object-center scale-110" alt="Dettaglio occhio modella">
              </div>
            </div>

            <div class="flex items-center space-x-3">
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
  }
];
