# Cañadú Artesanos — Poniente Sur, Córdoba

Web estática en Astro para **Cañadú Artesanos**, panadería en la Plaza Cardenal Cisneros (Poniente Sur, 14005 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Cañadú Artesanos
- Dirección: Plaza Cardenal Cisneros, s/n · Poniente Sur · 14005 Córdoba
- Categoría: panadería
- Valoración: 4,7/5 con 102 reseñas
- Teléfono: 614 28 15 14
- Horario: lunes a viernes 8:00–15:00; sábado 8:30–14:30; domingo cerrado
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd6cdf5efe482ded:0x2063124898be8c42`
- Place ID: `ChIJ7S1I_l7fbA0RQoy-mEgSYyA`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El surtido del mostrador recoge lo que muestran las fotos del perfil (pan, donuts bañados, bollos rellenos de nata, tartas de nata y de fruta, tartas con dedicatoria) y lo que cuentan las reseñas, sin importes: los cartelitos de la vitrina llevan precios escritos a mano, pero cambian.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs canadu-artesanos
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió siete fotos: dos veces el mostrador con las vitrinas (una apaisada y otra panorámica), la vitrina con tartas y donuts, la bandeja de bollos rellenos de nata, dos tartas con dedicatoria y la fachada desde arriba. El mostrador se usa en la portada, y la vitrina, una de las tartas, los bollos y la fachada en la galería. El mostrador genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, encargos y accesibilidad con el establecimiento.
