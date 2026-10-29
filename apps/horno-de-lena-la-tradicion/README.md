# Horno de Leña La Tradición — Poniente Sur, Córdoba

Web estática en Astro para **Horno de Leña La Tradición**, en la Plaza de Vista Alegre, 4 (Poniente Sur, 14004 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Horno de Leña La Tradición
- Dirección: Plaza de Vista Alegre, 4 · Poniente Sur · 14004 Córdoba
- Categoría: panadería
- Valoración: 4,6/5 con 39 reseñas
- Teléfono: 644 20 48 73
- Horario: lunes a viernes 9:00–14:30 y 16:30–20:00; sábado 9:00–14:30; domingo cerrado
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd6d214afbf31a1b:0x79db72e6dc074d0e`
- Place ID: `ChIJGxrz-0ohbQ0RDk0H3OZy23k`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**.

El surtido sale del rótulo y los vinilos de la fachada («La Tradición · Horno de leña · Desde 1913», «masa madre», «harinas ecológicas», «pan de verdad»), de la carta de panes del obrador (masa madre de cultivo propio, fermentaciones de 20 a 48 horas, harinas eco de la campiña de Córdoba, panes de 1 kg y rotación por días) y de las reseñas (el pan, los molletes, la palmera de chocolate, las tartas).

Ojo con el horario: los carteles de la fachada marcan mañanas hasta las 13:30 y tardes de 16:00 a 19:30, mientras que la ficha de Google indica 14:30 y 20:00. La web usa el de Google y lo advierte en el apartado de horario y en las preguntas frecuentes.

El 1 de noviembre (Día de Todos los Santos) Google advierte además de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs horno-de-lena-la-tradicion
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la fachada, dos tartas, el mostrador con los panes, la vitrina de bollería, el escaparate, dos barras, la carta de panes y los carteles de horario. El mostrador se usa en la portada y la fachada, una tarta, la vitrina y las barras en la galería. El mostrador genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y encargos con el establecimiento.
