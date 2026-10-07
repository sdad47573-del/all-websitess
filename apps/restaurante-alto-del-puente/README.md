# Restaurante Alto del Puente

Web informativa del **Restaurante Alto del Puente**, cafetería y restaurante mediterráneo en la **Av. de Ubeda, Km.0600 · 23100 Jaén**, con teléfono 687 72 94 14.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Restaurante Alto del Puente                |
| Dirección               | Av. de Ubeda, Km.0600 · 23100 Jaén         |
| Teléfono                | +34 687 72 94 14                           |
| Categorías de Google    | Cafetería · Restaurante mediterráneo       |
| Valoración              | 4,6 sobre 5 con 99 reseñas                 |
| Horario                 | Lunes a sábado: 6:30 – 21:30; domingo cerrado |
| Coordenadas             | 37.7915891, -3.6073177                     |
| Plus code               | Q9RV+J3 Jaén                               |
| Identificador del lugar | `ChIJC11c5Rx7bg0RYfZcSfiXCDw`              |
| Identificador de canal  | `/g/11gd4kb_cr`                            |

El número de reseñas se escribe **«99 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**La dirección se reproduce literal**, tal y como la publica la ficha: «Av. de Ubeda, Km.0600». No se corrige la tilde de «Úbeda» ni se reescribe el kilómetro como «Km. 600».

**`@type`, `servesCuisine` y `acceptsReservations`.** La ficha clasifica el local como **«Cafetería»** y **«Restaurante mediterráneo»**, así que los datos estructurados usan `@type: Restaurant` (el tipo del resto de webs del repositorio) y `servesCuisine: ['Mediterránea']`. No se declara ninguna otra cocina. `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. No hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### La descripción del propio local

La ficha incluye un texto que escribe el negocio, que se reproduce en `descripcionLocal` y se cita en la portada. Ojo con un detalle: en ese texto el local se llama a sí mismo **«Cafetería Alto del puente»**, aunque el nombre de la ficha es «Restaurante Alto del Puente».

> «Cafetería Alto del puente está situada en un polígono Industrial de la periferia. Es una zona tranquila. Disponemos de terraza para disfrutar de nuestros productos al aire libre. Servimos desayunos, bocadillos fríos o calientes y bebidas espirituosas. También servimos combinados de alcohol. Esperamos verles pronto.»

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y publica un único tramo continuo:

| Días                | Horario publicado |
| ------------------- | ----------------- |
| Lunes a sábado      | 6:30 – 21:30      |
| Domingo             | Cerrado           |

El lunes 12, Fiesta Nacional de España, aparece abierto con el mismo tramo y el aviso de que «el horario podría ser diferente».

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **un solo servicio**: el **acceso para sillas de ruedas**, disponible. No publica nada sobre aseo, asientos ni aparcamiento adaptado, así que no se declara nada más.

### Las reseñas

La ficha destaca **tres reseñas** (todas de 5 sobre 5) y se citan **literales**, sin corregir su redacción ni su puntuación:

1. «Bocadillos muy buenos, y dueño muy agradable y atento»
2. «Y muy buen café y aceite...todo perfecto»
3. «El dueño súper amable y las tostadas del desayuno enormes y de calidad.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-alto-del-puente   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-alto-del-puente
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- **Esta ficha solo publica tres fotografías** (dos verticales y una apaisada), frente a las diez que suelen traer las demás del repositorio. La portada lo dice así y la galería muestra las tres.
- El manifiesto quedó **sin autor** (`author` vacío), así que se publican sin pie ni atribución. La respuesta de Google es inconsistente con este campo: en reintentos posteriores llegó a atribuirlas al propio local, pero el manifiesto con el que trabaja la web las dejó sin autor.
- Tras optimizar, el total bajó de **0,9 MB a 0,4 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la única foto apaisada de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-alto-del-puente
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Confirmar el horario con el titular (el horario continuo de 6:30 a 21:30 y el cierre del domingo) antes de darlo por definitivo.
3. Revisar las tres fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-alto-del-puente.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
