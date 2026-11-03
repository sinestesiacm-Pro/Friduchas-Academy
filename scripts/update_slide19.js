const fs = require('fs');
const path = require('path');

const slidesDataPath = path.join(__dirname, '..', 'public', 'slides_data.js');
let content = fs.readFileSync(slidesDataPath, 'utf8');

// Build the perfectly scaled render function for Slide 19
const newSlide19Render = `render: () => \`<div class="w-full h-full bg-[#faf7f2] relative flex flex-col justify-between p-6 md:p-8 lg:p-10 select-none overflow-hidden text-[#171412]">
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
          </div>\``;

// Replace Slide 19 render in slides_data.js
const slide19Header = "title: 'Configurazione degli aghi',";
const s19Idx = content.indexOf(slide19Header);
if (s19Idx === -1) {
  console.error("Could not find Slide 19 header in public/slides_data.js");
  process.exit(1);
}

const renderStart = content.indexOf('render: () =>', s19Idx);
const s20Idx = content.indexOf("num: '20',");
const slide19End = content.lastIndexOf('},', s20Idx);

const updatedSlide19 = content.substring(s19Idx, renderStart) + newSlide19Render + '\n  ';
content = content.substring(0, s19Idx) + updatedSlide19 + content.substring(slide19End);

fs.writeFileSync(slidesDataPath, content, 'utf8');
console.log('Successfully updated Slide 19 in public/slides_data.js');
