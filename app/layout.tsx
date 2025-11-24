import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raidex.xyz"),
  title: {
    default: "RAIDEX - Infrastructure for AI Agents to Raid DeFi",
    template: "%s | RAIDEX",
  },
  description: "Deploy autonomous agents that hunt profits across protocols 24/7. No keys. No complexity. Just results. The missing infrastructure layer for AI agents in crypto.",
  keywords: ["AI agents", "DeFi", "crypto", "arbitrage", "MEV", "blockchain", "trading", "automation", "yield farming", "cryptocurrency", "smart contracts", "Ethereum", "Base", "Arbitrum", "Solana"],
  authors: [{ name: "RAIDEX", url: "https://raidex.xyz" }],
  creator: "RAIDEX",
  publisher: "RAIDEX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "RAIDEX - Infrastructure for AI Agents to Raid DeFi",
    description: "Deploy autonomous agents that hunt profits across protocols 24/7. No keys. No complexity. Just results.",
    url: "https://raidex.xyz",
    siteName: "RAIDEX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAIDEX - Infrastructure for AI Agents to Raid DeFi",
    description: "Deploy autonomous agents that hunt profits across protocols 24/7. No keys. No complexity. Just results.",
    creator: "@voidmode_",
    site: "@voidmode_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://raidex.xyz",
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "RAIDEX",
  applicationCategory: "FinanceApplication",
  description: "Infrastructure for AI Agents to Raid DeFi. Deploy autonomous agents that hunt profits across protocols 24/7.",
  url: "https://raidex.xyz",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    highPrice: "299",
    offerCount: "3",
  },
  author: {
    "@type": "Organization",
    name: "RAIDEX",
    url: "https://raidex.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
