# Salsa — Rua das Escolas Gerais, 57 (Alfama, Lisboa)

Web estática em Astro para o **Salsa**, restaurante e bar na Rua das Escolas Gerais, 57 (1100-218 Lisboa), em Alfama. Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «entrar, partilhar, ficar», «A casa», a carta, três críticas do Google, galeria com 9 fotos de Google Maps, horário com mapa e 7 perguntas frequentes.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as 10 fotos do perfil de Google Maps, com o seu `.maps-manifest.json` (a fachada vai no hero e as restantes na galeria).
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Salsa (a casa assina «Salsa Restaurant & Bar»; no Tripadvisor aparece como «Salsa Restaurant e Bar»)
- Morada: Rua das Escolas Gerais 57 · 1100-218 Lisboa (Alfama / São Vicente)
- Categorias: restaurante de cozinha tradicional portuguesa, restaurante
- Avaliação: 4,6/5 com 867 críticas
- Telefone: 21 886 0883 (+351 21 886 0883)
- Horário: segunda encerrado; terça a domingo 12:00–23:00 (sem fechar para o almoço)
- Acessibilidade: lugares para pessoas em cadeiras de rodas; sem estacionamento acessível
- Descrição da própria casa: «We serve tipical portugues food.»

## De onde vem a carta

As entradas e os preços vêm da **página de menu fotografada no perfil de Google Maps** (gyōza 3,99 €, edamame 2,99 €, karaage 4,99 €, chahan 4,49 €, chasu 3,99 €, sonomono 2,49 €). Os pratos portugueses (bacalhau à Brás, bacalhau assado, arroz de polvo, sopa de legumes) e a massa de marisco aparecem nas críticas e nas fotografias, **sem preço publicado**: a web apresenta-os sem inventar valores e explica isso na nota da carta.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Confirmar com a casa a carta completa e os preços dos pratos principais; se fornecerem, acrescentar em `src/data/site.ts`.
- Domínio definitivo: agora `https://salsa-alfama.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.
- Se existir site próprio, Instagram ou plataforma de reservas, acrescentar aos links.

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
