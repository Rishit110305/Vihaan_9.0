import type { Metadata } from "next";
import { Quantico, Inter } from "next/font/google";
import "./globals.css";

const quantico = Quantico({
  weight: ["400", "700"],
  variable: "--font-quantico",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vihaan 9.0 | Scheduler",
  description: "Schedule for Vihaan 9.0 Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quantico.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-[#050B14] text-gray-200 selection:bg-cyan-900/40">
        {children}
      </body>
    </html>
  );
}
