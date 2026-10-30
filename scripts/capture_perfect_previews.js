const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

global.window = global;
const js = fs.readFileSync('public/slides_data.js', 'utf8');
eval(js);

function inlineImages(htmlStr) {
  return htmlStr.replace(/src=["']img\/([^"']+)["']/g, (match, filename) => {
    const filePath = path.join('public', 'img', filename);
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filename).toLowerCase();
      const mime = ext === '.png' ? 'image/png' : ext === '.svg' ? 'image/svg+xml' : 'image/jpeg';
      const b64 = fs.readFileSync(filePath).toString('base64');
      return `src="data:${mime};base64,${b64}"`;
    }
    return match;
  });
}

const cormorantRegular = fs.readFileSync('assets/fonts/CormorantGaramond-Regular.ttf').toString('base64');
const cormorantItalic = fs.readFileSync('assets/fonts/CormorantGaramond-Italic.ttf').toString('base64');
const cormorantSemiBold = fs.readFileSync('assets/fonts/CormorantGaramond-SemiBold.ttf').toString('base64');
const pfRegular = fs.readFileSync('assets/fonts/PlayfairDisplay-Regular.ttf').toString('base64');
const pfItalic = fs.readFileSync('assets/fonts/PlayfairDisplay-Italic.ttf').toString('base64');
const interVar = fs.readFileSync('assets/fonts/Inter-Variable.ttf').toString('base64');

function buildStandaloneHtml(slideIdx) {
  const slideHtml = inlineImages(window.slideDefinitions[slideIdx].render());
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    @font-face {
      font-family: 'Cormorant Garamond';
      src: url('data:font/truetype;charset=utf-8;base64,${cormorantRegular}') format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Cormorant Garamond';
      src: url('data:font/truetype;charset=utf-8;base64,${cormorantItalic}') format('truetype');
      font-weight: 400;
      font-style: italic;
    }
    @font-face {
      font-family: 'Cormorant Garamond';
      src: url('data:font/truetype;charset=utf-8;base64,${cormorantSemiBold}') format('truetype');
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: 'Plus Jakarta Sans';
      src: url('data:font/truetype;charset=utf-8;base64,${interVar}') format('truetype');
      font-weight: 100 900;
    }
    @font-face { font-family: 'Playfair Display'; src: url('data:font/truetype;base64,${pfRegular}') format('truetype'); font-weight: 400 900; font-style: normal; }
    @font-face { font-family: 'Playfair Display'; src: url('data:font/truetype;base64,${pfItalic}') format('truetype'); font-weight: 400 900; font-style: italic; }
    :root {
      --font-serif: 'Playfair Display', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 1280px;
      height: 720px;
      overflow: hidden;
      background: #faf7f2;
      font-family: var(--font-sans);
    }
    .serif-title { font-family: var(--font-serif); font-weight: 400; letter-spacing: -0.02em; }
    .slide-canvas { container-type: inline-size; }
    .pink-italic { font-family: var(--font-serif); font-style: italic; font-weight: 400; color: #d8318a; }
    .pink-roman { font-family: var(--font-serif); font-style: normal; font-weight: 400; color: #d8318a; }
    .header-meta { font-family: var(--font-sans); font-size: 13px; font-weight: 600; letter-spacing: 0.16em; color: #78716c; text-transform: uppercase; }
    .cut-slide1-pink { clip-path: polygon(22% 0, 100% 0, 100% 100%, 4% 100%); }
    .cut-slide1-photo { clip-path: polygon(16% 0, 100% 0, 100% 100%, 2% 100%); }
    .cut-slide2-swatch { clip-path: polygon(16% 0, 100% 0, 100% 100%, 0% 100%); }
    .cut-slide3-pink { clip-path: polygon(20% 0, 100% 0, 100% 100%, 2% 100%); }
    .cut-slide7-eye { clip-path: polygon(14% 0, 100% 0, 100% 100%, 0% 100%); }
  </style>
</head>
<body style="width: 1280px; height: 720px; overflow: hidden;">
  <div style="width: 1280px; height: 720px; overflow: hidden; position: relative;">
    ${slideHtml}
  </div>
</body>
</html>`;
}

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = path.join('C:', 'Users', 'carlo', '.gemini', 'antigravity', 'brain', '2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434', 'previews');

for (let i = 0; i < 9; i++) {
  const pad = String(i + 1).padStart(2, '0');
  const previewHtmlPath = `public/preview_slide_${pad}.html`;
  fs.writeFileSync(previewHtmlPath, buildStandaloneHtml(i), 'utf8');

  const outFile = path.join(__dirname, '..', 'dist', 'previews', `slide_${pad}.png`);
  execSync(`"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=2000 --window-size=1280,720 --screenshot="${outFile}" "http://localhost:3000/preview_slide_${pad}.html"`);
  fs.copyFileSync(outFile, path.join(artifactDir, `slide_${pad}.png`));
  console.log(`Rendered and saved slide_${pad}.png`);
}

console.log('All 9 slides rendered cleanly!');
