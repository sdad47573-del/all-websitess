# Restaurante Alejandro

Web informativa de **Restaurante Alejandro**, restaurante cántabro en **Plaza Los Mártires, 55, bajo · 39708 Mioño (Cantabria)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`, copiada de la de `restaurante-bikandi-etxea` con la paleta cambiada a verde mar profundo. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| ---- | --------------- |
| Nombre | Restaurante Alejandro |
| Dirección | Plaza Los Mártires, 55, bajo · 39708 Mioño |
| Categoría de Google | Restaurante cántabro |
| Valoración | 4,6 sobre 5 con 303 reseñas |
| Teléfono | 633 33 10 44 (móvil) |
| Horario | Publicado (ver abajo) |
| Coordenadas | 43.358773, -3.2020925 |
| Plus code | 8CMR9Q5X+G5 |
| Identificador del lugar | `ChIJ1W6HanrxTg0ROJwF59dePeg` |
| Identificador de canal | `/g/11tbvw443s` |
| Feature id | `0xd4ef17a6a876ed5:0xe83d5ed7e7059c38` |

El número de reseñas se escribe **«303 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Localidad.** La ficha publica como localidad «Mioño» (localidad del municipio de Castro-Urdiales): aquí se reproduce tal cual, sin sustituirla por el municipio.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**: «Restaurante cántabro», que nombra un tipo de cocina concreto, así que `servesCuisine` es `["Cántabra"]`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **633 33 10 44**, y por su prefijo es un **móvil**: se publica como **+34 633 33 10 44** y el enlace de llamada es `tel:+34633331044`.

**Sin distintivo.** La ficha no muestra ninguna etiqueta junto al nombre, así que no se recoge ninguna.

**Con descripción del titular.** La ficha publica la descripción del local («Menú casero para degustar en nuestro bonito comedor o para llevar a casa!!!»). Se reproduce tal cual en `descripcionLocal` y la portada la muestra en el bloque de cita, marcada como voz del titular.

### El horario

Es el horario que publica la ficha. El local **abre los siete días de la semana**:

| Día | Horario publicado por la ficha |
| --- | ------------------------------ |
| Lunes | 9:30 – 23:00 |
| Martes | 9:30 – 23:00 |
| Miércoles | 9:30 – 23:00 |
| Jueves | 9:30 – 23:00 |
| Viernes | 9:30 – 23:00 |
| Sábado | 10:00 – 23:00 |
| Domingo | 10:00 – 23:00 |

Detalles que se trasladan tal cual a la web:

- De lunes a viernes abre **de 9:30 a 23:00**; sábados y domingos abre **de 10:00 a 23:00**. Siempre hasta las once de la noche, sin ningún día de cierre.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: al no cerrar ningún día, los siete generan su propia entrada (**7 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser diferente. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas, y las dos figuran como no disponibles**: ni aparcamiento adaptado para sillas de ruedas ni bucle magnético asistencial. La web lo muestra tal cual, sin suavizarlo, y la pregunta frecuente recomienda llamar antes de ir.

### Las reseñas

La ficha destaca **tres reseñas con texto**, las tres de 5 sobre 5, y se citan **literales**, sin corregir su redacción (la segunda deja un espacio antes de la coma). La respuesta no trae los nombres de quienes las firman, así que se citan sin autor:

1. «Camareros geniales comida de 10 dueños encantadores gracias.» (5/5)
2. «El camarero muy amable , la comida casera, bien preparada y sin apenas esperas.» (5/5)
3. «Excelente calidad precio, menú del día muy rico y muy buena atención.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-alejandro   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-alejandro
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas (01, 04, 05, 07 y 09), tres verticales (02, 03 y 10) y dos casi cuadradas (vista-6-06 y vista-8-08).
- El manifiesto de la descarga **no atribuye autor** a ninguna, así que **ninguna foto lleva pie**.
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, las imágenes bajan de **3,9 MB a 2,2 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-alejandro
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (todos los días hasta las 23:00, apertura 9:30 entre semana y 10:00 el fin de semana) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-alejandro.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
