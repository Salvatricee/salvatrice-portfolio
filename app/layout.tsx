import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salvatrice Igabineza | Product Builder · Developer · Designer",
  description:
    "I turn ideas and real-world problems into products people can use. Multidisciplinary technology professional exploring product, design, development, data, and emerging technology.",
  keywords: [
    "Salvatrice Igabineza",
    "Product Builder",
    "Developer",
    "Designer",
    "UX Research",
    "UI/UX Design",
    "React",
    "Next.js",
    "Flutter",
    "Data",
  ],
  authors: [{ name: "Salvatrice Igabineza" }],
  openGraph: {
    title: "Salvatrice Igabineza | Product Builder · Developer · Designer",
    description:
      "I turn ideas and real-world problems into products people can use.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}