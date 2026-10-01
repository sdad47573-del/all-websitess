# Mesón Restaurante Balcón de Chema

Web Astro para el Mesón Restaurante Balcón de Chema en Castil de Campos, con SEO local, datos estructurados, información de contacto, especialidades y enlaces a galerías de fotos.

## Desarrollo

Desde la raíz del monorepo:

```sh
bun install --filter meson-balcon-de-chema
bun --filter meson-balcon-de-chema dev
```

Validación: `bun --filter meson-balcon-de-chema check`, `typecheck` y `build`.

## Fuentes

- Ficha de Google Maps: https://www.google.com/maps/place/Meson+Restaurante+Balcon+de+Chema/@37.490709,-4.1399183,17z/
- Facebook oficial: https://www.facebook.com/mrbalcondechema/
- Turismo de la Subbética: https://turismodelasubbetica.es/priego-de-cordoba/item/restaurante-el-balcon-de-chema
- Artículo gastronómico de ABC: https://www.abc.es/gurme/cordoba/vistas-envidiables-meson-restaurante-balcon-chema-castil-20260423115257-nts.html
- Tripadvisor: https://www.tripadvisor.es/Restaurant_Review-g2661271-d12949868-Reviews-Meson_Restaurante_Balcon_de_Chema-Castil_de_Campos_Province_of_Cordoba_Andaluci.html

La URL de Maps facilitada identifica la ficha y las coordenadas, pero no contiene enlaces directos a archivos de foto. La página dirige a las fotos de Google Maps, Facebook y Tripadvisor; los fondos visuales y la tarjeta social son ilustraciones vectoriales originales, no fotografías del restaurante.

Los directorios alternan «Calle Carrera» y «Calle de La Carrera 23». Se usa esta última como referencia, pero se recomienda confirmar la dirección exacta, horarios y carta con el establecimiento. El teléfono (+34 957 70 52 98) y correo se publican en su Facebook oficial. No se muestran horarios porque las fuentes consultadas no coinciden.

## Dominio

`https://meson-balcon-de-chema-castil-campos.vercel.app` es provisional. Sustituirlo por el dominio real en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` antes de publicar.
