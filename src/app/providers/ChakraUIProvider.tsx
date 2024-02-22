"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Stack } from "@chakra-ui/react";

export function ChakraUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Stack maxW={"md"} mx={"auto"}>
          {children}
        </Stack>
      </ChakraProvider>
    </CacheProvider>
  );
}
