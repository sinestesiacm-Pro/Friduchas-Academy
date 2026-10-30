const fs = require('fs');

let code = fs.readFileSync('scripts/generate_sample.js', 'utf8');
code = code.replace("img('sample_dark_model.jpg')", "img('slide09_model.jpg')");
fs.writeFileSync('scripts/generate_sample.js', code, 'utf8');
console.log('Updated slide 9 in generate_sample.js');

