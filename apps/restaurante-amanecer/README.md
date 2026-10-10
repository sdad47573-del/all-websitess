# Restaurante Amanecer

Web informativa de **Restaurante Amanecer**, restaurante en el **Carrer Xaló, 8 · 03509 Benidorm (Alicante)**, con teléfono 622 52 37 38.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                    |
| ----------------------- | ---------------------------------- |
| Nombre                  | Restaurante Amanecer               |
| Dirección               | Carrer Xaló, 8 · 03509 Benidorm    |
| Teléfono                | +34 622 52 37 38 (móvil)           |
| Categoría de Google     | Restaurante                        |
| Valoración              | 4,5 sobre 5 con 728 reseñas        |
| Horario                 | Publicado (ver abajo)              |
| Coordenadas             | 38.5341684, -0.1689714             |
| Plus code               | GRMJ+MC Benidorm                   |
| Identificador del lugar | `ChIJI1AUjhgbYg0RECeCUfPg3G8`      |
| Identificador de canal  | `/g/11gd38ts4v`                    |
| Feature id              | `0xd621b188e145023:0x6fdce0f351822710` |

El número de reseñas se escribe **«728 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección.** Google publica el nombre oficial de la calle en valenciano («Carrer Xaló, 8»), y así se reproduce en la web, sin traducirlo.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», que hace de categoría principal, y **no se añade `servesCuisine`**: es un tipo de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin distintivo

La ficha **no publica ningún distintivo** junto al nombre, así que no hay `distintivo` y la portada no lo menciona.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 6:00 – 17:00                   |
| Martes    | 6:00 – 17:00                   |
| Miércoles | 6:00 – 17:00                   |
| Jueves    | 6:00 – 17:00                   |
| Viernes   | 6:00 – 17:00                   |
| Sábado    | 6:30 – 13:00                   |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **De lunes a viernes abre de 6:00 a 17:00**, sin turno de noche.
- **Los sábados adelanta el cierre a las 13:00**, con apertura a las 6:30.
- **El domingo cierra** todo el día.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el domingo cerrado no genera ninguna entrada (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (622 52 37 38), y así se publica: `phoneHref` usa `tel:+34622523738`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción ni su puntuación (incluida la coma pegada a la palabra «buen» de la tercera). La ficha las presenta entrecomilladas, pero esas comillas son de Google y no forman parte del texto, así que no se reproducen. Las puntuaciones son 4, 5 y 3 sobre 5:

1. «Buen restaurante con buenos precios para Almuerzos y menú diario Buena comida» (4/5)
2. «Muy buenos menús, comida casera y buen servicio.» (5/5)
3. «Servicio correcto ,buen sitio para almorzar o desayunar» (3/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-amanecer   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-amanecer
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas (01, 02, 03, 04 y 10) y cinco verticales (05, 06, 07, 08 y 09).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que no hay a quién atribuir las fotos y se publican **sin pie de foto**.
- El collage de portada usa la apaisada **01** arriba y las verticales **05** y **06** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **3,4 MB a 1,7 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **02** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-amanecer
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da de 6:00 a 17:00 de lunes a viernes, los sábados hasta las 13:00 y cierra los domingos) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-amanecer.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
