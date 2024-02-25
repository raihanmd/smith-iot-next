"use client";

import { useRootContext } from "@/contexts/RootContext";
import {
  Flex,
  Stack,
  Heading,
  Text,
  StackDivider,
  Image,
} from "@chakra-ui/react";

export default function WeatheCard() {
  const data = useRootContext();

  return (
    <Stack
      p={"5"}
      rounded={"3xl"}
      shadow={"lg"}
      bgGradient="linear(to-r, primary, secondary)"
      color={"foreground"}
      gap={"5"}
    >
      <Flex
        justify={"space-between"}
        align={"center"}
        direction={{ base: "column", sm: "row" }}
      >
        <Flex gap={"2"} justify={"start"} align={"center"}>
          <Image
            draggable={false}
            src={`https://openweathermap.org/img/wn/${data.weather?.icon}@2x.png`}
            alt="Icon Image"
            width={{ base: "120px", sm: "70px" }}
            height={{ base: "120px", sm: "70px" }}
          />
          <Flex direction={"column"}>
            <Heading fontSize={{ base: "3xl", sm: "lg" }} fontWeight={"bold"}>
              {data.weather?.main}
            </Heading>
            <Text fontWeight={"thin"} fontSize={{ base: "xl", sm: "sm" }}>
              Ciamis, Jabar
            </Text>
          </Flex>
        </Flex>
        <Heading fontSize={"5xl"} mt={"-20px"}>
          {data.antares?.temperature.toFixed(1)}°C
        </Heading>
      </Flex>
      <Stack
        divider={<StackDivider />}
        direction={"row"}
        justify={"space-around"}
        align={"center"}
      >
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Text fontSize={"lg"}>{data.antares?.humidity}%</Text>
          <Text fontSize={"sm"}>Humidity</Text>
        </Flex>
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Text fontSize={"lg"}>{data.antares?.temperature.toFixed(1)}°C</Text>
          <Text fontSize={"sm"}>Temperature</Text>
        </Flex>
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Text fontSize={"lg"}>{data.weather?.wind_force}</Text>
          <Text fontSize={"sm"}>W Force</Text>
        </Flex>
      </Stack>
    </Stack>
  );
}
