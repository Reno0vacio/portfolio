import { Analytics } from "@vercel/analytics/react";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Illés Ákos (IllésInnovate)",
  description:
    "Illés Ákos - weboldal fejlesztés, tervezés és karbantartás Győrben. Kedvezményes árak és megbízható szolgáltatások. Látogass el oldalunkra.",
  locale: "hu_HU",
  type: "website",
  siteName: "Illés Ákos (IllésInnovate)",
  keywords: [
    "illés",
    "ákos",
    "illésinnovate",
    "weboldal fejlesztés",
    "weboldal",
    "győr",
    "fejlesztés",
    "wordpress",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu" suppressContentEditableWarning>
      <head>
        <meta
          name="google-site-verification"
          content="XsIBMtmOONNSboUzsxodVKLnc0r3owhl9uB3ZbtQR6o"
        />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          {/* vercel */}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-976FLB6TWF" />
    </html>
  );
}
