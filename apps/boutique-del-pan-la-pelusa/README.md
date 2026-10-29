# Boutique del Pan la Pelusa C.B. — Bailén-Miraflores, Málaga

Web estática en Astro para **Boutique del Pan la Pelusa C.B.**, en la Plaza Basconia, 1, 1ºE (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Boutique del Pan la Pelusa C.B.
- Dirección: Plaza Basconia, 1, 1ºE · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Valoración: 4,3/5 con 20 reseñas
- Teléfono: 952 61 45 99
- Horario: de lunes a sábado de 8:30 a 14:30; domingos de 8:30 a 14:00
- Accesibilidad: acceso para sillas de ruedas; no hay aparcamiento adaptado
- Feature id: `0xd72f7a0428e59a5:0x3b6e75d15f271808`
- Place ID: `ChIJpVmOQqD3cg0RCBgnX9F1bjs`

La ficha **no publica web propia, correo, redes sociales, carta ni precios**, y no indica métodos de pago ni reparto. El mostrador recoge lo que muestran las fotos del perfil (pan en bolsas, vitrinas de bollería, lista de precios del pan, un bollo y un roscón de Reyes) y lo que cuentan las reseñas, sin importes.

El cartel de la puerta que aparece en las fotos indica horarios algo distintos a los de la ficha de Google; se avisa en la tabla y en las preguntas frecuentes para que se confirme antes de ir.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs boutique-del-pan-la-pelusa
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió siete fotos: el mostrador, la fachada, dos carteles de la puerta, la lista de precios del pan, un bollo y un roscón de Reyes. La fachada se usa en la portada y genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar el horario con el establecimiento.
- Si el negocio facilita web o redes, añadirlos en `src/data/site.ts`.
