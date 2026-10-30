const sharp = require('sharp');

// Let's test what happens when we resize slide09_model.jpg (1024x625) to height 720:
// Scaled height = 720
// Scale factor = 720 / 625 = 1.152
// Scaled width = 1024 * 1.152 = 1180px
// In the original image:
// - Chin tip is at x = 541. Scaled chin tip is at 541 * 1.152 = 623px!
// - Lips are at x = 580 * 1.152 = 668px
// - Nose is at x = 613 * 1.152 = 706px
// - Right edge of head is at x = 1024 * 1.152 = 1180px
console.log('If image is scaled to height 720px:');
console.log('Image total width: 1180px');
console.log('Chin tip is at x = 623px inside the image');

// If the image is aligned to the right edge of the 1280px slide:
// The image starts at x = 1280 - 1180 = 100px!
// The chin tip is at: 100 + 623 = 723px!
// If the image is pushed 100px further left (e.g. right: -50px, or left: 50px, or transform: translateX(-80px)):
// Chin tip moves to x = 623px on the slide!
// And if the text "primo contatto" extends from x=60 to x=600px:
// Chin tip is at x = 623px -> GAP IS ONLY 23px!
console.log('If image is positioned at right: -60px (or width 1180px, right: -60px):');
console.log('Chin tip on canvas is at: (1280 - 1180 - (-60)) + 623 = 160 + 623 = 783px');
console.log('To get chin tip at x = 620px on the canvas:');
console.log('Canvas chin X = image_left + 623 = 620 => image_left = -3px!');
console.log('So if the 1180px image is aligned with left: 100px or left: 50px, chin is at 673px!');

