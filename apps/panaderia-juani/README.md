# Panadería Juani — barrio Sur, Córdoba

Web estática en Astro para **Panadería Juani**, en la calle Libertador Hidalgo y Costilla, 1 (barrio Sur, 14013 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Juani
- Dirección: C. Libertador Hidalgo y Costilla, 1 · Sur · 14013 Córdoba
- Categoría: panadería
- Valoración: 4,9/5 con 23 reseñas
- Horario: lunes a viernes de 7:30 a 15:00 y de 17:30 a 21:00; sábados de 9:00 a 15:00; domingos de 8:00 a 14:00
- Accesibilidad: acceso para sillas de ruedas; no hay aparcamiento adaptado
- Feature id: `0xd6d20ed49b304d3:0x3aca6151c03e4b30`
- Place ID: `ChIJ0wSzSe0gbQ0RMEs-wFFhyjo`

La ficha **no publica teléfono, web propia, correo, redes sociales, carta ni precios**, y no indica métodos de pago ni condiciones de reparto. El mostrador recoge lo que muestran las fotos del perfil (los rótulos de Rico Pan y Confitería Juani, el logotipo de Polvillo y los escaparates) y lo que cuentan las reseñas, sin importes. Una reseña menciona los plazos de entrega; se recoge con la advertencia de que la ficha no publica zona ni condiciones.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-juani
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió dos fotos: la fachada con los rótulos de Rico Pan y Confitería Juani, y el logotipo de Polvillo del escaparate. La fachada se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, accesibilidad y reparto con el establecimiento.
- Si el negocio facilita teléfono, web o redes, añadirlos en `src/data/site.ts`.
