import type { Metadata, Viewport } from "next";
import { Gabarito } from "next/font/google";

import { ChakraUIProvider } from "./providers/ChakraUIProvider";
import Header from "@/app/_libs/components/Header";
import { RootWrapper } from "@/contexts/RootContext";

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
          <RootWrapper>
            <Header />
            {children}
          </RootWrapper>
        </ChakraUIProvider>
      </body>
    </html>
  );
}
