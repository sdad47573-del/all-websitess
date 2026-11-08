# 8848 Restaurante e Snack Bar — Estrada de Benfica, Lisboa

Web estática em Astro para o **8848 Restaurante e Snack Bar**, restaurante e snack bar na Estrada de Benfica, 554B (1500-107 Lisboa, Portugal), em Benfica. Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», carta com preços, galeria com as fotos de Google Maps, horário com mapa e telefone, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: 8848 Restaurante e Snack Bar
- Morada: Estrada de Benfica, 554B · 1500-107 Lisboa
- Categoria: restaurante italiano
- Avaliação: 4,8/5 com 24 críticas
- Telefone: 920 183 182 (+351 920 183 182)
- Horário: todos os dias 11:00–23:30
- Acessibilidade: a ficha não publica nenhum atributo de acessibilidade
- Site próprio: a ficha aponta para um Google Sites em edição, sem site público

A carta é a que a casa expõe na rua, fotografada no perfil de Google Maps: pasta (5,50–6,50 €), risotto (5,50–6,50 €), bitoque (5,00 €) e gyoza (4,00 € por 10 unidades), com os preços em euros e IVA incluído. Os petiscos que só aparecem nas fotografias da fachada (mozzarella com tomate e manjericão, panipuri e folhado de queijo da serra) estão sem preço. Nada é inventado sobre preços, acessibilidade ou reservas que a casa não publique.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Confirmar com o restaurante a ementa, os preços e o horário antes de divulgar a web.
- Domínio definitivo: agora `https://restaurante-8848.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.

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
