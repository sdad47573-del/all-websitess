# Bar Bermeotarrak

Web informativa no oficial de **Bar Bermeotarrak**, bar restaurante y parrilla
en **Plaza Inmaculada, 23 · Barakaldo, zona de Cruces (Bizkaia)**,
teléfono 944 99 86 82.

- Astro 7 (`@astro-config`) y hoja de estilos propia en `src/styles/global.css`.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto).
- Datos en `src/data/site.ts`: ficha, contacto, especialidad, preguntas y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Fuentes públicas consultadas el **11 de octubre de 2026**:

| Dato          | Valor                                              |
| ------------- | -------------------------------------------------- |
| Nombre        | Bar Bermeotarrak                                   |
| Dirección     | Plaza Inmaculada, 23 · Barakaldo (Cruces)          |
| Teléfono      | +34 944 99 86 82                                   |
| Coordenadas   | 43.284611, -2.9845968                              |
| Casa          | Parrilla de pescados y mariscos, cocina tradicional|

No hay horario ni valoración publicados en fuentes verificables, así que **no
se inventan**: la web pide confirmar por teléfono. Tampoco se publica código
postal por el mismo motivo.

## Fotos: por qué no son de Google

Las fotos de la ficha de Google Maps pertenecen a sus autores y las
condiciones de Google prohíben descargarlas y republicarlas. Por eso esta web
usa **6 fotos de archivo (Unsplash)** en `src/assets/galeria/` y 3 en `src/assets/hero/`.

Para poner fotos reales del local:

1. Haz tus propias fotos (o pide permiso escrito al autor).
2. Guárdalas como `public/fotos/bar-bermeotarrak-01.svg` … `-06.svg`
   (o `.jpg` actualizando `src/pages/index.astro`).
3. Reconstruye: `bun run build`.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-bermeotarrak
```

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo).
2. Añadir horario y código postal verificados con el titular si procede.
3. Sustituir las ilustraciones por fotos propias con permiso.
4. Si el dominio final cambia, actualizarlo en `src/data/site.ts`, `astro.config.mjs`,
   `public/robots.txt` y los canonical/OG de las dos páginas.

Fotos de portada: Unsplash, licencia de uso gratuita (https://unsplash.com/license). Son fotografías de archivo, no del local.
