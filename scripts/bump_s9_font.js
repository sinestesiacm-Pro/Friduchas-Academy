const fs = require('fs');

let js = fs.readFileSync('public/slides_data.js', 'utf8');
js = js.replace('font-size: 6.2rem;', 'font-size: 6.6rem;');
js = js.replace('max-w-[620px]', 'max-w-[660px]');
fs.writeFileSync('public/slides_data.js', js, 'utf8');
console.log('Updated font-size to 6.6rem');
