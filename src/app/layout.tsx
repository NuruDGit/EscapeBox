import type { Metadata } from "next";
import { Bodoni_Moda, Sora } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EscapeBox | Portable Escape Room Experience",
  description: "A portable escape experience engineered for collaboration, strategy, and immersive challenge. Available across Dubai and Abu Dhabi.",
  keywords: ["Escape room Dubai", "Team building Dubai", "Portable escape room", "Puzzle challenge"],
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bodoni.variable} ${sora.variable} font-sora antialiased bg-brand-black text-brand-ivory`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
