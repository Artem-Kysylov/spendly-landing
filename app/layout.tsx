// Imports 
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Localization
import { defaultLocale } from "@/i18n";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Use 'swap' to avoid FOIT
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://spendly.app"),
  title: {
    default: "Spendly — AI-first budget & expense tracker",
    template: "%s — Spendly"
  },
  description: "Manage budgets, track expenses, and get AI insights. Free forever, no ads.",
  keywords: [
    "budget app",
    "expense tracker",
    "personal finance",
    "AI finance assistant",
    "spending analysis",
    "subscription manager",
    "recurring transactions",
    "budget planner",
    "money management",
    "spend tracker",
    "financial insights"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Spendly — AI-first budget & expense tracker",
    description: "Manage budgets, track expenses, and get AI insights. Free forever, no ads.",
    url: "/",
    siteName: "Spendly",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Spendly — AI-first budget & expense tracker"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Spendly — AI-first budget & expense tracker",
    description: "Manage budgets, track expenses, and get AI insights. Free forever, no ads.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = defaultLocale;
  return (
    <html lang={locale}>
      <body
        className={`${montserrat.className} antialiased`}
        style={{ backgroundImage: "url(/bg.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "top center" }}
      >
        {children}
      </body>
    </html>
  );
}
