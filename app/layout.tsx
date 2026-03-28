import type { Metadata } from "next";
import { Bodoni_Moda, Outfit } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIOS CRM — Gestão Inteligente para Estética Facial e Corporal",
  description:
    "CRM com IA para clínicas de estética facial e corporal. Automatize atendimento, reative pacientes e organize sua equipe com inteligência e eficiência.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${bodoni.variable} ${outfit.variable} bg-cream font-sans text-wine/60 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
