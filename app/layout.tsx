import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ IMPORTS
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { CartProvider } from "@/context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prasatti Oils",
  description: "Premium Wood Pressed Oils",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* ✅ CART PROVIDER (GLOBAL STATE) */}
        <CartProvider>

          {/* ✅ YOUR LAYOUT */}
          <LayoutWrapper>{children}</LayoutWrapper>

        </CartProvider>

      </body>
    </html>
  );
}