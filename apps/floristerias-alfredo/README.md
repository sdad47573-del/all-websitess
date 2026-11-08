# Floristerías Alfredo · Salamanca · Madrid

Web informativa de una sola página (Astro, estática) con los datos, la descripción y
las fotos que **Floristerías Alfredo** publica en su ficha de Google Maps (consultada
el 17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristerías Alfredo - Floristeria en Madrid
- **Categorías:** Floristería, Entrega de flores, Tienda de regalos
- **Dirección:** Pl. de Venecia · 28028 Madrid (distrito de Salamanca, sin número)
- **Plus code:** C8RP+CW Madrid (completo 8CGRC8RP+CW) · **Coords:** 40.441009, -3.6626336
- **Ficha:** `0xd42293e3177dc1f:0x2b15503233a1a0e` · `/g/11zbp90085` ·
  place id `ChIJH9x3MT4pQg0RDho6IwNVsQI`
- **Teléfono / WhatsApp:** 633 69 77 43 (`tel:+34633697743` ·
  `https://wa.me/34633697743`) · **Sin web propia**
- **Valoración:** la ficha no publica nota ni reseñas → la web no muestra ninguna
- **Horario:** lunes a sábado 9:30–19:30; domingo 9:00–14:30
- **Accesibilidad:** las cinco entradas figuran como no disponibles (acceso,
  aparcamiento, aseo, asientos y bucle magnético)
- **Descripción del titular:** reproducida literalmente (ramos, rosas, tulipanes,
  lirios, centros, eventos, pedidos por WhatsApp)
- **Fotos:** 9 de la portada de la galería de la ficha (`fetch-maps-photos`),
  8 apaisadas + 1 vertical, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin nota, reseñas, precios ni web propia.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/floristerias-alfredo
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
