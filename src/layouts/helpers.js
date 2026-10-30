// src/layouts/helpers.js
// Utility helpers for creating pixel-perfect editorial layouts

const theme = require('../theme');

/**
 * Adds an editorial slide header with academic metadata and slide counter.
 */
function addSlideHeader(slide, pres, { moduleName = 'MODULO 1 — FOUNDATION', slideNum = '01', dark = false } = {}) {
  const textColor = dark ? theme.colors.textLightMuted : theme.colors.textMuted;
  const numColor = theme.colors.accentPink;
  const lineColor = dark ? theme.colors.accentDarkLine : theme.colors.accentLine;

  // Left Academy Brandmark
  slide.addText('FRIDUCHAS ACADEMY', {
    x: theme.layout.margin.left,
    y: 0.42,
    w: 4.0,
    h: 0.3,
    fontFace: theme.fonts.sans,
    fontSize: theme.type.eyebrow.size,
    color: textColor,
    charSpacing: 2,
    valign: 'middle'
  });

  // Right Module Name + Magenta Slide Number
  slide.addText([
    { text: moduleName.toUpperCase() + '   ', options: { color: textColor, charSpacing: 1.5 } },
    { text: String(slideNum).padStart(2, '0'), options: { color: numColor, bold: true } }
  ], {
    x: theme.layout.width - theme.layout.margin.right - 4.5,
    y: 0.42,
    w: 4.5,
    h: 0.3,
    align: 'right',
    fontFace: theme.fonts.sans,
    fontSize: theme.type.eyebrow.size,
    valign: 'middle'
  });

  // Hair-thin editorial divider line
  slide.addShape(pres.ShapeType.line, {
    x: theme.layout.margin.left,
    y: 0.78,
    w: theme.layout.width - (theme.layout.margin.left + theme.layout.margin.right),
    h: 0,
    line: { color: lineColor, width: 0.6 }
  });
}

/**
 * Parses markdown-like title syntax into PptxGenJS runs.
 * E.g., "Anatomia della *pelle*" -> "Anatomia della " (serif normal) + "pelle" (serif italic pink)
 */
function parseTitleRuns(titleText, { baseColor, accentColor, fontSize, fontFace } = {}) {
  baseColor = baseColor || theme.colors.textPrimary;
  accentColor = accentColor || theme.colors.accentPink;
  fontSize = fontSize || theme.type.titleHero.size;
  fontFace = fontFace || theme.fonts.serif;

  const parts = titleText.split(/(\*[^*]+\*)/g);
  const runs = [];

  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith('*') && part.endsWith('*')) {
      runs.push({
        text: part.slice(1, -1),
        options: {
          fontFace: fontFace,
          fontSize: fontSize,
          color: accentColor,
          italic: true
        }
      });
    } else {
      runs.push({
        text: part,
        options: {
          fontFace: fontFace,
          fontSize: fontSize,
          color: baseColor,
          italic: false
        }
      });
    }
  }

  return runs;
}

/**
 * Adds an editorial title with custom italic pink accents.
 */
function addEditorialTitle(slide, titleText, { x = 0.85, y = 1.15, w = 6.2, h = 1.8, fontSize = 42, dark = false } = {}) {
  const baseColor = dark ? theme.colors.textLight : theme.colors.textPrimary;
  const accentColor = theme.colors.accentPink;
  const runs = parseTitleRuns(titleText, { baseColor, accentColor, fontSize });

  slide.addText(runs, {
    x,
    y,
    w,
    h,
    valign: 'top',
    lineSpacing: Math.round(fontSize * 1.08)
  });
}

module.exports = {
  addSlideHeader,
  parseTitleRuns,
  addEditorialTitle
};

