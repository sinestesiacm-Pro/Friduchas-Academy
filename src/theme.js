// src/theme.js
// Art Direction & Design System for Friduchas Academy Master PMU Presentation
// Inspired by luxury editorial beauty & Emil Kowalski craft principles

module.exports = {
  // Canvas Dimensions (16:9 standard panoramic)
  layout: {
    width: 13.333,
    height: 7.5,
    margin: {
      left: 0.85,
      right: 0.85,
      top: 0.65,
      bottom: 0.65
    }
  },

  // Color Palette (calibrated directly from the reference)
  colors: {
    bgPrimary: 'FCFAF8',      // Warm luxury ivory / bone
    bgBlush: 'F8DFE8',        // Elegant soft powder pink
    bgBlushSubtle: 'FDF4F7',  // Very light tint for cards/surfaces
    bgDark: '121012',         // Deep obsidian / graphite for statement slides
    bgDarkSurface: '1C191C',  // Dark accent surface

    textPrimary: '1F1D1E',    // Soft carbon black (high legibility)
    textSecondary: '665F63',  // Refined editorial muted mauve-grey
    textMuted: '9C9498',      // Discreet metadata grey
    textLight: 'FDFBFC',      // Off-white for dark slides
    textLightMuted: 'BAACB3', // Muted text for dark slides

    accentPink: 'D82572',     // Haute couture vibrant magenta/fuchsia
    accentSoft: 'F0AEC6',     // Translucent soft rose petal
    accentLine: 'EAD7DF',     // Ultra-fine hair-thin divider
    accentDarkLine: '2B2629', // Hairline for dark slides
    
    // Status / Category hints (strictly editorial)
    badgeBg: 'FCE8F0',
    badgeText: 'C01B61',
    alertBorder: 'D82572'
  },

  // Typography Tokens
  fonts: {
    serif: 'Cormorant Garamond',
    serifFallback: 'Georgia',
    sans: 'Inter',
    sansFallback: 'Arial',
  },

  // Type Scale & Hierarchy (in points for 13.333 x 7.5 in canvas)
  type: {
    titleDisplay: { size: 48, lineSpacing: 50 },  // Main cover titles
    titleHero: { size: 40, lineSpacing: 43 },     // Slide titles
    titleSub: { size: 24, lineSpacing: 28 },      // Subheadings
    bodyLarge: { size: 16, lineSpacing: 22 },     // Lead paragraphs
    body: { size: 13, lineSpacing: 18 },          // Standard body
    caption: { size: 10, lineSpacing: 14 },       // Captions & table cells
    eyebrow: { size: 8.5, lineSpacing: 11 },      // Header tags, tracking uppercase
    numeral: { size: 18, lineSpacing: 20 }        // Number badges
  }
};

