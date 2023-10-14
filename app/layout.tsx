import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beauty Ohia",
  description: "Beauty Ohia Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoempty.svg" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
