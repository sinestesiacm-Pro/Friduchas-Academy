// src/layouts/compare.js — L6 Editorial Technical Comparison Layout
// High-contrast, precise comparative analysis for PMU concepts
const theme = require('../theme');
const { parseTitleRuns, addSlideHeader } = require('./helpers');

/**
 * Creates an editorial 2-column comparative layout.
 * Compares two techniques, pigment types, or tools side-by-side with scientific precision.
 */
function createCompareSlide(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: theme.colors.bgPrimary };

  // Header
  addSlideHeader(slide, pres, {
    moduleName: data.moduleName || 'MODULO 1 — FOUNDATION',
    slideNum: data.slideNum || '05'
  });

  // Title
  const titleRuns = parseTitleRuns(data.title || 'Dermopigmentazione\n*vs Tatuaggio*', {
    fontSize: 38,
    baseColor: theme.colors.textPrimary,
    accentColor: theme.colors.accentPink
  });

  slide.addText(titleRuns, {
    x: 0.85,
    y: 1.15,
    w: 6.5,
    h: 1.5,
    valign: 'top',
    lineSpacing: 41
  });

  // Intro text
  slide.addText(data.leadText || 'Comprendere le differenze biologiche, tecniche e di profondità è fondamentale per evitare viraggi cromatici e danni tissutali irreversibili.', {
    x: 7.2,
    y: 1.35,
    w: 5.2,
    h: 0.95,
    fontFace: theme.fonts.sans,
    fontSize: 11.5,
    color: theme.colors.textSecondary,
    lineSpacing: 17
  });

  // Comparison Grid / Columns
  const colWidth = 5.6;
  const col1X = 0.85;
  const col2X = 6.85;
  const cardY = 2.65;
  const cardH = 4.2;

  const colA = data.colA || {
    badge: 'TECNICA ACADEMY',
    title: 'Dermopigmentazione (PMU)',
    isHighlighted: true,
    rows: [
      { label: 'PROFONDITÀ', value: 'Derma papillare superficiale (0.08 – 0.15 mm)' },
      { label: 'PIGMENTI', value: 'Bio-riassorbibili, certificati REACH, particelle controllate' },
      { label: 'DURATA', value: 'Semipermanente (12 – 24 mesi), degradazione controllata' },
      { label: 'STRUMENTO', value: 'Dermografo di precisione con corsa corta / micro-aghi' },
      { label: 'OBIETTIVO', value: 'Armonia estetica naturale, miglioramento dei lineamenti' }
    ]
  };

  const colB = data.colB || {
    badge: 'TECNICA TRADIZIONALE',
    title: 'Tatuaggio Artistico',
    isHighlighted: false,
    rows: [
      { label: 'PROFONDITÀ', value: 'Derma reticolare profondo (oltre 1.5 – 2.0 mm)' },
      { label: 'PIGMENTI', value: 'Inchiostri permanenti ad alta densità e grandi molecole' },
      { label: 'DURATA', value: 'Permanente a vita, soggetto a migrazione e viraggi' },
      { label: 'STRUMENTO', value: 'Bobine o rotative ad alta potenza e corsa profonda' },
      { label: 'OBIETTIVO', value: 'Disegno artistico indelebile su corpo' }
    ]
  };

  // Render Column A (Highlighted / PMU)
  renderColumn(slide, pres, col1X, cardY, colWidth, cardH, colA);

  // Render Column B (Standard / Traditional)
  renderColumn(slide, pres, col2X, cardY, colWidth, cardH, colB);

  return slide;
}

function renderColumn(slide, pres, x, y, w, h, colData) {
  // Background card surface
  slide.addShape(pres.ShapeType.rect, {
    x,
    y,
    w,
    h,
    fill: { color: colData.isHighlighted ? theme.colors.bgBlushSubtle : 'FFFFFF' },
    line: {
      color: colData.isHighlighted ? theme.colors.accentSoft : theme.colors.accentLine,
      width: colData.isHighlighted ? 1.0 : 0.6
    }
  });

  // Top accent bar if highlighted
  if (colData.isHighlighted) {
    slide.addShape(pres.ShapeType.rect, {
      x,
      y,
      w,
      h: 0.08,
      fill: { color: theme.colors.accentPink },
      line: { color: theme.colors.accentPink, width: 0 }
    });
  }

  // Badge / Category
  slide.addText(colData.badge, {
    x: x + 0.35,
    y: y + 0.25,
    w: w - 0.7,
    h: 0.22,
    fontFace: theme.fonts.sans,
    fontSize: 8.5,
    color: colData.isHighlighted ? theme.colors.accentPink : theme.colors.textMuted,
    charSpacing: 1.5,
    bold: true
  });

  // Column Header Title
  slide.addText(colData.title, {
    x: x + 0.35,
    y: y + 0.48,
    w: w - 0.7,
    h: 0.42,
    fontFace: theme.fonts.serif,
    fontSize: 20,
    color: theme.colors.textPrimary,
    bold: true
  });

  // Hairline separator
  slide.addShape(pres.ShapeType.line, {
    x: x + 0.35,
    y: y + 0.98,
    w: w - 0.7,
    h: 0,
    line: { color: colData.isHighlighted ? theme.colors.accentSoft : theme.colors.accentLine, width: 0.5 }
  });

  // Rows
  let rowY = y + 1.12;
  const rowStep = 0.58;

  colData.rows.forEach((row, i) => {
    // Label (small uppercase muted)
    slide.addText(row.label, {
      x: x + 0.35,
      y: rowY + (i * rowStep),
      w: 1.5,
      h: 0.2,
      fontFace: theme.fonts.sans,
      fontSize: 8,
      color: theme.colors.textMuted,
      charSpacing: 1,
      bold: true
    });

    // Value
    slide.addText(row.value, {
      x: x + 1.9,
      y: rowY + (i * rowStep) - 0.04,
      w: w - 2.25,
      h: 0.45,
      fontFace: theme.fonts.sans,
      fontSize: 10.5,
      color: theme.colors.textPrimary,
      lineSpacing: 14
    });

    // Divider
    if (i < colData.rows.length - 1) {
      slide.addShape(pres.ShapeType.line, {
        x: x + 0.35,
        y: rowY + (i * rowStep) + 0.48,
        w: w - 0.7,
        h: 0,
        line: { color: theme.colors.accentLine, width: 0.3 }
      });
    }
  });
}

module.exports = { createCompareSlide };

