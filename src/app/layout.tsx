import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Osasa | Portfolio",
  description:
    "Webエンジニア Osasa のポートフォリオサイトです。自己紹介と制作物を掲載しています。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
