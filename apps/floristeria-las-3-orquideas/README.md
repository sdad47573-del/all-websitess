# Floristeria Las 3 Orquídeas · Mitre · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Las 3 Orquídeas** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Las 3 Orquídeas · **Categoría:** Floristería
- **Dirección:** Rda. Gral. Mitre, 129, Sarrià-Sant Gervasi, 08022 Barcelona
- **Plus code:** C42P+VQ Barcelona · **Coords:** 41.4021862, 2.1368917
- **Ficha:** `ChIJX1BQjQ2YpBIR4JfmsbgP6F4` · `/g/11fz1vk4y4`
- **Teléfono:** 654 11 16 44 (`tel:+34654111644`) · **Sin web propia**
- **Valoración:** 4,6/5 con 35 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** lun–jue de 9:30 a 18:30; vie de 10:00 a 18:30; sáb de 10:00 a 16:00;
  dom de 10:00 a 14:00
- **Accesibilidad:** sin aparcamiento adaptado (única entrada que publica la ficha)
- **Descripción del titular:** plantas de interior y exterior, jardinería, ramos de novia y arreglos (literal en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-las-3-orquideas
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
