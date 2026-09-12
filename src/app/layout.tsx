import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site-config";

import "./globals.css";
import "./pdf-redesign.css";

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
  title: "Base do Seller — Lista de Fornecedores 2026 em PDF",
  description:
    "Receba as versões PC e Mobile da Base do Seller, com 168 registros organizados, 127 contatos e 147 links de catálogo.",
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: "Base do Seller — Lista de Fornecedores 2026 em PDF",
    description:
      "Receba as versões PC e Mobile da Base do Seller, com 168 registros organizados, 127 contatos e 147 links de catálogo.",
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
