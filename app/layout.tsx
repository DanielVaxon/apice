import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Construtora Ápice — Construímos o que permanece",
    template: "%s | Construtora Ápice",
  },
  description:
    "Construtora de alto padrão em Brasília/DF. Empreendimentos residenciais e comerciais com excelência em engenharia, prazo e qualidade desde 2008.",
  keywords: [
    "construtora brasilia",
    "apartamentos alto padrao brasilia",
    "empreendimentos imobiliarios df",
    "construtora asa sul",
    "imoveis comerciais brasilia",
    "construtora apice",
  ],
  authors: [{ name: "Construtora Ápice" }],
  creator: "Construtora Ápice",
  publisher: "Construtora Ápice",
  metadataBase: new URL("https://apice.vaxon.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://apice.vaxon.com.br",
    siteName: "Construtora Ápice",
    title: "Construtora Ápice — Construímos o que permanece",
    description:
      "Construtora de alto padrão em Brasília/DF. Residencial e comercial premium desde 2008.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Construtora Ápice",
      },
    ],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-apice-cream text-apice-ink antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
