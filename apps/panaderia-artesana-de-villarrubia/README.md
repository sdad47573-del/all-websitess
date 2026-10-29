# Panadería Artesana de Villarrubia — Córdoba

Web estática en Astro para la **Panadería Artesana de Villarrubia**, en la calle Guadalquivir, 1 (14710 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Artesana de Villarrubia
- Dirección: Calle Guadalquivir, 1 · 14710 Córdoba (Villarrubia)
- Categoría: panadería
- Valoración: 4,6/5 con 111 reseñas
- Teléfono: 957 32 71 71
- Horario: lunes 7:00–13:30; martes a viernes 7:00–1:30 de la madrugada; sábado 7:00–2:30 de la madrugada; domingo cerrado
- Accesibilidad: la ficha solo indica que no hay aparcamiento accesible; no publica datos del acceso, el aseo ni los asientos
- Feature id: `0xd6d2842869d265f:0xe87bf73c6dbc7886`
- Place ID: `ChIJXyadhkIobQ0Rhni8bTz3e-g`

La ficha **no publica carta, precios, métodos de pago ni reparto**, y no enlaza web propia ni redes (aunque el negocio tiene una web antigua en Jimdo y perfiles en Facebook e Instagram, que esta página no enlaza). El surtido sale de las fotos del perfil (cesta de panes, trenzas, mesa de panes en la calle, tartas de fruta, de bautizo, de cumpleaños y de corazón) y de las reseñas («las mejores tortas de aceite, recortes, empanadas...», «buen pan y buenos dulces y buena atención», tarta de cumpleaños «muy buena calidad/precio»).

El horario es el publicado en Google, con cierres de madrugada: los tramos de 1:30 y 2:30 son ya del día siguiente.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-artesana-de-villarrubia
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos. La cesta de panes se usa en la portada y, en la galería, la mesa de panes de la calle, las trenzas, una tarta de cumpleaños de Star Wars y una tarta de corazón. La cesta genera `public/og.jpg` (1200 × 630). Las demás (tarta de fruta, tarta de bautizo, mesa de productos, panes trenzados y otra tarta de fruta) quedan descargadas sin usar.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario (sobre todo los cierres de madrugada), surtido, encargos de tartas y accesibilidad con el establecimiento.
