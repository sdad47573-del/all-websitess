# Flors Lin · Juan de Sada · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Flors Lin** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Flors Lin · **Categoría:** Floristería
- **Dirección:** Carrer de Juan de Sada, 50, Sants-Montjuïc, 08028 Barcelona
- **Plus code:** 94HH+83 Barcelona · **Coords:** 41.3782828, 2.1277029
- **Ficha:** `ChIJD1-QCYuYpBIRagvjA-9hw1c` · `/g/11b7stk1ng`
- **Teléfono:** 933 30 66 17 (`tel:+34933306617`) · **Sin web propia**
- **Valoración:** 5/5 con 81 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** lun–vie de 10:00 a 20:30 (lun desde las 12:00; mié y vie desde las 11:00);
  sáb de 10:00 a 15:30; dom de 10:00 a 14:30
- **Accesibilidad:** acceso disponible; sin aparcamiento adaptado
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/flors-lin
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
