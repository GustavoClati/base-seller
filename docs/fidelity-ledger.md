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
