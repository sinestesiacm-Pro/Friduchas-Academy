// src/layouts/agenda.js — L3 Agenda / Overview Layout
const theme = require('../theme');
const { parseTitleRuns, addSlideHeader } = require('./helpers');

function createAgendaSlide(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: theme.colors.bgPrimary };

  // Header
  addSlideHeader(slide, pres, {
    moduleName: data.moduleName || 'MODULO 1 — FOUNDATION',
    slideNum: data.slideNum || '02'
  });

  // Right side photographic element (rich texture or beauty portrait)
  if (data.imagePath) {
    slide.addImage({
      path: data.imagePath,
      x: 7.2,
      y: 0.9,
      w: 5.3,
      h: 5.9,
      sizing: { type: 'cover', w: 5.3, h: 5.9 }
    });
  }

  // Left Content
  // Title
  const titleRuns = parseTitleRuns(data.title || 'Cosa vedremo\nin questo *capitolo*', {
    fontSize: 38,
    baseColor: theme.colors.textPrimary,
    accentColor: theme.colors.accentPink
  });

  slide.addText(titleRuns, {
    x: 0.85,
    y: 1.25,
    w: 5.8,
    h: 1.6,
    valign: 'top',
    lineSpacing: 42
  });

  // Agenda Items list
  const items = data.items || [
    'La struttura della pelle',
    'Gli strati cutanei',
    'Le funzioni della pelle',
    'Le cellule principali',
    'Gli annessi cutanei'
  ];

  let startY = 3.0;
  const rowHeight = 0.68;

  items.forEach((item, index) => {
    const num = String(index + 1).padStart(2, '0');
    const yPos = startY + (index * rowHeight);

    // Number badge (magenta, light weight / clean sans)
    slide.addText(num, {
      x: 0.85,
      y: yPos,
      w: 0.6,
      h: 0.45,
      fontFace: theme.fonts.sans,
      fontSize: 14,
      color: theme.colors.accentPink,
      bold: true,
      valign: 'middle'
    });

    // Item label
    slide.addText(item, {
      x: 1.5,
      y: yPos,
      w: 5.2,
      h: 0.45,
      fontFace: theme.fonts.sans,
      fontSize: 13.5,
      color: theme.colors.textPrimary,
      valign: 'middle'
    });

    // Subtle divider line between items
    slide.addShape(pres.ShapeType.line, {
      x: 0.85,
      y: yPos + 0.52,
      w: 5.6,
      h: 0,
      line: { color: theme.colors.accentLine, width: 0.4 }
    });
  });

  return slide;
}

module.exports = { createAgendaSlide };

