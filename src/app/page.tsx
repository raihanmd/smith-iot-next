"use client";

import { Stack } from "@chakra-ui/react";

import MainContent from "./_libs/components/MainContent";
import Header from "./_libs/components/Header";

export default function Page() {
  return (
    <Stack px={"2"}>
      <Header />
      <MainContent />
    </Stack>
  );
}
