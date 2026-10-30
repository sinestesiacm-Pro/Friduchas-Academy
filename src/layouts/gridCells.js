// src/layouts/gridCells.js — L7 Scientific Grid / Cells Layout
// Direct reproduction of Slide 6 from the reference system
const theme = require('../theme');
const { parseTitleRuns, addSlideHeader } = require('./helpers');

/**
 * Creates a horizontal multi-column scientific showcase slide (e.g. skin cells, skin types, needles).
 */
function createGridCellsSlide(pres, data) {
  const slide = pres.addSlide();
  slide.background = { color: theme.colors.bgPrimary };

  // Header
  addSlideHeader(slide, pres, {
    moduleName: data.moduleName || 'MODULO 1 — FOUNDATION',
    slideNum: data.slideNum || '06'
  });

  // Title
  const titleRuns = parseTitleRuns(data.title || 'Le cellule\n*principali*', {
    fontSize: 40,
    baseColor: theme.colors.textPrimary,
    accentColor: theme.colors.accentPink
  });

  slide.addText(titleRuns, {
    x: 0.85,
    y: 1.15,
    w: 6.0,
    h: 1.6,
    valign: 'top',
    lineSpacing: 43
  });

  // Lead descriptive paragraph
  slide.addText(data.leadText || 'La pelle è composta da diversi tipi di cellule, ognuna con un ruolo biologico specifico nel mantenere la sua salute, la difesa e la risposta al pigmento.', {
    x: 0.85,
    y: 2.75,
    w: 7.5,
    h: 0.8,
    fontFace: theme.fonts.sans,
    fontSize: 12,
    color: theme.colors.textSecondary,
    lineSpacing: 18
  });

  // 4 Horizontal Cell Columns
  const cells = data.cells || [
    {
      name: 'Cheratinociti',
      role: 'Protezione e rinnovamento epidermico continuo',
      imagePath: 'assets/img/cell_keratinocyte.png'
    },
    {
      name: 'Melanociti',
      role: 'Produzione di melanina e fotoprotezione UV',
      imagePath: 'assets/img/cell_melanocyte.png'
    },
    {
      name: 'Fibroblasti',
      role: 'Sintesi di collagene, elastina e matrice dermica',
      imagePath: 'assets/img/cell_fibroblast.png'
    },
    {
      name: 'Cellule di Langerhans',
      role: 'Difesa immunitaria e fagocitosi delle particelle',
      imagePath: 'assets/img/cell_langerhans.png'
    }
  ];

  const colWidth = 2.6;
  const colGap = 0.4;
  const startX = 0.85;
  const circleY = 3.65;
  const circleSize = 2.0;

  cells.forEach((cell, idx) => {
    const colX = startX + (idx * (colWidth + colGap));

    // Circular image
    if (cell.imagePath) {
      slide.addImage({
        path: cell.imagePath,
        x: colX + (colWidth - circleSize) / 2,
        y: circleY,
        w: circleSize,
        h: circleSize,
        sizing: { type: 'contain', w: circleSize, h: circleSize }
      });
    }

    // Cell Name
    slide.addText(cell.name, {
      x: colX,
      y: circleY + circleSize + 0.25,
      w: colWidth,
      h: 0.35,
      fontFace: theme.fonts.serif,
      fontSize: 16,
      color: theme.colors.textPrimary,
      bold: true,
      align: 'center'
    });

    // Cell Role
    slide.addText(cell.role, {
      x: colX + 0.1,
      y: circleY + circleSize + 0.62,
      w: colWidth - 0.2,
      h: 0.65,
      fontFace: theme.fonts.sans,
      fontSize: 10.5,
      color: theme.colors.textSecondary,
      align: 'center',
      lineSpacing: 15
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

module.exports = { createGridCellsSlide };

