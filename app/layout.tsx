import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ COMPONENTS
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/common/WhatsappButton";

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

        {/* ✅ GLOBAL NAVBAR */}
        <Navbar />

        {/* ✅ MAIN CONTENT AREA */}
        <main className="flex-1">
          {children}
        </main>

        {/* ✅ GLOBAL FOOTER */}
        <Footer />

        {/* ✅ WHATSAPP BUTTON */}
        <WhatsappButton />

      </body>
    </html>
  );
}