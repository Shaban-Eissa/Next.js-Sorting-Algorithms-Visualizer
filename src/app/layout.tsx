import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";

import { SortingAlgorithmProvider } from "@/context/Visualizer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorting Visualizer",
  description: "Visualize a selection of different sorting algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="./icon.ico" />
      <body className={inter.className}>
        <SortingAlgorithmProvider>{children}</SortingAlgorithmProvider>
      </body>
    </html>
  );
}
