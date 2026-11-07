# Subdominios de clientes

Cada web del portfolio se publica en `https://<slug>.sur-digital.com`
(por ejemplo `https://a-jalar.sur-digital.com`). El dominio principal
`https://www.sur-digital.com` es el sitio de Sur Digital.

## Qué queda resuelto en el repo

- **`PORTFOLIO`** (`apps/_sur-digital/src/data/portfolio.ts`): las 96 fichas de
  `/clientes` enlazan ya al subdominio, no al `.vercel.app` / `.netlify.app`.
- **`site` de cada web**: las 14 apps que aún conservan `astro.config.mjs`
  declaran `https://<slug>.sur-digital.com` como `site`, que es lo que alimenta
  canonical, `og:url` y el sitemap. Requieren un despliegue nuevo para
  publicarlo.
- **`docs/subdominios-clientes.csv`**: las 96 filas con subdominio, web actual,
  carpeta en el repo y si conserva código fuente y configuración. Es la lista
  para trabajar en los paneles.

## Pasos de DNS y paneles (fuera del repo)

1. **DNS** en el registrador de `sur-digital.com`, un CNAME por cliente:

   ```text
   a-jalar   CNAME   cname.vercel-dns.com.
   ```

   El valor exacto lo muestra Vercel al añadir el dominio. También se puede
   usar un comodín (`* CNAME cname.vercel-dns.com.`), pero el certificado
   comodín exige que el DNS lo gestione Vercel (nameservers), así que con un
   registrador externo conviene el registro individual por subdominio.

2. **Proyecto del cliente** (Vercel → Settings → Domains): añadir
   `a-jalar.sur-digital.com`, marcarlo como dominio principal y redirigir
   `a-jalar.vercel.app` al nuevo para no duplicar contenido.

3. **Netlify**: los subdominios comodín solo están disponibles en planes de
   pago y hay que pedirlos al soporte. Para los sitios que solo vivan allí,
   añadir el dominio individual al sitio con su CNAME.

4. Repetir por cliente. En el plan Hobby cada proyecto admite 50 dominios y aquí
   solo necesita uno, así que el límite no estorba.

## Lo que no se puede cerrar desde el repo

- **63 de las 96 webs solo conservan `dist/`**: no tienen `src/` ni
  `astro.config.mjs`, así que su despliegue está congelado y su canonical y
  sitemap seguirán apuntando al `.vercel.app`. Para corregirlo hay que
  recuperar el código fuente o reconstruirlas; asignar el subdominio sí
  funciona aunque el canonical quede desactualizado.
- Las 14 apps con configuración actualizada necesitan un despliegue nuevo para
  emitir el canonical correcto.
- El certificado TLS de cada subdominio lo emite la plataforma al verificarlo;
  hasta que el CNAME propague y el dominio esté añadido, el subdominio no
  responde.

## Comprobar

```sh
curl -sI https://a-jalar.sur-digital.com | head -1
curl -s https://a-jalar.sur-digital.com | grep -o '<link rel="canonical"[^>]*>'
```

En el sitio principal:

```sh
curl -s https://www.sur-digital.com/clientes/ | grep -o 'https://[a-z0-9-]*\.sur-digital\.com' | sort -u | wc -l
```
