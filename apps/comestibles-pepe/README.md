# Comestibles Pepe

Landing page estática en Astro para Comestibles Pepe,
charcutería y tienda de alimentación en Plaza Pío XII, 5 ·
29007 Málaga (Cruz de Humilladero).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/comestibles-pepe
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `GroceryStore` (dirección, teléfono, coordenadas, horarios) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del comercio y directorios que la replican:
  Plaza Pío XII 5, 29007 Málaga, teléfono 697 65 50 93,
  horario L–V 6:30–14:30 y 17:30–20:30, sábados 8:00–14:30, domingos cerrado.
  Sin valoración publicada: el JSON-LD no lleva `aggregateRating` para no inventar notas.

## Fotografías

Las imágenes de `src/assets/fotos/*.jpg` proceden de la ficha pública del comercio en
Google Maps (ver `src/assets/fotos/.maps-manifest.json`, todas atribuidas a Comestibles Pepe)
y están atribuidas en la propia web. Los SVG de `public/fotos/` son ilustraciones propias
de reserva, actualmente sin uso en las páginas.

Antes de publicar conviene:

1. Revisar que cada foto corresponde al local y ajustar los textos `alt` según lo que se vea.
2. Confirmar que el titular autoriza el uso de esas fotografías en la web.
3. Completar NIF/CIF, razón social y correo del titular en el aviso legal.
