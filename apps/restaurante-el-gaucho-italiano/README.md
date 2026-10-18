# Restaurante El Gaucho Italiano s.l. · Vilafranca del Penedès · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurante El Gaucho Italiano s.l.** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Restaurante El Gaucho Italiano s.l. · **Categorías:** italiano, argentino, mediterráneo
- **Dirección:** Carrer del Parlament, 4, 08720 Vilafranca del Penedès, Barcelona
- **Plus code:** 8MVX+9C Vilafranca del Penedès (completo 8FH38MVX+9C) · **Coords:** 41.3434726, 1.698617
- **Ficha:** `ChIJ29zdeYx5pBIRl_TVSCxlCLQ` · `/g/11c4bblfx3`
- **Teléfono:** 930 19 91 75 (`tel:+34930199175`) · **Web:** https://sites.google.com/view/el-gaucho-italiano
- **Valoración:** 4,6/5 con 389 reseñas; 3 extractos literales (5, 4 y 5/5), sin firma
- **Horario:** miércoles cerrado; lun, mar, jue, vie 20:30–23:00; sáb y dom 13:30–15:30 y 20:30–23:00
- **Accesibilidad:** aseo y asientos adaptados disponibles
- **Fotos:** 10 de la portada de la galería (`fetch-maps-photos`), sin autor → sin atribución

Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurante-el-gaucho-italiano
bun install
bun run dev
bun run build
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
