import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import CookieBanner from "@/components/cookiebanner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Braun Hausmeisterservice - Rund-um-Immobilienpflege aus einer Hand im Kreis Koblenz und Neuwied",
  description: "Gebäudereinigung, Grundstückspflege, Gärtnerarbeiten und vieles Mehr. Professionell, zuverlässig und preiswert!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden` }
      >
        <header>
          <NavBar/>
        </header>
          {children}
          <CookieBanner />
        <footer className="mt-8 w-full overflow-hidden">
          <Footer/>
        </footer>
        </body>
    </html>
  );
}
