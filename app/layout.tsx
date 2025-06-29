import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lar dos Sonhos",
  description: "Adquira sua casa que tanto sonha!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`antialiase`}
      >
        <div className="fixed w-full h-dvh bg-blue-400/5 pointer-events-none z-30"></div>
        {children}
      </body>
    </html>
  );
}
