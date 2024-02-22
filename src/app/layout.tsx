import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ChakraUIProvider } from "./providers/ChakraUIProvider";
import Header from "@/app/_libs/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PWA with Next 13",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraUIProvider>
          <Header />
          {children}
        </ChakraUIProvider>
      </body>
    </html>
  );
}
