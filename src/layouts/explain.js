// src/layouts/explain.js — L4 Key Concept & Features Layout
// Direct reproduction of Slide 3 from the reference system
const theme = require('../theme');
const { parseTitleRuns, addSlideHeader } = require('./helpers');

/**
 * Creates an editorial concept explanation slide.
 * Left: Serif headline with magenta italic accent, lead paragraph, vertical pill feature list.
 * Right: Bleed or floating editorial beauty photography.
 */
function createExplainSlide(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: theme.colors.bgPrimary };

  // Header
  addSlideHeader(slide, pres, {
    moduleName: data.moduleName || 'MODULO 1 — FOUNDATION',
    slideNum: data.slideNum || '03'
  });

  // Right Photographic Bleed
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

  // Left Title
  const titleRuns = parseTitleRuns(data.title || 'La pelle:\n*un organo*\n*complesso*', {
    fontSize: 40,
    baseColor: theme.colors.textPrimary,
    accentColor: theme.colors.accentPink
  });

  slide.addText(titleRuns, {
    x: 0.85,
    y: 1.15,
    w: 5.8,
    h: 1.7,
    valign: 'top',
    lineSpacing: 43
  });

  // Lead descriptive paragraph
  const leadText = data.leadText || "La pelle è l'organo più esteso del nostro corpo e rappresenta una vera e propria barriera protettiva, ma è anche molto di più: è un sistema dinamico, vivo e in continuo cambiamento.";
  slide.addText(leadText, {
    x: 0.85,
    y: 2.95,
    w: 5.6,
    h: 1.1,
    fontFace: theme.fonts.sans,
    fontSize: 12.5,
    color: theme.colors.textSecondary,
    lineSpacing: 18.5
  });

  // Bullet Features List with Magenta Dots/Pills
  const features = data.features || [
    'Protegge dagli agenti esterni',
    'Regola la temperatura corporea',
    'Permette la percezione sensoriale',
    'Partecipa al metabolismo'
  ];

  const startY = 4.2;
  const itemGap = 0.58;

  features.forEach((feature, idx) => {
    const y = startY + (idx * itemGap);

    // Magenta circular bullet indicator
    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.88,
      y: y + 0.05,
      w: 0.18,
      h: 0.18,
      fill: { color: theme.colors.accentPink },
      line: { color: theme.colors.accentPink, width: 0 }
    });

    // Feature text
    slide.addText(feature, {
      x: 1.25,
      y: y,
      w: 5.2,
      h: 0.35,
      fontFace: theme.fonts.sans,
      fontSize: 12,
      color: theme.colors.textPrimary,
      bold: false,
      valign: 'middle'
    });
  });

  // Bottom Academy micro-tag
  slide.addText('FRIDUCHAS ACADEMY', {
    x: 0.85,
    y: 6.85,
    w: 3.5,
    h: 0.25,
    fontFace: theme.fonts.sans,
    fontSize: 7.5,
    color: theme.colors.textMuted,
    charSpacing: 2
  });

  return slide;
}

module.exports = { createExplainSlide };
