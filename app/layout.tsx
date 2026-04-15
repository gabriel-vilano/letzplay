import type { Metadata, Viewport } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "LetzPlay",
  description: "Rankings, torneios e comunidade de Beach Tennis",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={arimo.variable}>
      <body>{children}</body>
    </html>
  );
}
