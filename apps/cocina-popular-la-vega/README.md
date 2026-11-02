# Cocina popular comidas para llevar - La Vega

Web informativa de Cocina popular comidas para llevar - La Vega, en la calle
Cronista Carlos Valcárcel 1, 1ºA, 30008 Murcia.

- **Ficha de origen:** Google Maps, `37.9922347,-1.1339395`, feature
  `0xd6383000d3e2813:0xef134d0dcd37dd4`, place id `ChIJEyg-DQCDYw0R1H3T3NA08Q4`,
  CID `1076699857580948948`.
- **Datos publicados en la ficha:** restaurante de comida para llevar, **2,2 con 5
  reseñas**, acceso para sillas de ruedas.
- **Lo que la ficha NO publica (y la web no inventa):** horario, teléfono, web,
  descripción del negocio, carta y precios.
- **Reseñas:** las dos que Google destaca son de una estrella y se reproducen
  literalmente; la nota baja de la ficha se muestra en la portada, sin maquillar.
- **Fotos:** una sola imagen en el perfil del local, descargada con
  `node scripts/fetch-maps-photos.mjs cocina-popular-la-vega` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`). Por eso la web no tiene galería.

## Comandos

```bash
bun run --filter cocina-popular-la-vega dev
bun run --filter cocina-popular-la-vega build
bun run --filter cocina-popular-la-vega typecheck
node scripts/check-site-content.mjs cocina-popular-la-vega
```

El dominio previsto es `https://cocina-popular-la-vega.vercel.app/`.
