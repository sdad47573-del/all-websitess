# La Floristeria de Badia · Av. Costa Brava · Badia del Vallès

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La Floristeria de Badia** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** La Floristeria de Badia · **Categoría:** Floristería
- **Dirección:** Av. Costa Brava, 10, 08214 Badia del Vallès (Barcelona)
- **Plus code:** G449+XC Badia del Vallès · **Coords:** 41.507378, 2.118606
- **Ficha:** `0x12a495dbd00d2245:0x28c5e0678e916c96` · `/g/1q5bk4xjs`
- **Teléfono:** 937 29 69 21 (`tel:+34937296921`) · **Sin web propia**
- **Valoración:** 4,9/5 con 144 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (9:30–14:00 y 17:00–20:30); sáb 9:00–14:00;
  dom cerrado
- **Accesibilidad:** la ficha solo publica una entrada: acceso para sillas de ruedas
  disponible
- **Descripción del titular (literal):** «Venta de Arreglos florales, plantas, decoración...»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 1 panorámica,
  3 cuadradas, 5 verticales y 1 vista, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-de-badia
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
