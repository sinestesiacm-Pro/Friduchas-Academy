// src/layouts/moduleOpener.js — L2 Module Opener Layout
const theme = require('../theme');
const { parseTitleRuns, addSlideHeader } = require('./helpers');

function createModuleOpenerSlide(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: data.bgBlush ? theme.colors.bgBlush : theme.colors.bgPrimary };

  // Header
  addSlideHeader(slide, pres, {
    moduleName: data.moduleName || 'MODULO 1',
    slideNum: data.slideNum || '01'
  });

  // Large dominant photo on the right (52% width)
  if (data.imagePath) {
    slide.addImage({
      path: data.imagePath,
      x: 6.8,
      y: 0,
      w: 6.533,
      h: 7.5,
      sizing: { type: 'cover', w: 6.533, h: 7.5 }
    });
  }

  // Left Content
  // Giant numeral badge
  slide.addText(String(data.moduleNum || '01').padStart(2, '0'), {
    x: 0.85,
    y: 1.3,
    w: 2.0,
    h: 0.8,
    fontFace: theme.fonts.serif,
    fontSize: 54,
    color: theme.colors.accentPink,
    bold: false,
    italic: true
  });

  // Module Category Eyebrow
  slide.addText((data.eyebrow || 'MODULO FORMATIVO').toUpperCase(), {
    x: 0.85,
    y: 2.2,
    w: 5.5,
    h: 0.3,
    fontFace: theme.fonts.sans,
    fontSize: 9,
    color: theme.colors.textMuted,
    charSpacing: 2
  });

  // Main Module Title
  const titleRuns = parseTitleRuns(data.title || 'Fondamenti di\n*Dermopigmentazione*', {
    fontSize: 42,
    baseColor: theme.colors.textPrimary,
    accentColor: theme.colors.accentPink
  });

  slide.addText(titleRuns, {
    x: 0.85,
    y: 2.55,
    w: 5.5,
    h: 2.0,
    valign: 'top',
    lineSpacing: 46
  });

  // Fine accent divider
  slide.addShape(pres.ShapeType.line, {
    x: 0.85,
    y: 4.7,
    w: 1.2,
    h: 0,
    line: { color: theme.colors.accentPink, width: 1.5 }
  });

  // Description / Objectives
  slide.addText(data.description || 'Conoscere le basi scientifiche, l’anatomia e la colorimetria per operare con precisione clinica e consapevolezza artistica.', {
    x: 0.85,
    y: 4.95,
    w: 5.2,
    h: 1.5,
    fontFace: theme.fonts.sans,
    fontSize: 13.5,
    color: theme.colors.textSecondary,
    lineSpacing: 21
  });

  return slide;
}

module.exports = { createModuleOpenerSlide };

