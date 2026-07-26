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

## Remoção da navegação — julho de 2026

- Referência: captura enviada pelo usuário, com a NAV abaixo do alerta.
- Render verificado no navegador integrado em 1280 × 720 e 390 × 844.
- Comparação feita com `view_image` entre a referência e o render desktop.
- Pontos inspecionados: remoção do logo, remoção dos quatro links, remoção do
  segundo CTA, permanência do alerta e reposicionamento do hero.
- Copy acima da dobra: somente os textos pertencentes à NAV foram removidos.
- Interação: o CTA do alerta continua navegando para `#oferta`.
- Resultado: nenhuma referência à NAV permaneceu, não houve overflow horizontal
  e o console permaneceu sem erros ou avisos.

## Sequência de problemas — julho de 2026

- Referência: captura do usuário em 1119 × 709, com frases sobrepostas e a
  expressão “não é uma” quebrada em linhas separadas.
- Causa confirmada: a seção tinha 165vh, deixando apenas cerca de 65vh para o
  sticky, e o progresso começava antes de a seção alcançar o topo da viewport.
- Correção: seção ampliada para 360svh, progresso entre `start start` e
  `end end`, suavização por spring e entrada/saída vertical de 28px.
- Tipografia: a quebra manual foi removida e “não é uma” passou a ser uma
  unidade sem quebra; o parágrafo usa distribuição de linhas `pretty`.
- Comparação no navegador integrado em 1119 × 709: sticky a 88px abaixo da
  campanha, uma única frase com opacidade 1, nenhuma sobreposição material.
- Mobile em 390 × 844: sticky desativado, três frases em fluxo normal,
  transformações removidas e nenhum overflow horizontal.
- Copy: nenhum texto foi adicionado, removido ou renomeado.
- Acessibilidade: `prefers-reduced-motion` mantém a versão sequencial estática.
- Evidência limitada: a sensação de fluidez é temporal e não pode ser provada
  por uma captura isolada; foi verificada nos três estágios do scroll.

## Integração das imagens da marca — julho de 2026

### Seleção e tratamento

- Fonte: `C:\Users\Gustavo\Documents\Projetos_gu\Base-do-seller\imgs`, com dez
  artes quadradas de 1254 × 1254 px fornecidas pelo usuário.
- Sete imagens foram selecionadas: encontrar fornecedores, validar pedido,
  analisar produtos, testar pequeno, planilha, treinamento e chamada final.
- As artes 1, 2 e 9 não foram usadas porque repetiam, respectivamente, a
  promessa do hero, a narrativa do problema e uma explicação genérica do método.
- Os originais foram preservados. As sete cópias de produção foram convertidas
  para WebP de 1000 × 1000 px, reduzindo cerca de 11 MB para menos de 500 KB.
- A arte da planilha recebeu aviso visível de que nomes e contatos são
  fictícios; nenhuma ilustração foi tratada como depoimento ou prova operacional.

### Mapeamento

| Seção | Arte usada | Papel na narrativa |
| --- | --- | --- |
| Vídeo/treinamento | `training-process.webp` | Explica o processo sem criar um player falso |
| Base/planilha | `spreadsheet-illustration.webp` | Materializa o entregável |
| Método 01 | `method-find-suppliers.webp` | Encontrar fornecedores |
| Método 02 | `method-validate-order.webp` | Validar antes do pedido |
| Método 03 | `method-analyze-products.webp` | Analisar custo, frete e concorrência |
| Método 04 | `method-test-small.webp` | Testar pequeno antes de escalar |
| CTA final | `final-cta-start-with-base.webp` | Reforça a decisão de começar pela base |

### Comparação visual

| Ponto | Fonte | Implementação | Resultado |
| --- | --- | --- | --- |
| Paleta | Amarelo forte e azul-marinho | Inserida em superfícies escuras com bordas discretas | Fiel à marca |
| Texto nas artes | Composição quadrada e leitura central | Conteúdo preservado e legível nos slots | Fiel |
| Enquadramento | 1254 × 1254 sem corte | Método e mobile em 1:1; CTA com corte vertical leve e seguro | Fiel |
| Papel da seção | Artes editoriais de processo | Uma arte por etapa ou decisão relevante | Sem efeito de galeria |
| Responsividade | Fonte quadrada | 538 × 538 no desktop e 333 × 333 no mobile | Sem distorção |
| Movimento | Arquivos estáticos | Crossfade e escala sutis entre as quatro etapas | Fluido e contido |

### Verificação

- O arquivo original da etapa “Analisar” e o render desktop correspondente foram
  abertos lado a lado com `view_image`.
- Navegador integrado validado em 1146 × 864 e 390 × 844.
- Os quatro estados do método carregaram corretamente; “Analisar” e “Testar”
  foram verificados com opacidade final 1 e sem sobreposição residual.
- A versão mobile usa as quatro artes em fluxo normal, sem sticky ou overflow.
- A planilha, o treinamento e a CTA final carregaram com imagens otimizadas.
- Console sem erros ou avisos; nenhum overflow horizontal encontrado.
- A copy acima da dobra não foi alterada e nenhuma nova alegação foi adicionada.

### Desvios intencionais

- Nem todas as artes foram usadas: as três redundantes foram excluídas para
  preservar ritmo, hierarquia e foco de conversão.
- O hero permaneceu com o visual abstrato original para não competir com o H1.
- A seção de autoridade não recebeu ilustração, pois arte editorial não substitui
  evidência real.
- A comparação foi feita com os arquivos-fonte em 1254 × 1254 e com a página nos
  viewports reais de desktop e mobile; não há um conceito de página inteira em
  tamanho nativo para uma comparação de viewport idêntico.

Resultado: as imagens foram integradas como elementos funcionais da narrativa,
com enquadramento, legibilidade, desempenho e comportamento responsivo validados.

## Sistema visual derivado das artes — julho de 2026

- Fonte visual: as dez artes de
  `C:\Users\Gustavo\Documents\Projetos_gu\Base-do-seller\imgs`.
- Direção extraída: fundo quase preto, superfícies azul-marinho, amarelo de alta
  energia, títulos grotescos pesados, raios menores e contraste editorial.
- Tokens atualizados para `#050A12`, `#0A1728`, `#F6B900`, `#FFCC21` e
  `#F8F6EF`.
- Botões primários, campanha, números, ícones, linhas e palavras-chave passaram
  a usar o amarelo da identidade.
- Uma faixa cinética com “Encontrar, Validar, Analisar, Testar pequeno” conecta
  o hero ao restante da página.
- Títulos das seções foram reescritos para aumentar clareza, ritmo e retenção,
  sem criar promessa de lucro ou resultado garantido.
- O H1, a descrição, os CTAs e os três fatos acima da dobra foram preservados.
- Desktop verificado em 1146 × 864; mobile em 390 × 844.
- Títulos mobile auditados para espaços, truncamento, overflow e palavras
  isoladas; grupos críticos receberam `white-space: nowrap`.
- CTA do hero testado até `#oferta`; accordion verificado aberto e fechado.
- Comparação visual conjunta:
  `docs/redesign-qa/08-identity-comparison.png`.
- Relatório completo: `design-qa.md`, com `final result: passed`.

Resultado: tipografia, paleta, superfícies, imagens, espaçamento, responsividade
e movimento passaram a formar um único sistema coerente com as artes, mantendo
o tom escuro original.

## Robô 3D interativo no hero — julho de 2026

- Fonte funcional: componente Spline e cena indicados no prompt anexado pelo
  usuário.
- Referência de composição: hero anterior em 1440 × 900, com a área abstrata à
  direita e a copy preservada à esquerda.
- Implementação: a linha e os planos abstratos foram substituídos pelo robô 3D,
  enquadrado dentro do mesmo espaço visual e integrado ao fundo azul-marinho com
  halo e contorno amarelo.
- Copy acima da dobra: nenhum texto, CTA, número ou ordem foi alterado.
- Ponteiro: o movimento foi testado em dois pontos da área do robô; a cabeça
  mudou de orientação e acompanhou o cursor sem deslocar o layout.
- Desktop: verificado no navegador integrado em 1440 × 900.
- Mobile: verificado em 390 × 844; o robô entra no fluxo abaixo dos elementos de
  confiança, sem overflow horizontal, e o scroll permanece disponível.
- Evidências finais: `docs/redesign-qa/09-interactive-robot-desktop.png` e
  `docs/redesign-qa/10-interactive-robot-mobile.png`.
- Carregamento: a cena usa `React.lazy` e `Suspense`, com estado visual coerente
  com a marca enquanto o WebGL é inicializado.
- Branding da cena: o overlay “Built with Spline” foi desativado após o
  carregamento, sem recorte do canvas nem alteração da posição do robô.
- Acessibilidade: o visual possui descrição semântica; a animação de loading
  respeita `prefers-reduced-motion` por meio das regras globais já existentes.
- Verificação visual: a referência anterior e o render final foram inspecionados
  diretamente com `view_image`; hierarquia, paleta, espaçamento, enquadramento e
  contraste permaneceram consistentes.
- Validação técnica: lint, TypeScript, build de produção e auditoria das
  dependências de produção concluíram sem erros ou vulnerabilidades conhecidas.

Resultado: o robô substitui o antigo visual abstrato sem alterar a oferta,
preserva o hero escuro e adiciona a interação de acompanhamento do ponteiro
solicitada.

### Correção ultrawide

- Referência: captura do usuário em uma tela de aproximadamente 1920 px, onde o
  limite retangular escuro do canvas ficava visível.
- Causa: o fundo da cena e uma camada de acabamento opaca criavam um retângulo
  com cor diferente do gradiente do hero.
- Correção: o fundo da cena Spline passou a ser transparente e a camada
  retangular de acabamento foi removida.
- Verificação: navegador integrado em 1920 × 800, com inspeção direta via
  `view_image` da referência e do render final.
- Evidência: `docs/redesign-qa/11-interactive-robot-ultrawide.png`.
- Resultado: nenhuma borda retangular permanece; o robô, o halo e o piso 3D
  continuam visíveis e a interação com o ponteiro foi preservada.

## Hierarquia editorial, primeira dobra e provas reais — julho de 2026

- O hero passou a ocupar a altura útil da primeira dobra menos a faixa cinética,
  deixando “Encontrar, Validar, Analisar, Testar pequeno” visível assim que a
  página abre.
- A primeira dobra foi verificada em 1920 × 800 e 1920 × 900, sem esconder CTAs,
  fatos de confiança ou o robô.
- Os títulos de VSL, base, método, entregáveis, planilha, autoridade e público
  foram centralizados e reequilibrados para evitar a aparência de uma coluna
  presa à esquerda.
- Títulos principais revisados:
  - “Entenda antes de colocar dinheiro em estoque.”
  - “Comece com uma base. Avance com mais critério.”
  - “Encontre. Valide. Analise. E só então teste.”
  - “Conteúdo para agir. Não para acumular.”
  - “Essa base nasceu dentro da operação.”
- Os blocos 01, 02 e 03 dos entregáveis receberam mais altura, respiro interno e
  distância entre linhas, preservando a leitura em sequência.
- Na seção de autoridade, a apresentação de Gustavo foi posicionada abaixo do
  título e centralizada, antes das provas visuais.
- Fontes reais inspecionadas:
  `imgs/prints/01.PNG` e `imgs/prints/02.PNG`.
- Versões otimizadas usadas no site:
  `public/images/real-sales-dashboard.webp` e
  `public/images/real-live-sales.webp`.
- Os dois prints foram apresentados como registros reais da operação, sem
  promessa de lucro ou garantia de resultado.
- Verificação visual concluída em 1920 × 800, 1920 × 900, 1440 × 900 e
  390 × 844; títulos, imagens e espaçamentos não apresentam overflow ou corte.
- A copy principal acima da dobra permaneceu inalterada.

Resultado: a primeira dobra mostra a faixa de processo imediatamente, as seções
ganharam hierarquia central e os placeholders de autoridade foram substituídos
pelos prints reais fornecidos pelo usuário, sem incompatibilidades visuais
materiais restantes.
