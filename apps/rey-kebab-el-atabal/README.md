# Rey Kebab El Atabal

Web de una sola página (Astro) para **Rey Kebab El Atabal**, restaurante turco de
kebab, durum y pizzas en la C. Nuzas 22, local 7, Teatinos-Universidad (29010
Málaga). Abre todos los días de 12:00 a 16:00 y de 19:00 a 24:00.

## Contenido

- `src/data/site.ts`: datos del negocio (dirección, teléfonos, horario, nota,
  reseñas, preguntas frecuentes), la carta con precios y las reseñas citadas.
- `src/pages/index.astro`: inicio (hero, presentación, carta, galería, visita y
  preguntas), JSON-LD `Restaurant`, `Menu` y `FAQPage`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.
- `src/assets/fotos/`: 10 fotografías descargadas del perfil del establecimiento
  en Google Maps.
- `src/styles/global.css`: estilos propios (rojo del rótulo, negro, verde del
  local y crema; Anton + Karla).

## Fuentes

- Ficha de Google Maps: `0xd72f72ff2d7b739:0x8bbc3e0daf1ebd14`
  (36.7309051, -4.469115).
- Precios y platos: pizarra de la tienda y carteles de menús junto a la puerta,
  transcritos de las fotos del perfil. Pueden cambiar: confirma al pedir.

## Comandos

```bash
npm run dev      # servidor de desarrollo
npm run build    # genera dist/
npm run preview  # sirve dist/
```

El dominio canónico provisional es `https://rey-kebab-el-atabal.vercel.app`.
El pie de página acredita a **Sur Digital · sur-digital.vercel.app**.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en el aviso legal.
- Sustituir el dominio provisional si se publica en otro.
