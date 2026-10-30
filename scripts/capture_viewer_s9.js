const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Let's create a temporary script or load index.html with slide 9 active:
// In index.html, we can pass ?slide=9 or execute currentSlide = 8
const outFile = path.join(__dirname, '..', 'dist', 'previews', 'localhost_slide09_sweetspot.png');

// Capture localhost:3000 directly:
// We can use a small helper page that loads index.html and immediately triggers renderActiveSlide(8)
const testViewerHtml = `<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background:#0b090b;">
  <iframe id="f" src="http://localhost:3000" style="width:1280px; height:820px; border:none;"></iframe>
  <script>
    const f = document.getElementById('f');
    f.onload = () => {
      setTimeout(() => {
        f.contentWindow.renderActiveSlide(8);
      }, 500);
    };
  </script>
</body>
</html>`;

fs.writeFileSync('public/test_viewer_nav.html', testViewerHtml, 'utf8');

execSync(`"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=3000 --window-size=1280,820 --screenshot="${outFile}" "http://localhost:3000/test_viewer_nav.html"`);
console.log('Saved localhost_slide09_sweetspot.png');

