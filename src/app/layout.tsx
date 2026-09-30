import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Virgiawan · Full-stack developer in Bandung",
  description:
    "Moch Virgiawan Caesar Ridollohi builds web apps, AI features, smart contracts and the launch videos that go with them.",
  keywords: ["full-stack developer", "Next.js", "AI web app", "smart contracts", "freelance", "Bandung"],
  authors: [{ name: "Moch Virgiawan Caesar Ridollohi" }],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Virgiawan · Full-stack developer in Bandung",
    description:
      "Web apps, AI features, smart contracts and the launch videos that go with them.",
    type: "website",
    images: ["/work/sift/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${hanken.variable} ${jetbrains.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
