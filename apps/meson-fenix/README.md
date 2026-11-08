# Mesón Fénix

Web informativa de **Mesón Fénix**, restaurante en la **C. Félix Martí Alpera, 57 · 30205 Cartagena** (Murcia), con teléfono 648 91 17 68.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                    |
| ----------------------- | ---------------------------------- |
| Nombre                  | Mesón Fénix                        |
| Dirección               | C. Félix Martí Alpera, 57 · 30205 Cartagena |
| Teléfono                | +34 648 91 17 68                   |
| Categorías de Google    | Restaurante                        |
| Valoración              | 4,4 sobre 5 con 846 reseñas        |
| Horario                 | Publicado (ver abajo)              |
| Coordenadas             | 37.6187502, -0.993981              |
| Plus code               | J294+GC Cartagena                  |
| Identificador del lugar | `ChIJc1av2RlDYw0RKjue14J29_Y`      |
| Identificador de canal  | `/g/11h825d98n`                    |
| Feature id              | `0xd634319d9af5673:0xf6f77682d79e3b2a` |

El número de reseñas se escribe **«846 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección.** Google publica «C. Félix Martí Alpera, 57» (con la abreviatura «C.»), el código postal 30205 y el municipio, Cartagena. Se reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas de la ficha.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», así que el `@type` es `Restaurant` y **no se añade `servesCuisine`**: no hay una cocina declarada. Se mantiene `acceptsReservations: true` como en el resto de webs del repositorio. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### La descripción del titular

La ficha publica una **descripción firmada por el propio local**, y se cita literal:

> Buenas comida y personal excelente. Muy bien situado

Es el único texto descriptivo que no se limita a repetir campos de la ficha, así que la sección «La casa» lo abre con una cita y lo atribuye al titular.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 8:30 – 24:00                   |
| Miércoles | 8:30 – 24:00                   |
| Jueves    | 8:30 – 24:00                   |
| Viernes   | 8:30 – 24:00                   |
| Sábado    | 9:30 – 24:00                   |
| Domingo   | 9:30 – 17:00                   |

Detalles que se trasladan tal cual a la web:

- **El local cierra los lunes**; el resto de la semana sirve con **horario continuado**, sin turnos partidos.
- De **martes a viernes** abre de **8:30 a 24:00** y los **sábados** de **9:30 a 24:00**.
- Los **domingos** abre de **9:30 a 17:00**.
- El cierre de la noche es a las 24:00, que en los datos estructurados se escribe como `closes: '00:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el lunes cerrado no genera ninguna entrada (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**.

### El teléfono

Es un **móvil** (648 91 17 68), y así se publica: `phoneHref` usa `tel:+34648911768`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Buena cena, buena compañía, buen trato y raciones generosas.» (5/5)
2. «La carta es de entrantes, carne, hamburguesas, bocadillos y un par de burritos.» (5/5)
3. «El entrecot está buenísimo y los camareros muy atentos.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs meson-fenix   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 meson-fenix
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete verticales (02, 03, 04, 05, 07, 08 y 09) y tres apaisadas (01, 06 y 10).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que las fotos se publican **sin pie y sin atribución**: la ficha no trae una descripción de su contenido y aquí no se inventa ninguna, ni se atribuyen a nadie. Es el mismo criterio que en `meson-antonios`, `abaceria-tinta-de-toro` y otras webs del repositorio.
- El collage de portada usa la apaisada **01** arriba y las verticales **04** y **09** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **3,9 MB a 1,8 MB**; los `bytes` se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs meson-fenix
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da cierre los lunes y horario continuado el resto de la semana) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `meson-fenix.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
