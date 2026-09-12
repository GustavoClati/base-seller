# Base do Seller — redesign 2026

## Fonte de verdade

- `Base_do_Seller_2026_PC.pdf`: 34 páginas, 1280 × 800 pt.
- `Base_do_Seller_2026_MOBILE.pdf`: 89 páginas, 432 × 864 pt.
- As duas edições apresentam a mesma base em formatos próprios para computador e celular.
- Dados extraídos dos entregáveis: 168 registros, 8 segmentos, 127 contatos/WhatsApp e 147 links de catálogo.
- Os arquivos informam que a edição não inclui nova verificação dos fornecedores; canais e condições devem ser confirmados antes da compra.

## Conceitos de referência

1. `docs/redesign-concepts-2026/01-hero-desktop.png`
2. `docs/redesign-concepts-2026/02-material-desktop.png`
3. `docs/redesign-concepts-2026/03-process-categories-desktop.png`
4. `docs/redesign-concepts-2026/04-audience-desktop.png`
5. `docs/redesign-concepts-2026/05-offer-faq-desktop.png`
6. `docs/redesign-concepts-2026/06-hero-mobile.png`

## Direção visual

- Paradigma: editorial de produto digital, com a própria diagramação dos PDFs como linguagem de marca.
- Fundo: carvão/azul-noturno verdadeiro (`#080d11` e `#05090c`), sem aquecimento do neutro.
- Destaque: amarelo suave (`#f7d34e`) usado em CTA, ênfases e pequenos marcadores.
- Texto: branco suave (`#f5f4ef`), apoio azulado (`#aab4bd`) e linhas grafite translúcidas.
- Tipografia: Manrope para títulos e controles; Inter para conteúdo.
- Contêiner: até 1440 px, com gutters fluidos e ritmo vertical entre 104 e 152 px no desktop.
- Geometria: poucas superfícies fechadas; prioridade para linhas, índices, listas e composições abertas.
- Imagens: páginas reais sem overlay de cor; molduras de dispositivo discretas e sombras profundas.

## Arquitetura e ordem

1. Cabeçalho quieto com marca, navegação, pausa de animações e CTA.
2. Hero com oferta, CTA, versões PC/Mobile e quatro fatos do material.
3. Demonstração dos entregáveis com seletor de formato acessível.
4. Processo de consulta em quatro passos.
5. Diretório aberto com os oito segmentos e contagens reais.
6. Adequação do público e limites da oferta.
7. Oferta com preço configurável, dois PDFs e checkout preservado.
8. FAQ e rodapé legal.

## Componentes

- `TrackedCta`: CTA único com hover, pressão e rastreamento existente.
- `ProductShowcase`: composição PC/Mobile com páginas reais, flutuação e inclinação limitada ao cursor no desktop.
- `FormatPreview`: tabs com seleção PC/Mobile, painel e transição curta de profundidade.
- `AmbientLight`: iluminação localizada que pausa fora da área visível.
- `MotionToggle`: interrupção explícita dos movimentos contínuos.
- `Reveal`: entrada única durante a rolagem, sem repetir ao retornar.
- `Accordion`: FAQ por teclado com estado expandido e chevron animado.
- `MobileMenu`: navegação touch-safe para telas pequenas.

## Copy permitida acima da dobra

- Marca: `BASE DO SELLER`.
- Navegação: `O material`, `Como consultar`, `Categorias`, `Dúvidas`.
- H1: `Encontre fornecedores. Comece com uma base.`
- Apoio: `Receba duas versões do mesmo conteúdo em PDF — uma para computador e outra para celular — com contatos e catálogos clicáveis organizados por categoria.`
- CTA: `QUERO RECEBER OS PDFs`.
- Confiança: `Compra segura • Acesso após a confirmação`.
- Formatos: `PC · 34 páginas`, `Mobile · 89 páginas`.
- Fatos: `168 registros`, `8 segmentos`, `127 contatos`, `147 catálogos`.

## Movimento e acessibilidade

- Movimento contínuo apenas na iluminação e nas duas molduras do hero.
- `IntersectionObserver`/`useInView` pausa iluminação e flutuação fora da área visível.
- O cursor altera levemente a profundidade apenas dentro da composição de produto e apenas com mouse.
- `prefers-reduced-motion` remove animações e mantém todo o conteúdo visível.
- Controle de pausa no cabeçalho define `data-motion="paused"` no documento.
- Todos os controles têm foco visível; tabs e FAQ expõem os estados ARIA.
- No mobile, o layout não depende de hover, não cria rolagem horizontal e esconde o CTA fixo sobre oferta, FAQ e rodapé.

## Integrações preservadas

- CTAs continuam consumindo `getCheckoutHref()` e `NEXT_PUBLIC_KIWIFY_CHECKOUT_URL`.
- Preço e condições continuam vindo de `siteConfig.offer` e variáveis públicas.
- `TrackedCta` mantém `cta_click` e `begin_checkout` sem duplicação.
- `Accordion` mantém `faq_open`.
- Páginas legais e rotas existentes permanecem intactas.
