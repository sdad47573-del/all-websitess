# Vela Branca — Rua dos Correeiros, Lisboa

Web estática em Astro para o **Vela Branca** (Near Me Vela Branca), restaurante de cozinha portuguesa e marisqueira na Rua dos Correeiros, 112 (1100-571 Lisboa, Portugal), na Baixa. Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», carta, galeria com as 10 fotos de Google Maps, horário com mapa, reservas e telefone, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Near Me Vela Branca
- Morada: R. dos Correeiros, 112 · 1100-571 Lisboa
- Categorias: restaurante, brunch, peixe, almoço, cozinha tradicional portuguesa e marisqueira
- Avaliação: 4,6/5 com 2.436 críticas
- Telefone: 920 038 770 (+351 920 038 770)
- Horário: todos os dias 12:00–23:00, sem dia de fecho
- Acessibilidade: a ficha indica apenas que não tem estacionamento acessível a pessoas em cadeiras de rodas
- Descrição do próprio espaço: cozinha portuguesa com ingredientes frescos e locais, com a paella de marisco e as sardinhas grelhadas como pratos de destaque
- Carta com preços e reservas: página da casa no TheFork (https://www.thefork.pt/restaurante/near-me-vela-branca-r835532)

A ficha **não publica carta nem preços** e a casa não tem site próprio. A secção «A carta» reúne apenas os pratos que a casa descreve, que aparecem nas fotografias do perfil e que se repetem nas críticas. Os únicos preços citados são os que a casa publica no TheFork: batatas fritas (3,90 €) e salada mista (4,90 €); o preço médio indicado é de 24 €.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Confirmar com o restaurante horário, carta e preços antes de divulgar a web.
- Domínio definitivo: agora `https://vela-branca.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.

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
