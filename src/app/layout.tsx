import type { Metadata } from "next";
import { Instrument_Serif, Archivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "mvirgiawancr · Full-stack developer in Bandung",
  description:
    "Moch Virgiawan Caesar Ridollohi, a full-stack developer in Bandung. Web apps, AI features and smart contracts, mostly built against hackathon deadlines.",
  keywords: ["full-stack developer", "frontend engineer", "Next.js", "AI web app", "smart contracts", "Bandung"],
  authors: [{ name: "Moch Virgiawan Caesar Ridollohi" }],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "mvirgiawancr · Full-stack developer in Bandung",
    description: "Web apps, AI features and smart contracts, mostly built against hackathon deadlines.",
    type: "website",
    images: ["/hero/dawn.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${archivo.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
