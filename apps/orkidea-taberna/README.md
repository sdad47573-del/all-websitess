# Orkidea Taberna — Lezo

Web estática en Astro para **Orkidea Taberna**, taberna de pintxos y restaurante en Aizkorri Kalea, 4 (20100 Lezo, Gipuzkoa).

## Contenido

- Portada: hero, barra de pintxos, sección «La casa», galería, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Orkidea Taberna
- Dirección: Aizkorri Kalea, 4 · 20100 Lezo (Gipuzkoa)
- Categoría con la que Google lo clasifica: Restaurante
- Valoración: 4,6/5 con 42 reseñas
- Horario: lunes y martes 10:00–21:00; miércoles a viernes 8:30–22:00; sábado 9:00–23:00; domingo 10:00–21:00
- Accesibilidad: la ficha marca «Acceso para sillas de ruedas»
- Reseñas citadas: pintxos, carne guisada «espectacular», buen ambiente y trato del equipo

El listado **no publica teléfono, correo ni web propia**, así que la web no inventa ninguno: los botones llevan a la ficha de Google Maps, que es el único canal publicado. Si el titular facilita un teléfono, se añade en `BUSINESS` y en la barra de llamada fija.

## Pendiente antes de publicar

- NIF/CIF, razón social, teléfono y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://orkidea-taberna.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
- Verificar en el local los horarios y la carta antes de difundir la web.

## Comandos

```bash
bun install          # desde la raíz del monorepo
bunx astro dev       # desarrollo
bunx astro build     # genera dist/
bunx tsc -p tsconfig.json --noEmit
```

`astro check` no funciona en este repo porque usa TypeScript 7; se valida con `tsc`.

## Crédito

El pie de página enlaza a **Sur Digital** → https://sur-digital.vercel.app/
