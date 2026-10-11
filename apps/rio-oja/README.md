# Rio-Oja Restaurante

Web informativa no oficial de **Rio-Oja Restaurante**, bar restaurante de
cocina vasca en **Calle del Perro, 4 · 48005 Bilbao (Casco Viejo)**,
teléfono 944 15 08 71.

- Astro 7 (`@astro-config`) y hoja de estilos propia en `src/styles/global.css`.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto).
- Datos en `src/data/site.ts`: ficha, contacto, horario, servicios, preguntas y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Fuentes públicas consultadas el **11 de octubre de 2026**:

| Dato               | Valor                                              |
| ------------------ | -------------------------------------------------- |
| Nombre             | Rio-Oja Restaurante                                |
| Dirección          | Calle del Perro, 4 · 48005 Bilbao (Casco Viejo)    |
| Teléfono           | +34 944 15 08 71                                   |
| Correo publicado   | gaizkita9@hotmail.com (web oficial)                |
| Web oficial        | rio-oja.eatbu.com                                  |
| Coordenadas        | 43.2577497, -2.9246324                             |
| Horario oficial    | Lunes cerrado; mar–dom 9:00–23:00                  |
| Valoración         | 3,7 sobre 5 (863 opiniones, Tripadvisor)           |
| Casa               | 67 años, 3 generaciones, cazuelitas y bacalao      |

## Fotos: por qué no son de Google

Las fotos de la ficha de Google Maps pertenecen a sus autores y las
condiciones de Google prohíben descargarlas y republicarlas. Por eso esta web
usa **6 fotos de archivo (Unsplash)** en `src/assets/galeria/` y 3 en `src/assets/hero/`.

Para poner fotos reales del local:

1. Haz tus propias fotos (o pide permiso escrito al autor).
2. Guárdalas como `public/fotos/rio-oja-01.svg` … `-06.svg`
   (o `.jpg` actualizando `src/pages/index.astro`).
3. Reconstruye: `bun run build`.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs rio-oja
```

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo).
2. Confirmar horario y carta con el titular.
3. Sustituir las ilustraciones por fotos propias con permiso.
4. Si el dominio final cambia, actualizarlo en `src/data/site.ts`, `astro.config.mjs`,
   `public/robots.txt` y los canonical/OG de las dos páginas.

Fotos de portada: Unsplash, licencia de uso gratuita (https://unsplash.com/license). Son fotografías de archivo, no del local.
