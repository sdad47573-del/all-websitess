# Les Flors de Mary · Sant Andreu · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Les Flors de Mary** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Les Flors de Mary · **Categoría:** Floristería
- **Dirección:** Carrer Gran de Sant Andreu, 446, Sant Andreu, 08030 Barcelona
- **Plus code:** C5RQ+F9 Barcelona · **Coords:** 41.441191, 2.1884423
- **Ficha:** `ChIJ7RxTxuC8pBIR0Hzcsdp76HA` · `/g/11cnr_dwvh`
- **Teléfono:** 631 48 52 87 (`tel:+34631485287`) · **Sin web propia**
- **Valoración:** 4,7/5 con 53 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (10:00–15:00 y 17:00–20:00); sáb de 10:00 a 15:00;
  dom cerrado
- **Accesibilidad:** cuatro entradas publicadas y todas no disponibles (acceso, aseo,
  aparcamiento y bucle magnético)
- **Descripción del titular:** transparencia, trato personal y jardinería (literal en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/les-flors-de-mary
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
