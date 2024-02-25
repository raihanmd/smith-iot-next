"use client";

import { Flex, Text } from "@chakra-ui/react";

export default function GaugeComponentLoader() {
  return (
    <Flex
      w={"250px"}
      h={"150px"}
      textAlign={"center"}
      justifyContent={"center"}
      align={"center"}
    >
      <Text color={"text.primary"} fontSize={"sm"}>
        Loading...
      </Text>
    </Flex>
  );
}
