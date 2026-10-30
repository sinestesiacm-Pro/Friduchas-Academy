// src/layouts/cover.js — L1 Cover Layout
const theme = require('../theme');
const { parseTitleRuns } = require('./helpers');

function createCoverSlide(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: theme.colors.bgPrimary };

  // Background subtle blush organic block on the right half
  slide.addShape(pres.ShapeType.roundRect, {
    x: 6.2,
    y: 0,
    w: 7.133,
    h: 7.5,
    rectRadius: 0.6,
    fill: { color: theme.colors.bgBlush },
    line: { color: theme.colors.bgBlush }
  });

  // Photo on the right with flush bleed
  if (data.imagePath) {
    slide.addImage({
      path: data.imagePath,
      x: 7.1,
      y: 0,
      w: 6.233,
      h: 7.5,
      sizing: { type: 'cover', w: 6.233, h: 7.5 }
    });
  }

  // Left Content
  // Eyebrow Brand
  slide.addText('FRIDUCHAS ACADEMY', {
    x: 0.85,
    y: 1.2,
    w: 5.5,
    h: 0.35,
    fontFace: theme.fonts.sans,
    fontSize: 9.5,
    color: theme.colors.accentPink,
    bold: true,
    charSpacing: 3
  });

  // Course Title (Serif Haute Couture)
  const titleRuns = parseTitleRuns(data.title || 'Master PMU\n*Professional*', {
    fontSize: 48,
    baseColor: theme.colors.textPrimary,
    accentColor: theme.colors.accentPink
  });

  slide.addText(titleRuns, {
    x: 0.85,
    y: 1.8,
    w: 5.8,
    h: 2.2,
    valign: 'top',
    lineSpacing: 52
  });

  // Fine accent line
  slide.addShape(pres.ShapeType.line, {
    x: 0.85,
    y: 4.15,
    w: 1.5,
    h: 0,
    line: { color: theme.colors.accentPink, width: 2 }
  });

  // Subtitle / Description
  slide.addText(data.subtitle || 'Manuale teorico di dermopigmentazione professionale\nCorso Base Presenziale di Alta Formazione', {
    x: 0.85,
    y: 4.45,
    w: 5.2,
    h: 1.2,
    fontFace: theme.fonts.sans,
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineSpacing: 22
  });

  // Footer quote / Philosophy
  if (data.quote) {
    slide.addText(data.quote, {
      x: 0.85,
      y: 6.2,
      w: 5.5,
      h: 0.6,
      fontFace: theme.fonts.serif,
      fontSize: 13,
      italic: true,
      color: theme.colors.textMuted
    });
  }

  return slide;
}

module.exports = { createCoverSlide };

