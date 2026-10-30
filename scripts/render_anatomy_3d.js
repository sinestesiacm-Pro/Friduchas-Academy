// scripts/render_anatomy_3d.js
const sharp = require('sharp');
const path = require('path');

async function buildAnatomySvg() {
  const w = 1200;
  const h = 1200;

  const svg = `
  <svg width="${w}" height="${h}" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Epidermis Surface Skin Tone -->
      <linearGradient id="topSkin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFE8E0"/>
        <stop offset="50%" stop-color="#FEDDD4"/>
        <stop offset="100%" stop-color="#FBC7BC"/>
      </linearGradient>

      <!-- Dermis Layer Side -->
      <linearGradient id="dermaLeft" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#F29E9A"/>
        <stop offset="40%" stop-color="#E87672"/>
        <stop offset="100%" stop-color="#D64848"/>
      </linearGradient>
      <linearGradient id="dermaRight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#E87672"/>
        <stop offset="100%" stop-color="#BF3636"/>
      </linearGradient>

      <!-- Hypodermis Layer Side -->
      <linearGradient id="hypoLeft" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFF59D"/>
        <stop offset="50%" stop-color="#FBC02D"/>
        <stop offset="100%" stop-color="#F57F17"/>
      </linearGradient>
      <linearGradient id="hypoRight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FBC02D"/>
        <stop offset="100%" stop-color="#E65100"/>
      </linearGradient>

      <!-- Hair Shaft Gradient -->
      <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#212121"/>
        <stop offset="50%" stop-color="#424242"/>
        <stop offset="100%" stop-color="#111111"/>
      </linearGradient>

      <!-- Sebaceous Gland -->
      <radialGradient id="sebumGrad" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#FFFDE7"/>
        <stop offset="70%" stop-color="#FFF176"/>
        <stop offset="100%" stop-color="#FBC02D"/>
      </radialGradient>

      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="16"/>
        <feOffset dx="0" dy="24"/>
        <feComponentTransfer><feFuncA type="linear" slope="0.14"/></feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    <!-- Base Drop Shadow -->
    <polygon points="600,1000 980,820 600,640 220,820" fill="#000000" opacity="0.08"/>

    <g filter="url(#dropShadow)">
      <!-- 1. TOP SURFACE: EPIDERMIS (Isometric Rhombus) -->
      <polygon points="600,240 980,420 600,600 220,420" fill="url(#topSkin)" stroke="#F5B7A8" stroke-width="1.5"/>

      <!-- Skin texture micro-lines on top surface -->
      <path d="M 400,320 Q 500,350 600,340 T 800,420" fill="none" stroke="#F8C0B2" stroke-width="1.2" opacity="0.6"/>
      <path d="M 320,380 Q 450,420 580,410 T 780,490" fill="none" stroke="#F8C0B2" stroke-width="1.2" opacity="0.6"/>
      <path d="M 420,440 Q 540,480 660,470 T 860,540" fill="none" stroke="#F8C0B2" stroke-width="1.2" opacity="0.6"/>

      <!-- Hair pore entry on top surface -->
      <ellipse cx="580" cy="450" rx="9" ry="5" fill="#D78A7A" stroke="#C16C5A" stroke-width="1"/>

      <!-- 2. LEFT SIDE FACES (Cutaway) -->
      <!-- Layer A: Epidermis Band -->
      <polygon points="220,420 600,600 600,626 220,446" fill="#EF6C6C" stroke="#EF5350" stroke-width="0.5"/>

      <!-- Layer B: Dermis -->
      <polygon points="220,446 600,626 600,846 220,666" fill="url(#dermaLeft)"/>

      <!-- Layer C: Hypodermis / Subcutis -->
      <polygon points="220,666 600,846 600,976 220,796" fill="url(#hypoLeft)"/>

      <!-- 3. RIGHT SIDE FACES (Cutaway) -->
      <!-- Layer A: Epidermis Band -->
      <polygon points="600,600 980,420 980,446 600,626" fill="#D32F2F" opacity="0.65" stroke="#EF5350" stroke-width="0.5"/>

      <!-- Layer B: Dermis -->
      <polygon points="600,626 980,446 980,666 600,846" fill="url(#dermaRight)"/>

      <!-- Layer C: Hypodermis -->
      <polygon points="600,846 980,666 980,796 600,976" fill="url(#hypoRight)"/>

      <!-- 4. INTERNAL ANATOMICAL STRUCTURES ON LEFT CUTAWAY -->
      
      <!-- Blood Vessels (Artery Red & Vein Blue loops in Dermis) -->
      <path d="M 380,840 C 370,750 410,700 400,635 C 395,615 415,615 420,635 C 430,690 395,760 410,840" 
            fill="none" stroke="#E53935" stroke-width="5" stroke-linecap="round"/>
      <path d="M 425,845 C 415,765 445,710 435,640 C 430,620 450,620 455,640 C 465,700 435,770 450,845" 
            fill="none" stroke="#1E88E5" stroke-width="4.5" stroke-linecap="round"/>

      <!-- Hair Follicle Sheath in Dermis -->
      <path d="M 570,455 C 560,540 520,670 495,790 C 490,815 525,820 535,795 C 555,680 590,550 595,455 Z" 
            fill="#FFE0B2" opacity="0.9" stroke="#FFCC80" stroke-width="1.5"/>

      <!-- Hair Bulb / Papilla at the base -->
      <ellipse cx="510" cy="805" rx="22" ry="16" fill="#EF5350" stroke="#C62828" stroke-width="2"/>
      <circle cx="510" cy="808" r="9" fill="#FFCDD2"/>

      <!-- Hair Shaft (Growing out from bulb, through epidermis, into air) -->
      <path d="M 510,800 Q 545,630 580,450" fill="none" stroke="url(#hairGrad)" stroke-width="9.5" stroke-linecap="round"/>
      <path d="M 580,450 Q 640,240 720,70" fill="none" stroke="url(#hairGrad)" stroke-width="9" stroke-linecap="round"/>

      <!-- Sebaceous Gland (attached to hair follicle in mid-dermis) -->
      <g transform="translate(545, 620)">
        <circle cx="-15" cy="-8" r="16" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.2"/>
        <circle cx="8" cy="-14" r="14" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.2"/>
        <circle cx="-5" cy="10" r="18" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.2"/>
        <circle cx="16" cy="4" r="15" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.2"/>
        <circle cx="-18" cy="14" r="12" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.2"/>
        <path d="M -15,-4 Q -35,0 -40,15" fill="none" stroke="#FDD835" stroke-width="4"/>
      </g>

      <!-- Arrector Pili Muscle -->
      <path d="M 520,700 Q 420,630 360,540" fill="none" stroke="#C62828" stroke-width="6" stroke-linecap="round" opacity="0.75"/>

      <!-- Adipose Tissue Globules in Hypodermis (Yellow honeycomb fat cells) -->
      <g>
        <circle cx="280" cy="740" r="17" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="315" cy="730" r="19" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="295" cy="768" r="20" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="335" cy="765" r="18" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="270" cy="775" r="16" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="310" cy="805" r="19" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>

        <circle cx="420" cy="880" r="21" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="460" cy="870" r="20" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="440" cy="915" r="22" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="485" cy="905" r="19" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="525" cy="885" r="20" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="555" cy="915" r="18" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="475" cy="945" r="20" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>
        <circle cx="520" cy="950" r="19" fill="url(#sebumGrad)" stroke="#FBC02D" stroke-width="1.5"/>

        <circle cx="660" cy="880" r="20" fill="#FBC02D" opacity="0.75" stroke="#F57F17" stroke-width="1.2"/>
        <circle cx="700" cy="860" r="18" fill="#FBC02D" opacity="0.75" stroke="#F57F17" stroke-width="1.2"/>
        <circle cx="740" cy="840" r="19" fill="#FBC02D" opacity="0.75" stroke="#F57F17" stroke-width="1.2"/>
        <circle cx="680" cy="915" r="21" fill="#FBC02D" opacity="0.75" stroke="#F57F17" stroke-width="1.2"/>
        <circle cx="725" cy="895" r="19" fill="#FBC02D" opacity="0.75" stroke="#F57F17" stroke-width="1.2"/>
        <circle cx="770" cy="875" r="18" fill="#FBC02D" opacity="0.75" stroke="#F57F17" stroke-width="1.2"/>
        <circle cx="810" cy="850" r="19" fill="#FBC02D" opacity="0.75" stroke="#F57F17" stroke-width="1.2"/>
        <circle cx="715" cy="945" r="20" fill="#FBC02D" opacity="0.75" stroke="#F57F17" stroke-width="1.2"/>
        <circle cx="760" cy="925" r="19" fill="#FBC02D" opacity="0.75" stroke="#F57F17" stroke-width="1.2"/>
      </g>

      <!-- Center Corner Ridge Highlight Line -->
      <line x1="600" y1="600" x2="600" y2="976" stroke="#FFFFFF" stroke-width="1.5" opacity="0.45"/>
    </g>
  </svg>
  `;

  const dest1 = path.join(__dirname, '..', 'public', 'img', 'anatomy_skin_3d_pro.png');
  const dest2 = path.join(__dirname, '..', 'assets', 'img', 'anatomy_skin_3d_pro.png');
  await sharp(Buffer.from(svg)).png().toFile(dest1);
  await sharp(Buffer.from(svg)).png().toFile(dest2);
  console.log('Saved high-res 3D skin anatomy to ' + dest1);
}

buildAnatomySvg().catch(console.error);

