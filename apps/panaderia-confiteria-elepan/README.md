# Panadería - confitería Elepan — Palma-Palmilla, Málaga

Web estática en Astro para **Panadería - confitería Elepan**, en la calle la Defensa, 4 (Palma-Palmilla, 29011 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería - confitería Elepan
- Dirección: C. la Defensa, 4 · Palma-Palmilla · 29011 Málaga
- Categoría: panadería
- Teléfono: 627 84 42 51
- Valoración: 4,2/5 con 65 reseñas
- Horario: L–J 8:00–15:00 y 17:00–20:30 · V, S y D 8:00–15:00
- Accesibilidad: aparcamiento adaptado para sillas de ruedas
- Feature id: `0xd72f7a8f18282ad:0xf91e36da507b8e20`
- Place ID: `ChIJrYKC8aj3cg0RII57UNo2Hvk`

La ficha **no publica descripción, carta, precios, web propia, correo ni redes sociales**, y no indica métodos de pago ni reparto. El mostrador recoge lo que muestran las fotos del perfil y lo que cuentan las reseñas: pan, napolitanas, brazos de gitano, pasteles de nata, roscones de Reyes, troncos de Navidad, tartas heladas y estanterías con vinos, conservas, dulces, aperitivos y helados. Algunos carteles de las fotos llevan precio, pero no se reproduce ninguno.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-confiteria-elepan
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la fachada, los roscones, la vitrina de pasteles, el interior de la tienda, tartas de Navidad, la fachada desde la calle, un tronco de Navidad, la estantería de productos y dos troncos más. Se usan siete: la fachada en la portada y seis en la galería (roscones, vitrina, tienda, tarta de Navidad, tronco y estanterías). La fachada genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
