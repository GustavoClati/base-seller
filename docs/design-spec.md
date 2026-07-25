# Base do Seller — design spec

## Direção

Minimalismo visual com persuasão progressiva. A experiência usa um fundo escuro contínuo, grandes blocos tipográficos e poucos frames de mídia. O dourado funciona como fio narrativo, nunca como superfície dominante.

Referências de layout geradas para a implementação:

- Hero e problema: `C:\Users\Gustavo\.codex\generated_images\019f9ac6-f113-7651-b16c-c37974fc94c7\call_61XyiwqpCeXU9DBkja2iyA0f.png`
- Revelação e método: `C:\Users\Gustavo\.codex\generated_images\019f9ac6-f113-7651-b16c-c37974fc94c7\call_G5CwTP3Y2jAMHHonKi8wqRTF.png`
- Entregas, autoridade e transparência: `C:\Users\Gustavo\.codex\generated_images\019f9ac6-f113-7651-b16c-c37974fc94c7\call_r3FYrkYctP5hxOhMVdGB64US.png`
- Fechamento: `C:\Users\Gustavo\.codex\generated_images\019f9ac6-f113-7651-b16c-c37974fc94c7\call_gWEZP88suN4S38M0Px7EfjWo.png`
- Mobile aprovado para hero, problema e revelação: `C:\Users\Gustavo\.codex\generated_images\019f9ac6-f113-7651-b16c-c37974fc94c7\call_h2m4AxaYOYADUsK57j6XcdqB.png`

A primeira exploração mobile foi rejeitada por introduzir claims fora do briefing e não é fonte de implementação. Quando uma prancha resumir ou alterar copy, o briefing e `src/content/site-content.ts` prevalecem.

## Tokens

| Token | Valor |
| --- | --- |
| background | `#090D12` |
| surface | `#101826` |
| surface elevated | `#131D2C` |
| surface hover | `#172233` |
| border | `#1D2735` |
| border subtle | `rgba(168, 179, 199, 0.14)` |
| text primary | `#F8FAFC` |
| text secondary | `#A8B3C7` |
| text tertiary | `#778397` |
| accent | `#D6A84F` |
| accent strong | `#FBBF24` |
| accent soft | `rgba(214, 168, 79, 0.14)` |

## Tipografia e escala

- Headlines: Manrope 500–700, tracking entre `-0.025em` e `-0.045em`.
- Corpo e controles: Inter 400–600.
- H1: `clamp(3rem, 7vw, 7rem)`.
- H2: `clamp(2.45rem, 5vw, 5.5rem)`.
- H3: `clamp(1.5rem, 2vw, 2.2rem)`.
- Corpo principal: `clamp(1rem, 1.35vw, 1.25rem)`.
- Linhas compactas nos títulos e line-height generoso no corpo.

## Layout

- Container máximo: 1280 px.
- Blocos de leitura: 680–760 px.
- Gutter: 24 px mobile, 32–48 px desktop.
- Espaço vertical: 88–112 px mobile, 136–176 px desktop.
- Frames grandes: 28–36 px; médios: 20–24 px; botões: 14–18 px.
- Fundo contínuo. As mudanças de capítulo são criadas por espaço, linhas e halos muito discretos.

## Ordem das seções

1. Header flutuante e progresso.
2. Hero cinematográfico.
3. VSL condicional.
4. Narrativa do problema.
5. Revelação da base e único destaque numérico.
6. Diferença entre base e processo.
7. Método em quatro etapas.
8. Entregas.
9. Preview da planilha.
10. Autoridade com mídia exclusivamente real.
11. Transparência.
12. Para quem é.
13. Depoimentos condicionais.
14. Oferta.
15. FAQ.
16. CTA final.
17. Footer.

## Componentes

- `BrandWordmark`: wordmark nativo substituível.
- `TrackedCta`: variante primária/secundária e localização de analytics.
- `MediaSlot`: imagem/vídeo real ou placeholder técnico apenas em preview.
- `AbstractBaseVisual`: planos, linhas e nós abstratos sem simular dados.
- `SectionHeading`: título, texto e alinhamentos editoriais.
- `FloatingHeader`, `MobileStickyCta`, `Footer`.
- Seções landing isoladas por responsabilidade.

## Movimento

- Entrada do hero por máscara, opacidade e escala 0.97 → 1.
- Scroll do hero com redução discreta de opacidade e leve escala do visual.
- Problema: crossfade/sticky em desktop; sequência vertical em telas menores.
- Método: visual sticky muda de estado conforme a etapa ativa.
- Frames: reveal por máscara e escala curta.
- Botões: elevação de 1–2 px, pressão no click e deslocamento curto da seta.
- `prefers-reduced-motion`: remove parallax, sticky narrativo e transforms não essenciais.

## Placeholders

Placeholders são frames técnicos, nunca interfaces simuladas. Exibem ID, descrição e proporção apenas em `preview`. Em `live`, mídia ausente não renderiza e o layout colapsa sem áreas vazias.

Slots: `hero-video`, `vsl-principal`, `screenshot-planilha`, `foto-gustavo`, `print-painel-vendas`, `prova-pedidos`, `conversa-fornecedor`, `imagem-cta-final`.

## Breakpoints

- Até 767 px: coluna única, sem sticky longo, botões amplos, header compacto.
- 768–1023 px: tablet com duas colunas apenas quando a leitura permite.
- 1024 px+: scrollytelling e composições editoriais completas.
- 1280 px+: escala máxima com largura de leitura limitada.

Viewports de QA: 1440×900, 1280×800, 1024×768, 768×1024, 430×932, 390×844 e 375×812.
