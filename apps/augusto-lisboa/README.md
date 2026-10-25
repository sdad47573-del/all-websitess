# Augusto Lisboa — brunch em Lisboa

Web estática em Astro para o **Augusto Lisboa**, café de brunch na Rua de Santa Marinha, 26 (1100-491 Lisboa, Portugal). Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», brunch, galeria com as 9 fotos de Google Maps, horário com mapa, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Augusto Lisboa
- Morada: Rua de Santa Marinha, 26 · 1100-491 Lisboa
- Categorias: restaurante descontraído com brunch e café
- Avaliação: 4,8/5 com 3.577 críticas
- Horário: segunda a sexta 8:30–16:00; sábados e domingos 8:30–17:00
- Acessibilidade: sem entrada acessível a cadeiras de rodas e sem estacionamento acessível
- Descrição do próprio espaço: café de especialidade e brunch todo o dia, comida caseira com ingredientes locais e de qualidade, torradas de pão de massa-mãe, tábuas portuguesas, gelado artesanal e banana bread
- Críticas citadas: espaço muito bem decorado, equipa simpática, boa comida, opções para alergia a ovo e outro espaço em Belém

A ficha **não publica telefone, e-mail, site próprio, carta completa nem preços** (Google mostra «Adicionar telefone» e «Adicionar Website»). A página reúne só o que está publicado; a ficha de Google Maps é o único canal.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Domínio definitivo: agora `https://augusto-lisboa.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.
- Confirmar com o local o horário antes de divulgar a web.

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
