# La Buena

Web de una sola página (Astro) para **La Buena**, restaurante de brunch y cocina
non stop en el Passatge Antònia Font Caminal, 7, de Escaldes-Engordany (AD700).

## Contenido

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario 9:00–23:00
  todos los días, nota 4,3 con 288 reseñas, accesibilidad), la descripción
  publicada por la casa y los platos que muestran las fotos.
- `src/pages/index.astro`: inicio (hero, la casa, qué se come, galería, visita y
  preguntas), JSON-LD `Restaurant`, `Menu` y `FAQPage`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (Andorra).
- `src/assets/fotos/`: 10 fotografías descargadas del perfil del establecimiento
  en Google Maps (interior, tostas, bowl, bocadillos, carne, batatas).
- `src/styles/global.css`: estilos propios (crema, verde oliva, salvia y
  terracota; DM Serif Display + Karla).

## Fuentes

- Ficha de Google Maps: `0x12a58b007fb7bfc3:0x13f72bf5c7718644`
  (42.5091605, 1.536608).
- La ficha no publica carta con precios: la web no inventa importes y remite al
  teléfono y al QR de mesa.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

El dominio canónico provisional es `https://la-buena.vercel.app`. El pie de
página acredita a **Sur Digital · sur-digital.vercel.app**.

## Pendiente antes de publicar

- NRT, razón social y correo del titular en el aviso legal.
- Sustituir el dominio provisional si se publica en otro.
