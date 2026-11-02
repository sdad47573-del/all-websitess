# Bar Nou

Web de una sola página (Astro) para **Bar Nou**, bar restaurante en la avenida
Doctor Mitjavila, 10, de Andorra la Vella (AD500).

## Contenido

- `src/data/site.ts`: datos del negocio (dirección, teléfono +376 863 117,
  horario de 7:00 a 1:00 de lunes a viernes, domingos de 8:00 a 1:00 y sábado
  cerrado, nota 4,0 con 89 reseñas), la oferta que anuncia el escaparate y los
  platos que muestran las fotos.
- `src/pages/index.astro`: inicio (hero, el bar, qué se sirve, galería, visita y
  preguntas), JSON-LD `BarOrPub` y `FAQPage`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (Andorra).
- `src/assets/fotos/`: 10 fotografías descargadas del perfil del establecimiento
  en Google Maps (fachada, comedor, terraza, bravas, calamares, champiñones,
  plato combinado y cerveza).
- `src/styles/global.css`: estilos propios (espresso, ladrillo y dorado;
  Fraunces + Karla).

## Fuentes

- Ficha de Google Maps: `0x12a58adae310eb89:0x65155ba6a3ca6ebd`
  (42.5096757, 1.5311149).
- La ficha no publica descripción del negocio ni carta con precios: la web no
  inventa importes y remite al teléfono.
- Accesibilidad según la ficha: acceso para sillas de ruedas y asientos
  adaptados.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

El dominio canónico provisional es `https://bar-nou.vercel.app`. El pie de
página acredita a **Sur Digital · sur-digital.vercel.app**.

## Pendiente antes de publicar

- NRT, razón social y correo del titular en el aviso legal.
- Sustituir el dominio provisional si se publica en otro.
