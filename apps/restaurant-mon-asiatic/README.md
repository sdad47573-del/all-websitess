# Restaurant Món Asiàtic

Web de una sola página (Astro) para **Restaurant Món Asiàtic**, restaurante
asiático en la calle Santa Anna, 10, de Escaldes-Engordany (AD700).

## Contenido

- `src/data/site.ts`: datos del negocio (dirección, teléfono +376 845 394,
  horario de jueves a sábado de 13:00 a 16:00 y de 20:00 a 23:00, nota 4,7 con
  141 reseñas), la descripción escrita por el restaurante y los platos que
  muestran las fotos.
- `src/pages/index.astro`: inicio (hero, la casa, qué se come, galería, visita y
  preguntas), JSON-LD `Restaurant` y `FAQPage`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (Andorra).
- `src/assets/fotos/`: 10 fotografías descargadas del perfil del establecimiento
  en Google Maps (fachada, dos salas, dim sum, rollitos, salteado, tallarines,
  sopa y tempura).
- `src/styles/global.css`: estilos propios (negro, granate, jade y dorado;
  Cormorant Garamond + Karla).

## Fuentes

- Ficha de Google Maps: `0x12a5f558265557b1:0x63183f109164384f`
  (42.509151, 1.5417669).
- La ficha no publica carta con precios ni web propia: la web no inventa
  importes y remite al teléfono.
- Accesibilidad según la ficha: acceso para sillas de ruedas; sin aparcamiento
  adaptado ni bucle magnético.
- La descripción del restaurante anuncia menús los martes, jueves y viernes al
  mediodía, pero la ficha marca el martes como cerrado; la web lo advierte.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

El dominio canónico provisional es `https://restaurant-mon-asiatic.vercel.app`.
El pie de página acredita a **Sur Digital · sur-digital.vercel.app**.

## Pendiente antes de publicar

- NRT, razón social y correo del titular en el aviso legal.
- Sustituir el dominio provisional si se publica en otro.
