# La casita del pan — Sur, Córdoba

Web estática en Astro para **La casita del pan**, en el Pasaje Aguilar de la Frontera (Sur, 14013 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: La casita del pan
- Dirección: Pasaje Aguilar de la Frontera · Sur · 14013 Córdoba (la ficha no publica número)
- Categoría: panadería
- Valoración: 4,5/5 con 29 reseñas
- Teléfono: 647 93 88 10
- Horario: lunes a viernes 8:00–15:00 y 17:00–20:00; sábado y domingo 8:00–15:00
- Accesibilidad: acceso para sillas de ruedas; la ficha indica que no hay aparcamiento accesible
- Feature id: `0xd6d2163385c8733:0x34fee64f6a648a75`
- Place ID: `ChIJM4dcOGMhbQ0RdYpkak_m_jQ`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El surtido sale de la descripción que el propio negocio escribe en Google («pan del día y recién horneado. Dulces de pastelero y dulces finos. Tenemos tartas de cumpleaños por encargo y empanadas»), de las fotos del perfil (vitrina, donuts, napolitanas, barras de pan) y de las reseñas (trato, desayuno y una queja por las pastas saladas congeladas).

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs la-casita-del-pan
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos. La fachada con la terraza se usa en la portada y, en la galería, la vitrina, el interior rosa, las barras de pan y las napolitanas. La fachada genera `public/og.jpg` (1200 × 630). Las demás (otra vista de la fachada, donuts y hojaldres de chocolate) quedan descargadas sin usar.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, encargos de tartas y empanadas, y accesibilidad con el establecimiento.
