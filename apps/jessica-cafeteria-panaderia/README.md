# Jessica Cafetería Panadería — Centro, Córdoba

Web estática en Astro para **Jessica Cafetería Panadería**, en el distrito Centro de Córdoba (14004). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Jessica Cafetería Panadería
- Dirección: **solo Centro · 14004 Córdoba**; la ficha no publica calle ni número
- Categoría: panadería
- Valoración: 4,4/5 con 102 reseñas
- Teléfono: **no publicado en la ficha**
- Horario: lunes a sábado 7:00–15:00; domingo cerrado
- Accesibilidad: la ficha no publica ningún dato
- Feature id: `0xd6d209eaf72f353:0x2a2e3ce1c2b43ec6`
- Place ID: `ChIJU_Nyr54gbQ0Rxj60wuE8Lio`

La ficha **no publica calle ni número, teléfono, descripción, web propia, correo, redes, carta, precios, métodos de pago ni reparto**. Por eso las llamadas a la acción llevan a Google Maps en vez de a un teléfono, y el aviso legal deja constancia de los datos que faltan.

El surtido sale de las fotos del perfil (desayunos con tostadas y molletes de tomate, aceite, jamón, café con leche) y de las reseñas («buen sitio para desayunar y buen aceite para las tostadas», «media de jamón York con mantequilla y una Coca-Cola, 2,80 €», «los dueños, una pareja joven, son muy cordiales»).

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs jessica-cafeteria-panaderia
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos. El desayuno con café, tostadas, aceite y jamón se usa en la portada y, en la galería, la fachada, los molletes, la mesa y un café con leche. Ese desayuno genera `public/og.jpg` (1200 × 630).

No se usan las fotos en las que salen personas identificables (el grupo del mural de Coca-Cola y una clienta en la mesa), ni las que muestran los carteles de ofertas con precios.

## Pendiente antes de publicar

- NIF/CIF, razón social, **dirección completa y teléfono** en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
