# Bunbun Chicken

Web informativa de Bunbun chicken, restaurante especializado en pollo en la
calle Pozo Concejo, 13004 Ciudad Real.

- **Ficha de origen:** Google Maps, `38.9851811,-3.9218462`, feature
  `0xd6bc30068f93637:0xba47a80ad574d486`, place id `ChIJNzb5aADDaw0RhtR01QqoR7o`.
- **Datos publicados en la ficha:** «Restaurante especializado en pollo», 4,6 con
  73 reseñas, de 12:00 a 16:30 y de 19:30 en adelante, martes cerrado. No publica
  teléfono ni web propia.
- **Precios:** copiados del cartel de la carta que aparece en las fotos del
  perfil de Google Maps (hamburguesa, patatas, ensalada, takoyaki, salchicha,
  pincho, bebidas y postre de arroz).
- **Fotos:** imágenes descargadas del perfil del local con
  `node scripts/fetch-maps-photos.mjs bunbun-chicken` (manifiesto en
  `src/assets/fotos/.maps-manifest.json`).
- **Sin teléfono ni pedidos online:** la ficha no publica teléfono y esta página
  no tramita pedidos; enlaza a la ficha de Google para los datos de contacto.

## Comandos

```bash
bun run --filter bunbun-chicken dev
bun run --filter bunbun-chicken build
bun run --filter bunbun-chicken typecheck
node scripts/check-site-content.mjs bunbun-chicken
```

El dominio previsto es `https://bunbun-chicken.vercel.app/`.
