// src/layouts/index.js
const { createCoverSlide } = require('./cover');
const { createModuleOpenerSlide } = require('./moduleOpener');
const { createAgendaSlide } = require('./agenda');
const { createExplainSlide } = require('./explain');
const { createAnatomySlide } = require('./anatomy');
const { createCompareSlide } = require('./compare');
const { createGridCellsSlide } = require('./gridCells');
const { createStatementSlide } = require('./statement');
const helpers = require('./helpers');

module.exports = {
  createCoverSlide,
  createModuleOpenerSlide,
  createAgendaSlide,
  createExplainSlide,
  createAnatomySlide,
  createCompareSlide,
  createGridCellsSlide,
  createStatementSlide,
  helpers
};

