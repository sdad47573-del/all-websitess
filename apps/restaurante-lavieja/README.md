# Restaurante Lavieja

Web informativa de **Restaurante Lavieja**, restaurante en la **calle Roso de Luna · 10003 Cáceres**, con teléfono 685 83 64 91.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **18 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                    |
| ----------------------- | ------------------------------------------------------------------ |
| Nombre                  | Restaurante Lavieja                                                |
| Dirección               | Calle Roso de Luna · Centro-Casco Antiguo · 10003 Cáceres          |
| Teléfono                | +34 685 83 64 91                                                   |
| Categoría de Google     | Restaurante                                                        |
| Valoración              | 4,6 sobre 5 con 192 reseñas                                        |
| Horario                 | 13:00–16:00 y 20:30–24:00 · mar cerrado                            |
| Coordenadas             | 39.4732019, -6.3739059                                             |
| Plus code               | FJFG+7C Cáceres                                                    |
| Identificador del lugar | `ChIJHRazBQDfFQ0RPdPiAVNEjlU`                                      |
| Identificador de canal  | `/g/11lchbvq_4`                                                    |

El número de reseñas se escribe **«192 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección sin número.** La ficha publica la dirección sin número («Calle Roso de Luna») y aquí se reproduce tal cual, con el código postal 10003 y la localidad (Cáceres).

**Sin descripción del titular.** La ficha no publica descripción, así que la web no reproduce ninguna y no atribuye al local frases que no haya escrito. Tampoco publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha, tal cual: todos los días que abre lo hace con el mismo horario.

| Día       | Horario                       |
| --------- | ----------------------------- |
| Lunes     | 13:00 – 16:00 · 20:30 – 24:00 |
| Martes    | Cerrado                       |
| Miércoles | 13:00 – 16:00 · 20:30 – 24:00 |
| Jueves    | 13:00 – 16:00 · 20:30 – 24:00 |
| Viernes   | 13:00 – 16:00 · 20:30 – 24:00 |
| Sábado    | 13:00 – 16:00 · 20:30 – 24:00 |
| Domingo   | 13:00 – 16:00 · 20:30 – 24:00 |

Detalles que se trasladan tal cual a la web:

- **Mediodía de 13:00 a 16:00 y noche de 20:30 a 24:00**, el mismo horario los seis días que abre.
- **Solo cierra el martes.**
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 12 especificaciones en total (el martes no genera ninguna).

### Accesibilidad

La ficha publica **cuatro entradas**: el acceso, el aseo adaptado y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado como no disponible. La web enseña las cuatro etiquetas (la última marcada como no disponible) y las repite en `amenityFeature`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Pedimos ensaladilla de langostinos, caldereta de oreja y solomillo de ternera.» (5/5)
2. «Hemos comido también el lomo a la sal con salsa de anchoas y estaba buenísimo!» (5/5)
3. «Muy buena atención de la camarera, súper simpática y atenta en todo momento.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-lavieja   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: dos apaisadas, seis verticales y dos vistas. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- El collage de portada usa la vertical 03 como pieza principal y las apaisadas 01 y 04 en la columna derecha; la galería va en tres columnas.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-lavieja
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `restaurante-lavieja.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
