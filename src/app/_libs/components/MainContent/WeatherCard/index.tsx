"use client";

import { useRootContext } from "@/contexts/RootContext";
import { Flex, Stack, Icon, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { FaCloudSun } from "react-icons/fa";

export default function WeatheCard() {
  const { temperature, humidity } = useRootContext();

  return (
    <Stack
      p={"5"}
      rounded={"3xl"}
      shadow={"lg"}
      bgGradient="linear(to-r, primary, secondary)"
      color={"foreground"}
      gap={"5"}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Flex gap={"5"}>
          <Icon as={FaCloudSun} fontSize={"5xl"} />
          <Flex direction={"column"}>
            <Heading fontSize={"2xl"} fontWeight={"semibold"}>
              Berawan
            </Heading>
            <Text fontWeight={"thin"}>Ciamis, Jawa Barat</Text>
          </Flex>
        </Flex>
        <Heading fontSize={"4xl"}>{temperature.toFixed(1)}°C</Heading>
      </Flex>
      <Flex justify={"center"} align={"center"} gap={"10"}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          border={"1"}
        >
          <Text fontSize={"lg"}>{humidity}RH</Text>
          <Text fontSize={"sm"}>Humidity</Text>
        </Flex>
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Text fontSize={"lg"}>{temperature.toFixed(1)}°C</Text>
          <Text fontSize={"sm"}>Temperature</Text>
        </Flex>
      </Flex>
    </Stack>
  );
}
