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

- [P3] Quando fotos e provas reais estiverem disponíveis, substituir os slots da
  seção de autoridade sem alterar a estrutura visual.

## Verificação técnica

- Navegador integrado: desktop 1146 × 864 e mobile 390 × 844.
- Sem overflow horizontal.
- Console sem erros ou avisos.
- `npm run lint`, `npm run typecheck` e `npm run build` aprovados.

final result: passed
