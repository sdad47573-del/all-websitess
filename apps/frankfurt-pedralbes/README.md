# Frankfurt Pedralbes

Web de una sola página (Astro) para **Frankfurt Pedralbes**, bar y restaurante de
comida rápida en la calle de la Borda, 5, de Andorra la Vella (AD500).

## Contenido

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario con el lunes
  cerrado, nota 3,8 con 1.160 reseñas, accesibilidad) y los productos que
  muestran las fotos del perfil.
- `src/pages/index.astro`: inicio (hero, la casa, qué se pide, galería, visita y
  preguntas), JSON-LD `Restaurant`, `Menu` y `FAQPage`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (Andorra).
- `src/assets/fotos/`: 10 fotografías descargadas del perfil del establecimiento
  en Google Maps (fachada, kiosco con el Seat 600, frankfurts, patatas, barra).
- `src/styles/global.css`: estilos propios (amarillo del rótulo, negro y rojo;
  Archivo Black, UnifrakturCook y Karla).

## Fuentes

- Ficha de Google Maps: `0x12a58ada49664313:0x1d1fbd40b8268743`
  (42.5078297, 1.5326679).
- La ficha no publica carta ni precios: la web no inventa importes y remite al
  teléfono.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

El dominio canónico provisional es `https://frankfurt-pedralbes.vercel.app`. El pie
de página acredita a **Sur Digital · sur-digital.vercel.app**.

## Pendiente antes de publicar

- NRT, razón social y correo del titular en el aviso legal.
- Sustituir el dominio provisional si se publica en otro.
