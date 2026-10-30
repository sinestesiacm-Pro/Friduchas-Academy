const fs = require('fs');

// 1) index.html: Playfair Display for titles
let h = fs.readFileSync('public/index.html', 'utf8');
h = h.replace('family=Cormorant+Garamond:', 'family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Cormorant+Garamond:');
h = h.replace("--font-serif: 'Cormorant Garamond', Georgia, serif;", "--font-serif: 'Playfair Display', Georgia, serif;");
h = h.replace(/(\.serif-title \{[^}]*?)font-weight: 600;/, '$1font-weight: 500;');
fs.writeFileSync('public/index.html', h, 'utf8');

// 2) slides_data.js: mix normal + italic in titles
let s = fs.readFileSync('public/slides_data.js', 'utf8');
s = s.replace('<span style="font-style: italic;">Gli strati</span>', 'Gli strati');
s = s.replace('<span style="font-style: italic;">Le cellule</span>', 'Le cellule');
s = s.replace('<span style="font-style: italic;">Le funzioni</span>', 'Le funzioni');
// slide 9: normal text, italic accent
s = s.replace('style="font-style: italic; font-size: 6.6rem;', 'style="font-style: normal; font-size: 5.6rem;');
s = s.replace('<span style="color: #a55572; font-style: italic;">mondo.</span>', '<span style="color: #a55572; font-style: italic;">mondo.</span>');
fs.writeFileSync('public/slides_data.js', s, 'utf8');

// 3) preview renderer: use local Playfair TTFs
let p = fs.readFileSync('scripts/capture_perfect_previews.js', 'utf8');
if (!p.includes('PlayfairDisplay-Regular')) {
  p = p.replace("const interVar =", "const pfRegular = fs.readFileSync('assets/fonts/PlayfairDisplay-Regular.ttf').toString('base64');\nconst pfItalic = fs.readFileSync('assets/fonts/PlayfairDisplay-Italic.ttf').toString('base64');\nconst interVar =");
  p = p.replace("    :root {", "    @font-face { font-family: 'Playfair Display'; src: url('data:font/truetype;base64,${pfRegular}') format('truetype'); font-weight: 400 900; font-style: normal; }\n    @font-face { font-family: 'Playfair Display'; src: url('data:font/truetype;base64,${pfItalic}') format('truetype'); font-weight: 400 900; font-style: italic; }\n    :root {");
  p = p.replace("--font-serif: 'Cormorant Garamond', Georgia, serif;", "--font-serif: 'Playfair Display', Georgia, serif;");
  fs.writeFileSync('scripts/capture_perfect_previews.js', p, 'utf8');
}
console.log('done');

