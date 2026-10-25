# Jardim das Cerejas — Calçada do Sacramento, Chiado (Lisboa)

Web estática em Astro para o **Jardim das Cerejas**, restaurante vegano com buffet na Calçada do Sacramento, 36 (1200-394 Lisboa, Portugal). Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «o buffet em três tempos», «A casa», o buffet prato a prato, críticas do Google, galeria com 9 fotos de Google Maps, horário com mapa, telefone e perguntas frequentes.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as 10 fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Jardim das Cerejas
- Morada: Calçada do Sacramento, 36 · 1200-394 Lisboa (Chiado, junto ao Largo de São Carlos)
- Categorias: restaurante vegano, restaurante vegetariano, restaurante
- Avaliação: 4,6/5 com 2 210 críticas
- Telefone: 21 346 9308 (+351 21 346 9308)
- Horário: todos os dias, 12:00–15:30 e 19:00–23:00 (sem dia de fecho)
- Fachada: «Jardim das Cerejas» e «Restaurante vegan»
- Descrição do buffet (crítica citada): «6 pratos quentes, 2 frios e variedade de saladas»
- Não tem site próprio nem reservas em linha; a ficha não publica preços

A casa não publica ementa nem preços: a secção do buffet descreve o que aparece nas fotografias e nas críticas (sopa do dia, seis pratos quentes, dois frios, saladas e doçaria) e diz explicitamente que muda todos os dias. O preço é apresentado como fixo por pessoa, com bebidas à parte, sem inventar valores.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Confirmar com o restaurante o preço do buffet (almoço e jantar) e se a doçaria está incluída; se confirmarem, acrescentar o valor em `src/data/site.ts` e na secção do buffet.
- Domínio definitivo: agora `https://jardim-das-cerejas.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.
- Confirmar o horário em feriados, que a ficha de Google não distingue.

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
