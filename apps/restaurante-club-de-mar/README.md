# Restaurante Club de Mar

Web informativa de **Restaurante Club de Mar** (en la ficha de Google aparece como *Restaurante Club de Mar / El Candelero (Almería)*), cocina mediterránea en la playa de las Almadrabillas, s/n, 04007 Almería.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del restaurante, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| --- | --- |
| Nombre de la ficha | Restaurante Club de Mar / El Candelero (Almería) |
| Nombre que usa la web | Restaurante Club de Mar (`alternateName: 'El Candelero'`) |
| Dirección | Playa de las Almadrabillas, s/n · 04007 Almería · Almería |
| Teléfono | +34 950 23 50 48 |
| Categorías de Google | Restaurante · Restaurante mediterráneo |
| Valoración | 4,3 sobre 5 con 1235 reseñas |
| Horario | Miércoles a sábado 13:30 – 16:00 y 20:30 – 23:30 · martes y domingo 13:30 – 16:00 · lunes 9:00 – 16:00 |
| Coordenadas | 36.8316437, -2.4603917 |
| Identificador del lugar | `ChIJwzDFPB12cA0R4CUxat597FY` |

Google titula la ficha con **dos nombres** («Restaurante Club de Mar / El Candelero») y le añade la ciudad entre paréntesis para desambiguarla. La web usa el primero —el que aparece en primer lugar—, recuerda el otro en el texto y en las preguntas frecuentes, y lo declara como `alternateName` en el JSON-LD. La aclaración de la ciudad no se reproduce: ya está en la dirección.

El número de reseñas se escribe **«1235 reseñas»**, sin separador de millar: es lo que recomienda la RAE para cuatro cifras, lo que muestra Google en español y lo que produce `toLocaleString('es-ES')` en el código (así el número no se escribe a mano en ninguna parte). La valoración sale de la misma forma, con coma decimal («4,3»).

Las reseñas que aparecen en la portada son extractos **literales** de las que Google destaca en la ficha («Cambio de gerencia buena comida y gran equipo de camareros» y «Buena cocina, buen servicio e inmejorables vistas»). No hay ninguna escrita ni retocada, ni siquiera su puntuación. Google destaca una tercera reseña de signo crítico («El solomillo del plato principal lo hicieron demasiado y estaba seco.») que **no se reproduce** por tratarse de una web informativa del propio establecimiento; se puede leer entera, junto al resto, en el enlace público a las reseñas que hay en la página. El criterio está anotado en el comentario de `reviews` en `src/data/site.ts`.

El restaurante **no publica carta, precios, web propia ni perfiles de redes sociales** en su ficha, así que la web no reproduce ni inventa ninguno de esos datos: el aviso de que no hay carta publicada está en «Las fotos» y en las preguntas frecuentes.

> El lunes de esa semana Google lo marcaba como Fiesta Nacional de España (12 de octubre de 2026) y le daba un horario distinto al del resto de días, de 9:00 a 16:00, con el aviso de que podía ser diferente. Como la ficha no aclara cuál es el horario habitual de los lunes, se publica ese valor tal cual **con la advertencia** en la tabla y en el texto, y se recomienda llamar para confirmarlo.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-club-de-mar   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-club-de-mar
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La portada de la galería trae **diez fotos**; **dos de ellas son fotogramas de vídeo** (`…-vertical-02.jpg` y `…-vertical-08.jpg`, miniaturas de vídeos de la ficha, no fotografías) y **no se publican**: se quedan en disco y en el manifiesto, pero fuera del código.
- **Se publican las ocho restantes**: tres en el collage del hero y las ocho en el mosaico de «Las fotos» (el hero reutiliza fotos del mosaico como avance). Al compararlas entre sí no hay dos iguales.
- **Ninguna de las ocho viene con pie de foto** en la ficha, así que su `alt` es solo el aviso genérico de que la foto sale de la ficha de Google Maps: están por revisar y describir.
- `public/og.jpg` (1200×630) es un recorte de una de las fotos publicadas.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-club-de-mar
```

`check-site-content` tiene que salir con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las ocho fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt` y su pie reales en `src/pages/index.astro`: ninguna trae pie de foto de Google.
3. Confirmar el horario —sobre todo el de los lunes— y los festivos por teléfono con el establecimiento.
4. Si el dominio final no es `club-de-mar-almeria.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
