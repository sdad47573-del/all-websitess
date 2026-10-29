# Rico Pan — Poniente Norte, Córdoba

Web estática en Astro para **Rico Pan**, en la calle María la Talegona, 1 (Poniente Norte, 14005 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la foto descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

No hay sección de galería: el perfil de Google solo tiene una foto, así que se usa en la portada y en `og.jpg`.

## Datos de la ficha de Google Maps

- Nombre: Rico Pan
- Dirección: Calle María la Talegona, 1 · Poniente Norte · 14005 Córdoba
- Categoría: panadería
- Valoración: 4,3/5 con 12 reseñas
- Teléfono: 957 46 31 51
- Horario: abierto 24 horas todos los días
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento accesible
- Feature id: `0xd6cd8abed81bec1:0xf07d0d66cf0c208a`
- Place ID: `ChIJwb6B7avYbA0RiiAMz2YNffA`

La ficha **no publica descripción, web propia, correo, redes, carta, precios, métodos de pago ni reparto**. El surtido sale de la única foto del perfil (vitrina con tartas, donuts, rosquitos, ensaimadas y palmeras, con etiquetas de precio) y de las dos reseñas publicadas («buen pan y muy buenos pasteles», «buena panadería y pastelería»).

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs rico-pan
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió una sola foto (la vitrina), que se usa en la portada, en la ficha del hero y en `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar el horario de 24 horas, el surtido y la accesibilidad con el establecimiento.
