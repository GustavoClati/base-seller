# Fidelity ledger — landing Base do Seller 2026

| Ponto | Evidência no conceito | Evidência no render final | Resultado |
| --- | --- | --- | --- |
| Primeira dobra | Headline curta à esquerda, produto PC/Mobile à direita, CTA imediato | `2026-redesign-hero-1536x1024.png` preserva hierarquia, alinhamento, CTA e foco único | Fiel |
| Produto real | Páginas autênticas em molduras próprias por formato | Assets WebP foram renderizados diretamente dos PDFs PC e Mobile enviados | Fiel |
| Paleta | Carvão/azul profundo, branco suave e amarelo seletivo | Tokens `--seller-bg`, `--seller-text` e `--seller-yellow` correspondem ao conceito e aos PDFs | Fiel |
| Ritmo da página | Seções abertas, listas, trilho e uma moldura forte de oferta | Render completo alterna demonstração, trilho, diretório, split editorial, oferta e FAQ | Fiel |
| Tipografia | Títulos geométricos grandes e textos de apoio arejados | Manrope/Inter, tracking e escalas responsivas mantêm a personalidade | Fiel |
| Categorias | Diretório editorial com contagens em amarelo | Oito linhas usam os nomes, contagens e páginas da edição PC real | Fiel |
| Adequação | Contraste explícito entre pesquisa e promessa | Seção declara o público e os limites sem resultado garantido | Fiel |
| Oferta | Dois formatos, preço e CTA em um único foco | Preço dinâmico, itens reais e checkout preservado em uma moldura única | Fiel |
| Mobile | Composição própria, CTA grande, produto dentro da largura e menu compacto | `2026-redesign-mobile-390x844.png` não tem overflow e mantém a ação principal imediata | Fiel |
| Interação | Tabs, hover do CTA, FAQ e pausa de movimento | Estados foram exercitados no navegador e confirmados por ARIA/computed style | Fiel |

## Ajustes realizados após a comparação

- O CTA compacto do cabeçalho foi removido abaixo de 900 px porque a primeira captura móvel mostrou quebra em três linhas.
- As contagens antigas por categoria foram substituídas pelas contagens presentes nos PDFs atuais.
- `31 páginas` foi substituído por `34 páginas PC` e `89 páginas Mobile`.
- O grupo VIP foi removido da oferta porque os entregáveis definidos são os dois PDFs.
- O favicon foi incluído para eliminar a requisição 404 observada no primeiro smoke test.
- O CTA móvel fixo passou a desaparecer sobre oferta, FAQ e rodapé.

## Desvios intencionais

- O conceito 1536 × 1024 posiciona o hero em três linhas; em 1280 px o título pode usar quatro linhas para preservar escala e legibilidade.
- A moldura de dispositivo é construída em CSS; as páginas exibidas dentro dela são as imagens reais e não recebem tint/overlay.
- O preço permanece dinâmico. A captura usa o fallback/publicação atual de R$ 29,89, sem fixar esse valor no componente.

## Veredito

A implementação foi comparada com os seis conceitos e atende ao nível de fidelidade de agência: composição, copy, paleta, tipografia, tratamento de produto, espaçamento, responsividade e interações foram preservados sem desvios materiais restantes.
