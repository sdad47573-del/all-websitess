# Restaurante Discovery

Web informativa del **Restaurante Discovery**, marisquería y restaurante mediterráneo en la **C. del Obispo Estúñiga, 3 · 23007 Jaén**, con teléfono 953 26 71 06.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                          |
| ----------------------- | ------------------------------------------------------------------------ |
| Nombre                  | Restaurante Discovery                                                    |
| Dirección               | C. del Obispo Estúñiga, 3 · 23007 Jaén                                   |
| Teléfono                | +34 953 26 71 06                                                         |
| Categorías de Google    | Restaurante · Restaurante mediterráneo · Marisquería · Cocina española   |
| Valoración              | 4,8 sobre 5 con 929 reseñas                                             |
| Horario                 | Comidas y cenas de miércoles a sábado · cerrado domingos                |
| Coordenadas             | 37.7754596, -3.7900341                                                  |
| Identificador del lugar | `ChIJdxf6uQ7XbQ0RiNWpJiYGfSs`                                           |
| Identificador de canal  | `/g/1t_khwxx`                                                           |

El número de reseñas se escribe **«929 reseñas»** y la valoración con coma decimal («4,8»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Web, carta y precios.** La ficha no publica web propia, ni carta, ni precios, ni rango de precios, así que no se reproduce ninguno y el `Restaurant` de los datos estructurados **no lleva `priceRange`**. Sí están publicados los perfiles de Instagram (`discoveryrestaurantejaen`) y Facebook (`Restaurantediscovery`) del propio restaurante, que se enlazan tal cual.

**`servesCuisine`.** Sale de las categorías que publica Google («Restaurante mediterráneo», «Marisquería», «Restaurante de cocina española») y se publican como **«Mediterránea»**, **«Española»** y **«Marisco»**. No se declara ninguna otra cocina.

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y marca el domingo como cierre. De miércoles a sábado la ficha publica dos turnos; el lunes y el martes, solo el de mediodía:

| Días                  | Horario publicado          |
| --------------------- | -------------------------- |
| Miércoles             | 13:30 – 16:30 · 20:30 – 23:30 |
| Jueves y viernes      | 13:30 – 16:00 · 20:30 – 23:30 |
| Sábado                | 13:30 – 16:30 · 20:30 – 23:30 |
| Lunes                 | 13:30 – 17:00              |
| Martes                | 13:30 – 16:30              |
| Domingo               | Cerrado                    |

El lunes 12, Fiesta Nacional de España, aparece con un horario propio y el aviso de que «el horario podría ser diferente».

### Accesibilidad

La ficha solo publica el grupo «Accesibilidad»: **acceso, aseo y asientos adaptados** para sillas de ruedas están disponibles, y el **aparcamiento adaptado**, no. Es lo único que se afirma en la web.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**:

1. «Croquetas de gamba roja buenísimas, entrecot de vaca vieja de calidad.» (5 sobre 5)
2. «Cerveza fresquita tapas buenas y buen trato muy amables» (3 sobre 5)
3. «Buen servicio, buena calidad, si volvemos a Jaén os visitaremos otra vez.» (5 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-discovery   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-discovery
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto quedó **sin autora** (`author` vacío): no se atribuyen a nadie ni se pone pie.
- Todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada que abre la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-discovery
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt`: ninguna trae pie de Google.
3. Confirmar con el restaurante si los turnos de la ficha (sobre todo el mediodía del lunes y el martes, y el cierre del domingo) se mantienen todo el año.
4. Si el dominio final no es `restaurante-discovery.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
