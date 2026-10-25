# Restaurant ODAAN — Beco dos Cavaleiros, Lisboa

Web estática em Astro para o **Restaurant ODAAN (Nepalese & Indian)**, restaurante nepalês e indiano no Beco dos Cavaleiros, 7, loja 11 (1100-131 Lisboa, Portugal), na Mouraria. Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», os pratos, galeria com as 10 fotos de Google Maps, horário com mapa e telefone, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Restaurant ODAAN (Nepalese & Indian)
- Morada: Beco dos Cavaleiros, 7, loja 11 · 1100-131 Lisboa
- Categorias: restaurante indiano, restaurante nepalês
- Avaliação: 4,8/5 com 2.917 críticas
- Telefone: 920 102 037 (+351 920 102 037)
- Horário: segunda, terça, sexta, sábado e domingo 11:00–23:00; quarta e quinta fechado
- Acessibilidade: a ficha indica que não tem entrada acessível a pessoas em cadeiras de rodas nem estacionamento acessível
- Ficha no Tripadvisor: 4,9/5 com mais de 770 avaliações, faixa de preço €, opções vegetarianas, veganas e sem glúten
- Site próprio: a ficha não indica nenhum

A casa **não publica carta com preços em linha**. A secção «A carta» mostra apenas os pratos que aparecem nas fotografias do perfil de Google Maps e que as críticas citam — momo, thali, panipuri, butter chicken, naan e arrozes —, e não cita valores. Nada é inventado sobre preços, acessibilidade, reservas ou serviços que a ficha não publique.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Confirmar com o restaurante pratos, horário e forma de reserva antes de divulgar a web.
- Domínio definitivo: agora `https://restaurant-odaan.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.

## Comandos

```bash
bun install          # desde a raiz do monorepo
bunx astro dev       # desenvolvimento
bunx astro build     # gera dist/
bunx tsc -p tsconfig.json --noEmit
```

`astro check` não funciona neste repo porque usa TypeScript 7; valida-se com `tsc`.

## Crédito

O pé de página liga a **Sur Digital** → https://sur-digital.vercel.app/
