import Head from 'next/head';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import MuiSetup from "./MuiSetup";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H5 Players",
  description: "Play Games online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ color: 'var(--foreground)', background: 'var(--background)' }}
      >
        {/* Wrap children in a Client Component for MUI */}
        <MuiSetup>
          <Head>
            <meta name="description" content="Welcome to the ultimate gaming site!" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {children}
        </MuiSetup>
      </body>
    </html>
  );
}
