# Restaurante Alameda

Web informativa del **Restaurante Alameda**, restaurante mediterráneo en la **Cl. Adarves Bajos, 20 · 23001 Jaén**, con teléfono 953 24 36 40.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante Alameda                      |
| Dirección               | Cl. Adarves Bajos, 20 · 23001 Jaén       |
| Teléfono                | +34 953 24 36 40                         |
| Categorías de Google    | Restaurante · Restaurante mediterráneo   |
| Valoración              | 4,5 sobre 5 con 213 reseñas              |
| Horario                 | Comidas de martes a domingo · cenas de martes a sábado (no miércoles) · cierra lunes |
| Coordenadas             | 37.766275, -3.7845593                    |
| Plus code               | Q688+G5 Jaén                             |
| Identificador del lugar | `ChIJL3gAgPotyLMRS9uSxGTL45M`            |
| Identificador de canal  | `/g/11c5j6vq1r`                          |

El número de reseñas se escribe **«213 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Web, redes, carta y precios.** La ficha no publica web propia, ni perfiles de redes sociales, ni carta, ni precios, ni rango de precios, así que no se reproduce ni se enlaza nada de eso y el `Restaurant` de los datos estructurados **no lleva `priceRange` ni `sameAs`**.

**`servesCuisine`.** Sale de las categorías que publica Google («Restaurante» y «Restaurante mediterráneo») y se publica como **«Mediterránea»**. No se declara ninguna otra cocina.

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y marca el lunes como día de cierre. El turno de mediodía (12:30 – 17:00) se publica todos los días abiertos; el de noche (20:30 – 23:30) solo el martes, el jueves, el viernes y el sábado:

| Días                       | Horario publicado           |
| -------------------------- | --------------------------- |
| Martes, jueves y viernes   | 12:30 – 17:00 · 20:30 – 23:30 |
| Sábado                     | 12:30 – 17:00 · 20:30 – 23:30 |
| Miércoles y domingo        | 12:30 – 17:00               |
| Lunes                      | Cerrado                     |

El lunes 12, Fiesta Nacional de España, aparece cerrado con el aviso de que «el horario podría ser diferente».

### Accesibilidad

La ficha solo publica el grupo «Accesibilidad»: **acceso, aseo y asientos adaptados** para sillas de ruedas están disponibles, y el **aparcamiento adaptado**, no. Es lo único que se afirma en la web.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**:

1. «Buena comida, buen servicio y buena carta de vinos a un precio razonable» (5 sobre 5)
2. «Todo muy bueno y los camareros muy atentos y educados.» (5 sobre 5)
3. «Tiene carta de vinos con buenos precios y buen vino.» (4 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-alameda   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-alameda
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto las atribuye a la cuenta del restaurante (**«Restaurante Alameda»**), así que cada foto se publica con ese pie y con el `alt` que avisa de su origen.
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada que abre la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-alameda
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar con el restaurante los turnos publicados: el miércoles y el domingo solo aparecen con mediodía y el lunes figura cerrado.
4. Si el dominio final no es `restaurante-alameda.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
