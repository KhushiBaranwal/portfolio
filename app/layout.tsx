import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { OWNER } from "@/lib/data";

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

const siteUrl = "https://khushibaranwal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${OWNER.name} — ${OWNER.role}`,
  description: OWNER.tagline,
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "YOLOv8",
    "Portfolio",
    "Khushi Baranwal",
  ],
  authors: [{ name: OWNER.name, url: OWNER.socials.github }],
  openGraph: {
    title: `${OWNER.name} — ${OWNER.role}`,
    description: OWNER.tagline,
    url: siteUrl,
    siteName: OWNER.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${OWNER.name} — ${OWNER.role}`,
    description: OWNER.tagline,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-background font-body antialiased">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
