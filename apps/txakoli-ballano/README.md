# Txakoli Ballano

Web informativa no oficial de **Txakoli Ballano**, parrilla vasca en
**Enekuri Artxanda Errepidea, 61 · 48150 Sondika (Bizkaia)**,
teléfono 944 45 30 12.

- Astro 7 (`@astro-config`) y hoja de estilos propia en `src/styles/global.css`.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto).
- Datos en `src/data/site.ts`: ficha, contacto, horario orientativo, preguntas y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Fuentes públicas consultadas el **11 de octubre de 2026**:

| Dato                | Valor                                              |
| ------------------- | -------------------------------------------------- |
| Nombre              | Txakoli Ballano                                    |
| Dirección           | Enekuri Artxanda Errepidea, 61 · 48150 Sondika     |
| Teléfono            | +34 944 45 30 12                                   |
| Correo publicado    | miren_artxanda@hotmail.com (Disfruta Bizkaia)      |
| Coordenadas         | 43.2756368, -2.9230131                             |
| Valoración          | 4,7 sobre 5 (59 opiniones, Tripadvisor)            |
| Cocina              | Vasca de parrilla: zamburiñas, chuletón, pescados  |
| Horario orientativo | Cierra martes; lun 9–17, mié–dom 9–18 (a confirmar)|

El horario viene de guías gastronómicas, no de la ficha en abierto, así que se
presenta como orientativo y se pide confirmar por teléfono.

## Fotos: por qué no son de Google

Las fotos de la ficha de Google Maps pertenecen a sus autores y las
condiciones de Google prohíben descargarlas y republicarlas. Por eso esta web
usa **6 fotos de archivo (Unsplash)** en `src/assets/galeria/` y 3 en `src/assets/hero/`.

Para poner fotos reales del local:

1. Haz tus propias fotos (o pide permiso escrito al autor).
2. Guárdalas como `public/fotos/txakoli-ballano-01.svg` … `-06.svg`
   (o `.jpg` actualizando `src/pages/index.astro`).
3. Reconstruye: `bun run build`.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs txakoli-ballano
```

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo).
2. Confirmar el horario con el titular y ajustar `hours` si procede.
3. Sustituir las ilustraciones por fotos propias con permiso.
4. Si el dominio final cambia, actualizarlo en `src/data/site.ts`, `astro.config.mjs`,
   `public/robots.txt` y los canonical/OG de las dos páginas.

Fotos de portada: Unsplash, licencia de uso gratuita (https://unsplash.com/license). Son fotografías de archivo, no del local.
