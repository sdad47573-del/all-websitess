# A Tasca do Béco — Calçada de Sant'Ana, 139 (Arroios, Lisboa)

Web estática em Astro para a tasca que a ficha de Google Maps publica como **«Traditional restaurant»**, na Calçada de Sant'Ana, 139 (1150-306 Lisboa, Portugal). Os textos estão em português de Portugal.

## Porque é que a web se chama A Tasca do Béco

A ficha de Google que serviu de ponto de partida tem o nome genérico «Traditional restaurant». A fotografia da porta, no mesmo perfil, mostra o letreiro e a ardósia manuscrita da casa: **A Tasca do Béco**. O número 139 por cima da porta confirma a morada. A web usa o nome da fachada e explica em «A casa» e nas perguntas frequentes que a ficha de Google aparece com o outro nome.

## Conteúdo

- Portada (pt-PT): hero, «a tasca em três gestos», «A casa», a ardósia com os preços, críticas do Google, galeria com as 5 fotos de Google Maps, localização com mapa e perguntas frequentes.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as 5 fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## De onde vem cada dado

- **Ficha de Google Maps**: nome «Traditional restaurant», morada «CC de Sant'Ana 139, 1150-113 Lisboa», categoria restaurante familiar, 4,7/5 com 15 críticas, sem telefone, sem site e sem horário publicados.
- **Morada corrigida**: a rua é a Calçada de Sant'Ana (OSM e a fotografia da porta, com o 139). O código postal usado é o do edifício, 1150-306.
- **Ardósia da porta** (foto do perfil, datada de 08.04.2026): sopa 2 €, pratos do dia e carnes a 9/10/18 €, grelhados a 12–14 €, bitoques e alheiras a 10 €, secção VEGAN a 10 € (soja e seitan). O prato do dia muda todos os dias.
- **Críticas**: três avaliações publicadas no Google (Pedro, Sandra T. e David P.), duas delas traduzidas do inglês e do espanhol.
- **Horário**: não existe em nenhuma fonte pública. A web diz isso e manda confirmar na ficha de Google Maps.

## Pendente antes de publicar

- NIF/NIPC, denominação social, e-mail e telefone em `src/pages/aviso-legal.astro`.
- Telefone e horário: se o restaurante os fornecer, acrescentar a `BUSINESS` (`phone`, `phoneHref`) e a `HOURS`, e voltar a pôr o botão de chamada na barra e no rodapé.
- Confirmar com a casa o nome comercial exato (Béco/Beco) e se os preços da ardósia de abril de 2026 continuam válidos.
- Pedir ao restaurante que altere o nome da ficha de Google de «Traditional restaurant» para o nome real.
- Domínio definitivo: agora `https://tasca-do-beco.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.

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
