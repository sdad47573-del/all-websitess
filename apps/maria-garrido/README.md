# Florista María Garrido Pérez · Carabanchel · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Florista María Garrido Pérez** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Florista María Garrido Pérez · **Categoría:** Floristería
- **Dirección:** Glorieta Valle de Oro, s/n, 28019 Madrid (distrito de Carabanchel)
- **Plus code:** 97Q9+8M Madrid (completo 8CG797Q9+8M) · **Coords:** 40.3883113, -3.7308025
- **Ficha:** `0xd4227924d24934b:0x5bab5e2e931c3873` · `/g/11fy4hk38j` ·
  reseñas `ChIJS5MkTZInQg0Rczgcky5eq1s`
- **Teléfono:** 914 72 15 15 (`tel:+34914721515`) · **Sin web propia**
- **Valoración:** 4,6/5 con 76 reseñas; la vista previa no incluía los textos,
  así que no se reproduce ningún extracto
- **Horario:** de lunes a viernes de 9:30 a 21:00; sábado de 9:00 a 21:00;
  domingo de 9:30 a 20:00
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  4 apaisadas + 1 panorámica + 5 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción, sin extractos de reseñas,
sin accesibilidad, sin catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/maria-garrido
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
