# Panadería La Campiña — Centro, Córdoba

Web estática en Astro para **Panadería La Campiña**, en la Plaza del Realejo (Centro, 14002 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panaderia La Campiña (en la web, «Panadería La Campiña»)
- Dirección: Plaza del Realejo, s/n · Centro · 14002 Córdoba
- Categoría: panadería
- Descripción de la ficha: «25 clases de pan, amplia oferta de bollería, pastelería y empanadas.»
- Valoración: 4,3/5 con 136 reseñas
- Teléfono: 957 57 66 65
- Horario: lunes a viernes 8:00–20:00; sábado y domingo 8:00–16:00
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd6cdf7ed82e457f:0x7cc00c9026e2172`
- Place ID: `ChIJf0Uu2H7fbA0RciFuAskAzAc`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El mostrador recoge la descripción de la ficha y lo que cuentan las reseñas (tartas y dulces, miel y aceite), sin importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-la-campina
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos. No se usa ninguna en la que aparezca el rótulo «la cosecha» (la fachada y una vista del interior), porque no coincide con el nombre de la ficha; la portada usa la panorámica del interior y la galería, la bandeja de bollería, los hojaldres, una tarta de chocolate y el expositor de pan. La panorámica del interior genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
- Aclarar con el negocio si el rótulo «la cosecha» de las fotos del perfil es el anterior nombre del local.
