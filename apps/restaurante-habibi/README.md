# Restaurante Habibi — R. Cavaleiro de Oliveira, Lisboa

Web estática em Astro para o **Restaurante Habibi**, cozinha síria e shawarma halal na R. Cavaleiro de Oliveira, 39D (1170-088 Lisboa, Portugal). Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», carta com preços, galeria com as 10 fotos de Google Maps, horário com mapa, telefone e entregas, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Restaurante Habibi
- Morada: R. Cavaleiro de Oliveira, 39D · 1170-088 Lisboa
- Categorias: restaurante sírio, árabe, de brunch, de falafel, familiar, halal, de almoço, do Médio Oriente, de shawarma e vegetariano
- Avaliação: 4,9/5 com 1.586 críticas
- Telefone: 21 813 1655 (+351 21 813 1655)
- Horário: terça a domingo 12:00–22:30, **segunda-feira encerrado**
- Descrição do próprio espaço: «Comida de Médio Oriente & Shawarma (Halal)», publicada em português, árabe e inglês
- Críticas citadas: comida preparada na hora, bons preços, menus variados
- Entregas: menu próprio no Uber Eats e no Bolt Food, a partir da mesma morada

A ficha **não publica carta nem preços**. A carta da secção «A carta» é a do menu de entrega da própria casa (Uber Eats e Bolt Food), com os preços publicados nesse menu; a sala pode praticar outros valores. Não se inventaram pratos, horários nem serviços.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Domínio definitivo: agora `https://restaurante-habibi.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.
- Confirmar com o restaurante horário e preços da sala antes de divulgar a web.

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
