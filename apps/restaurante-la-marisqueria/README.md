# Restaurante La Marisqueria

Web informativa del **Restaurante La Marisqueria**, restaurante en la **Calle Sagrado Corazón de Jesús, 6 · 23005 Jaén**, con teléfono 953 27 14 14.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, categorías, descripción del titular, distintivo, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Restaurante La Marisqueria               |
| Dirección               | Calle Sagrado Corazón de Jesús, 6 · 23005 Jaén |
| Teléfono                | +34 953 27 14 14                         |
| Categorías de Google    | Restaurante · Restaurante mediterráneo   |
| Distintivo de la ficha  | Brunch                                   |
| Valoración              | 4,3 sobre 5 con 1007 reseñas             |
| Horario                 | Martes a sábado: 13:00–18:00 y 20:00–24:00; domingo: 13:00–17:00; lunes cerrado |
| Coordenadas             | 37.7757761, -3.7990144                   |
| Plus code               | Q6G2+89 Jaén                             |
| Identificador del lugar | `ChIJcwtkNhHXbQ0Rs7QDJUOC9IA`            |
| Identificador de canal  | `/g/1trszc0s`                            |
| Feature id              | `0xd6dd71136640b73:0x80f482432503b4b3`   |

El número de reseñas y la valoración se escriben con `toLocaleString('es-ES')` en el código, sin escribirlos a mano en la plantilla. Ojo: en es-ES `toLocaleString` **no agrupa los números de cuatro cifras**, así que 1007 sale «1007» y no «1.007».

**El nombre va sin tilde y la descripción con ella.** La ficha publica el nombre como «Restaurante La Marisqueria», sin tilde en «Marisqueria». La descripción del titular, en cambio, escribe «La Marisquería». Se respetan **las dos formas** tal como aparecen y no se unifican: el nombre en `business.name` y el texto del negocio en `descripcionLocal`, literal.

**La dirección abrevia.** Google publica «C. Sagrado Corazón de Jesús, 6»; aquí se desarrolla a **Calle Sagrado Corazón de Jesús, 6**, como en la mayoría de las webs del repositorio. El número de portal (6), el código postal 23005 y el municipio se publican tal cual.

### La descripción del titular

Es la diferencia principal de esta ficha: **sí publica descripción del local**, cosa que no ocurre en la mayoría de las webs del repositorio. Se reproduce **literal**, sin corregir su puntuación ni su redacción, y va enmarcada en la portada con el rótulo «Según la ficha de Google Maps», para que se vea que es texto del negocio y no de esta web:

> Restaurante La Marisquería, en Jaén. Especializados en ricos y deliciosos platos de pescados y mariscos, paellas, caldosos. Ven y disfruta de las exquisitas especialidades de la casa, que te harán repetir.

### Categorías y `servesCuisine`

La ficha publica **dos categorías**: «Restaurante» (la principal) y «Restaurante mediterráneo». La segunda sí declara una cocina, así que se traduce a `servesCuisine: ['Mediterránea']` en los datos estructurados, que es lo que hacen las demás webs del repositorio con esa misma pareja de categorías (por ejemplo `restaurante-alameda` y `restaurante-casa-daoiz`). No se declara ninguna cocina más, y el `@type` es `Restaurant`, el del resto de webs.

### El horario

La consulta cubre **del viernes 9 al jueves 15 de octubre de 2026** y el local cierra el **lunes**:

| Días            | Horario publicado             |
| --------------- | ----------------------------- |
| Martes a sábado | 13:00 – 18:00 · 20:00 – 24:00 |
| Domingo         | 13:00 – 17:00                 |
| Lunes           | Cerrado                       |

- Son **dos turnos**, con una pausa de dos horas entre el mediodía y la cena (de 18:00 a 20:00).
- El cierre a las **24:00** es la medianoche del día siguiente; en los datos estructurados se escribe como `closes: '00:00'`.
- El domingo abre **solo el mediodía y termina a las 17:00**, una hora antes que entre semana.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el lunes cerrado no genera ninguna entrada y los cinco días de dos turnos generan dos cada uno (**11 especificaciones** en total).
- El lunes 12 trae el aviso de Google de que «el horario podría ser diferente» por ser la **Fiesta Nacional de España**, pero ese día la ficha ya lo da cerrado, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas** figuran como disponibles, y el **aparcamiento adaptado** como no disponible.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación: dos de 5 sobre 5 y una de 4 sobre 5. Google devuelve cada reseña envuelta en comillas rectas; aquí se quitan porque son el delimitador del propio campo y no forman parte del texto.

1. «Buen trato, buena cocina, buen marisco y muy buen pescadito frito.» (5/5)
2. «Rápidos atentos ,buena comida de calidad y cerveza fresquita...» (4/5) — se conservan el espacio antes de la coma y los puntos suspensivos finales
3. «Volveré para probar el arroz que es por encargo y me he quedado con las ganas.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-marisqueria   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-la-marisqueria
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis apaisadas (01, 04, 06, 07, 09 y 10 —la 06 es la de menor resolución, 1250 px), tres verticales (02, 03 y 08) y una casi cuadrada (05, que el script nombra `vista-5-05` porque su proporción queda entre el apaisado y el vertical). La galería va en tres columnas con el ancho natural de cada foto.
- El manifiesto de la descarga deja el campo `author` **vacío** en las diez, así que no hay a quién atribuirlas y el pie de cada foto dice solo de dónde salen: «Foto de la ficha de Google Maps».
- El collage de portada usa la apaisada **07** (la de más resolución) arriba, en el hueco ancho 16/9, y las verticales **02** y **08** en los dos huecos estrechos 4/5; las tres están también en la galería.
- Tras optimizar, el total baja de **6,4 MB a 2,09 MB**; los `bytes` del manifiesto se actualizaron con el tamaño real de cada fichero (el optimizador no los reescribe).
- El manifiesto guarda las **medidas que publica Google** (hasta 8160 × 6144 en la apaisada 07), no las del fichero ya reducido, que como máximo tiene 1600 px de ancho. Es el mismo criterio que el resto del repositorio.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **10** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-marisqueria
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Confirmar el horario con el titular (los dos turnos, el cierre a medianoche, el domingo hasta las 17:00 y el cierre del lunes) antes de darlo por definitivo.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe y el manifiesto no atribuye autoría.
4. Si el dominio final no es `restaurante-la-marisqueria.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
