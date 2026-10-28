# Panadería los Rubios — Bailén-Miraflores, Málaga

Web estática en Astro para **Panadería los Rubios**, en la calle Carraca, 4 (Bailén-Miraflores, 29011 Málaga). Los textos están en español.

## Contenido

- Portada: hero con la única foto de la ficha, chips, «La casa», «Tres cosas de la casa», horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la foto descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería los Rubios
- Dirección: C. Carraca, 4 · Bailén-Miraflores · 29011 Málaga
- Categoría: panadería
- Teléfono: 952 27 60 01
- Valoración: 3,6/5 con 53 reseñas
- Horario: L–V 7:30–14:30 · S cerrado · D 7:30–14:30
- Feature id: `0xd72f7a7bfacb835:0x4682791700dbdb04`
- Place ID: `ChIJNbisv6f3cg0RBNvbABd5gkY`

La ficha **no publica descripción, carta, precios, web propia, correo, redes, accesibilidad ni métodos de pago**, y su galería solo tiene **una foto**: una vista de la calle Carraca en la que se ve el rótulo «Panadería · Pastelería» en la esquina del edificio. Por eso la web no incluye sección de mostrador ni galería: no hay datos ni imágenes que las sostengan.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Foto

La foto se descarga con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-los-rubios
```

y vive en `src/assets/fotos/`. Google devuelve una sola imagen para esta ficha; se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario y surtido con el establecimiento.
- Si el negocio facilita más fotos, productos o redes, añadirlos en `src/data/site.ts` y en la ficha.
