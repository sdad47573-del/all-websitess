# Restaurante O Ferreirinho — comida casera en Bucelas (Loures)

Web estática en Astro para **Restaurante O Ferreirinho**, en la N116, 52, 2670-674 Bucelas (Loures, Lisboa). Los textos están en español.

## Contenido

- Portada: hero, señas de la casa, la carta, galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Restaurante O Ferreirinho
- Dirección: N116, 52 · 2670-674 Bucelas (Loures)
- Categoría: restaurante
- Teléfono: 934 802 421 (+351)
- Valoración: 4,3/5 con 141 reseñas
- Horario: de lunes a sábado, 07:30–21:00; domingo cerrado
- Accesibilidad: aseo adaptado para sillas de ruedas (único dato publicado)

La ficha **no publica carta con precios ni web propia**: solo el teléfono. El local sí anuncia el menú de la semana en su página de Facebook «O Ferreirinho | Bucelas»: pratos do dia a 7,50 € «tudo incluído».

## La carta

Sin carta publicada. Los apartados salen de lo que anuncia el restaurante en Facebook y de las fotos de su perfil: menú del día, cozido à portuguesa, migas con carnes, guisados, pescado a la brasa, bife con patatas fritas, arroz de marisco, sardinhas, choco, caracóis y sopa con chouriço, más postres, café, cerveza, licores y el Arinto de la región.

## Fotos

Diez fotografías del perfil público en Google Maps: cozido à portuguesa, pescado a la brasa con patata asada, arroz de marisco, migas con carnes, tarta de chocolate, caracóis con su salsa, carne guisada con arroz y grelos, tres platos de pratos do dia, sopa con chouriço y el bife con patatas fritas y vino tinto que abre la portada.

## Pendiente antes de publicar

- NIPC/NIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://restaurante-o-ferreirinho.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt` y `BUSINESS.siteUrl`.
- Confirmar con el local la carta, los precios y si el menú de 7,50 € sigue vigente.
- El teléfono de la ficha (934 802 421) no coincide con el que publican algunos directorios (914 887 129): confirmar cuál es el bueno.

## Comandos

```bash
bun install          # desde la raíz del monorepo
bunx astro dev       # desarrollo
bunx astro build     # genera dist/
bunx tsc -p tsconfig.json --noEmit
```

`astro check` no funciona en este repo porque usa TypeScript 7; se valida con `tsc`.

## Crédito

El pie de página enlaza a **Sur Digital** → https://sur-digital.vercel.app/
