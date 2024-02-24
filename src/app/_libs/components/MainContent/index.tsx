"use client";

import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import GaugeChart from "@/libs/react-gauge-chart";

import { useRootContext } from "@/contexts/RootContext";

export default function MainContent() {
  const data = useRootContext();
  if (!data) <>Hello</>;

  return (
    <>
      {JSON.stringify(data)}
      <SimpleGrid columns={2} gap={"5"} px={"2"}>
        <Flex
          w={"full"}
          p={"5"}
          rounded={"xl"}
          shadow={"lg"}
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"3"}
        >
          <Heading fontSize={"lx"} fontWeight={"semibold"}>
            Temp : {Number(data.temperature.toFixed(1))}°C
          </Heading>
          <GaugeChart
            id="gauge-chart2"
            textColor="#000"
            arcPadding={0.02}
            cornerRadius={2}
            colors={["#F5CD19", "#EA4228"]}
            formatTextValue={(value: number) => value + "°C"}
            percent={Number(data.temperature.toFixed(1)) / 100}
            nrOfLevels={1}
          />
        </Flex>
        <Flex
          w={"full"}
          p={"5"}
          rounded={"xl"}
          shadow={"lg"}
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"3"}
        >
          <Heading fontSize={"lx"} fontWeight={"semibold"}>
            Humidity : {data.humidity}RH
          </Heading>
          <GaugeChart
            id="gauge-chart2"
            textColor="#000"
            arcPadding={0.02}
            cornerRadius={2}
            formatTextValue={(value: number) => value + "RH"}
            arcsLength={[0.35, 0.3, 0.35]}
            colors={["#269ED9", "#5BE12C", "#EA4228"]}
            percent={data.humidity / 100}
            nrOfLevels={3}
          />
        </Flex>
      </SimpleGrid>
    </>
  );
}
