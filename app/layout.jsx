import { Analytics } from "@vercel/analytics/react";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Illés Ákos (IllésInnovate)",
  description:
    "Illés Ákos - weboldal fejlesztés, tervezés és karbantartás Győrben. Kedvezményes árak és megbízható szolgáltatások. Látogass el oldalunkra.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" suppressContentEditableWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          {/* vercel */}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
