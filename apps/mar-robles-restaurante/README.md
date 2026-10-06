# Mar Robles Restaurante

Web informativa de **Mar Robles Restaurante**, bar de tapas, cafetería y restaurante vegetariano en la calle Estadio, 54, 04007 Almería.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Prata** (títulos) e **Inter** (texto), no usadas todavía en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre | Mar Robles Restaurante |
| Dirección | Calle Estadio, 54 · 04007 Almería |
| Teléfono | +34 950 24 02 48 |
| Categorías de Google | Bar de tapas · Cafetería · Restaurante vegetariano |
| Valoración | 4,4 sobre 5 con 1991 reseñas |
| Horario | Lunes a domingo 8:00 – 16:00 (martes cerrado) · cenas de 20:00 a 24:00 de miércoles a domingo |
| Coordenadas | 36.8291264, -2.4492861 |
| Identificador del lugar | `ChIJBQr9Se6deg0RJwZ1N97Uj2w` |

El número de reseñas se escribe **«1991 reseñas»** (sin separador de millar, como el resto del repositorio) y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. El `servesCuisine` del dato estructurado traduce las tres categorías que publica Google («Tapas», «Cafetería», «Cocina vegetariana»), sin añadir ninguna más: «Cafetería» no es un tipo de cocina, pero se conserva porque es lo que publica la ficha.

Las reseñas que aparecen en la portada son extractos **literales** de las tres que Google destaca, sin retocar nada (la primera va sin punto final, tal cual la publica Google): «Buen sitio para tapear, buen ambiente y muy atentos los camareros, recomendable», «Variedad en pescado del día y suelen tener tapas de olla o arroz a mediodía.» y «Buenísimo el secreto a baja temperatura con salsa de la naranja y mostaza.». **Ninguna es una queja**, así que se publican las tres. Los platos y detalles que nombran aparecen atribuidos a las reseñas: la ficha **no publica carta, precios, web propia ni perfiles de redes sociales**.

### La dirección y el municipio

Google escribe la dirección como «**C. Estadio, 54**, 04007 **Almería**»: en la web se desarrolla la abreviatura a **«Calle»**, como en el resto del repositorio. El municipio y la provincia son Almería, y esta vez la ficha sí publica el municipio (no hay pedanía ni provincia en el hueco del municipio, como sí ocurría con Benecid o Sierra Alhamilla), así que no hubo nada que comprobar ni corregir.

### Horario: mañana todos los días y cena cuatro días

Abre de **8:00 a 16:00 todos los días menos el martes**, que cierra, y añade **cena de 20:00 a 24:00 de miércoles a domingo**. El lunes es el único día con solo turno de mañana. El lunes 12 de octubre de 2026, Fiesta Nacional de España, la ficha lo marcaba **abierto con su horario habitual** y solo añadía el aviso de que podía ser diferente, así que se publica abierto con la advertencia debajo de la tabla.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs mar-robles-restaurante   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 mar-robles-restaurante
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos son fotogramas de vídeo** (`…-cuadrada-02.jpg`, 1:1, y `…-vertical-08.jpg`, 9:16) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código.
- **Se publican las ocho restantes**: tres en el collage de la portada y las ocho en el mosaico de «Las fotos».
- **Ninguna lleva pie ni descripción** (`cap=null` en las diez): el autor que anota la ficha repite el nombre del negocio, así que no sirve como descripción. Todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- Comparadas entre sí con una huella gris de 16×16, **no hay dos iguales** (0 parejas sospechosas).
- `public/og.jpg` (1200×630) es un recorte de una de las apaisadas publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs mar-robles-restaurante
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las ocho fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt`: ninguna trae pie de Google.
3. Confirmar con el establecimiento el cierre del martes, el horario de los festivos (incluido el lunes 12 de octubre) y hasta qué hora sirve cocina por la noche.
4. Concretar la oferta vegetariana con el titular si quiere detallarla: ahora solo se recoge la categoría «Restaurante vegetariano» que publica Google, sin platos.
5. Si el dominio final no es `mar-robles-almeria.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
