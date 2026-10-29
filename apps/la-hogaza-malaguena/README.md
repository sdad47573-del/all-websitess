# LA HOGAZA MALAGUEÑA — Carretera de Cádiz, Málaga

Web estática en Astro para **LA HOGAZA MALAGUEÑA**, en la calle Muñoz Degraín, 4 (Carretera de Cádiz, 29002 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: LA HOGAZA MALAGUEÑA
- Dirección: C. Muñoz Degraín, 4 · Carretera de Cádiz · 29002 Málaga
- Categorías: panadería, pastelería y tienda de tartas
- Valoración: 4,5/5 con 45 reseñas
- Horario: todos los días 7:00–15:00
- Accesibilidad: acceso para sillas de ruedas
- Feature id: `0xd72f783dcdbde79:0x65e3dcc89056d452`
- Place ID: `ChIJed7b3IP3cg0RUtRWkMjc42U`

La ficha **no publica teléfono, web propia, correo, redes sociales, carta o precios**, y no indica métodos de pago ni reparto. Por eso la web no muestra teléfono: las llamadas a la acción llevan a Google Maps. El mostrador recoge lo que muestran las fotos del perfil (hogazas, barras, baguettes, pan con semillas, napolitanas y caracolas con crema, croissants) y lo que anuncian los rótulos del local («Se hacen tartas personalizadas», «Empanadas y salatitos por encargo»), sin importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs la-hogaza-malaguena
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la fachada, el interior con arcos de ladrillo, hogazas, panes con semillas, baguettes, napolitanas, caracolas, croissants y el escaparate. La fachada se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
- Si el negocio facilita teléfono y condiciones de encargo, añadirlos en `src/data/site.ts`.
