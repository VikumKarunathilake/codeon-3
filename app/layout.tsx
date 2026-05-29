import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeOn | Java and Bedrock Minecraft Server Hosting",
  description:
    "Minecraft Server Made Easy! Java & Bedrock Edition servers with 10,000+ modpacks, 1-click install, and 24/7 technical support.",
  icons: {
    icon: [
      {
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
