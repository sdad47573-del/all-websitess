# Taberna El Chato

Landing page Astro para Taberna El Chato, en Villarrubia (Córdoba), con SEO local, datos estructurados, teléfono de reservas y enlaces a Google Maps y perfiles oficiales.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter taberna-el-chato
bun --filter taberna-el-chato dev
```

Comprobaciones: `bun --filter taberna-el-chato check`, `typecheck` y `build`.

## Fuentes y contenido

- Google Maps: https://www.google.com/maps/place/Taberna+el+Chato/@37.8496177,-4.914547,17z/
- Web oficial y reservas: https://taberna-el-chato.eatbu.com/?lang=es
- Instagram oficial: https://www.instagram.com/taberna_elchato/
- Facebook oficial: https://www.facebook.com/p/Taberna-El-Chato-100057382122315/

Google Maps identifica la ficha y es la vía para consultar más fotografías del establecimiento. Las imágenes se guardan localmente en `src/assets/fotos/` y se optimizan en el build con `astro:assets` (AVIF, `srcset` y `sizes`): la fotografía de portada procede de la ficha de Google Maps del negocio, con la procedencia acreditada bajo la propia imagen, y las cinco de la galería están descargadas de la galería del sitio oficial (https://taberna-el-chato.eatbu.com/?lang=es), con atribución visible en la página. Los SVG son gráficos originales.

Hay discrepancias de dirección: Maps y varios directorios indican Avenida de la Pedanía, 206; la web oficial muestra Av. Concordia, 1. El horario mostrado es una referencia histórica publicada por ABC en mayo de 2022 y puede haber cambiado. La página recomienda confirmar dirección, horario, carta y disponibilidad llamando al **957 41 98 79**.

El dominio `taberna-el-chato-cordoba.vercel.app` es provisional y debe sustituirse por el dominio definitivo antes de publicar.
