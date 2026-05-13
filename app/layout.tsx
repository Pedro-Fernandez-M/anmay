import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANMAY Salón & Boutique | Cosmetóloga en Valdivia, Chile",
  description:
    "Anjela R. Calderón Parra — Cosmetóloga y Esteticista Integral en Valdivia. Limpiezas faciales, tratamientos premium, masajes, depilación y skincare personalizado. Agenda tu cita por WhatsApp.",
  keywords:
    "cosmetóloga Valdivia, estética integral Valdivia, limpieza facial Valdivia, tratamientos faciales Valdivia, salón belleza Valdivia, ANMAY, esteticista Valdivia, skincare Valdivia, depilación Valdivia, masajes Valdivia",
  authors: [{ name: "Anjela R. Calderón Parra" }],
  openGraph: {
    title: "ANMAY Salón & Boutique",
    description:
      "Cosmetología y Estética Integral en Valdivia, Chile. Tratamientos premium para revelar tu mejor versión.",
    type: "website",
    locale: "es_CL",
    siteName: "ANMAY Salón & Boutique",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANMAY Salón & Boutique",
    description: "Cosmetología y Estética Integral en Valdivia, Chile.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
