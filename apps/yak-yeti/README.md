# Yak & Yeti — Calçada de Santo André, Lisboa

Web estática em Astro para o **Yak & Yeti (Lisbon)**, restaurante nepalês e indiano na Calçada de Santo André, 17 (1100-466 Lisboa, Portugal), na Mouraria. Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», carta com preços, galeria com as 10 fotos de Google Maps, horário com mapa, reservas e telefone, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Yak & Yeti (Lisbon)
- Morada: Calçada de Santo André, 17 · 1100-466 Lisboa
- Categorias: restaurante nepalês, restaurante (com cozinha indiana)
- Avaliação: 4,7/5 com 2.619 críticas
- Telefone: 21 822 0350 (+351 21 822 0350)
- Horário: todos os dias 11:00–23:00, sem dia de fecho
- Acessibilidade: a ficha indica apenas que não tem estacionamento acessível a pessoas em cadeiras de rodas
- Descrição do próprio espaço: a cozinha do Nepal é simples e cheia de especiarias (dal com arroz, sag de espinafres, masu em caril, tarkali de legumes)
- Site indicado na ficha: um Linktree com as ligações da casa (https://linktr.ee/yakandyetirestaurants)
- Reservas: página da casa no TheFork (https://www.thefork.pt/restaurante/yak-yeti-lisbon-r467591), com preço médio de 15 €
- Entrega: página da casa no Uber Eats

A casa não tem site próprio. A secção «A carta» reproduz a carta e os preços do menu digital que a casa distribui a partir do seu Linktree (PDF «Yak Yeti Menu» em cardapio.menu, com a morada e o telefone da casa): entradas nepalesas, momo, thukpa, thali, tandoor, caris, biryani, pães, chowmein e bebidas. Quando um prato não traz preço na carta, aparece sem valor. Nada é inventado sobre acessibilidade, serviços ou horários que a ficha não publique.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Confirmar com o restaurante carta, preços e horário antes de divulgar a web.
- Domínio definitivo: agora `https://yak-yeti.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.

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
