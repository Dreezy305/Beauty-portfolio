import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beauty Ohia",
  description: `a product designer, a minimalist.  My name is Ohia Beauty, i'm a minimalist designer, with an
  adept in communicating design decisions effectively, and
  advocating for the user's perspective throughout the design
  process, collaborating and cross-communicating within diverse
  teams and stakeholders to ensure a smooth transition from
  design to implementation.`,
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
