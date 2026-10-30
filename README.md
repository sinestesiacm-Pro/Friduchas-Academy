# Friduchas Academy — Master PMU

Sistema didáctico y visual de alta definición para el curso profesional de Dermopigmentación (PMU) de **Friduchas Academy**, impartido por Giulia.

## Características

- **Diseño Editorial 1:1:** Tipografía editorial con *Playfair Display* y *Plus Jakarta Sans*, respetando proporciones, jerarquía y espaciados de la referencia.
- **Visor Interactivo Localhost:** Visor completo en HTML5/CSS accesible en `http://localhost:3000` con vista de presentación, cuadrícula 3×3 y comparador lado a lado con la referencia.
- **Activos en Alta Resolución:** Ilustración médica 3D de capas de la piel, micrografías celulares procesadas con máscara alfa antialiased y fotografía editorial de modas.
- **Generación PPTX:** Exportador automático de presentaciones PowerPoint en 16:9 con `pptxgenjs`.

## Ejecución Local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor local:
   ```bash
   node scripts/serve.js
   ```
3. Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

4. Generar presentación PPTX:
   ```bash
   node scripts/generate_sample.js
   ```
