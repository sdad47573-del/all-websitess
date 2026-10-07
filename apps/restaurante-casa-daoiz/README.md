# Restaurante Casa Daoíz

Web informativa del **Restaurante Casa Daoíz**, restaurante mediterráneo en la **C. Prof. Alfonso Sancho Sáez, 16 · 23006 Jaén**, con teléfono 953 04 08 85.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                       |
| ----------------------- | ----------------------------------------------------- |
| Nombre                  | Restaurante Casa Daoíz                                |
| Dirección               | C. Prof. Alfonso Sancho Sáez, 16 · 23006 Jaén         |
| Teléfono                | +34 953 04 08 85                                      |
| Categorías de Google    | Restaurante · Restaurante mediterráneo                |
| Valoración              | 4,5 sobre 5 con 725 reseñas                           |
| Horario                 | Comidas y cenas de miércoles a sábado · cierra lunes y martes |
| Coordenadas             | 37.7796175, -3.7939924                                |
| Plus code               | Q6H4+RC Jaén                                          |
| Identificador del lugar | `ChIJichfkA_XbQ0R0iwZvkOxLsE`                         |
| Identificador de canal  | `/g/11c1wmsgtw`                                       |

El número de reseñas se escribe **«725 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Web, carta y precios.** La ficha no publica web propia, ni carta, ni precios, ni rango de precios, así que no se reproduce ninguno y el `Restaurant` de los datos estructurados **no lleva `priceRange`**. Sí está publicada la página de Facebook del propio restaurante (`casadaoiz`), que se enlaza tal cual.

**`servesCuisine`.** Sale de las categorías que publica Google («Restaurante» y «Restaurante mediterráneo») y se publica como **«Mediterránea»**. No se declara ninguna otra cocina.

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y marca el lunes y el martes como días de cierre. De miércoles a sábado la ficha publica dos turnos; el domingo, solo el de mediodía:

| Días                | Horario publicado                 |
| ------------------- | --------------------------------- |
| Miércoles a sábado  | 12:30 – 17:00 · 20:00 – 24:00     |
| Domingo             | 12:00 – 17:00                     |
| Lunes               | Cerrado                           |
| Martes              | Cerrado                           |

En los datos estructurados el cierre de medianoche se escribe como `00:00`. El lunes 12, Fiesta Nacional de España, aparece cerrado con el aviso de que «el horario podría ser diferente».

### Accesibilidad

La ficha solo publica el grupo «Accesibilidad», con tres servicios confirmados: **acceso, aseo y asientos adaptados** para sillas de ruedas. Del aparcamiento no publica nada, así que la web no afirma nada al respecto.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**:

1. «Recomendamos la ensalada templada de bacalao, boquerones fritos y solomillo.» (5 sobre 5)
2. «Las raciones un poco escasas pero muy rico todo y muy buen trato» (5 sobre 5)
3. «Buen trato, buen clima, buen tape, buena comida y buena relación calidad-precio.» (4 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-casa-daoiz   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-casa-daoiz
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto las atribuye a la cuenta del restaurante (**«Restaurante Casa Daoíz»**), así que cada foto se publica con ese pie y con el `alt` que avisa de su origen.
- `public/og.jpg` (1200×630) es un recorte centrado de la foto panorámica de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-casa-daoiz
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar con el restaurante los turnos publicados (sobre todo el cierre de lunes y martes) y si la cena de miércoles a sábado se mantiene hasta medianoche todo el año.
4. Si el dominio final no es `restaurante-casa-daoiz.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
