// scripts/apply_editorial_masterpiece.js
// Completely rewrites Slides 10 through 20 with 1:1 fidelity to Friduchas Academy's luxury editorial aesthetic
const fs = require('fs');

const editorialSlides = [
  // =========================================================================
  // SLIDE 10: LA PROFONDITÀ IDEALE (EDITORIAL SCIENTIFIC + MODEL CUTOUT)
  // =========================================================================
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

  // =========================================================================
  // SLIDE 11: IL CICLO DI GUARIGIONE (4 CIRCULAR DISCS AS IN SLIDE 06)
  // =========================================================================
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

  // =========================================================================
  // SLIDE 12: I FOTOTIPI DI FITZPATRICK (EDITORIAL BEAUTY MODEL + TONAL CHIPS)
  // =========================================================================
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

  // =========================================================================
  // SLIDE 13: TIPOLOGIE CUTANEE & TECNICA D'ELEZIONE (AGENDA-STYLE NUMERALS)
  // =========================================================================
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

  // =========================================================================
  // SLIDE 14: OPENER CAPITOLO 1.3 — COLORIMETRIA E PIGMENTOLOGIA
  // =========================================================================
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

  // =========================================================================
  // SLIDE 15: IL CERCHIO CROMATICO DI ITTEN (ARTISTIC COLOR WHEEL)
  // =========================================================================
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

  // =========================================================================
  // SLIDE 16: FOTOTIPO VS SOTTOTONO (STATEMENT BLUSH LIKE SLIDE 05)
  // =========================================================================
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

  // =========================================================================
  // SLIDE 17: I VIRAGGI & LA NEUTRALIZZAZIONE (TRANSFORMATION CHIPS)
  // =========================================================================
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

  // =========================================================================
  // SLIDE 18: OPENER CAPITOLO 1.5 — STRUMENTAZIONE E AGHI (EDITORIAL)
  // =========================================================================
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

  // =========================================================================
  // SLIDE 19: CONFIGURAZIONE DEGLI AGHI (RL VS RS)
  // =========================================================================
  {
    num: '19',
    cat: 'SLIDE 19 (REF) — CONFIGURAZIONE AGHI',
    title: 'Configurazione degli aghi',
    desc: 'Round Liner per linee e pelo singolo vs Round Shader per sfumature e campiture vellutate.',
    thumb: 'img/diagram_needles.png',
    refCrop: 'ref_crops/ref_slide_07.png',
    render: () => `<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-10 md:p-14 select-none overflow-hidden text-[#171412]">
            <div class="flex justify-between items-center z-20">
              <p class="header-meta">STRUMENTAZIONE DI PRECISIONE</p>
              <p class="header-meta">MODULO 1 &nbsp;|&nbsp; FOUNDATION &nbsp;&nbsp; <strong class="text-[#1c1917] text-sm">19</strong></p>
            </div>

            <div class="flex w-full flex-grow items-stretch my-auto z-10">
              <!-- Left Column: 54% -->
              <div class="w-[54%] flex flex-col justify-center pr-6 my-auto py-2">
                <h2 class="serif-title text-4xl md:text-5xl lg:text-[4.2rem] text-[#171412] mb-3 leading-[0.96]">
                  Configurazione<br>degli <span class="pink-italic">aghi</span>
                </h2>
                <p class="text-xs md:text-sm text-[#292524] mb-5 max-w-md leading-[1.45]">
                  La cartuccia PMU controlla il flusso e la dispersione delle micro-gocce. Diametro e geometria delle punte determinano la nitidezza del pixel.
                </p>

                <div class="flex flex-col space-y-4 max-w-md">
                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm font-bold">
                      1RL
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Round Liner (1RL / 3RL)</h4>
                      <p class="text-xs text-[#57534e]">Punte saldate convergenti: ideale per Hair Stroke ultra-sottile e pixel definiti.</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#d8318a] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm font-bold">
                      3RS
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Round Shader (3RS / 5RS)</h4>
                      <p class="text-xs text-[#57534e]">Punte parallele aperte: ideale per Powder Brows vellutata e Lip Blush omogeneo.</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3.5">
                    <div class="w-8 h-8 rounded-full bg-[#171412] text-white flex items-center justify-center flex-shrink-0 text-xs shadow-sm">
                      <i class="fa-solid fa-gauge"></i>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-[#1c1917]">Calibri di Riferimento</h4>
                      <p class="text-xs text-[#57534e]">0.18–0.22 mm (nano pelo) &bull; 0.25 mm (jolly brows) &bull; 0.30–0.35 mm (labbra)</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column (46%) Needles Diagram -->
              <div class="w-[46%] h-full flex items-center justify-center relative">
                <div class="w-full max-w-sm p-4 rounded-2xl bg-white/70 border border-[#e7e5e4] shadow-xl text-center">
                  <img src="img/diagram_needles.png" class="w-full h-auto rounded-lg mb-2" alt="Diagramma aghi PMU">
                  <p class="text-[10px] text-[#78716c] italic">«Conicità Long Taper: penetrazione elastica e trauma cutaneo minimo.»</p>
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3 z-20">
              <div class="w-10 h-[2px] bg-[#d8318a]"></div>
              <p class="header-meta text-[#78716c]">TECNOLOGIA DELLE CARTUCCE</p>
            </div>
          </div>`
  },

  // =========================================================================
  // SLIDE 20: LA TRIADE DELLA PRECISIONE (STATEMENT OBSIDIAN LIKE SLIDE 09)
  // =========================================================================
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

// Read current public/slides_data.js and keep only slides 01-09, then append editorialSlides
let s = fs.readFileSync('public/slides_data.js', 'utf8');

// Find where Slide 09 ends
const s09Idx = s.indexOf("num: '09'");
const afterS09 = s.indexOf('`\n  }', s09Idx);
const endOfS09 = afterS09 + 5; // includes closing `\n  }`

const slides01To09 = s.substring(0, endOfS09);

// Construct new array
const newSlidesBlock = editorialSlides.map(slide => `  {
    num: '${slide.num}',
    cat: '${slide.cat}',
    title: '${slide.title.replace(/'/g, "\\'")}',
    desc: '${slide.desc.replace(/'/g, "\\'")}',
    thumb: '${slide.thumb}',
    refCrop: '${slide.refCrop}',
    render: () => \`${slide.render().trim()}\`
  }`).join(',\n\n');

const fullJs = slides01To09 + ',\n\n' + newSlidesBlock + '\n];\n';

fs.writeFileSync('public/slides_data.js', fullJs, 'utf8');
console.log('Successfully applied editorial masterpiece to Slides 10 through 20!');
