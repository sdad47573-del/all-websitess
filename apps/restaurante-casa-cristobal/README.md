# Restaurante Casa Cristobal

Web informativa de **Restaurante Casa Cristobal**, restaurante en la **Av. de Portugal, 3 · 10001 Cáceres**, con teléfono 927 09 46 82.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **18 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | Restaurante Casa Cristobal                                         |
| Dirección               | Av. de Portugal, 3 · Centro-Casco Antiguo · 10001 Cáceres          |
| Teléfono                | +34 927 09 46 82                                                   |
| Categoría de Google     | Restaurante                                                        |
| Valoración              | 4,1 sobre 5 con 163 reseñas                                        |
| Horario                 | 8:30–24:00 · lun cerrado                                            |
| Coordenadas             | 39.467574, -6.3789548                                              |
| Plus code               | FJ9C+2C Cáceres (completo: 8CFMFJ9C+2C)                            |
| Distintivo              | Amigable con la comunidad LGBTQ+                                   |
| Identificador del lugar | `ChIJHXfylvvfFQ0RMQIK1N-d-1Q`                                      |
| Identificador de canal  | `/g/11s12647vs`                                                    |

El número de reseñas se escribe **«163 reseñas»** y la valoración con coma decimal («4,1»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Con descripción del titular.** La ficha publica descripción del local y la web la reproduce literalmente, por párrafos, enmarcada como cita («Es la descripción que el propio local publica en su ficha»): cocina tradicional de pescados y carnes con arroces (bogavante, mariscos) y una carta de vinos con referencias nacionales y Denominación de Origen. La ficha no publica web propia, perfiles sociales ni precios.

### El horario

Es el horario que publica la ficha, tal cual: todos los días que abre lo hace con el mismo horario.

| Día       | Horario         |
| --------- | --------------- |
| Lunes     | Cerrado         |
| Martes    | 8:30 – 24:00    |
| Miércoles | 8:30 – 24:00    |
| Jueves    | 8:30 – 24:00    |
| Viernes   | 8:30 – 24:00    |
| Sábado    | 8:30 – 24:00    |
| Domingo   | 8:30 – 24:00    |

Detalles que se trasladan tal cual a la web:

- **Jornada continua de 8:30 a 24:00**, el mismo horario los seis días que abre.
- **Solo cierra el lunes.**
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 6 especificaciones en total (el lunes no genera ninguna).

### Accesibilidad

La ficha publica **dos entradas**: el acceso y los asientos adaptados para sillas de ruedas figuran como disponibles. La web enseña ambas etiquetas y las repite en `amenityFeature`. El distintivo «Amigable con la comunidad LGBTQ+» se cita aparte.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Hay una de 4 y dos de 5 sobre 5:

1. «Las raciones de chocos fritos y croquetas de setas muy buenos.» (4/5)
2. «Desde luego volveremos a ir ,vimos un cachopo que tenia una pinta deliciosa !!» (5/5)
3. «Muy buena comida en tapeo las patatas alioli buenísimas» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-casa-cristobal   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías apaisadas**. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- El collage de portada usa la apaisada 01 como pieza principal y las apaisadas 02 y 03 en la columna derecha; la galería va en tres columnas.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-casa-cristobal
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-casa-cristobal.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
