# Restaurante da Sé — Cruzes da Sé, Lisboa

Web estática em Astro para o **Restaurante da Sé**, cozinha portuguesa na Cruzes da Sé, 31A (1100-192 Lisboa, Portugal), em Alfama. Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», pratos que a casa serve, galeria com as 10 fotos de Google Maps, horário com mapa, reservas e telefone, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Restaurante da Sé
- Morada: Cruzes da Sé, 31A · 1100-192 Lisboa
- Categoria: restaurante de cozinha tradicional portuguesa
- Avaliação: 4,5/5 com 2.421 críticas
- Telefone: 21 886 2886 (+351 21 886 2886)
- Horário: todos os dias 10:30–23:30, sem dia de fecho
- Acessibilidade: lugares para pessoas em cadeiras de rodas
- Etiqueta da Google: Brunch
- Descrição do próprio espaço: «Eat. Drink. Love.»
- Reservas: página da casa no Resos (https://restaurante-da-se-1732222622.resos.com/booking)
- Carta com preços: publicada pela casa no TheFork (https://www.thefork.pt/restaurante/restaurante-da-se-r682389/menu)

A ficha **não publica carta nem preços**. A secção «Na mesa» reúne apenas os pratos que se repetem nas críticas, nas fotografias do perfil e nos excertos públicos da carta, sem preços inventados: os únicos valores citados são os que a casa publica no TheFork (pastéis de bacalhau, 12,90 €; paella de marisco, 20,90 €; preço médio 19 €).

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Domínio definitivo: agora `https://restaurante-da-se.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.
- Confirmar com o restaurante horário e preços antes de divulgar a web.

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
