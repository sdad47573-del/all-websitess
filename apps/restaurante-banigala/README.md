# BaniGala RESTAURANTE Lisbon — Rua do Benformoso, Lisboa

Web estática em Astro para o **BaniGala RESTAURANTE Lisbon**, restaurante paquistanês halal na Rua do Benformoso, 230 (1100-084 Lisboa, Portugal), na Mouraria. Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», carta com preços, galeria com as fotos de Google Maps, horário com mapa e telefone, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: BaniGala RESTAURANTE Lisbon
- Morada: Rua do Benformoso, 230 · 1100-084 Lisboa
- Categorias: restaurante asiático, restaurante paquistanês
- Avaliação: 4,6/5 com 754 críticas
- Telefone: 939 201 733 (+351 939 201 733), também indicado para WhatsApp no cartaz
- Horário: todos os dias 09:15–23:30
- Acessibilidade: a ficha assinala lugares e WC acessíveis a pessoas em cadeiras de rodas; não indica nada sobre a entrada nem sobre estacionamento
- Descrição do próprio espaço: «Halal Resturant»
- Site próprio: a ficha não indica nenhum

A carta é a do cartaz da casa, fotografado no perfil de Google Maps: «any dish in €5 including 3 tandoori bread» — biryani de frango, caril de frango, caril de borrego, daal maash, daal chana e mix vegetables, todos a 5 €, com três pães do tandoor. As bebidas vão dos 0,50 aos 1 € e os doces são vendidos ao quilograma. O frango tandoori e os doces aparecem sem preço. Nada é inventado sobre preços, acessibilidade ou reservas que a casa não publique.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Confirmar com o restaurante a carta, os preços e o horário antes de divulgar a web.
- Domínio definitivo: agora `https://restaurante-banigala.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.

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
