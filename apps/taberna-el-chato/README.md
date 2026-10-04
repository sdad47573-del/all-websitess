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

Google Maps identifica la ficha, pero no ofrece URLs directas de descarga para las fotos del establecimiento. La galería local de `public/images/` contiene cinco fotografías descargadas de la galería del sitio oficial (https://taberna-el-chato.eatbu.com/?lang=es), con atribución visible en la página. El enlace de Google Maps se conserva para abrir su ficha y consultar allí más fotos. La ilustración de portada y los SVG son gráficos originales, no fotografías del local.

Hay discrepancias de dirección: Maps y varios directorios indican Avenida de la Pedanía, 206; la web oficial muestra Av. Concordia, 1. El horario mostrado es una referencia histórica publicada por ABC en mayo de 2022 y puede haber cambiado. La página recomienda confirmar dirección, horario, carta y disponibilidad llamando al **957 41 98 79**.

El dominio `taberna-el-chato-cordoba.vercel.app` es provisional y debe sustituirse por el dominio definitivo antes de publicar.
