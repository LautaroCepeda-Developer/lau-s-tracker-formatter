# Lau's Tracker Formatter

Herramienta web estática para limpiar, organizar y formatear listas de trackers BitTorrent.

Permite pegar trackers en distintos formatos, incluso cuando se encuentran concatenados en una misma línea, detectar duplicados y generar una lista limpia con el formato elegido.

## Características

- Detección de trackers `http://`, `https://` y `udp://`.
- Detección de trackers aunque estén concatenados sin espacios ni saltos de línea.
- Eliminación automática de trackers duplicados.
- Formato de salida:
  - Un tracker por línea.
  - Una línea en blanco entre trackers.
- Procesamiento completamente local en el navegador.
- Indicadores de trackers detectados, únicos y duplicados.
- Copiado del resultado al portapapeles.
- Atajos de teclado.
- Soporte para español e inglés.
- Página 404 localizada.
- SEO básico.
- Open Graph y Twitter/X Cards.
- `robots.txt`.
- Sitemap automático.
- Sitio completamente estático.

## Tecnologías

- [Astro](https://astro.build/)
- TypeScript
- HTML / CSS
- JavaScript
- Netlify

## Visitar sitio web

[Lau's Tracker Formatter](https://lau-tracker-formatter.netlify.app/)

## Pendiente
* Convertir la aplicación en PWA.
* Añadir soporte offline mediante Service Worker.
* Añadir manifest e iconos para instalación como aplicación.