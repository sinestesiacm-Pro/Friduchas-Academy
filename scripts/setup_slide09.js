const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function setupSlide09() {
  const src = 'C:/Users/carlo/.gemini/antigravity/brain/2dc9fd5a-d33a-4b3d-8c1c-15ad73b97434/.user_uploaded/media_1793326818336_6a3aac03.jpg';
  
  // Copy to public/img and assets/img
  fs.copyFileSync(src, 'public/img/slide09_model.jpg');
  fs.copyFileSync(src, 'assets/img/slide09_model.jpg');
  console.log('Copied raw model image to public/img/slide09_model.jpg and assets/img/slide09_model.jpg');
}
setupSlide09();

