# Está No Papo — Rua de São Miguel, 25 · Alfama, Lisboa

Web estática em Astro para a **Está No Papo**, tasca de cozinha tradicional portuguesa na Rua de São Miguel, 25 (1100-542 Lisboa). Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero com a fachada, «A casa», a ardósia da rua com a carta, galeria com as 9 fotos de Google Maps, horário com mapa, telefone, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Está No Papo
- Morada: Rua de São Miguel, 25 · 1100-542 Lisboa (Alfama)
- Categorias: restaurante de cozinha tradicional portuguesa, restaurante
- Avaliação: 4,4/5 com 492 críticas
- Telefone: 934 111 869 (+351 934 111 869)
- Horário: todos os dias 12:30–23:30; **domingo até às 23:00**
- Acessibilidade: sem estacionamento acessível e sem anel de indução magnética; a ficha não confirma lugares para pessoas em cadeiras de rodas
- Website: não publicado na ficha

As ardósias fotografadas à porta do estabelecimento dão a lista da casa: caldo verde, rissois de camarão, salsichas grelhadas, gambas à lagareiro; bacalhau à Lagareiro, à Brás e com natas, polvo à lagareiro, sardinhas, robalo, dourada, salmão e bife de atum; arrozes de marisco, polvo, camarão e lulas com camarão; e carne na brasa (bife à casa, bitoque, frango à piri-piri, secretos, picanha, costeleta, porco à alentejana e grelhado misto).

A casa **não publica preços** — nem na ficha de Google nem nas ardósias —, por isso a carta lista os pratos e não inventa valores. As críticas citadas são as três que a ficha mostra: preço acessível dos hambúrgueres e boa sangria, comida impecável no restaurante e na entrega em casa, e pratos de qualidade com espaço simpático.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Domínio definitivo: agora `https://esta-no-papo.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.
- Confirmar com o restaurante o horário, a carta e os canais de entrega antes de divulgar a web.

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
