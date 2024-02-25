import type { Metadata, Viewport } from "next";
import { Gabarito } from "next/font/google";

import "@/styles/main.css";
import { ChakraUIProvider } from "./providers/ChakraUIProvider";
import RootProvider from "./providers/RootProvider";

const gabarito = Gabarito({ subsets: ["latin"] });

export const viewport: Viewport = {
  userScalable: false,
};

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
      <body className={gabarito.className}>
        <ChakraUIProvider>
          <RootProvider>{children}</RootProvider>
        </ChakraUIProvider>
      </body>
    </html>
  );
}
