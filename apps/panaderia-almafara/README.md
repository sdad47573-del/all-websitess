# Panadería ALMAFARA — Cruz de Humilladero, Málaga

Web estática en Astro para **Panadería ALMAFARA**, en la Avenida de José Ortega y Gasset, 139 (Cruz de Humilladero, 29006 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería ALMAFARA
- Dirección: Av. de José Ortega y Gasset, 139 · Cruz de Humilladero · 29006 Málaga
- Categorías: panadería y tienda de alimentación
- Descripción del negocio: «Tienda alimentación y asado de pimientos y batatas»
- Valoración: 4,6/5 con 13 reseñas
- Horario: lunes a viernes de 8:30 a 15:00; sábados de 9:00 a 15:00; domingos de 9:00 a 14:30
- Feature id: `0xd72f7d0b7cc0f73:0x173c517b6fad494c`
- Place ID: `ChIJcw_Mt9D3cg0RTEmtb3tRPBc`

La ficha **no publica teléfono, web propia, correo, redes sociales, carta ni precios**, y no indica métodos de pago, reparto ni datos de accesibilidad. El mostrador recoge lo que muestran las fotos del perfil (rótulo de panadería-charcutería, pizarra de pimientos asados, cajas de fruta y verdura, estanterías de despensa y vitrina congeladora) y lo que cuentan las reseñas, sin importes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-almafara
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió dos fotos: la fachada con la pizarra de pimientos asados y el escaparate con el rótulo. La fachada se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
- Si el negocio facilita teléfono, web o redes, añadirlos en `src/data/site.ts`.
