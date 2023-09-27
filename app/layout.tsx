import "./globals.css";
import type { Metadata } from "next";
import Head from 'next/head';
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
      <Head>
        <link rel='icon' href='/logoempty.svg'/>
      </Head>
      <body>{children}</body>
    </html>
  );
}
