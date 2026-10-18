# Restaurante El Porron · Sant Andreu de la Barca · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurante El Porron** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Restaurante El Porron · **Categorías:** Cocina española + bar
- **Dirección:** Passatge Granada, 6 · 08740 Sant Andreu de la Barca (Barcelona)
- **Plus code:** FX4F+78 Sant Andreu de la Barca · **Coords:** 41.4557396, 1.9732995
- **Ficha:** `0x12a48fc8ca5df047:0x4755f2a5f76494fd` · `/g/11cjnhbqf0` ·
  reseñas `ChIJR_BdysiPpBIR_ZRk96XyVUc`
- **Teléfono:** 936 82 04 01 (`tel:+34936820401`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 4,2/5 con 362 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, las tres de 4/5, sin nombre de autor (la vista previa solo
  publica el perfil)
- **Horario:** lunes a viernes 6:00–17:00; sábado 6:00–12:00; domingo cerrado
- **Accesibilidad:** acceso, aseo y asientos adaptados; sin dato de aparcamiento
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurante-el-porron
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
