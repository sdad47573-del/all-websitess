# Restaurante Parritas

Web informativa del **Restaurante Parritas**, restaurante de cocina española y mediterránea en la **Calle Ote., 18, 04728 Felix (Almería)**, con teléfono 950 55 95 02.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------- |
| Nombre                  | Restaurante Parritas.                                                                 |
| Dirección               | Calle Ote., 18 · 04728 Felix (Almería)                                                |
| Teléfono                | +34 950 55 95 02                                                                      |
| Categorías de Google    | Restaurante de cocina española · Restaurante mediterráneo                             |
| Valoración              | 4,4 sobre 5 con 281 reseñas                                                           |
| Horario                 | 12:30 – 17:00 (18:00 el fin de semana) · cerrado martes y miércoles                   |
| Coordenadas             | 36.8705426, -2.656128                                                                 |
| Plus code               | V8CV+6G Felix                                                                         |
| Identificador del lugar | `ChIJO8N0f7JtcA0RViLt1T_yBzU`                                                         |
| Identificador de canal  | `/g/1tqp_lr2`                                                                         |

El número de reseñas se escribe **«281 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Web, redes y carta.** La ficha no publica web propia —ofrece el botón «Añadir sitio web»—, ni perfiles de redes sociales, ni carta, ni precios, ni rango de precios, así que no se enlaza, no se afirma y el `Restaurant` de los datos estructurados **no lleva `priceRange`**. Tampoco ofrece reserva en línea.

**`servesCuisine`.** Sale de las dos categorías que publica Google («Restaurante de cocina española» y «Restaurante mediterráneo») y se publican como **«Española»** y **«Mediterránea»**. No se declara ninguna otra cocina.

**El nombre.** Google lo publica como «**Restaurante Parritas.**», con el punto final incluido: se conserva tal cual, tanto en el `<title>` y los datos estructurados como en el pie de página.

### La dirección

Google escribe la dirección como «**Calle Ote., 18**, 04728, **Felix**, **Almería**»: se publica tal cual, con la abreviatura «Ote.» y el municipio de Felix que la ficha declara como localidad.

### Horario: cierra martes y miércoles

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026**, que es la ventana de siete días que devuelve la ficha, y **dos de esos días aparecen cerrados**:

| Días             | Horario publicado |
| ---------------- | ----------------- |
| Jueves y viernes | 12:30 – 17:00     |
| Sábado y domingo | 12:30 – 18:00     |
| Lunes            | 12:30 – 17:00     |
| Martes           | Cerrado           |
| Miércoles        | Cerrado           |

El lunes 12 de octubre, Fiesta Nacional de España, mantiene su horario con el aviso de que «el horario podría ser diferente».

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**:

1. «Comida casera, todo muy rico, me encantó el ajoblanco y los postres caseros.» (5 sobre 5)
2. «Buena comida casera y una magnífica atención de la camarera.» (4 sobre 5)
3. «Cuidada atención, simpatía y una buena comida en un ambiente tranquilo.» (5 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-parritas   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-parritas
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto quedó **sin autora** (`author` vacío): no se atribuyen a nadie ni se pone pie.
- Todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada que abre la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-parritas
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt`: ninguna trae pie de Google.
3. Confirmar con el restaurante si los turnos de la ficha coinciden con los de temporada y si el cierre de martes y miércoles se mantiene todo el año.
4. Si el dominio final no es `restaurante-parritas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
