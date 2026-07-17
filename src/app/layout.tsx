import type { Metadata } from "next";
import { DM_Serif_Display, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const description =
  "A community-led medical charity trust of Ganiga Samaj, Karnataka. 100% of every rupee goes directly to verified families facing medical hardship.";

export const metadata: Metadata = {
  title: "Team Ekata — Ganiga Samaj Community Trust",
  description,
  openGraph: {
    title: "Team Ekata — Ganiga Samaj Community Trust",
    description,
    type: "website",
    siteName: "Team Ekata",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Ekata — Ganiga Samaj Community Trust",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSerif.variable} ${jakarta.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
