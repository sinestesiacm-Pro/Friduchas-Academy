const fs = require('fs');
const { execSync } = require('child_process');
const sharp = require('sharp');

// Let's create a test viewer file test_viewer_s9.html that renders slide 9 exactly as it appears in the viewer on localhost:3000
const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --font-serif: 'Playfair Display', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background-color: #0b090b; font-family: var(--font-sans); }
    .serif-title { font-family: var(--font-serif); font-weight: 400; letter-spacing: -0.02em; }
    .header-meta { font-family: var(--font-sans); font-size: 11px; font-weight: 600; letter-spacing: 0.16em; color: #a89f97; text-transform: uppercase; }
    .slide-canvas {
      width: 100%;
      aspect-ratio: 16 / 9;
      position: relative;
      overflow: hidden;
      container-type: inline-size;
    }
  </style>
</head>
<body class="p-8 flex justify-center items-center">
  <div style="width: 960px;" class="flex flex-col items-center">
    <div id="slide-viewport" class="slide-canvas rounded-xl shadow-2xl border border-[#2B2629] bg-[#000000] text-white">
      <!-- SLIDE 9 CONTENT -->
      <div class="w-full h-full bg-[#000000] relative flex flex-col justify-between p-[4cqw] select-none overflow-hidden text-white">
        <div class="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden">
          <img src="img/slide09_model.jpg" class="w-full h-full object-cover object-right">
        </div>
        <div class="flex justify-between items-center z-20 w-full px-2">
          <p class="header-meta text-[#a89f97] text-[1.1cqw] tracking-[0.20em]">CONSULTA EDITORIALE PELLE</p>
          <p class="header-meta text-white font-bold text-[1.2cqw] tracking-wider">03</p>
        </div>
        <div class="my-auto z-20 py-1 pl-2 max-w-[50cqw]">
          <h1 class="serif-title text-white font-normal select-none" 
              style="font-style: normal; font-size: 4.8cqw; line-height: 0.94; letter-spacing: -0.02em;">
            La pelle<br>
            è il nostro<br>
            primo contatto<br>
            con il <span style="color: #a55572; font-style: italic;">mondo.</span>
          </h1>
        </div>
        <div class="flex flex-col space-y-2 z-20 pl-2">
          <div style="width: 3.5cqw; height: 2px; background: #a55572;"></div>
          <p class="header-meta text-[#a89f97] text-[1.0cqw] tracking-[0.22em] uppercase">ANALISOLA DELLA PELLE</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync('public/test_cqw_s9.html', html, 'utf8');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
execSync(`"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=2000 --window-size=1280,800 --screenshot="dist/previews/test_cqw_s9.png" "http://localhost:3000/test_cqw_s9.html"`);
console.log('Saved dist/previews/test_cqw_s9.png');
