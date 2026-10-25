# Nu Bitoq — Praceta 5 de Outubro, 9 (Amora, Seixal)

Web estática em Astro para o **Restaurante Nu Bitoq**, especialidade em bitoques na Praceta 5 de Outubro, 9 (2845-425 Amora, Seixal). Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «escolhe, prova, repara no molho», «A casa», a carta com os treze bitoques e as entradas, críticas do Google, galeria com 8 fotos de Google Maps, horário com mapa e perguntas frequentes.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as 10 fotos descarregadas do perfil de Google Maps, com o seu `.maps-manifest.json` (duas são o mesmo prato em recortes diferentes; usam-se 9).
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: RESTAURANTE NU BITOQ
- Morada: PC 5 de Outubro 9 · 2845-425 Amora (a rua é a Praceta 5 de Outubro, confirmada por OSM e pelas redes da casa)
- Categoria: restaurante
- Avaliação: 4,5/5 com 371 críticas
- Telefone: 934 718 760 (+351 934 718 760)
- Horário: segunda encerrado; terça a sábado 12:00–15:00 e 19:00–23:00; domingo só 12:00–15:00
- Acessibilidade: lugares para pessoas em cadeiras de rodas
- Descrição da própria casa: «Restaurante de especialidade em Bitoques, diferenciados, únicos e exclusivos.»

## De onde vem a carta

A ficha de Google não publica carta. Os pratos e preços vêm do **menu de entrega que a casa publica no Uber Eats** (outubro de 2026): 13 bitoques entre 13,50 € e 21,50 € (alcatra, lombo, javali, salmão, atum, frango e beringela), entradas entre 5,50 € e 15,50 €. No salão os preços podem ser diferentes — a web diz isso na nota da carta e nas perguntas frequentes.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Confirmar com a casa os preços praticados no salão e se a carta mudou desde outubro de 2026.
- Domínio definitivo: agora `https://nu-bitoq.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.
- Se existir link próprio de reservas ou Instagram oficial, acrescentar aos links do rodapé e da secção «Visitar».

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
