// src/layouts/anatomy.js — L5 Scientific Anatomy Cutaway Layout
// Direct reproduction of Slide 4 from the reference system
const theme = require('../theme');
const { parseTitleRuns, addSlideHeader } = require('./helpers');

/**
 * Creates a scientific anatomy slide with a 3D cutaway illustration,
 * left explanatory breakdown, and direct leader pointer labels.
 */
function createAnatomySlide(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: theme.colors.bgPrimary };

  // Header
  addSlideHeader(slide, pres, {
    moduleName: data.moduleName || 'MODULO 1 — FOUNDATION',
    slideNum: data.slideNum || '04'
  });

  // Left Column Content
  // Title
  const titleRuns = parseTitleRuns(data.title || 'Gli strati\n*della pelle*', {
    fontSize: 40,
    baseColor: theme.colors.textPrimary,
    accentColor: theme.colors.accentPink
  });

  slide.addText(titleRuns, {
    x: 0.85,
    y: 1.15,
    w: 5.0,
    h: 1.6,
    valign: 'top',
    lineSpacing: 43
  });

  // Subtitle / Intro
  slide.addText(data.leadText || 'La pelle è formata da tre strati principali, ognuno con funzioni specifiche e fondamentali per la tenuta del pigmento.', {
    x: 0.85,
    y: 2.85,
    w: 4.8,
    h: 0.95,
    fontFace: theme.fonts.sans,
    fontSize: 12,
    color: theme.colors.textSecondary,
    lineSpacing: 18
  });

  // 3 Callout Cards / Rows
  const layers = data.layers || [
    { num: '01', name: 'Epidermide', role: 'Strato superficiale protettivo (ricambio 28gg)' },
    { num: '02', name: 'Derma', role: 'Strato intermedio vitale — Target PMU (0.08–0.15 mm)' },
    { num: '03', name: 'Ipoderma', role: 'Tessuto adiposo profondo di supporto e isolamento' }
  ];

  let startY = 3.95;
  const gap = 0.95;

  layers.forEach((layer, idx) => {
    const y = startY + (idx * gap);

    // Pill badge with number
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.85,
      y: y,
      w: 0.5,
      h: 0.32,
      rectRadius: 0.16,
      fill: { color: theme.colors.accentPink },
      line: { color: theme.colors.accentPink, width: 0 }
    });

    slide.addText(layer.num, {
      x: 0.85,
      y: y,
      w: 0.5,
      h: 0.32,
      fontFace: theme.fonts.sans,
      fontSize: 10,
      color: theme.colors.textLight,
      bold: true,
      align: 'center',
      valign: 'middle'
    });

    // Layer Name
    slide.addText(layer.name, {
      x: 1.5,
      y: y - 0.04,
      w: 4.2,
      h: 0.36,
      fontFace: theme.fonts.serif,
      fontSize: 17,
      color: theme.colors.textPrimary,
      bold: true,
      valign: 'top'
    });

    // Layer Description
    slide.addText(layer.role, {
      x: 1.5,
      y: y + 0.32,
      w: 4.2,
      h: 0.42,
      fontFace: theme.fonts.sans,
      fontSize: 10.5,
      color: theme.colors.textSecondary,
      valign: 'top',
      lineSpacing: 14
    });

    // Subtle divider
    if (idx < layers.length - 1) {
      slide.addShape(pres.ShapeType.line, {
        x: 0.85,
        y: y + 0.82,
        w: 4.8,
        h: 0,
        line: { color: theme.colors.accentLine, width: 0.4 }
      });
    }
  });

  // Center / Right 3D Skin Cutaway Illustration
  if (data.imagePath) {
    slide.addImage({
      path: data.imagePath,
      x: 6.2,
      y: 1.4,
      w: 4.6,
      h: 5.2,
      sizing: { type: 'contain', w: 4.6, h: 5.2 }
    });
  }

  // Right Side Pointer Labels and Leader Lines
  const pointers = [
    { label: 'Epidermide', yLabel: 2.1, yTarget: 2.3 },
    { label: 'Derma', yLabel: 3.5, yTarget: 3.65 },
    { label: 'Ipoderma', yLabel: 5.1, yTarget: 5.15 }
  ];

  pointers.forEach(p => {
    // Leader line
    slide.addShape(pres.ShapeType.line, {
      x: 10.6,
      y: p.yTarget,
      w: 0.6,
      h: 0,
      line: { color: theme.colors.textMuted, width: 0.8 }
    });

    // Pointer Label Text
    slide.addText(p.label, {
      x: 11.25,
      y: p.yLabel - 0.15,
      w: 1.8,
      h: 0.35,
      fontFace: theme.fonts.sans,
      fontSize: 11,
      color: theme.colors.textPrimary,
      bold: true,
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

module.exports = { createAnatomySlide };

