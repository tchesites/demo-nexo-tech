# Nexo Tech (demo)

- **Cliente:** Nexo Tech — *marca fictícia (projeto demonstrativo)*
- **Entidade:** tche-sites
- **Stack:** astro
- **Status:** ativo
- **Repo:** `tchesites/demo-nexo-tech` — `git@github.com-tchesites:tchesites/demo-nexo-tech.git`
- **No ar:** https://tchesites.github.io/demo-nexo-tech/
- **Como rodar:** `npm install` · `npm run dev` (`http://localhost:4321/demo-nexo-tech/`) · `npm run build` · `npm run preview`

## Sobre

Demo de site institucional para assistência técnica de celulares, derivado do
layout de uma proposta da agência. Mantém a direção visual original — azul-marinho
profundo, azul elétrico, ciano e âmbar de alerta — e a estrutura de bancada:
ficha de entrada interativa, tabela de preços, garantia e cobertura.

**Nada aqui é dado real:** marca, endereço, telefone, WhatsApp, Instagram,
Facebook e avaliações são fictícios. O rodapé traz o aviso de projeto
demonstrativo.

## Dados fictícios

| Item | Valor |
|---|---|
| Marca | Nexo Tech — assistência técnica de celulares |
| Cidade | Canoas/RS — Centro |
| Endereço | Rua das Araucárias, 210 · CEP 92310-000 |
| WhatsApp | `wa.me/5551900000000` |
| Instagram (texto) | `@nexotech.assistencia` — o link abre `@tchesites` |
| Facebook | `example.com/facebook` |
| Cobertura | Canoas, Porto Alegre e região |
| Preços | tela R$ 149 · bateria R$ 120 · conector R$ 100 (a partir de) |
| Garantia | 90 dias |

## Identidade visual

- **Paleta:** preto/azul-marinho, azul elétrico e ciano; âmbar só como alerta.
- **Tipografia:** Archivo (títulos) e Instrument Sans (texto).
- **Logo:** wordmark “NX / NEXO TECH” no lugar do logo do cliente.
- **Imagem:** ilustração técnica em SVG — o projeto não usa fotos.

## Estrutura

- `src/pages/index.astro` — página única (hero, serviços, como funciona, garantia, assinatura, compra/venda, local, FAQ)
- `src/data/negocio.js` — dados fictícios, serviços, garantia e FAQ
- `src/components/QuoteCard.astro` — ficha de entrada interativa
- `src/components/` — Header, Footer, Logo e ícones
- `public/` — favicon, apple-touch-icon, OG image, robots e sitemap

## Decisões

- **Design herdado:** paleta, fontes, layout e componentes preservados.
- **Ficha de entrada:** problema + modelo geram estimativa e mensagem pronta no WhatsApp.
- **Sem fotos de cliente:** a ilustração técnica em SVG foi mantida.
- **Instagram:** o texto é fictício, mas o `href` e o `sameAs` apontam para
  `https://www.instagram.com/tchesites/`.
- **WhatsApp, telefone e Maps fictícios;** o mapa abre o Centro de Canoas.
- **Indexável por padrão**, canonical e sitemap no GitHub Pages.

## Deploy

Em **https://tchesites.github.io/demo-nexo-tech/**, via GitHub Pages com
`.github/workflows/deploy.yml` (`withastro/action` + `deploy-pages`). O repo é
público, com o topic `demo`, e o Pages usa **GitHub Actions** como source.

Qualquer push na `main` builda e publica.
