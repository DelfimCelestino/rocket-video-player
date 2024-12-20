import type { Metadata } from "next";
import { Roboto_Condensed as RobotoCondensed } from "next/font/google";
import "./globals.css";
import { SheetRootProvider } from "@/components/providers/sheet-provider";

const robotoCondensed = RobotoCondensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Rocket Video Player",
  description:
    "Uma plataforma moderna de vídeos construída com Next.js 14, React e TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={robotoCondensed.className}>
        <SheetRootProvider>{children}</SheetRootProvider>
      </body>
    </html>
  );
}
