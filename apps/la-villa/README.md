# La Villa — Campo dos Mártires da Pátria, Lisboa

Web estática em Astro para o **La Villa**, restaurante italiano no Campo dos Mártires da Pátria, 40-41 (1150-317 Lisboa, Portugal), dentro do jardim. Os textos estão em português de Portugal.

## Conteúdo

- Portada (pt-PT): hero, «A casa», carta, galeria com as 10 fotos de Google Maps, horário com mapa, reservas e telefone, perguntas frequentes e aviso legal.
- `src/data/site.ts`: todos os textos e dados do negócio num único sítio.
- `src/assets/fotos/`: as fotos do perfil de Google Maps, com o seu `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidade e cookies, já com os dados de identificação da casa.

## Dados da ficha de Google Maps

- Nome: La Villa
- Morada: Campo dos Mártires da Pátria, 40-41 · 1150-317 Lisboa
- Categoria: restaurante italiano
- Avaliação: 4,6/5 com 2.919 críticas
- Telefone: 21 050 8171 (+351 21 050 8171) · e-mail lavillalisboa@gmail.com
- Horário: todos os dias 12:00–23:30, sem dia de fecho
- Acessibilidade: estacionamento, entrada, lugares e WC acessíveis; sem anel de indução magnética
- Etiqueta da Google: «Aceita cães»
- Serviços anunciados pela casa: esplanada, takeaway, eventos privados, casamentos, wi-fi gratuito, zona para fumadores
- Titular e NIF publicados pela casa: Klodjan Taci · 516010042

A ficha **não publica carta nem preços** e a casa não tem preços publicados em página própria. A secção «A carta» reúne apenas os pratos que a casa e a imprensa descrevem desde a abertura de 2021 (entradas, pizzas de forno de lenha, pastas caseiras, saladas e bebidas), sem valores inventados. O preço médio citado (10–20 €) vem da ficha técnica publicada na imprensa em 2021.

## Pendente antes de publicar

- Confirmar com o restaurante a carta e o preço médio atuais antes de divulgar a web.
- Domínio definitivo: agora `https://la-villa.vercel.app`. Alterá-lo em `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` e no canonical do aviso legal.

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
