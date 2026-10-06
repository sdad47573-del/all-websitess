# Restaurante La Masía

Web informativa de **Restaurante La Masía**, restaurante de cocina española y mediterránea en la calle Conde de Barcelona, 12, 04700 El Ejido (Almería).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Restaurante La Masía |
| Dirección | Calle Conde de Barcelona, 12 · 04700 El Ejido · Almería |
| Teléfono | +34 950 57 31 41 |
| Categorías de Google | Restaurante · Restaurante mediterráneo · Restaurante de cocina española |
| Valoración | 4,5 sobre 5 con 184 reseñas |
| Horario | Martes a jueves 12:00 – 17:00 · viernes y sábado 12:00 – 16:30 y 20:30 – 24:00 · domingo 12:00 – 16:30 · lunes cerrado |
| Coordenadas | 36.7736111, -2.8222222 |
| Identificador del lugar | `ChIJ4TLVzx5DcA0R2967Hf-onYM` |

Google escribe la dirección como «C. Conde de Barcelona, 12»: en la web se desarrolla la abreviatura a **«Calle»**, como en el resto de webs del repositorio.

El número de reseñas se escribe **«184 reseñas»** y la valoración con coma decimal («4,5»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. El `servesCuisine` del dato estructurado traduce las categorías que publica Google («Cocina española», «Cocina mediterránea»), sin añadir ninguna más.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca en la ficha («He comido pisto con huevo, costillas y la crema catalana super rica.», «Buena cocina, buen vino y un servicio excelente.» y «Comida excelente, carta variada, buen ambiente y excelente servicio.»). No hay ninguna escrita ni retocada y **ninguna de las tres es una queja**, así que se publican las tres.

El restaurante **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «Las fotos» y en las preguntas frecuentes. El pisto con huevo, las costillas o la crema catalana aparecen atribuidos a la reseña, no a una carta que no existe.

### Horario: el lunes festivo estaba cerrado

Es la única ficha del repositorio en la que **el día marcado como festivo nacional estaba además cerrado**: el lunes 12 de octubre de 2026 la ficha lo daba cerrado y con el aviso de que el horario podía ser diferente. Se publica cerrado **con la advertencia**, porque Google no aclara si ese cierre es el horario habitual de los lunes o solo el del festivo. La tabla muestra «Lunes — Cerrado» con la clase `is-closed`, y la advertencia va debajo.

> Las tres webs anteriores de esta serie tenían casos distintos con el mismo festivo: abierto con horario raro y aviso (Club de Mar, Sierra Alhamilla, La Pérgola, La Dorada) o abierto con el horario habitual (Braseria El Río).

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-masia   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-la-masia
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **una es un fotograma de vídeo** (`…-vertical-02.jpg`, 1080×1920) y **no se publica**: se queda en disco y en el manifiesto, pero fuera del código. Es la ficha del repositorio con **más fotos publicadas de la galería: nueve**, y con más fotos verticales (seis de las nueve).
- **Se publican las nueve restantes**: tres en el collage de la portada y las nueve en el mosaico de «Las fotos» (el hero reutiliza fotos del mosaico como avance). Al compararlas entre sí no hay dos iguales.
- **Ninguna lleva un pie utilizable.** Una lleva en la ficha el título «Restaurante la masia», que solo repite el nombre del negocio y no describe lo que se ve, así que no se usa como `alt`: todos los `alt` avisan solo de dónde salen las fotos. Es distinto de La Pérgola y de La Dorada, cuyos pies («Bacalao frito patatas caseras», «Ensalada mixta con atún») sí describían el plato.
- Google devolvió la ficha **sin fotos en los cinco primeros intentos**; a la sexta llegó completa. `fetch-maps-photos.mjs` reintenta solo, pero conviene volver a ejecutarlo si reporta «sin fotos en la respuesta».
- `public/og.jpg` (1200×630) es un recorte de una de las fotos publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-masia
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las nueve fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`: ninguna trae pie utilizable de Google.
3. Confirmar con el establecimiento si el cierre de los lunes es el horario habitual o solo el del festivo.
4. Si el dominio final no es `la-masia-elejido.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
