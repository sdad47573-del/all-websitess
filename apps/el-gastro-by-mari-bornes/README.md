# El Gastro by Mari Bornes · Llorenç del Penedès · Tarragona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**El Gastro by Mari Bornes** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** El Gastro by Mari Bornes · **Categoría:** Restaurante de cocina
  española (única publicada)
- **Dirección:** Rbla. de la Marinada, 33 · 43712 Llorenç del Penedès (Tarragona)
- **Plus code:** 7HJ2+JJ Llorenç del Penedès · **Coords:** 41.2815004, 1.5516059
- **Ficha:** `0x12a47521733f4097:0xb56e22c0674cd11d` · `/g/11jp0ty5cv` ·
  reseñas `ChIJl0A_cyF1pBIRHdFMZ8AibrU`
- **Teléfono:** 665 15 18 85 (`tel:+34665151885`) · **Sin web propia**
- **Reservas:** la ficha no muestra sistema de reservas online → CTA de llamada
- **Valoración:** 4,4/5 con 277 reseñas; se reproducen literalmente tres de las
  reseñas destacadas, las tres de 5/5, sin nombre de autor (la vista previa solo
  publica el perfil)
- **Horario:** lunes y martes cerrado; mié–jue 11:00–16:00; vie–sáb 11:00–22:30;
  dom 10:59–16:59
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, carta,
precios ni datos de envío. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/el-gastro-by-mari-bornes
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
