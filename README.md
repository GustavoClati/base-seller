# Base do Seller

Landing page de vendas construída com Next.js, App Router, TypeScript, Tailwind CSS e Motion for React. O projeto começa em modo `preview`, sem checkout e sem indexação, para que mídias, oferta e textos jurídicos sejam incluídos com segurança antes da publicação.

## Executar localmente

Requisitos: Node.js 20.9 ou superior e npm.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

Verificações:

```bash
npm run lint
npm run typecheck
npm run build
```

## Conteúdo e configuração

O conteúdo variável está centralizado em:

- `src/content/site-content.ts`
- `src/content/legal-content.ts`

As variáveis ficam em `.env.local`. Não publique esse arquivo.

### Definir o checkout

```env
NEXT_PUBLIC_CAKTO_CHECKOUT_URL=https://...
```

Todos os CTAs leem essa configuração. Em `preview`, os CTAs levam à seção da oferta e não iniciam checkout.

### Configurar preço e acesso

```env
NEXT_PUBLIC_OFFER_PRICE=
NEXT_PUBLIC_OFFER_INSTALLMENTS=
NEXT_PUBLIC_OFFER_PAYMENT_NOTE=Pagamento processado pela Cakto.
NEXT_PUBLIC_OFFER_ACCESS_NOTE=
NEXT_PUBLIC_OFFER_ACCESS_FAQ_ANSWER=
```

Não adicione preço riscado sem histórico real. A informação de acesso deve refletir o fluxo definitivo da área de membros.

### Configurar a campanha e o temporizador

```env
NEXT_PUBLIC_PROMOTION_ENABLED=true
NEXT_PUBLIC_PROMOTION_END_AT=2026-07-30T23:59:59-03:00
NEXT_PUBLIC_PROMOTION_LABEL=Condição especial da campanha
NEXT_PUBLIC_PROMOTION_EXPIRED_TEXT=Esta condição foi encerrada
```

Em `preview`, quando `NEXT_PUBLIC_PROMOTION_END_AT` está vazio, a barra mostra
uma demonstração de 15 minutos identificada como prévia. Em `live`, o build só
aceita a campanha ativada quando existe uma data absoluta, válida e futura. O
contador nunca reinicia quando uma data real está configurada.

### Configurar área de membros e suporte

```env
NEXT_PUBLIC_MEMBER_AREA_URL=
NEXT_PUBLIC_SUPPORT_EMAIL=
```

Os links correspondentes no footer só aparecem quando estiverem preenchidos.

### Adicionar mídias

Coloque arquivos otimizados em `public/media` e preencha o objeto `media` de `src/content/site-content.ts`:

```ts
media: {
  heroVideo: "/media/hero.webm",
  heroPoster: "/media/hero-poster.webp",
  vslVideo: "/media/vsl.mp4",
  vslPoster: "/media/vsl-poster.webp",
  spreadsheetPreview: "/media/planilha.webp",
  authorPortrait: "/media/gustavo.webp",
  salesDashboard: "/media/painel.webp",
  ordersProof: "/media/pedidos.webp",
  supplierConversation: "/media/conversa.webp",
  finalCtaImage: "/media/cta-final.webp",
  ogImage: "/media/og.webp",
}
```

Regras:

- Use apenas materiais reais.
- Oculte contatos, nomes, valores e dados pessoais quando necessário.
- Prefira WebP/AVIF para imagens e MP4/WebM comprimido para vídeos.
- Adicione poster aos vídeos.
- No modo `live`, slots sem mídia desaparecem e o layout se reorganiza.

### Adicionar depoimentos reais

Inclua os itens em `siteConfig.testimonials`, com autorização de uso registrada fora do código:

```ts
{
  name: "Nome autorizado",
  photo: "/media/depoimentos/nome.webp",
  text: "Relato real",
  specificResult: "Resultado concreto e verificável",
  resultType: "contato_realizado",
  date: "AAAA-MM"
}
```

A seção não é renderizada enquanto a lista estiver vazia.

## Trocar de preview para live

Preencha:

```env
NEXT_PUBLIC_SITE_MODE=live
NEXT_PUBLIC_CAKTO_CHECKOUT_URL=
NEXT_PUBLIC_SUPPORT_EMAIL=
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
NEXT_PUBLIC_OFFER_PRICE=
NEXT_PUBLIC_OFFER_ACCESS_NOTE=
NEXT_PUBLIC_OFFER_ACCESS_FAQ_ANSWER=
NEXT_PUBLIC_PROMOTION_ENABLED=true
NEXT_PUBLIC_PROMOTION_END_AT=
```

Também substitua os scaffolds de `src/content/legal-content.ts` pelos textos revisados de termos, privacidade e reembolso.

O build em `live` falha deliberadamente se checkout, preço, acesso, suporte, URL oficial ou documentos jurídicos estiverem incompletos. Em `preview`, a página usa `noindex` e `nofollow`.

## Pixel e analytics

`src/lib/analytics.ts` contém a camada de eventos:

- `page_view`
- `cta_click`
- `begin_checkout`
- `nav_click`
- `faq_open`
- `vsl_play`, `vsl_25`, `vsl_50`, `vsl_75`, `vsl_complete`

Ela permanece sem requisições até a integração oficial. Quando o Pixel for configurado, use:

```env
NEXT_PUBLIC_META_PIXEL_ID=
```

Não use um ID fictício.

## Publicar na Vercel

1. Envie o repositório para o provedor Git.
2. Importe o projeto na Vercel.
3. Cadastre as variáveis de ambiente.
4. Faça um deploy em `preview` para revisão.
5. Inclua mídias e textos definitivos.
6. Rode o build local em `live`.
7. Somente depois, ative `NEXT_PUBLIC_SITE_MODE=live` no ambiente de produção.

O projeto não usa banco de dados, autenticação, processamento próprio de pagamento ou backend complexo.
