# Taberna Laubide

Web informativa no oficial de **Taberna Laubide**, taberna de comida casera en
**Aita Gotzon Kalea, 2 · 48610 Urduliz (Bizkaia)**.

- Astro 7 (`@astro-config`) y hoja de estilos propia en `src/styles/global.css`.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto).
- Datos en `src/data/site.ts`: ficha, ubicación, preguntas y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Fuentes públicas consultadas el **11 de octubre de 2026**:

| Dato            | Valor                                              |
| --------------- | -------------------------------------------------- |
| Nombre          | Taberna Laubide                                    |
| Dirección       | Aita Gotzon Kalea, 2 · 48610 Urduliz               |
| Coordenadas     | 43.3730683, -2.9485396                             |
| Valoración      | 3,4 sobre 5 (11 opiniones, Tripadvisor)            |
| Casa            | Taberna de comida casera con menú                  |

No hay teléfono ni horario publicados en fuentes verificables de este local
(el «Bar Laubide» de Bilbao es otro establecimiento distinto y no se mezcla),
así que **no se inventan**: la web remite a la ficha de Google Maps.

## Fotos: por qué no son de Google

Las fotos de la ficha de Google Maps pertenecen a sus autores y las
condiciones de Google prohíben descargarlas y republicarlas. Por eso esta web
usa **6 fotos de archivo (Unsplash)** en `src/assets/galeria/` y 3 en `src/assets/hero/`.

Para poner fotos reales del local:

1. Haz tus propias fotos (o pide permiso escrito al autor).
2. Guárdalas como `public/fotos/taberna-laubide-01.svg` … `-06.svg`
   (o `.jpg` actualizando `src/pages/index.astro`).
3. Reconstruye: `bun run build`.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs taberna-laubide
```

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo).
2. Añadir teléfono y horario verificados con el titular si procede.
3. Sustituir las ilustraciones por fotos propias con permiso.
4. Si el dominio final cambia, actualizarlo en `src/data/site.ts`, `astro.config.mjs`,
   `public/robots.txt` y los canonical/OG de las dos páginas.

Fotos de portada: Unsplash, licencia de uso gratuita (https://unsplash.com/license). Son fotografías de archivo, no del local.
