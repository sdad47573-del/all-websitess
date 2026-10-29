# Panadería Horno La Molina — Levante, Córdoba

Web estática en Astro para **Panadería Horno La Molina**, en la Avenida del 28 de Febrero, 34 (Levante, 14007 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Horno La Molina
- Dirección: Avenida del 28 de Febrero, 34 · Levante · 14007 Córdoba
- Categoría: panadería
- Valoración: 4,5/5 con 322 reseñas
- Teléfono: 957 43 32 69
- Horario: todos los días 7:00–19:00
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd6cdf9afdc4dc45:0x51879f1250110b90`
- Place ID: `ChIJRdzE_ZrfbA0RkAsRUBKfh1E`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El surtido sale de las fotos del perfil (pan en cestas y bolsas, bollos, tartas de chocolate y nata, pasteles de yema y hojaldres, café con bollo y carta de smoothies naturales) y de las reseñas (obrador tradicional, pan de telera, trato).

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-horno-la-molina
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: el mostrador con los panes, la fachada, dos vitrinas, una tarta roja, una bandeja de bollos, un café con bollo, una tarta en vaso, la carta de smoothies y otra vista de la vitrina. El mostrador se usa en la portada y la fachada, la vitrina, las tartas, el café y la carta de smoothies en la galería. El mostrador genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, café y smoothies con el establecimiento.
