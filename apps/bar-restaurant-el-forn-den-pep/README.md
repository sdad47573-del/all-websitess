# BarRestaurant El Forn d'en Pep · Torrelavit · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**BarRestaurant El Forn d'en Pep** publica en su ficha de Google Maps (consultada el
18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** BarRestaurant El Forn d'en Pep · **Categoría:** Restaurante (única publicada)
- **Dirección:** Carrer del Molí, 52 · 08775 Torrelavit (Barcelona)
- **Plus code:** CPXJ+5C Torrelavit (completo 8FH3CPXJ+5C) ·
  **Coords:** 41.4479416, 1.7310793
- **Ficha:** `0x12a4655c6964457d:0x537548b456483e60` · `/g/11s6b73dfy` ·
  reseñas `ChIJfUVkaVxlpBIRYD5IVrRIdVM`
- **Teléfono:** 680 79 68 88 (`tel:+34680796888`) · **Sin web propia**
- **Reservas:** la ficha no muestra ningún sistema de reservas online → llamar por teléfono
- **Descripción del titular:** bar-restaurant acogedor; menús caseros y tradicionales;
  actuaciones y festividades (copiada literalmente en la portada)
- **Valoración:** 4,3/5 con 78 reseñas; se reproducen literalmente tres de las
  reseñas destacadas (4, 5 y 5/5), sin nombre de autor (la vista previa solo publica el perfil)
- **Horario:** todos los días; lun–vie 7:00–22:00; sáb–dom 8:00–23:00
- **Accesibilidad:** acceso, aparcamiento, aseo y asientos adaptados
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin carta, precios ni datos de envío.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/bar-restaurant-el-forn-den-pep
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
