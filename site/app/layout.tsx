import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "arus impact",
    template: "%s | arus impact",
  },
  description:
    "AI/ML infrastructure for nonprofits. Building data pipelines, integration middleware, and ML tools for organizations doing real impact work.",
  openGraph: {
    title: "arus impact",
    description:
      "AI/ML infrastructure for nonprofits. Building data pipelines, integration middleware, and ML tools for organizations doing real impact work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} font-mono antialiased min-h-screen flex flex-col`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
