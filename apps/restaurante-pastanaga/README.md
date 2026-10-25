# Restaurante Pastanaga — Travessa dos Pescadores, Lisboa

Web estática em Astro para o **Restaurante Pastanaga**, cozinha portuguesa na Travessa dos Pescadores, 27 (1200-328 Lisboa, Portugal). Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», pratos que se repetem nas críticas, galeria com as 9 fotos de Google Maps, horário com mapa, telefone/reservas, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies.

## Dados da ficha de Google Maps

- Nome: Restaurante Pastanaga
- Morada: Travessa dos Pescadores, 27 · 1200-328 Lisboa
- Categorias: restaurante de cozinha tradicional portuguesa, restaurante
- Avaliação: 4,8/5 com 925 críticas
- Telefone: 932 910 125 (+351 932 910 125)
- Horário: todos os dias 18:00–23:30, **terça-feira encerrado**
- Acessibilidade: lugares para pessoas em cadeiras de rodas; sem estacionamento acessível
- Descrição do próprio espaço: «A comida da Ana: diferente, única. Experimenta.»
- Críticas citadas: ambiente acolhedor, serviço simpático, acolhimento, espaço, decoração e comida
- Reservas: telefone e página pública no TheFork (https://thefork.pt/restaurante/pastanaga-r728295)

A ficha **não publica carta nem preços**, e o domínio que a ficha indica (pastanaga.pt) abre um Google Sites com acesso restrito. Por isso a secção «A mesa» reúne apenas pratos que se repetem nas críticas e listas públicas — sopa de peixe, gambas ao alho, lombo de pato com arroz, atum, cocktails — sem preços inventados.

## Pendente antes de publicar

- NIF/NIPC, denominação social e e-mail do titular em `src/pages/aviso-legal.astro`.
- Domínio definitivo: agora `https://restaurante-pastanaga.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.
- Confirmar com o restaurante o horário e a carta antes de divulgar a web.

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
