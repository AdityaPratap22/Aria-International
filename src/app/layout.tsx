import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import ScrollObserver from "@/components/ScrollObserver";
import { Suspense } from "react";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aria International | Timeless Craftsmanship. Global Excellence.",
  description: "Faridabad-based manufacturer, exporter & supplier of premium leather furniture, tables, leather boxes, brass statues & decorative items.",
  keywords: ["Aria International", "Leather Furniture", "Luxury Furniture Faridabad", "Exporter Leather Furniture", "Brass Statues", "Leather Boxes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} antialiased`}
    >
      <body>
        <AppProvider>
          <Header />
          <Suspense fallback={null}>
            <ScrollObserver />
          </Suspense>
          <div style={{ flex: "1 0 auto" }}>{children}</div>
          <Footer />
          <Toast />
        </AppProvider>
      </body>
    </html>
  );
}
