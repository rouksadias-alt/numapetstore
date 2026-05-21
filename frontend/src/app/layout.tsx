import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { GeoBanner } from "@/components/GeoBanner";
import { PageTracker } from "@/components/PageTracker";
import { TrackingPixels } from "@/components/TrackingPixels";
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
  title: "NumaWellness | Bienestar y mascotas en Panamá",
  description:
    "Productos premium para bienestar y hogares con mascotas en Panamá. Pago contra entrega.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GeoBanner />
        {children}
        <Suspense fallback={null}>
          <PageTracker />
        </Suspense>
        <TrackingPixels />
      </body>
    </html>
  );
}
