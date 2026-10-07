# Taberna Sanatorio

Web informativa de **Taberna Sanatorio**, taberna y restaurante especializado en tapas en la **C. Cuatro Torres, 7 · 23001 Jaén**, con teléfono 616 66 83 82.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Taberna Sanatorio                          |
| Dirección               | C. Cuatro Torres, 7 · 23001 Jaén           |
| Teléfono                | +34 616 66 83 82                           |
| Categorías de Google    | Taberna · Restaurante especializado en tapas |
| Valoración              | 4,6 sobre 5 con 330 reseñas                |
| Horario                 | Martes a sábado: 12:00 – 16:00 y 20:30 – cierre (medianoche; 0:30 viernes y sábado) |
| Coordenadas             | 37.7671922, -3.7866468                     |
| Plus code               | Q687+V8 Jaén                               |
| Identificador del lugar | `ChIJ3xdjAnXXbQ0R0OBycOrrIIc`              |
| Identificador de canal  | `/g/11bzy7qkv0`                            |

El número de reseñas se escribe **«330 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`@type` y `servesCuisine`.** La ficha clasifica el local como **«Taberna»** y **«Restaurante especializado en tapas»**. En los datos estructurados se publica con `@type: Restaurant` (el tipo que usan el resto de webs del repositorio) y `servesCuisine: ['Tapas']`. No se declara ninguna otra cocina.

**Carta, precios, web y redes.** La ficha no publica carta ni precios, así que no se reproduce ninguno y el `Restaurant` **no lleva `priceRange`**. Tampoco publica web propia ni perfiles sociales, así que **no hay `sameAs`** ni enlaces externos en la página. `acceptsReservations: true` es el único campo que no sale de la ficha: se mantiene el mismo esquema que en el resto de webs del repositorio.

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y publica dos turnos:

| Días               | Horario publicado             |
| ------------------ | ----------------------------- |
| Martes a jueves    | 12:00 – 16:00 · 20:30 – 24:00 |
| Viernes y sábado   | 12:00 – 16:00 · 20:30 – 0:30  |
| Domingo y lunes    | Cerrado                       |

El cierre de las 24:00 es la **medianoche de ese mismo día** (en los datos estructurados se escribe como `closes: '00:00'`, la forma estándar de expresar un cierre a medianoche; el viernes y el sábado cierran a las `00:30`). El lunes 12, Fiesta Nacional de España, aparece cerrado con el aviso de que «el horario podría ser diferente».

### Accesibilidad

La ficha publica el grupo «Accesibilidad»: el **acceso y los asientos adaptados** para sillas de ruedas están disponibles, y el **aparcamiento adaptado**, no.

### Las reseñas

La ficha destaca **tres reseñas** (todas de 5 sobre 5) y se citan **literales**, sin corregir su redacción ni su puntuación:

1. «Buena cocina, rapidez en el servicio y de cerveza ofrece Estrella Galicia.»
2. «Buen servicio y cocina excelente Recomiendo alitas de pollo en salsa Thai.»
3. «Además, la cocina es fantástica, con raciones deliciosas y bien presentadas.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs taberna-sanatorio   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 taberna-sanatorio
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto identifica como autora a la propia ficha («Taberna Sanatorio»), así que cada foto lleva el pie **«Foto de Taberna Sanatorio»**.
- La ficha no describe el contenido de las fotos: los `alt` avisan solo de dónde salen.
- Tras optimizar, el total bajó de **3,2 MB a 1,8 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto panorámica de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs taberna-sanatorio
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Confirmar el horario con el titular (turnos, cierre y los días de cierre) antes de darlo por definitivo.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `taberna-sanatorio.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
