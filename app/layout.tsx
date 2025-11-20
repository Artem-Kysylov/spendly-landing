// Imports 
import { cookies } from "next/headers";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Localization
import { defaultLocale } from "@/i18n";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Use 'swap' to avoid FOIT
});



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? defaultLocale;
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
