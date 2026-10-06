# Jiménez Restaurante

Web informativa del **Jiménez Restaurante**, restaurante en la **Ctra. el Charco, s/n, 04120 La Cañada (Almería)**, con teléfono 696 10 65 79.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                   |
| ----------------------- | ------------------------------------------------- |
| Nombre                  | Jiménez Restaurante                               |
| Dirección               | Ctra. el Charco, s/n · 04120 La Cañada (Almería)  |
| Teléfono                | +34 696 10 65 79                                  |
| Categoría de Google     | Restaurante                                       |
| Valoración              | 4,2 sobre 5 con 902 reseñas                       |
| Horario                 | 12:00 – 16:00 todos los días · cerrado los martes |
| Coordenadas             | 36.8330279, -2.3888451                            |
| Plus code               | RJM6+6F La Cañada                                 |
| Identificador del lugar | `ChIJoe_embmeeg0ROWD6Wk9ztbo`                     |
| Identificador de canal  | `/g/1th5dy48`                                     |

El número de reseñas se escribe **«902 reseñas»** (sin separador de millar, como el resto del repositorio) y la valoración con coma decimal («4,2»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Web, redes y carta.** La ficha no publica web propia —ofrece el botón «Añadir sitio web»—, ni perfiles de redes sociales, ni carta, ni precios, ni rango de precios, así que no se enlaza, no se afirma y el `Restaurant` de los datos estructurados **no lleva `priceRange`**. Tampoco ofrece reserva en línea.

**`servesCuisine`.** La única categoría que publica Google es «Restaurante», que no declara ningún tipo de cocina, así que el campo **se omite** en el dato estructurado: se prefiere no publicarlo a inventar una cocina que la ficha no dice.

### La dirección

Google escribe la dirección como «**Ctra. el Charco, s/n**, 04120, **La Cañada**, **Almería**»: se publica tal cual, con la abreviatura «s/n» y el municipio de La Cañada, que es lo que devuelve la ficha para estas coordenadas.

### Horario: un solo turno y martes cerrados

La ficha publica **12:00 – 16:00 de lunes a domingo, con el martes cerrado**. La consulta cubre del martes 6 al lunes 12 de octubre de 2026: ese martes aparecía **cerrado** («Cerrado · Apertura: 12:00 (mié)») y el resto de días, incluido el lunes 12 —Fiesta Nacional de España—, mantenía 12:00 – 16:00 con el aviso de que «el horario podría ser diferente».

Dos comprobaciones cruzadas, **sin entrar en los datos que publica la web**:

- Restaurant Guru, que replica la ficha, devuelve exactamente esa tabla: lunes 12:00-16:00, martes cerrado, miércoles a domingo 12:00-16:00.
- La cuenta pública del restaurante anunciaba «MARTES CERRADO POR DESCANSO DEL PERSONAL», en línea con la ficha.
- En contra, una guía local escribe «abre de miércoles a domingo», lo que dejaría el lunes cerrado. No se sigue esa versión: **prima la ficha**, que sí publica horario los lunes.

Conviene confirmar el horario por teléfono, sobre todo fuera de temporada: la ficha solo declara turno de mediodía y las redes del local han publicado horarios distintos en verano.

### Las reseñas

La ficha destaca **tres reseñas**, las tres con cinco estrellas, y se citan **literales**:

1. «Paella buenísima, tarta de galletas de la abuela riquísima!»
2. «La comida exquisita, el pescado, tomate raf, pata de pulpo a la brasa, migas.»
3. «🟢 Cerveza 🍻: copita de cerveza que cumple con lo básico; que esté fría.»

La tercera conserva sus **emojis** tal y como los publica Google: se prefiere la cita exacta a limpiar un texto que no es nuestro.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs jimenez-restaurante   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 jimenez-restaurante
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga quedó **sin autora** (`autor=sin autor`), aunque una segunda petición de la misma ficha devolvió «Jiménez Restaurante» como autora: como la atribución no es estable, **no se pide pie ni se atribuye a nadie**.
- Todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada que abre la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs jimenez-restaurante
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. La auditoría de accesibilidad de la portada y de `/aviso-legal` (axe-core, WCAG 2.0 A y AA) cierra con **0 infracciones**.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt`: ninguna trae pie de Google.
3. Confirmar con el restaurante el horario de los lunes y si en temporada alta mantiene el único turno de 12:00 a 16:00.
4. Si el dominio final no es `jimenez-restaurante.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
