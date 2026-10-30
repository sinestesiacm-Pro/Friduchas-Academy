const fs = require('fs');

let code = fs.readFileSync('scripts/generate_sample.js', 'utf8');

// Replace anatomy skin image
code = code.replace("imagePath: img('sample_anatomy_skin.png')", "imagePath: img('anatomy_skin_3d_cube.png')");

// Replace cell images
code = code.replace("imagePath: img('cell_keratinocyte.png')", "imagePath: img('cell_keratinocyte_pro.png')");
code = code.replace("imagePath: img('cell_melanocyte.png')", "imagePath: img('cell_melanocyte_pro.png')");
code = code.replace("imagePath: img('cell_fibroblast.png')", "imagePath: img('cell_fibroblast_pro.png')");
code = code.replace("imagePath: img('cell_langerhans.png')", "imagePath: img('cell_langerhans_pro.png')");

fs.writeFileSync('scripts/generate_sample.js', code, 'utf8');
console.log('Updated scripts/generate_sample.js with professional assets');

