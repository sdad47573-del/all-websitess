# Panadería La Tahona — Panadería, Cruz de Humilladero (Málaga)

Web estática en Astro para **Panadería La Tahona**, panadería y pastelería artesanal en el C. de Alozaina, 19 (Cruz de Humilladero, 29006 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», galería con las fotos de Google Maps, valoración, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería La Tahona
- Dirección: C. de Alozaina, 19 · Cruz de Humilladero · 29006 Málaga
- Categoría: panadería
- Teléfono: 635 61 75 66
- Valoración: 4,7/5 con 45 reseñas
- Horario: L–S 7:30–14:30 · D 8:00–15:00
- Accesibilidad: la ficha no publica datos
- Plus code: 8C8QPH52+VF
- Feature id: `0xd72f77aa9803b3b:0xd41639583aa27567`
- Place ID: `ChIJOzuAqXr3cg0RZ3WiOlg5FtQ`
- Casa desde: 1986 (según la ficha)

La ficha **no publica web, redes sociales enlazadas, carta ni precios**, así que la web no los afirma. Describe la casa como panadería y pastelería artesanal con gran variedad de productos de elaboración propia. El horario es solo de mañana, sin turno de tarde.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla de horario y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-la-tahona
```

y viven en `src/assets/fotos/`. La ficha solo devolvió cinco fotos: las baguettes en la caja de madera con espigas de trigo, una hogaza de semillas vista desde arriba, dos panes pequeños con trigo sobre madera, una tarjeta de horario antigua y una tarjeta de redes sociales con el Instagram (@latahona1986), el Facebook (Latahona 1986) y el teléfono de la tienda. La página usa cuatro: las tres fotos de producto (la de la caja es el hero) y la tarjeta de redes. **La tarjeta de horario no se muestra** porque anuncia un turno de tarde que la ficha de Google ya no publica; la nota de la galería lo indica. La imagen de `public/og.jpg` (1200 × 630) sale de la hogaza con semillas.

Las fotos se muestran como información del establecimiento y se identifican como procedentes de Google Maps.

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
