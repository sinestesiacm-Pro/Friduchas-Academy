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
const interVar = fs.readFileSync('assets/fonts/Inter-Variable.ttf').toString('base64');

const slideHtml = inlineImages(window.slideDefinitions[8].render());
const fullHtml = `<!DOCTYPE html>
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
    :root {
      --font-serif: 'Cormorant Garamond', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 1280px;
      height: 720px;
      overflow: hidden;
      background: #040405;
      font-family: var(--font-sans);
    }
    .serif-title { font-family: var(--font-serif); font-weight: 600; letter-spacing: -0.02em; }
    .header-meta { font-family: var(--font-sans); font-size: 13px; font-weight: 600; letter-spacing: 0.16em; color: #78716c; text-transform: uppercase; }
  </style>
</head>
<body style="width: 1280px; height: 720px; overflow: hidden;">
  <div style="width: 1280px; height: 720px; overflow: hidden; position: relative;">
    ${slideHtml}
  </div>
</body>
</html>`;

fs.writeFileSync('public/preview_slide_09.html', fullHtml, 'utf8');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outFile9 = path.join(__dirname, '..', 'dist', 'previews', 'slide_09.png');
const artifactDir = path.join('C:', 'Users', 'carlo', '.gemini', 'antigravity', 'brain', '2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434', 'previews');

execSync(`"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=2000 --window-size=1280,720 --screenshot="${outFile9}" "http://localhost:3000/preview_slide_09.html"`);
fs.copyFileSync(outFile9, path.join(artifactDir, 'slide_09.png'));
console.log('Successfully rendered slide 09 preview!');

