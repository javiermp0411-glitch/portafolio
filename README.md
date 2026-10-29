# Portafolio de Javier Montero

Portafolio personal construido con Astro. Presenta experiencia profesional y proyectos mediante una página principal y páginas estáticas de detalle generadas desde Markdown.

## Requisitos

- Node.js `>=22.23.4`
- npm

## Desarrollo

```sh
npm install
npm run dev
```

Astro inicia el sitio en `http://localhost:4321`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor local |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve localmente la última compilación |
| `npm run astro -- --help` | Muestra ayuda de la CLI de Astro |

## Estructura

- `src/pages/`: rutas del sitio y páginas estáticas de proyectos.
- `src/components/`: componentes Astro reutilizables, incluido el selector compartido de iconos tecnológicos.
- `src/content/projects/`: contenido de proyectos en Markdown.
- `src/content.config.ts`: esquema y validación de la colección de proyectos.
- `src/assets/`: imágenes y documentos procesados por Astro.
- `public/`: archivos servidos sin procesamiento, como el favicon.
- `DESIGN.md`: especificación del sistema visual del proyecto.

## Añadir o editar un proyecto

Crea o modifica un archivo Markdown en `src/content/projects/`. El frontmatter se valida mediante `src/content.config.ts`; las imágenes deben referenciarse desde `src/assets/`.

`links.demo` es opcional y solo debe incluirse para una demo funcional. `links.github` también es opcional y contiene el enlace al código. Si no existe demo, omite `demo`; el botón correspondiente no se mostrará. Las páginas de detalle se generan automáticamente para cada proyecto.
