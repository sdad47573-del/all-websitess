# Panadería Ilustre — Distrito Centro, Málaga

Web estática en Astro para **Panadería Ilustre**, en C. Don Juan de Austria, 33, Distrito Centro, 29009 Málaga.

## Contenido

- Portada, panadería, panes y bollería visibles en fotos y reseñas, galería, horario del cartel, mapa, preguntas frecuentes y crédito «Web creada por Sur Digital».
- `src/data/site.ts`: datos y textos del negocio.
- `src/assets/fotos/`: fotos descargadas de la galería pública del perfil en Google Maps, junto con el manifiesto.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos públicos de Google Maps

- Dirección: C. Don Juan de Austria, 33 · Distrito Centro · 29009 Málaga
- Categoría: panadería
- Teléfono: 652 87 56 74
- Valoración: 4,7/5 con 100 reseñas
- Horario del cartel del escaparate: lunes a viernes 8:00–14:30 y 17:15–20:30; sábados y domingos 8:30–14:30
- Feature ID: `0xd72f79f2abc7e77:0x10c742416113821f`
- Place ID: `ChIJd368Kp_3cg0RH4ITYUFCxxA`

Las fotos muestran hogazas rústicas, bollería, pasteles, galletas y palmeras; una reseña menciona también pan de cerveza, pan de tomate y bases para pizza. No se añadieron precios ni se atribuyó disponibilidad permanente al surtido. La ficha de Google muestra una valoración de 4,7/5 con 100 reseñas.

## Fotos

Se descargaron diez imágenes con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-ilustre
```

La portada usa una foto de los estantes de pan y la galería presenta seis imágenes de pan, bollería, galletas y el horario pintado en el escaparate.

## Antes de publicar

Completar razón social y NIF/CIF del titular en `src/pages/aviso-legal.astro` y confirmar horario y surtido con el establecimiento.
