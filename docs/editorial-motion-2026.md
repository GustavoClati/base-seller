# Revisão editorial com imagens e movimento — 12/09/2026

Esta revisão complementa e substitui os trechos sobre hero, pausa e movimento da especificação anterior. Mantém o produto PDF, os dados dos entregáveis, o checkout e a identidade escura/amarela.

## Entrega

- Hero com notebook e celular fotorrealistas, gerados com as páginas reais como referências.
- Comparativo antes/depois da pesquisa, sem prometer margem, produto campeão ou vendas.
- Quatro objeções antes da oferta, reutilizando o accordion acessível existente.
- Entrada de conteúdo, parallax discreto nas imagens, inclinação por mouse no hero e progresso da leitura.
- Remoção do botão de pausa do NAV. Movimento automático é finito; os demais efeitos dependem da interação. Preferência do sistema por movimento reduzido é respeitada.

## Imagens e conjunto de prompts

Modo: ferramenta integrada Image Gen, sem CLI/API adicional. Briefs finais normalizados abaixo; todas as cenas são ilustrações geradas, não depoimentos ou evidência de clientes.

| Arquivo final | Brief de geração / edição |
| --- | --- |
| `public/images/editorial-2026/hero-devices.webp` | Product mockup: fotografia fotorrealista de notebook de alumínio grafite com teclado, trackpad e dobradiça visíveis, em vista frontal de três quartos, e smartphone à frente à direita. Fundo carvão, luz de contorno quente discreta. Usar as páginas PC e Mobile fornecidas como referências para as telas. Não criar dashboard ou aplicativo fictício. |
| `public/images/editorial-2026/before-search.webp` | Photorealistic natural: mesa de pesquisa de um pequeno revendedor com notebook, muitas abas, produtos genéricos, anotações, calculadora e amostras. Luz fria, composição editorial horizontal. Sem ganhos financeiros, marcas de terceiros, clientes ou depoimentos. |
| `public/images/editorial-2026/after-research.webp` | Photorealistic natural: mesa organizada com notebook, calculadora, caderno e pequenas amostras, iluminada pelo sol quente. Edição final: substituir somente o conteúdo da tela pelo PDF da Base do Seller fornecido, preservando mesa, iluminação, enquadramento e objetos; não exibir loja ou dashboard inventado. |
| `public/images/editorial-2026/validate-costs.webp` | Photorealistic natural: natureza-morta editorial em mesa grafite com calculadora, caderno, caneta, lupa, pequena caixa e amostra de utensílio doméstico. Luz solar quente. Sem dispositivos, texto promocional, gráficos de receita ou promessas de lucro. |

Os quatro WebP têm 1536 × 1024 px; juntos, 509.842 bytes. Conversão mecânica com Sharp, qualidade 84. O Next Image serve tamanhos responsivos; apenas o hero recebe prioridade.

Conceito de seção: `docs/redesign-concepts-2026/07-before-after-editorial.png`. Brief: seção independente de antes/depois em fundo carvão, título branco/amarelo, duas fotografias lado a lado, três linhas com ícones de menos/check e ressalva de que a base organiza a pesquisa. Copy implementada em HTML, não embutida em imagem.

## Revisão visual / ledger de fidelidade

Conceito de 1536 × 1024 e implementação em viewport 1536 × 1024 inspecionados com `view_image` na mesma rodada. Também verificados 768 × 1024 e 390 × 844, além de captura mobile de seção em 390 × 1024. A seção completa tem altura própria, em vez de forçar a altura do conceito.

| Ponto | Evidência / decisão |
| --- | --- |
| Copy | Título, introdução e seis linhas do comparativo preservam o conceito. Acrescentado “Cenas ilustrativas.” como diferença intencional de transparência. |
| Layout | Duas colunas abertas com fotos acima das listas, sem cartões aninhados. Mobile empilha antes e depois. |
| Tipografia | Manrope/Inter e escala da landing existente preservados; títulos menores e gutters maiores que o conceito para continuidade entre seções. Diferença intencional. |
| Paleta | Fundo carvão e amarelo existente preservados, sem overlay de cor nas fotos. |
| Imagens | Substituídas as fotos de estudo do conceito por assets próprios, com tela real do PDF no depois. Corrigida a primeira geração que mostrava uma interface de loja. |
| Ícones | Menos contornado cinza e check preto em círculo amarelo. Seta entre imagens adicionada para indicar a transformação, oculta no mobile. |
| Espaçamento e enquadramento | Contêiner da página mantido; fotos em 16:10 e parallax com margem extra de imagem para não revelar bordas vazias. |
| Movimento | Revelações chegam a opacidade 1; captura inicial durante a entrada foi refeita após estabilização. Parallax muda com a rolagem; sem movimento na preferência reduzida. |

Copy acima da dobra: título, subtítulo, oferta e CTA anteriores preservados. Mudanças intencionais: retirada da pausa, item “O que muda” no menu, link “Veja o que muda” no rodapé do hero e legendas explícitas “PDF para PC” / “PDF Mobile”. Nenhuma promessa de ganhos adicionada.

A implementação foi conferida contra a direção visual e o conceito, com as diferenças intencionais registradas acima. Não é uma reprodução pixel a pixel do estudo de seção; prioriza continuidade com a landing existente. Não ficaram divergências materiais de leitura, corte ou carregamento nos viewports testados.

## Verificação

- Lint, TypeScript e build de produção aprovados.
- Primeiro teste via navegador integrado: DOM, navegação e objeção de margem. Playwright com Edge usado para viewports reproduzíveis e capturas, pois o controle de viewport/captura necessário não estava disponível no IAB.
- Desktop, tablet e celular: sem overflow horizontal, imagens carregadas, sem erros de console ou runtime.
- Hero e CTA corretos; ausência do botão de pausa e dos dispositivos desenhados em CSS.
- Comparativo, parallax, progresso de leitura, tabs PC/Mobile por clique e teclado, categorias, objeções, link para oferta, FAQ e menu mobile funcionando.
- Preferência reduced-motion: imagens estáticas, barra de progresso ausente, conteúdo e accordion utilizáveis.
- Checkout Cakto preservado; nenhuma compra de teste realizada.

Scripts e capturas de QA ficaram fora do repositório. Publicação segue o fluxo existente GitHub → Vercel.
