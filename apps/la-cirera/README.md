# La Cirera

Web de una sola página (Astro) para **La Cirera**, parrilla y borda de piedra en
la Av. de François Mitterrand, 81, junto al Telecabina Funicamp de Encamp (AD200
Andorra).

## Contenido

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario 7:30–22:30
  todos los días, nota 3,9 con 1.015 reseñas, accesibilidad), la descripción
  publicada por el local y los platos que muestran las fotos y los carteles.
- `src/pages/index.astro`: inicio (hero, la borda, qué se come, galería, visita
  y preguntas), JSON-LD `Restaurant`, `Menu` y `FAQPage`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (Andorra).
- `src/assets/fotos/`: 10 fotografías descargadas del perfil del establecimiento
  en Google Maps.
- `src/styles/global.css`: estilos propios (piedra, madera, brasa y verde de
  montaña; Fraunces + Karla).

## Fuentes

- Ficha de Google Maps: `0x12a58a0f348f5473:0x797fc873fd118761`
  (42.5349471, 1.5871667).
- La ficha no publica carta ni precios: la web no inventa importes y remite al
  teléfono para el menú del día.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

El dominio canónico provisional es `https://la-cirera.vercel.app`. El pie de
página acredita a **Sur Digital · sur-digital.vercel.app**.

## Pendiente antes de publicar

- NRT, razón social y correo del titular en el aviso legal.
- Sustituir el dominio provisional si se publica en otro.
