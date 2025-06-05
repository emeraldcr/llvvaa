import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Vieja Adventures | La Aventura te Espera",
  description:
    "La Vieja Adventures: Empresa líder en turismo de aventura en Costa Rica | Leading eco-friendly adventure tourism in Costa Rica.",
  keywords: [
    "La Vieja Adventures",
    "turismo de aventura",
    "eco-turismo",
    "Costa Rica",
    "adventure tourism",
    "sostenible",
  ],
  authors: [
    { name: "La Vieja Adventures", url: "https://laviejaadventures.com" },
  ],
  // OpenGraph metadata with bilingual description
  openGraph: {
    title: "La Vieja Adventures | La Aventura te Espera",
    description:
      "La Vieja Adventures: Empresa líder en turismo de aventura en Costa Rica | Leading eco-friendly adventure tourism in Costa Rica.",
    url: "https://laviejaadventures.com",
    siteName: "La Vieja Adventures",
    images: [
      {
        url: "/images/og-la-vieja-adventures.jpg",
        width: 1200,
        height: 630,
        alt: "Foto de La Vieja Adventures en Costa Rica",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "La Vieja Adventures | La Aventura te Espera",
    description:
      "La Vieja Adventures: Empresa líder en turismo de aventura en Costa Rica | Leading eco-friendly adventure tourism in Costa Rica.",
    images: ["/images/twitter-la-vieja-adventures.jpg"],
  },
  // Alternate links for English and Spanish (optional)
  alternates: {
    languages: {
      "es-CR": "https://laviejaadventures.com/es",
      "en-US": "https://laviejaadventures.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Meta viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ¡Bienvenidos a La Vieja Adventures! | Let the eco-adventure begin! */}
        {children}
      </body>
    </html>
  );
}
