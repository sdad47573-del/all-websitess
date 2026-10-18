# Floristeria PlantArte Barcelona · Pg. de St. Gervasi · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria PlantArte Barcelona** publica en su ficha de Google Maps (consultada el 18 de
octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristeria PlantArte Barcelona · **Categoría:** Floristería
- **Dirección:** Pg. de St. Gervasi, 26, Local, Sarrià-Sant Gervasi, 08022 Barcelona
- **Plus code:** C45P+P2 Barcelona · **Coords:** 41.4092526, 2.1350891
- **Ficha:** `0x12a4991ad7aa7101:0x25e4d0733ea436c` · `/g/11p0dk1y7v`
- **Teléfono:** 651 18 19 97 (`tel:+34651181997`) · **Sin web propia**
- **Valoración:** 5/5 con 114 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos mar–vie (10:00–14:00 y 16:00–20:00); lun, sáb y dom cerrado
- **Accesibilidad:** la ficha solo publica una entrada: acceso para sillas de ruedas
  disponible
- **Descripción del titular (literal):** «Tu floristería en Barcelona»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 7 verticales
  y 3 apaisadas, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-plantarte
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
