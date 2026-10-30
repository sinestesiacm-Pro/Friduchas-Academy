const fs = require('fs');
let s = fs.readFileSync('public/slides_data.js', 'utf8');
s = s.replace('<h2 class="serif-title text-3xl md:text-4xl lg:text-[3.25rem]', '<h2 style="line-height:1.15" class="serif-title text-3xl md:text-4xl lg:text-[3.25rem]');
fs.writeFileSync('public/slides_data.js', s);
console.log(s.includes('line-height:1.15'));

