# La tahona de Carmen — Centro, Córdoba

Web estática en Astro para **La tahona de Carmen**, en la calle Eugenio d'Ors (Centro, 14007 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: La tahona de Carmen
- Dirección: Calle Eugenio d'Ors · Centro · 14007 Córdoba (la ficha no publica número)
- Categoría: panadería
- Valoración: 4,6/5 con 102 reseñas
- Teléfono: 957 94 67 49
- Horario: lunes a viernes 8:00–14:30; sábado y domingo 8:30–14:00
- Accesibilidad: acceso para sillas de ruedas; la ficha indica que no hay aparcamiento accesible
- Feature id: `0xd6cdfe085774dbb:0x7b5bc1f3256eeb5a`
- Place ID: `ChIJu013heDfbA0RWutuJfPBW3s`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago ni reparto**. El surtido sale de las fotos del perfil (sala con mesas, vitrinas de bollería, cartel de «OBRADOR ARTESANO», desayunos, pan de aceite, vitrina de objetos antiguos) y de las reseñas («pan artesanal, estupenda bollería y dulces», «el camarero muy agradable y el desayuno muy rico», «pan magnifico, el personal amable y cercanos»).

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs la-tahona-de-carmen
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió ocho fotos. El interior con el rótulo «OBRADOR ARTESANO» se usa en la portada y, en la galería, la sala junto al ventanal, la vitrina de objetos antiguos, un desayuno con tostada y café, y un pan de aceite. El interior genera `public/og.jpg` (1200 × 630). Las demás (otra vista de la sala, un café solo y una tostada con manteca) quedan descargadas sin usar.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, desayunos y accesibilidad con el establecimiento.
