import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const isLive = siteConfig.siteMode === "live";
const canonical = siteConfig.siteUrl || undefined;

export const metadata: Metadata = {
  metadataBase: canonical ? new URL(canonical) : undefined,
  title: "Base do Seller — Fornecedores e análise para marketplaces",
  description:
    "Acesse fornecedores usados em uma operação real de e-commerce e aprenda a encontrar, validar e analisar produtos antes de investir em estoque.",
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: "Base do Seller — Fornecedores e análise para marketplaces",
    description:
      "Acesse fornecedores usados em uma operação real de e-commerce e aprenda a encontrar, validar e analisar produtos antes de investir em estoque.",
    type: "website",
    url: canonical,
    images: siteConfig.media.ogImage
      ? [{ url: siteConfig.media.ogImage }]
      : undefined,
  },
  robots: {
    index: isLive,
    follow: isLive,
    googleBot: {
      index: isLive,
      follow: isLive,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#050A12",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={`${manrope.variable} ${inter.variable}`}
      lang="pt-BR"
    >
      <body>
        <a className="skip-link" href="#conteudo-principal">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
