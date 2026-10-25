# Restaurante Das Marias — Rua Cidade de Tete, Lisboa

Web estática em Astro para o **Restaurante Das Marias**, restaurante de comida portuguesa na Rua Cidade de Tete, 31 (1800-128 Lisboa, Portugal), na Encarnação, junto ao aeroporto. Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», carta com preços, galeria com as fotos de Google Maps, horário com mapa e telefone, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Restaurante Das Marias
- Morada: Rua Cidade de Tete, 31 · 1800-128 Lisboa
- Categorias: restaurante, restaurante que serve pequenos-almoços, café
- Avaliação: 4,5/5 com 236 críticas
- Telefone: 938 073 520 (+351 938 073 520)
- Horário: todos os dias 09:00–15:00; segunda a quinta também 18:00–21:00; sexta a domingo só almoço
- Acessibilidade: a ficha assinala entrada, lugares e estacionamento acessíveis a pessoas em cadeiras de rodas
- Descrição do próprio espaço: «Comida tradicional portuguesa»
- Site próprio: a ficha não indica nenhum

A carta é a que a casa tem nas mesas, fotografada no perfil de Google Maps: prato do dia (9 €, 10 € no dia de peixe, com sopa, prato principal, bebida, sobremesa e café), grelhados (12–15 €), peixe (15 €), omelete de cogumelos (10 €) e hambúrguer vegano (12 €). Os pratos que só aparecem nas críticas ou nas fotografias — espetadas, carne de porco à alentejana, arroz de tomate com peixe espada e peixe grelhado com legumes — estão sem preço. Nada é inventado sobre preços, acessibilidade ou reservas que a casa não publique.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Confirmar com o restaurante a carta, os preços e o horário antes de divulgar a web.
- Domínio definitivo: agora `https://restaurante-das-marias.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.

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
