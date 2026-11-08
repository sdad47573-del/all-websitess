# Mr.Florist Barcelona · Viladomat · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Mr.Florist Barcelona** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Mr.Florist Barcelona · **Categoría:** Floristería
- **Dirección:** Carrer de Viladomat, 144, Eixample, 08015 Barcelona
- **Plus code:** 95J3+XH Barcelona · **Coords:** 41.3824964, 2.1539839
- **Ficha:** `ChIJaQOPwYeipBIRMnXTCIwGlQE` · `/g/11gg99nl29`
- **Teléfono:** 931 46 06 09 (`tel:+34931460609`) · **Sin web propia**
- **Valoración:** 4,7/5 con 158 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** lun–sáb de 10:00 a 20:00; dom de 10:00 a 14:00
- **Accesibilidad:** acceso y aparcamiento adaptados disponibles; sin aseo adaptado
- **Descripción del titular:** «Local especializado en plantas de interior, exterior, macetas de cerámica y flor cortada. Nuestra misión NATURALIZAR Barcelona.»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/mr-florist-barcelona
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
