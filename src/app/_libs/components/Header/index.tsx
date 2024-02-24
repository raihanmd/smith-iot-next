"use client";

import { Heading, Stack } from "@chakra-ui/react";

export default function Header() {
  return (
    <Stack bg={"#566343"} h={"60px"} p={"4"}>
      <Heading fontSize={"lg"} color={"white"}>
        Hello World from Header
      </Heading>
    </Stack>
  );
}
