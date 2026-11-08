# Mesón El Futbolista

Web informativa del **Mesón El Futbolista**, bar de tapas en la **C. Fuente de la Salud, 3, bajo · 23006 Jaén**, con teléfono 625 57 82 77.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                 |
| ----------------------- | ----------------------------------------------- |
| Nombre                  | Mesón El Futbolista                             |
| Dirección               | C. Fuente de la Salud, 3, bajo · 23006 Jaén     |
| Teléfono                | +34 625 57 82 77                                |
| Categorías de Google    | Bar de tapas · Bar                              |
| Valoración              | 4,6 sobre 5 con 816 reseñas                     |
| Horario                 | Miércoles a jueves: 13:00 – 17:00 y 20:30 – 0:30; viernes y sábado: 13:00 – 17:00 y 20:30 – 1:00; domingo: 13:00 – 17:00 y 20:00 – 23:30; lunes y martes cerrado |
| Coordenadas             | 37.779547, -3.805727                            |
| Plus code               | Q5HV+RP Jaén                                    |
| Identificador del lugar | `ChIJ_RSwSj3XbQ0RVbdTb_zZGqs`                   |
| Identificador de canal  | `/g/11c1vj_k8r`                                 |
| Descripción del local   | Cocina casera                                   |

El número de reseñas se escribe **«816 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`@type`, `servesCuisine` y `acceptsReservations`.** Google clasifica el local como **«Bar de tapas» y «Bar»**, sin tipo de cocina, así que **no se declara `servesCuisine`**: la descripción del local («Cocina casera») no es el nombre de una cocina en el sentido de schema.org. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. No hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### La descripción del local

La ficha publica una descripción del comercio («merchant description») que en este caso son solo dos palabras: **«Cocina casera»**. Se recoge literalmente en `descripcionLocal` y se enseña en la portada, sin ampliarla ni interpretarla.

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y el local cierra **lunes y martes**. Abre de miércoles a domingo en dos turnos:

| Días            | Horario publicado             |
| --------------- | ----------------------------- |
| Miércoles y jueves | 13:00 – 17:00 · 20:30 – 0:30 |
| Viernes y sábado   | 13:00 – 17:00 · 20:30 – 1:00 |
| Domingo            | 13:00 – 17:00 · 20:00 – 23:30 |
| Lunes y martes     | Cerrado                       |

Las horas de cierre de la cena se escriben tal cual en los datos estructurados (`00:30`, `01:00`, `23:30`): las dos primeras son la madrugada del día siguiente. El lunes 12, Fiesta Nacional de España, aparece cerrado con el aviso de que «el horario podría ser diferente»; el martes 13 también cierra y **sin** ese aviso, y el cierre de ambos días está confirmado por fuentes públicas de la ficha.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una sola entrada**: el **acceso para sillas de ruedas**, marcado como disponible. No publica aseo, asientos ni aparcamiento adaptados, así que no se listan.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. **No todas son de 5**: se reproduce igual una de 3 y otra de 4, sin esconderlas:

1. «Buen bar para tapear y tomar algunas raciones de arroz y migas.» (3 sobre 5)
2. «Buen trato y tapeo variado buen lugar para quedadas , recomendable 100%» (4 sobre 5)
3. «Los rollos de pollo con roquefort...geniales, muy buena comida» (5 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs meson-el-futbolista   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 meson-el-futbolista
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto **no identifica autor** en ninguna, así que no llevan pie (`figcaption`).
- Vienen muy mezcladas de proporciones: dos apaisadas, una panorámica, cinco verticales y dos casi cuadradas. El collage de portada usa la apaisada 01 (la más cercana al 16/9 y de mayor resolución) arriba y las verticales 04 y 06 en el hueco inferior, con las proporciones por defecto del repositorio (16/9 y 4/5).
- Tras optimizar, el total bajó de **3,6 MB a 1,8 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs meson-el-futbolista
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Confirmar el horario con el titular (los dos turnos, las tres horas de cierre de la cena y el cierre de lunes y martes) antes de darlo por definitivo.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `meson-el-futbolista.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
