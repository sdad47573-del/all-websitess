# Panadería el Vacar en Fátima — Levante, Córdoba

Web estática en Astro para **Panadería el Vacar en Fátima**, en la calle Guaraní, 8 (Levante, 14014 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería el Vacar en Fátima
- Dirección: Calle Guaraní, 8 · Levante · 14014 Córdoba
- Categoría: panadería
- Valoración: 4,5/5 con 406 reseñas
- Teléfono: 957 44 02 54
- Horario: lunes a viernes 7:30–15:00 y 17:00–21:00; sábado y domingo 8:00–15:00
- Accesibilidad: acceso para sillas de ruedas y aseo adaptado; sin aparcamiento accesible
- Feature id: `0xd6cdf9ead0596ff:0x8773455a6dad225f`
- Place ID: `ChIJ_5YFrZ7fbA0RXyKtbVpFc4c`

La ficha **no publica web propia, correo, redes, carta, precios, métodos de pago ni reparto**, pero sí una descripción larga del negocio: productos artesanos de la tierra, ibéricos de Fuente Obejuna, Zuheros, Villaviciosa y Espejo, pan de masa madre (integral, multsemillas, centeno, espelta, maíz), bollería con crema naranja y sabores Kinder y Nocilla, y cafetería. Las reseñas añaden los tostados, las tapitas y los dulces para merendar.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-el-vacar-en-fatima
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos. La fachada con el rótulo de «Maestros Panaderos desde 1862» se usa en la portada y, en la galería, la tienda con los panes y la vitrina de ibéricos, una tostada con tomate y jamón, la sala de la cafetería y un desayuno en la terraza. El desayuno genera `public/og.jpg` (1200 × 630). Las demás (la puerta, otra tostada, un interior más y la barra de café) quedan descargadas sin usar.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, cafetería y accesibilidad con el establecimiento.
