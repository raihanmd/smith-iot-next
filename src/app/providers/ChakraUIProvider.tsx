"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Stack } from "@chakra-ui/react";

import theme from "@/consts/chakraTheme";

export function ChakraUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Stack maxW={"md"} mx={"auto"}>
          {children}
        </Stack>
      </ChakraProvider>
    </CacheProvider>
  );
}
