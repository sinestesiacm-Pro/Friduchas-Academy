const fs = require('fs');

let s = fs.readFileSync('public/slides_data.js', 'utf8');
s = s.replace('text-[#0b090a] font-semibold leading-[0.98] tracking-tight mb-5', 'text-[#0b090a] font-normal leading-[1.12] tracking-tight mb-5');
s = s.replace('leading-[0.92] text-[#a55572] font-normal tracking-tight" style="font-style: italic;"', 'leading-[1.0] text-[#a55572] font-normal tracking-tight" style="font-style: italic;"');
s = s.replace('lg:text-[6.2rem] leading-[1.0]', 'lg:text-[5.4rem] leading-[1.0]');
fs.writeFileSync('public/slides_data.js', s, 'utf8');

let p = fs.readFileSync('scripts/capture_perfect_previews.js', 'utf8');
p = p.replace(".serif-title { font-family: var(--font-serif); font-weight: 600;", ".serif-title { font-family: var(--font-serif); font-weight: 400;");
p = p.replace(/\.pink-italic \{([^}]*)font-weight: 500;/, '.pink-italic {$1font-weight: 400;');
p = p.replace(/\.pink-roman \{([^}]*)font-weight: 500;/, '.pink-roman {$1font-weight: 400;');
fs.writeFileSync('scripts/capture_perfect_previews.js', p, 'utf8');

let h = fs.readFileSync('public/index.html', 'utf8');
h = h.replace(/(\.serif-title \{[^}]*?)font-weight: 500;/, '$1font-weight: 400;');
fs.writeFileSync('public/index.html', h, 'utf8');
console.log('ok');

