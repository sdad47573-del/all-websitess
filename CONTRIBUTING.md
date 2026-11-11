# Cómo trabajar en este repo

Guía corta para este monorepo de webs de clientes. Para instalación, comandos y estructura,
empieza por el [README](./README.md).

## Flujo para una landing

1. La landing vive en `apps/_sur-digital/src/apps/<slug>/` (`pages`, `data`, `styles`,
   `assets`). Los estáticos públicos van en `apps/_sur-digital/public/<slug>/`.
2. Si faltan fotos, descárgalas del perfil público:
   `node scripts/fetch-maps-photos.mjs <slug>`.
3. Levanta el dev server (`cd apps/_sur-digital && bun run dev`) y abre
   `http://localhost:4321/<slug>/`.
4. Tras cada cambio en la landing, ejecuta `bun run dev:refresh` desde la raíz: el watcher
   ignora `src/apps` a propósito (ver el comentario en `astro.config.mjs`).
5. Antes de terminar, revisa en el navegador que la página y su aviso legal responden 200,
   que las imágenes cargan y que no hay scroll horizontal.

## Contenido

- **Solo datos verificables.** La ficha de Google Maps es la fuente habitual: nombre,
  dirección, teléfono, categoría, valoración y horario publicado. No se inventan carta,
  precios, reseñas literales ni servicios.
- **Fotos** del perfil público, con nota de origen y posibilidad de retirada a petición del
  titular.
- **Textos** en castellano, sin promesas que el negocio no haya publicado.

## Estructura

- `apps/_sur-digital`: proyecto único de Astro que sirve las landings de clientes y la web
  de Sur Digital. Es el que se despliega.
- `apps/*`: webs antiguas independientes, cada una con su `astro.config.mjs`.
- `packages/*`: paquetes compartidos del workspace.
- `scripts/`: utilidades de mantenimiento (fotos, auditorías, SEO, build del proyecto único).

## Comprobaciones antes de cerrar

```bash
bun run check:sites
bun run lint
bun run build
```

No hace falta ejecutarlas todas para un cambio pequeño: como mínimo, typecheck o build del
paquete tocado y una carga real de la página modificada.
