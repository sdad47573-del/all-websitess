# Floristería flores de mary · Tedeschini · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería flores de mary** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristería flores de mary · **Categoría:** Floristería
- **Dirección:** Carrer del Cardenal Tedeschini, 10, Sant Andreu, 08027 Barcelona
- **Plus code:** C5GP+64 Barcelona · **Coords:** 41.4255764, 2.1852912
- **Ficha:** `ChIJ5zlAx8K9pBIRxfC09whcXuo` · `/g/11p16zzpsc`
- **Teléfono:** 612 41 45 23 (`tel:+34612414523`) · **Sin web propia**
- **Valoración:** 4,9/5 con 139 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** lun–vie de 10:00 a 20:00; sáb y dom de 10:00 a 15:00
- **Accesibilidad:** acceso y aseo adaptados disponibles; sin aparcamiento adaptado
- **Descripción del titular:** «Hacemos Ramos personalizados, Centros, Bouquet de novia, solapas, pulseras, plantas de interior y exterior, y todo tipo de plantas de temporada. Hacemos envíos a domicilio.»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-flores-de-mary
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
