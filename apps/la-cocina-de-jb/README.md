# La Cocina de JB

Web informativa de La Cocina de JB, comida para llevar en la calle Prof. Manuel
Clavero Arévalo, 41020 Sevilla.

- **Ficha de origen:** Google Maps, `37.4022755,-5.919011`, feature
  `0xd126f0045069bbf:0x9ddbf8ba39c3d4ee`, place id `ChIJv5sGRQBvEg0R7tTDObr4250`,
  CID `11374958762571060462`.
- **Datos publicados en la ficha:** restaurante de comida para llevar y
  establecimiento de comida preparada, 5,0 con 10 reseñas.
- **Teléfono de pedidos:** 646 59 41 55, el que el local pinta en el rótulo de su
  fachada y en el escaparate (visible en las fotos del perfil), porque la ficha no
  lo rellena como campo de contacto.
- **Lo que la ficha NO publica (y la web no inventa):** horario (la respuesta de la
  ficha no trae bloque de días), número de portal, precios de la carta ni
  descripción del negocio (su campo de descripción es «Q»).
- **Web enlazada por la ficha:** `https://sites.google.com/view/la-cocina-de-jb-sevilla`,
  una página de Google Sites sin contenido («Alta WEB COMERCIAL para su ficha de
  Google»).
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs la-cocina-de-jb` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).
- **Carta:** el local tiene una carta fotografiada en su perfil con serranitos,
  baguettes, combos de pollo, fritos y hamburguesas; la web usa los nombres sin precios.

## Comandos

```bash
bun run --filter la-cocina-de-jb dev
bun run --filter la-cocina-de-jb build
bun run --filter la-cocina-de-jb typecheck
node scripts/check-site-content.mjs la-cocina-de-jb
```

El dominio previsto es `https://la-cocina-de-jb.vercel.app/`.
