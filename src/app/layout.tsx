import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moch Virgiawan Caesar Ridollohi | Portfolio",
  description: "Personal portfolio of Moch Virgiawan Caesar Ridollohi - Full Stack Developer",
  keywords: ["developer", "portfolio", "web development", "next.js", "full stack"],
  authors: [{ name: "Moch Virgiawan Caesar Ridollohi" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Moch Virgiawan Caesar Ridollohi | Portfolio",
    description: "Personal portfolio of Moch Virgiawan Caesar Ridollohi - Full Stack Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
