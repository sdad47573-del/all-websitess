# Arte Pan — Poniente Sur, Córdoba

Web estática en Astro para **Arte Pan**, panadería y café en la Avenida del Aeropuerto, 11 (Poniente Sur, 14004 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Arte Pan
- Dirección: Avenida del Aeropuerto, 11 · Poniente Sur · 14004 Córdoba
- Categoría: panadería
- Valoración: 4,6/5 con 21 reseñas
- Teléfono: no publicado
- Horario: lunes a viernes 8:00–20:00; sábado 9:00–14:30; domingo cerrado
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd6d20a1c7a5ec5f:0xc3905585da5d32a2`
- Place ID: `ChIJX-ylx6EgbQ0RojJd2oVVkMM`

La ficha **no publica teléfono, web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El surtido sale del rótulo de la fachada («Arte Pan · Café-Pan-Dulces-Bocadillos»), de la pizarra de la entrada (tostadas variadas, leche sin lactosa, pan sin gluten, pan de pasas y nueces, pan de limón, gofres, bocadillos), de los carteles (hamburguesa mixta, maxibaguettes) y de lo que cuentan las reseñas (caña con tapa, desayuno, mediodía).

Ojo con el horario: la pizarra de la fachada anuncia un «horario de invierno» que no coincide con el de la ficha de Google. La web usa el de Google y lo advierte en el apartado de horario y en las preguntas frecuentes.

El 1 de noviembre (Día de Todos los Santos) Google advierte además de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs arte-pan
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió cinco fotos, todas verticales: la fachada con el rótulo, el desayuno con tostadas y café, la esquina con la pizarra del horario, la pizarra del pan sin gluten y la terraza. La fachada se usa en la portada y las otras cuatro en la galería. La foto del desayuno genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar el horario real (ficha y pizarra no coinciden) y el surtido con el establecimiento.
