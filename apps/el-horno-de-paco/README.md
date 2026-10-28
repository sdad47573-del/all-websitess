# El Horno de Paco — Panadería y Pastelería Artesanal, Málaga

Web estática en Astro para **El Horno de Paco – Panadería y Pastelería Artesanal**, en la calle Santa Marta, 7 (Carretera de Cádiz, 29006 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, una reseña, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: El Horno de Paco – Panadería y Pastelería Artesanal Málaga
- Dirección: C. Sta. Marta, 7 · Carretera de Cádiz · 29006 Málaga
- Categorías: panadería, pastelería y tienda de tartas
- Teléfono: 607 82 42 51
- Valoración: 5/5 con 857 reseñas
- Horario: L–S 8:00–14:30 · D cerrado
- Accesibilidad: acceso para sillas de ruedas sí
- Feature id: `0xd72f74097c42de7:0xacb697bf82dbf764`
- Place ID: `ChIJ5y3El0D3cg0RZPfbgr-Xtqw`

La ficha **no publica carta, precios, web propia, correo ni métodos de pago**. El mostrador recoge solo lo que muestran las fotos del perfil (tartas de queso enteras y porciones, mini tartas, tartas decoradas y brownie de chocolate con pistacho) y lo que indican las categorías de Google. No se muestran importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs el-horno-de-paco
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió tres fotos: el mostrador de tartas, una plancha de brownie de chocolate y pistacho, y una vitrina con tartas decoradas. El mostrador se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
