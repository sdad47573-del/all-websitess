# Hadavid Ortega y Gasset — Panadería en Málaga

Web estática en Astro para **Hadavid Ortega y Gasset**, Av. de José Ortega y Gasset, 111, Cruz de Humilladero, 29006 Málaga.

## Contenido

- Portada, información del establecimiento, fotos descargadas de la ficha de Google Maps, horario, mapa, preguntas frecuentes y crédito «Web creada por Sur Digital».
- `src/data/site.ts`: datos del local y enlaces a su ficha.
- `src/assets/fotos/`: cuatro imágenes descargadas de la galería pública de **esta ficha**, con su `.maps-manifest.json`.
- `public/og.jpg`: foto de la ficha adaptada a imagen para compartir de 1200 × 630.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies; falta introducir los datos fiscales del titular antes de publicar.

## Datos públicos de Google Maps

- Nombre: Hadavid Ortega y Gasset
- Dirección: Av. de José Ortega y Gasset, 111 · Cruz de Humilladero · 29006 Málaga
- Categoría: Panadería
- Teléfono: 632 94 79 21
- Reseñas: 22 (la ficha consultada no muestra una puntuación global)
- Horario publicado: lunes a viernes 8:30–21:00; sábado 8:30–15:00; domingo cerrado
- Feature ID: `0xd72f7ebdd73918d:0xe8fbff33099d69f7`
- Place ID: `ChIJjZFz3ev3cg0R92mdCTP_--g`

Se trata de la ficha de **Ortega y Gasset**, no de la sucursal de Teatinos. La ficha no ofrece página web, carta ni precios; la página no atribuye a esta sucursal productos concretos que las fotos disponibles no permiten verificar.

## Fotos

La ficha de Google Maps proporciona cuatro fotos descargables para esta ubicación. Las originales locales y su manifiesto están en `src/assets/fotos/`. Para volver a descargar la galería pública:

```sh
node scripts/fetch-maps-photos.mjs hadavid-ortega-y-gasset
```

## Pendiente antes de publicar

- Completar el NIF/CIF y la razón social en `src/pages/aviso-legal.astro`.
- Confirmar teléfono, horario y surtido con el establecimiento.
