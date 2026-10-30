// src/slides/intro.js — Sezione Introduttiva (5 slide)
const layouts = require('../layouts');
const path = require('path');

const img = (file) => path.join(__dirname, '..', '..', 'assets', 'img', file);

function buildIntroSlides(pres) {
  // Slide 01: Cover (L1)
  layouts.createCoverSlide(pres, {
    eyebrow: 'FRIDUCHAS ACADEMY • CORSO BASE IN PRESENZA',
    title: 'Master PMU\n*Dermopigmentazione*\nProfessionale',
    subtitle: 'Manuale didattico completo: Anatomia, Visagismo, Tecniche Sopracciglia, Labbra, Occhi e Business.',
    footerTag: 'EDIZIONE 2026 — DOCENTE: GIULIA',
    imagePath: img('sample_cover.jpg')
  });

  // Slide 02: Disclaimer & Copyright (L8 Statement Dark)
  layouts.createStatementSlide(pres, {
    mode: 'dark',
    moduleName: 'INTRODUZIONE • TUTELA E COPYRIGHT',
    slideNum: '02',
    eyebrow: 'PROPRIETÀ INTELLETTUALE & DISCLAIMER',
    quote: 'La formazione è un bene prezioso:\n*rispetta il lavoro,*\n*custodisci il valore.*',
    subtext: 'Il presente materiale didattico è di esclusiva proprietà di Friduchas Academy. È vietata qualsiasi riproduzione, distribuzione o diffusione non autorizzata. Le nozioni mediche ed estetiche fornite hanno scopo didattico e formativo professionale.',
    bottomTag: 'FRIDUCHAS ACADEMY • TUTELA LEGALE',
    imagePath: img('sample_dark_model.jpg')
  });

  // Slide 03: Lettera di Benvenuto di Giulia (L4 Explain)
  layouts.createExplainSlide(pres, {
    title: 'Benvenuta in\n*Friduchas Academy*',
    moduleName: 'INTRODUZIONE • BENVENUTA',
    slideNum: '03',
    leadText: '«Ho creato questo percorso per offrirti non semplici trucchi di manualità, ma le solide radici scientifiche, etiche ed estetiche che ti renderanno una vera professionista della bellezza.» — Giulia',
    features: [
      'Oltre 350 ore di ricerca e pratica clinica condensata in un unico manuale',
      'Approccio iperrealistico: valorizzare l’identità senza stravolgere i lineamenti',
      'Metodologia scientifica: rispetto biologico della cute e sicurezza assoluta',
      'Accompagnamento continuo: dalla tecnica in aula al successo del tuo studio'
    ],
    imagePath: img('sample_model_profile.jpg')
  });

  // Slide 04: L'Etica e la Responsabilità del PMU (L8 Statement Blush)
  layouts.createStatementSlide(pres, {
    mode: 'blush',
    moduleName: 'INTRODUZIONE • ETICA PROFESSIONALE',
    slideNum: '04',
    eyebrow: 'RESPONSABILITÀ DEL RUOLO',
    quote: 'Il nostro compito non è cambiare un volto,\n*ma rivelare con armonia*\n*la sua bellezza autentica.*',
    subtext: 'La più grande competenza di una Master PMU non è solo sapere come eseguire un trattamento, ma avere la sensibilità etica e la sicurezza tecnica per dire di no quando un lavoro non rispetta la fisionomia o la salute della cliente.',
    bottomTag: 'CODICE DEONTOLOGICO FRIDUCHAS',
    imagePath: img('sample_texture.jpg')
  });

  // Slide 05: Indice Generale del Corso (L3 Agenda)
  layouts.createAgendaSlide(pres, {
    title: 'La struttura\ndel *nostro percorso*',
    moduleName: 'INTRODUZIONE • INDICE GENERALE',
    slideNum: '05',
    items: [
      'Modulo 1 — Foundation: Anatomia, Pigmenti & Sicurezza',
      'Modulo 2 — Brows Specialist: Visagismo, Pelo & Powder',
      'Modulo 3 — Lips Specialist: Lip Blush & Neutralizzazione',
      'Modulo 4 — Eyes Specialist: Infracigliare & Sfumato',
      'Modulo 5 — Business, Fotografia Macro & Carriera'
    ],
    imagePath: img('sample_texture.jpg')
  });
}

module.exports = { buildIntroSlides };

