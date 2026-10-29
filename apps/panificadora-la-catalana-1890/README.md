# Panificadora La Catalana 1890 — Centro, Córdoba

Web estática en Astro para **Panificadora La Catalana 1890**, en la calle San Pablo, 16 (Centro, 14002 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panificadora La Catalana 1890
- Dirección: C. San Pablo, 16 · Centro · 14002 Córdoba
- Categoría: panadería
- Valoración: 4,7/5 con 99 reseñas
- Teléfono: 957 47 25 38
- Horario: lunes a sábado de 8:30 a 14:30; domingo cerrado
- Accesibilidad: acceso para sillas de ruedas; no hay aparcamiento adaptado
- Feature id: `0xd6cdf7c3d973b91:0x624e495e236404c`
- Place ID: `ChIJkTuXPXzfbA0RTEA24pXkJAY`

La ficha **no publica web propia, correo, redes sociales, carta ni precios**, y no indica métodos de pago ni reparto. El mostrador recoge lo que muestran las fotos del perfil (rótulo de la fachada, sello sin lactosa, rótulo interior de panadería-pastelería, estanterías de pan y vitrinas de dulces) y lo que cuentan las reseñas, sin importes.

El sello de la fachada asegura que todos los productos son sin lactosa y sin trazas de lactosa; se recoge con esa misma formulación y se recuerda que la ficha no publica la lista de alérgenos.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panificadora-la-catalana-1890
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: la fachada con el sello sin lactosa, el rótulo interior, las estanterías de pan, las vitrinas de pastelería, el mostrador y la entrada. El rótulo interior se usa en la portada y la fachada genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, alérgenos y accesibilidad con el establecimiento.
- Si el negocio facilita web o redes, añadirlos en `src/data/site.ts`.
