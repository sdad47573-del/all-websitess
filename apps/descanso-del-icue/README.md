# Descanso del icue

Web informativa de **Descanso del icue**, restaurante de brasa y cocina mediterránea en la **Calle Jabonerías, 9 · 30201 Cartagena** (Murcia), con teléfono 968 00 36 43.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                    |
| ----------------------- | ---------------------------------- |
| Nombre                  | Descanso del icue                  |
| Dirección               | Calle Jabonerías, 9 · 30201 Cartagena |
| Teléfono                | +34 968 00 36 43                   |
| Categorías de Google    | Restaurante, Restaurante mediterráneo, Restaurante de cocina española |
| Valoración              | 4,1 sobre 5 con 1.031 reseñas      |
| Horario                 | Publicado (ver abajo)              |
| Coordenadas             | 37.6030025, -0.9885086             |
| Plus code               | J236+6H Cartagena                  |
| Identificador del lugar | `ChIJB34hjyVCYw0REhCYeg9eiVA`      |
| Identificador de canal  | `/g/11bytqlkss`                    |
| Feature id              | `0xd6342258f217e07:0x50895e0f7a981012` |

El número de reseñas se escribe **«1.031 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Nombre.** Google lo publica con **«icue» en minúscula** (el apodo con el que se conoce a los cartageneros), así que se reproduce tal cual.

**Dirección.** Google publica «Calle Jabonerías, 9», el código postal 30201 y el municipio, Cartagena. El código postal y el municipio se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **tres categorías** —«Restaurante» (la primera, que hace de categoría principal), «Restaurante mediterráneo» y «Restaurante de cocina española»—, así que el `@type` es `Restaurant`, con `servesCuisine` **Mediterránea** y **Española**. Se mantiene `acceptsReservations: true` como en el resto de webs del repositorio. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### La descripción del titular

La ficha publica una **descripción firmada por el propio local**, y se cita literal (sin corregir sus tildes ni su puntuación):

> El nuevo descanso del icue mantiene la esencia del meson clasico de toda la vida con nuestro toque modernizado y sobre todo una carta basada en productos a la brasa y de mucha calidad

Es el único texto descriptivo que no se limita a repetir campos de la ficha, así que la sección «La casa» lo abre con una cita y lo atribuye al titular.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha   |
| --------- | -------------------------------- |
| Lunes     | 11:00 – 16:00 · 19:00 – 24:00    |
| Martes    | 11:00 – 16:00 · 19:00 – 24:00    |
| Miércoles | 11:00 – 16:00 · 19:00 – 24:00    |
| Jueves    | 11:00 – 16:00 · 19:00 – 24:00    |
| Viernes   | 11:00 – 16:00 · 19:00 – 24:00    |
| Sábado    | 11:00 – 16:00 · 19:00 – 24:00    |
| Domingo   | 11:00 – 17:00                   |

Detalles que se trasladan tal cual a la web:

- **El local abre todos los días**, no hay ningún día de cierre.
- **El mediodía es de 11:00 a 16:00**, y los **domingos hasta las 17:00**.
- **La noche solo de lunes a sábado**, de 19:00 a 24:00; el **domingo no hay cena**.
- El turno de noche se cierra a las 24:00, que en los datos estructurados se escribe como `closes: '00:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los **13 turnos** (6 días con dos turnos y el domingo con uno) generan 13 especificaciones.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**: el **acceso** y los **asientos adaptados para sillas de ruedas** figuran como disponibles, y el **aparcamiento adaptado para sillas de ruedas** como **no disponible**. Es la primera web del repositorio con una entrada marcada como no disponible, que se muestra con el aspa y el color apagado.

### El teléfono

Es un **fijo** (968 00 36 43), y así se publica: `phoneHref` usa `tel:+34968003643`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Una es de 5 sobre 5, otra de 4 y otra de 3:

1. «Los camareros son muy amables y las raciones que pedimos estaban muy ricas.» (5/5)
2. «Comida correcta, croquetas y calamares muy ricos, la tosta bastante escasa.» (3/5)
3. «La tapa de tortilla de setas y trufa muy rica.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs descanso-del-icue   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 descanso-del-icue
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: siete verticales (01, 02, 03, 04, 06, 08 y 09), dos apaisadas (05 y 07) y una cuadrada (10).
- El manifiesto de la descarga atribuye **las diez al propio local** (`author` = «Descanso del icue»), así que cada foto de la galería lleva su pie «Foto de Descanso del icue».
- El collage de portada usa la apaisada **05** arriba y las verticales **01** y **03** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **7,4 MB a 2,9 MB**; los `bytes` se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **05** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs descanso-del-icue
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da apertura todos los días, mediodía de 11:00 a 16:00 —domingos hasta las 17:00— y cenas de lunes a sábado hasta las 24:00) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `descanso-del-icue.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
