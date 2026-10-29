# Tres Hileras — Poniente Sur, Córdoba

Web estática en Astro para **Tres Hileras**, en la calle Manuel Cano «El Pireo», 1 (Poniente Sur, 14005 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Tres Hileras
- Dirección: Calle Manuel Cano «El Pireo», 1 · Poniente Sur · 14005 Córdoba
- Categorías: panadería, cafetería y pastelería
- Valoración: 4,2/5 con 246 reseñas
- Teléfono: 957 91 47 89
- Horario: lunes a viernes 7:30–20:30; sábado y domingo 8:30–20:30 (sin cierre a mediodía)
- Accesibilidad: acceso, aseo y asientos adaptados para sillas de ruedas; sin aparcamiento accesible
- Feature id: `0xd6d210006db27a3:0xfcdaf6cf46ecfb50`
- Place ID: `ChIJoyfbBgAhbQ0RUPvsRs_22vw`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El surtido sale de la descripción del negocio («Panadería Artesanal, Pastelería Artesanal y Cafetería con amplia terraza»), de las fotos del perfil (estanterías de panes con carteles, vitrina de bollería, mostrador de pastelería y terraza) y de las reseñas («deliciosos y variados panes artesanales», «pasamos ayer a desayunar y nos llevamos una grata sorpresa», y una queja por 50 minutos sin ser atendida).

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs tres-hileras
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos. La fachada esquinera con el rótulo se usa en la portada y, en la galería, las estanterías de pan, la bollería, el mostrador de pastelería y la terraza. La bandeja de croissants genera `public/og.jpg` (1200 × 630), recortada para no mostrar los carteles de precios. Las demás (café con nata, mesa con tartas, terraza con tostada) quedan descargadas sin usar.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, terraza y accesibilidad con el establecimiento.
