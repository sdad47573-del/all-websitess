# La Tahona de Albolafia — Poniente Norte, Córdoba

Web estática en Astro para **La Tahona de Albolafia**, en la calle María la Talegona, 7 (Poniente Norte, 14005 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: La Tahona de Albolafia
- Dirección: calle María la Talegona, 7 · Poniente Norte · 14005 Córdoba
- Categorías: panadería y pastelería
- Valoración: 4,3/5 con 11 reseñas
- Teléfono: no publicado
- Horario: todos los días 8:30–15:30 y 17:00–21:00
- Accesibilidad: la ficha indica **no** hay acceso para sillas de ruedas, ni aparcamiento, aseo o asientos adaptados
- Feature id: `0xd6cd8abf43d055b:0x3b0e10c465d1b7fb`
- Place ID: `ChIJWwU99KvYbA0R-7fRZcQQDjs`

La ficha **no publica teléfono, web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El surtido sale de las fotos del perfil (palmeras bañadas de chocolate, bandejas de pasteles variados, tartas de nata, queso y fruta, hojaldres, tartas de cumpleaños, vitrina de chocolates) y de las reseñas (pan, dulces y trato).

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs la-tahona-de-albolafia
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos, todas de la pastelería: cinco panorámicas de la vitrina, la bandeja de pasteles, la tarta de cumpleaños, la tarta de chocolate y la vitrina de chocolates. Una panorámica de la vitrina se usa en la portada y las otras cuatro fotos en la galería. La vitrina genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y encargos con el establecimiento. Si el negocio facilita teléfono, añadirlo en `src/data/site.ts`.
