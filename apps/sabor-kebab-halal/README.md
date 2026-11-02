# Sabor Kebab Halal

Web de una sola página (Astro) para **Sabor Kebab Halal**, restaurante de kebab y
comida rápida en la calle Mossèn Cinto Verdaguer, 5, de Andorra la Vella (AD500).

## Contenido

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario 11:30–23:30
  todos los días, nota 3,7 con 140 reseñas), la descripción publicada por la casa
  y los platos que muestran las fotos.
- `src/pages/index.astro`: inicio (hero, la casa, qué se pide, galería, visita y
  preguntas), JSON-LD `Restaurant`, `Menu` y `FAQPage`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (Andorra).
- `src/assets/fotos/`: 10 fotografías descargadas del perfil del establecimiento
  en Google Maps (asador, vitrina, kebab, durum, hamburguesas, patatas).
- `src/styles/global.css`: estilos propios (verde, dorado y crema; Sora + Karla).

## Fuentes

- Ficha de Google Maps: `0x12a58ad33d5ad03f:0xd441b75a082b5af`
  (42.5083527, 1.522037).
- La ficha no publica carta con precios: la web no inventa importes y remite al
  teléfono.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

El dominio canónico provisional es `https://sabor-kebab-halal.vercel.app`. El pie
de página acredita a **Sur Digital · sur-digital.vercel.app**.

## Pendiente antes de publicar

- NRT, razón social y correo del titular en el aviso legal.
- Sustituir el dominio provisional si se publica en otro.
