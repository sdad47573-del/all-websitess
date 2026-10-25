# Restaurante Sekaña Erretegia — Aginaga, Gipuzkoa

Web estática en Astro para **Restaurante Sekaña Erretegia**, parrilla en Lugar Barrio Aginaga, 20 (20170 Aginaga, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», lo que cuentan las reseñas, galería con las 10 fotos de Google Maps, mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Restaurante Sekaña Erretegia
- Nombre alternativo: Sekaña Erretegia
- Dirección: Lugar Barrio Aginaga, 20 · 20170 Aginaga (Gipuzkoa)
- Categoría: Parrilla
- Valoración: 4,6/5 con 242 reseñas
- Teléfono: 943 36 27 73
- Idiomas: español y euskera
- Accesibilidad: acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado y asientos adaptados
- Etiqueta de Google: Brunch
- Reseñas citadas: chuleta, costilla y cochinillo (por encargo), pollo a la brasa, ensaladas y postres caseros

La ficha **no publica descripción, carta, precios, horario, correo ni web propia**. De hecho, Google muestra «Añadir horario» y «Añadir sitio web» en el panel del establecimiento. La web lo indica así y remite al teléfono.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://restaurante-sekana-erretegia.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
- Confirmar con el local el horario y la carta antes de difundir la web.

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
