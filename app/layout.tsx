import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karthikeyan S — Full Stack Developer",
  description:
    "Full Stack Developer, Cloud Engineer & AI/ML Engineer. Building production-grade software across mobile, web, and cloud.",
  openGraph: {
    title: "Karthikeyan S",
    description: "Full Stack Developer · Cloud Engineer · AI/ML Engineer",
    url: "https://karthikeyan.is-a.dev",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0f0a1a] text-white">{children}</body>
    </html>
  );
}
