import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baza.ao"),
  title: {
    default: "BAZA — Moto-táxi de Luanda",
    template: "%s · BAZA",
  },
  description:
    "Pede uma moto-táxi em Luanda em segundos. Preço justo, motorista verificado, pagamento em dinheiro ou IBAN. Feita em Angola, para Angola.",
  keywords: [
    "moto-táxi Luanda",
    "BAZA",
    "moto táxi Angola",
    "transporte Luanda",
    "app moto Luanda",
  ],
  openGraph: {
    type: "website",
    locale: "pt_AO",
    title: "BAZA — Moto-táxi de Luanda",
    description:
      "Pede uma moto-táxi em Luanda em segundos. Preço justo, motorista verificado.",
    siteName: "BAZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAZA — Moto-táxi de Luanda",
    description:
      "Pede uma moto-táxi em Luanda em segundos. Preço justo, motorista verificado.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFC700",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-AO"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-text-primary)]">
        {children}
      </body>
    </html>
  );
}
