# Fidelity ledger

## Fontes comparadas

- Conceito principal: `C:\Users\Gustavo\.codex\generated_images\019f9ac6-f113-7651-b16c-c37974fc94c7\call_61XyiwqpCeXU9DBkja2iyA0f.png` — 1505 × 1045.
- Render final: captura do servidor de produção no navegador integrado em 1505 × 1045.
- Viewports adicionais: 1440 × 900, 1280 × 800, 1024 × 768, 768 × 1024, 430 × 932, 390 × 844 e 375 × 812.

## Comparação

| Ponto | Conceito | Render | Resultado |
| --- | --- | --- | --- |
| Copy acima da dobra | Wordmark, quatro anchors, CTA, H1, apoio, dois CTAs e microcopy | Mesma lista, sem textos extras | Fiel |
| Composição | Copy à esquerda e base abstrata em perspectiva à direita | Mesma hierarquia e proporção responsiva | Fiel |
| Paleta | Fundo quase preto, superfícies azul-marinho, texto claro e dourado contido | Tokens implementados sem grandes áreas douradas | Fiel |
| Tipografia | Headlines Manrope-like, corpo Inter-like, tracking compacto | Manrope e Inter via `next/font`, escala fluida | Fiel |
| Header | Barra flutuante, navegação central em cápsula e CTA claro | Mesma anatomia; mobile simplifica para wordmark + CTA | Fiel |
| Visual abstrato | Planos, linhas e nós sem campos ou dados | Visual código-nativo substituível, sem interface simulada | Fiel |
| Botões | Superfície clara, texto escuro e seta dourada | Mesma família com hover, pressão e foco visível | Fiel |
| Continuidade | Fundo escuro contínuo e início da narrativa abaixo | Hero ocupa 100svh conforme o briefing; a narrativa surge ao rolar | Desvio intencional documentado |
| Mobile | Coluna única, botões amplos e visual compacto | Sem overflow; CTA primário visível nas quatro larguras móveis/tablet | Fiel |
| Motion | Reveal contido, profundidade lenta e progresso | Motion por transform/opacidade, scroll nativo e fallback reduzido | Fiel |

## Ajustes feitos durante QA

- A largura intrínseca do grid do hero foi limitada para remover clipping no mobile.
- O H1 desktop recebeu uma máscara mais larga e escala ajustada para preservar as duas linhas do conceito.
- Espaços explícitos foram adicionados onde quebras de linha desaparecem no breakpoint mobile.
- O estado ativo do scrollytelling foi validado entre “Encontrar” e “Validar”.
- A primeira exploração mobile foi descartada por conter claims fora do briefing.

## Resultado

A implementação final preserva copy, hierarquia, paleta, tipografia, container, mídia abstrata, responsividade e comportamento do conceito. O único desvio intencional é não exibir a seção seguinte dentro do primeiro viewport: o hero mantém 100svh, como solicitado, e a transição acontece no início do scroll.

## Revisão de conversão — julho de 2026

### Evidência

- Conceito de campanha e hero:
  `C:\Users\Gustavo\.codex\generated_images\019f9ac6-f113-7651-b16c-c37974fc94c7\call_taYbKxF4lf9QXiWCwCjMjRKv.png`
  — 1586 × 992.
- Conceito de objeções e oferta:
  `C:\Users\Gustavo\.codex\generated_images\019f9ac6-f113-7651-b16c-c37974fc94c7\call_Ydkq4vvYnFvoUzK3819su1q4.png`
  — 1586 × 992.
- Conceito mobile:
  `C:\Users\Gustavo\.codex\generated_images\019f9ac6-f113-7651-b16c-c37974fc94c7\call_oW49GeX09G9M06e2e0yeDU9Z.png`
  — 851 × 1847; validado em 430 × 932 CSS px.
- Render do hero desktop:
  `docs/redesign-qa/01-redesign-hero-desktop.png`.
- Render do hero mobile:
  `docs/redesign-qa/02-redesign-hero-mobile.png`.
- Render das objeções:
  `docs/redesign-qa/04-objection-breakers-desktop.png`.
- Render da oferta:
  `docs/redesign-qa/05-offer-redesign-desktop.png`.
- Captura e interação: navegador integrado, desktop e mobile.
- Inspeção comparativa: `view_image` no conceito e no render final.

### Comparação

| Ponto | Conceito | Render final | Resultado |
| --- | --- | --- | --- |
| Campanha | Barra dourada, timer central e CTA destacado | Mesma anatomia; preview recebe identificação explícita | Fiel, com proteção contra urgência falsa |
| Headline | Três linhas, peso alto e “fornecedores” em dourado | Escala, peso, quebra e ênfase preservados | Fiel |
| Hero | Copy à esquerda, base abstrata à direita e dois CTAs | Mesma composição e mesmo conteúdo | Fiel |
| Confiança | Três fatos logo após os CTAs | 18 fornecedores, treinamento + planilha e 7 dias | Fiel, sem claims extras |
| Objeções | Perguntas abertas com resposta curta | Quatro linhas editoriais antes da oferta | Fiel |
| Oferta | Headline forte, painel, CTA e garantia | Mesmo sistema; conteúdo real e preço configurável | Fiel |
| Mobile | Campanha compacta, H1 dominante e ações amplas | Sem overflow em 430, 390 e 375 px | Fiel |
| Motion | Entradas pontuais e foco no CTA | H1 escalonado, reveals e brilho único | Fiel e reduzível |

### Copy acima da dobra

A copy permitida foi preservada: marca, campanha, navegação, H1, parágrafo,
dois CTAs e três fatos de confiança. A única adição visível é `Prévia •` no
modo de demonstração. Em live, esse prefixo não aparece.

### Desvios intencionais

- O ícone decorativo de raio do conceito não foi implementado; ele não melhora
  compreensão e evitar um símbolo extra preserva o sistema Lucide já existente.
- A contagem regressiva não foi duplicada dentro do painel da oferta. A barra
  fixa continua visível e usa a única fonte real de prazo.
- As objeções ocupam uma seção imediatamente anterior à oferta, em vez de
  dividir a mesma viewport. Isso preserva legibilidade e mantém o painel de
  compra compacto.

### Correções realizadas

- Entrelinha do H1 mobile corrigida para impedir colisão durante a entrada.
- Movimento inicial das linhas reduzido de 80% para 28 px.
- Barra e header receberam offsets próprios no desktop e no mobile.
- Âncoras passaram a respeitar o espaço combinado da campanha e do header.
- Timer de demonstração mostra `MM:SS`; campanhas mais longas usam `HH:MM:SS`.
- O CTA da campanha foi testado até `#oferta`.
- Console verificado sem erros ou avisos.

Resultado: a implementação foi comparada diretamente às três referências e
atinge fidelidade de agência nos pontos de composição, tipografia, paleta,
responsividade, conversão e movimento. Não restam divergências materiais.
