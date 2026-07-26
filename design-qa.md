# Design QA — identidade visual Base do Seller

## Comparação

- Fonte visual principal:
  `C:\Users\Gustavo\Documents\Projetos_gu\Base-do-seller\imgs\ChatGPT Image Jul 26, 2026, 04_45_33 PM (3).png`
- Conjunto complementar: as dez artes quadradas da pasta
  `C:\Users\Gustavo\Documents\Projetos_gu\Base-do-seller\imgs`.
- Render desktop:
  `C:\Users\Gustavo\Documents\Projetos_gu\Base-do-seller\docs\redesign-qa\06-identity-method-desktop.png`
- Render mobile:
  `C:\Users\Gustavo\Documents\Projetos_gu\Base-do-seller\docs\redesign-qa\07-identity-hero-mobile.png`
- Comparação lado a lado:
  `C:\Users\Gustavo\Documents\Projetos_gu\Base-do-seller\docs\redesign-qa\08-identity-comparison.png`
- Estado desktop: etapa 01 “Encontrar” ativa na seção do método.
- Estado mobile: hero inicial em 390 × 844 CSS px.
- Fonte: 1254 × 1254 px.
- Captura desktop: 1131 × 853 px dentro de viewport 1146 × 864 CSS px.
- Captura mobile: 375 × 812 px dentro de viewport 390 × 844 CSS px.
- Densidade: captura do navegador integrado em escala aproximada de 1 px por
  CSS px na área útil.
- Normalização da comparação: fonte reduzida para 680 × 680; implementação
  ajustada para caber em 880 × 680; canvas final 1620 × 740.

## Evidência de visão completa

- O hero mantém fundo quase preto, título branco com palavra-chave amarela,
  botão amarelo e superfícies azul-marinho.
- A faixa cinética cria a única ruptura totalmente amarela da página.
- As seções alternam preto e azul-marinho sem perder continuidade.
- A seção do método combina título editorial, texto aberto e arte quadrada sem
  transformar o conteúdo em uma galeria.

## Evidência focada

A comparação `08-identity-comparison.png` coloca a arte “Encontre fornecedores
certos” e o render da etapa “Encontrar” no mesmo quadro. Ela confirma:

- amarelo e azul-marinho equivalentes à fonte;
- headline pesada, compacta e com contraste branco/amarelo;
- raio e moldura da arte preservados;
- arte sem distorção dentro do slot quadrado;
- texto de apoio e navegação com hierarquia inferior à promessa principal.

## Superfícies obrigatórias

### Tipografia

- Manrope permanece como display e Inter como corpo.
- Headlines usam peso 820–850, tracking negativo e entrelinha próxima de 1.
- Títulos mobile foram auditados individualmente; nenhum apresenta overflow.
- Frases críticas usam grupos sem quebra para impedir palavras isoladas.

### Espaçamento e ritmo

- Container, gutters e ordem das seções foram preservados.
- O ritmo alterna seção editorial, imagem, scrollytelling, listas abertas e
  painel de oferta.
- Raios das superfícies principais foram reduzidos para se aproximar das artes.

### Cores e tokens

- Fundo: `#050A12`.
- Superfícies: `#0A1728` e `#0E2035`.
- Ação/ênfase: `#F6B900` e `#FFCC21`.
- Texto principal levemente quente: `#F8F6EF`.
- Contraste verificado no navegador em desktop e mobile.

### Imagens

- As imagens WebP continuam nítidas, sem distorção e com `object-fit: cover`.
- As quatro artes do método carregaram no desktop e no mobile.
- A planilha mantém aviso de conteúdo ilustrativo.
- Nenhuma arte editorial foi apresentada como depoimento ou prova real.

### Copy

- O H1 e a promessa acima da dobra foram preservados.
- Títulos posteriores foram reescritos para serem mais diretos e memoráveis.
- Nenhuma promessa de lucro, produto vencedor ou resultado garantido foi criada.

### Ícones e interação

- Ícones existentes mantêm a mesma família e contraste amarelo.
- CTA principal do hero foi clicado e navegou para `#oferta`.
- Accordion foi verificado nos estados expandido e recolhido.
- Foco visível e redução de movimento permanecem ativos.

## Histórico de correções

- [P2] Espaço ausente ao ocultar `<br>` no mobile.
  - Evidência inicial: títulos como `base.Avance`, `fornecedores.Um` e
    `entrar,deixe`.
  - Correção: espaços explícitos adicionados após as quebras condicionais.
  - Pós-fix: auditoria DOM confirmou frases separadas corretamente e nenhum
    overflow horizontal.

- [P2] Risco de palavra isolada em títulos mobile.
  - Evidência inicial: frases longas ocupavam até cinco linhas em 390 px.
  - Correção: grupos sem quebra aplicados a “em estoque”, “é oportunidade”,
    “mais critério”, “para começar” e “base e processo”.
  - Pós-fix: títulos permanecem dentro de 335 px úteis sem truncamento.

## Findings

Nenhum P0, P1 ou P2 permanece.

## Open Questions

- As artes são a fonte de identidade, não um mock de página inteira. Portanto,
  a comparação valida sistema visual, tipografia, paleta e tratamento de imagem;
  não existe uma composição full-page de 1254 × 1254 para exigir layout 1:1.

## Follow-up Polish

- Concluído: os slots da seção de autoridade foram substituídos pelos dois
  prints reais da operação enviados pelo usuário, com versões WebP otimizadas.

## Hierarquia editorial e provas reais — julho de 2026

- Hero validado em 1920 × 800 e 1920 × 900 com a faixa amarela do processo
  visível na primeira dobra.
- Títulos das seções principais centralizados e revisados para melhorar ritmo,
  escaneabilidade e retenção.
- Entregáveis 01, 02 e 03 separados por mais espaço vertical e superfícies
  editoriais discretas.
- A apresentação “Eu sou Gustavo e trabalho com e-commerce...” foi colocada
  abaixo do título da seção de autoridade.
- `imgs/prints/01.PNG` e `imgs/prints/02.PNG` foram inspecionados e convertidos
  para `public/images/real-sales-dashboard.webp` e
  `public/images/real-live-sales.webp`.
- Desktop verificado em 1440 × 900; mobile em 390 × 844.
- Nenhum overflow, corte de imagem ou quebra material de título permanece.
- A copy principal acima da dobra não foi alterada.

## Verificação técnica

- Navegador integrado: 1920 × 800, 1920 × 900, 1440 × 900 e 390 × 844.
- Sem overflow horizontal.
- Console sem erros; permanecem apenas avisos internos não bloqueantes do
  runtime Spline.
- `npm run lint`, `npm run typecheck` e `npm run build` aprovados.

## Hero compacto e robô ancorado — julho de 2026

- Fonte visual:
  `C:\Users\Gustavo\AppData\Local\Temp\codex-clipboard-05f9335d-5461-48bc-8a2b-d769715c0e43.png`.
- Implementação:
  `docs/redesign-qa/16-hero-final-transparent-1920x930.png`.
- Comparação conjunta:
  `docs/redesign-qa/17-hero-final-transparent-comparison.png`.
- Viewport e normalização: fonte e implementação em 1920 × 930, CSS viewport
  1920 × 930, `devicePixelRatio: 1`, sem redimensionamento de densidade.
- Estado: topo da página, campanha ativa, animações carregadas e `scrollY: 0`.
- [P2] Evidência inicial: o hero terminava em 918 px e a faixa de 72 px começava
  em 918 px; somente a borda superior aparecia no viewport de 930 px.
- Correção: o modo compacto passou a abranger telas de até 1000 px de altura e
  o hero termina em 852 px. A faixa ocupa 852–924 px e aparece inteira.
- Correção de composição: o contêiner interno passou a ocupar a altura útil do
  hero; o canvas do robô termina em 851 px, junto à faixa, e seu limite direito
  chega a 1913 px sem overflow horizontal.
- Tipografia: família, peso, escala e composição de quatro linhas do H1 foram
  preservados; nenhuma palavra ou CTA foi alterado.
- Espaçamento: descrição, botões e fatos de confiança permanecem integralmente
  acima da faixa; o último bloco termina em 792 px.
- Cores: fundo, amarelo da oferta e superfícies azul-marinho permanecem iguais à
  referência.
- Imagem: o robô mantém transparência, nitidez, halo e piso 3D, sem retorno do
  retângulo escuro.
- Interação: a cabeça foi testada em dois pontos do ponteiro e mudou de direção
  sem deslocar o layout.
- Responsividade: 1440 × 900 validado com a faixa inteira e sem overflow;
  390 × 844 mantém o fluxo mobile existente sem overflow horizontal.
- Comparação focada adicional não foi necessária porque todos os elementos
  críticos do hero estão legíveis na comparação conjunta em tamanho nativo.
- Pós-fix: nenhum P0, P1 ou P2 permanece.

final result: passed

## FAQ, público e retenção visual — julho de 2026

### Fonte visual e implementação

- Fonte FAQ:
  `C:\Users\Gustavo\AppData\Local\Temp\codex-clipboard-9877ef71-c4f6-4ac0-8cf7-9739d7954538.png`
  — 1905 × 833 px.
- Fonte público:
  `C:\Users\Gustavo\AppData\Local\Temp\codex-clipboard-1ee83227-8704-48c0-b820-f6b982e6bfbe.png`
  — 1908 × 856 px.
- Implementação FAQ:
  `docs/redesign-qa/24-faq-two-lines.png` — 1906 × 860 px.
- Implementação público:
  `docs/redesign-qa/25-audience-aligned.png` — 1906 × 860 px.
- Destaque complementar:
  `docs/redesign-qa/26-transparency-highlight.png` — 1906 × 860 px.
- Mobile:
  `docs/redesign-qa/27-faq-mobile.png` — 390 × 844 CSS px.
- Comparação conjunta:
  `docs/redesign-qa/28-before-after-faq-audience.jpg`.
- Densidade: captura do navegador integrado em aproximadamente 1 px por CSS px.
- Normalização: fontes e renders ajustados para células de 1906 × 860 px,
  preservando proporção com `contain` nas referências.
- Estado: campanha ativa; primeiro item do FAQ expandido; seção de público no
  início; tema escuro.

### Evidência de visão completa

- O FAQ agora apresenta o título em exatamente duas linhas no desktop.
- Os dois quadros de público começam na mesma coordenada vertical.
- O quadro positivo recebeu dois novos critérios e uma chamada editorial final.
- A faixa de transparência ganhou uma superfície destacada que reforça a
  proposta sem criar promessa de lucro.

### Evidência focada

- A comparação `28-before-after-faq-audience.jpg` permite ler os títulos,
  alinhamentos, ícones e estados de ambas as seções sem exigir recorte adicional.
- O FAQ foi testado abrindo a pergunta 02; o estado expandido, a rotação do
  chevron e a troca de resposta funcionaram.
- O mobile foi inspecionado em 390 × 844; as duas linhas do título medem 335 px
  e não geram overflow.

### Superfícies obrigatórias

- Tipografia: título do FAQ em duas linhas, peso e tracking coerentes com os
  demais headings; numeração com peso de interface inferior.
- Espaçamento: 64 px entre título e accordion no desktop; os quadros de público
  têm o mesmo topo; nenhum elemento se sobrepõe.
- Cores: amarelo, azul-marinho e vermelho semântico permanecem consistentes com
  os tokens existentes.
- Imagens: não houve necessidade de novos assets; os ícones são da família já
  usada pelo projeto.
- Copy: dois critérios positivos foram adicionados sem promessa de lucro ou
  resultado; o H1 e a copy acima da dobra não mudaram.

### Histórico da iteração

- [P1] O primeiro ajuste do FAQ deixou o título de duas linhas invadir a coluna
  do accordion.
  - Correção: coluna esquerda fixada em 32 rem, gap reduzido para 4 rem e heading
    limitado a 4.5 rem.
  - Pós-fix: há 64 px entre as colunas em 1906 × 860 e nenhuma sobreposição.

### Verificação

- Navegador integrado: 1906 × 860 e 390 × 844.
- Accordion: pergunta 02 aberta com conteúdo correto.
- Console: nenhum erro; apenas avisos já conhecidos do runtime Three/Spline.
- Sem overflow horizontal.
- `npm run lint`, `npm run typecheck` e `npm run build`: aprovados.

Nenhum P0, P1 ou P2 permanece.

final result: passed
