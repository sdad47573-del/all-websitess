# Hadavid Teatinos — Panadería de harinas en Málaga

Web estática en Astro para **Hadavid Teatinos**, en la calle Franz Kafka, 15 (Teatinos-Universidad, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Hadavid Teatinos
- Dirección: C. Franz Kafka, 15 · Teatinos-Universidad · 29010 Málaga
- Categoría: panadería
- Teléfono: 672 53 37 79
- Valoración: 4,8/5 con 453 reseñas
- Horario: L–V 8:30–21:00 · S 8:30–15:00 · D cerrado
- Accesibilidad: acceso para sillas de ruedas
- Descripción de la ficha: «Panadería Pastelería especializada en diferentes tipos de harinas»
- Feature id: `0xd72f73eec18521b:0x57baf005d7a13ddb`
- Place ID: `ChIJG1IY7D73cg0R2z2h1wXwulc`

La ficha **no publica carta, precios, web propia, correo ni redes sociales**, y no indica métodos de pago ni reparto. El mostrador recoge lo que muestran las fotos del perfil y lo que cuentan las reseñas, sin importes. Los nombres de los panes salen de los carteles de la vitrina: malta con centeno y linaza, sarraceno con jengibre y cúrcuma, sarraceno con calabaza hervida y sarraceno con arroz.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs hadavid-teatinos
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la fachada, la vitrina de dulces, un pan de molde cortado, tartas y dulces, los panes etiquetados por harina, un surtido de dulces, la vitrina de tartaletas, una rosca glaseada y panes en bolsas. Se usan siete: la fachada en la portada y seis en la galería (vitrina, panes etiquetados, tartas, rosca, surtido de dulces y tartaletas). La fachada genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
- Si el negocio facilita su web o redes, añadirlas en `src/data/site.ts` y en la ficha.
