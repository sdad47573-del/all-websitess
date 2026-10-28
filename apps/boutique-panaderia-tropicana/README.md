# Boutique de La Panadería Tropicana Pastelería — Bailén-Miraflores, Málaga

Web estática en Astro para **Boutique de La Panadería Tropicana Pastelería**, en Bailén-Miraflores (29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Boutique de La Panadería Tropicana Pastelería
- Zona: Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Valoración: 4,4/5 con 63 reseñas
- Horario: todos los días 7:30–20:30
- Accesibilidad: acceso para sillas de ruedas y aparcamiento adaptado
- Feature id: `0xd72f70b7231039d:0x3d9fbdf07cb6585d`
- Place ID: `ChIJnQMxcgv3cg0RXVi2fPC9nz0`

La ficha **no publica la calle ni el número, ni teléfono, web propia, correo, redes sociales, carta o precios**, y no indica métodos de pago ni reparto. Por eso la web no muestra teléfono: las llamadas a la acción llevan a Google Maps. El mostrador recoge lo que muestran las fotos del perfil (napolitanas de chocolate, palmeras, dulces de nata, una pieza con etiqueta «Kinder», vitrinas con pan y dulces, estanterías con productos envasados y aperitivos) y lo que cuentan las reseñas, sin importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs boutique-panaderia-tropicana
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió cuatro fotos: la bandeja de bollería, el interior con las vitrinas, la fachada y la esquina del edificio. La bandeja se usa en la portada, y la fachada, el interior y el edificio en la galería. La bandeja genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
- Si el negocio facilita teléfono y calle, añadirlos en `src/data/site.ts`.
