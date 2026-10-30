// src/layouts/statement.js — L8 High-Impact Editorial Statement Layout
// Supports both Dark Graphite (Slide 9) and Soft Blush (Slide 5) modes from reference
const theme = require('../theme');
const { parseTitleRuns, addSlideHeader } = require('./helpers');

/**
 * Creates an editorial quote / key insight statement slide.
 * mode: 'dark' (obsidian background with luminous typography) or 'blush' (rose petal background)
 */
function createStatementSlide(pres, data) {
  const isDark = (data.mode || 'dark') === 'dark';
  const slide = pres.addSlide();

  // Background
  slide.background = {
    color: isDark ? theme.colors.bgDark : theme.colors.bgBlush
  };

  // Header (only if not full-bleed editorial mode, or adapted colors)
  if (data.showHeader !== false) {
    addSlideHeader(slide, pres, {
      moduleName: data.moduleName || 'MODULO 1 — FOUNDATION',
      slideNum: data.slideNum || '09',
      dark: isDark
    });
  }

  // Right Side Photographic Bleed
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

  // Left Content Container
  // Eyebrow tag
  if (data.eyebrow) {
    slide.addText(data.eyebrow.toUpperCase(), {
      x: 0.85,
      y: 1.6,
      w: 5.5,
      h: 0.25,
      fontFace: theme.fonts.sans,
      fontSize: 8.5,
      color: isDark ? theme.colors.accentSoft : theme.colors.accentPink,
      charSpacing: 2
    });
  }

  // Main Statement Typography
  // Combinations of Serif White/Carbon + Magenta Italic
  const quoteRuns = parseTitleRuns(data.quote || 'La pelle\n*è il nostro*\n*primo contatto*\ncon il mondo.', {
    fontSize: isDark ? 44 : 40,
    baseColor: isDark ? theme.colors.textLight : theme.colors.textPrimary,
    accentColor: theme.colors.accentPink
  });

  slide.addText(quoteRuns, {
    x: 0.85,
    y: data.eyebrow ? 2.05 : 1.7,
    w: 5.6,
    h: 3.2,
    valign: 'top',
    lineSpacing: isDark ? 48 : 44
  });

  // Supporting explanation or attribution
  if (data.subtext) {
    slide.addText(data.subtext, {
      x: 0.85,
      y: 5.2,
      w: 5.2,
      h: 1.0,
      fontFace: theme.fonts.sans,
      fontSize: 12,
      color: isDark ? theme.colors.textLightMuted : theme.colors.textSecondary,
      lineSpacing: 18
    });
  }

  // Bottom Category Tag (like "ANATOMIA DELLA PELLE" in reference slide 9)
  const bottomTag = data.bottomTag || 'ANATOMIA DELLA PELLE';
  slide.addText(bottomTag.toUpperCase(), {
    x: 0.85,
    y: 6.6,
    w: 4.5,
    h: 0.3,
    fontFace: theme.fonts.sans,
    fontSize: 8.5,
    color: isDark ? theme.colors.accentSoft : theme.colors.accentPink,
    charSpacing: 2.5
  });

  return slide;
}

module.exports = { createStatementSlide };

