# Ars Floristeria · Usera · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Ars Floristeria** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Ars Floristeria · **Categoría:** Floristería (única publicada)
- **Dirección:** Calle de Antonio López, 154 · 28026 Madrid (distrito de Usera)
- **Plus code:** 97QX+V9 Madrid (completo 8CGR97QX+V9) · **Coords:** 40.3897449, -3.7015345
- **Ficha:** `0xd42264b1f375dd9:0x332387d536532dd3` · `/g/11rjr7h290` ·
  reseñas `ChIJ2V03H0smQg0R0y1TNtWHIzM`
- **Teléfono:** 611 20 91 81 (`tel:+34611209181`) · **Sin web propia**
- **Valoración:** 4/5 con 25 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** todos los días de 9:30 a 21:30
- **Accesibilidad:** la ficha no publica ningún dato
- **Fotos:** solo 2 en la portada de la galería de la ficha (`fetch-maps-photos`),
  1 apaisada + 1 vertical, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, catálogo,
precios, envíos ni accesibilidad. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/ars-floristeria
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
