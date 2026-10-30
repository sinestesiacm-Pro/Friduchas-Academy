const fs = require('fs');

global.window = global;
const js = fs.readFileSync('public/slides_data.js', 'utf8');
eval(js);
console.log('slideDefinitions length:', window.slideDefinitions.length);
const s4 = window.slideDefinitions[3];
console.log('Slide 4 title:', s4.title);
console.log('Slide 4 HTML render:');
console.log(s4.render());
