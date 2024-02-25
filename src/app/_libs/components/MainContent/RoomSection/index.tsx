"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { useRootContext } from "@/contexts/RootContext";
import GaugeComponentLoader from "@/app/_libs/loaders/GaugeComponent.loader";

const DynamicGaugeComponent = dynamic(() => import("./DynamicGaugeComponent"), {
  loading: () => <GaugeComponentLoader />,
  ssr: false,
});

export default function RoomSection() {
  const { antares } = useRootContext();

  return (
    <Stack>
      <Heading fontSize={"sm"} color={"text.secondary"}>
        Living Room
      </Heading>
      <SimpleGrid columns={1} gap={"2"}>
        <Flex
          p={"5"}
          bg={"foreground"}
          rounded={"xl"}
          justify={"center"}
          align={"center"}
          shadow={"lg"}
          direction={"column"}
        >
          <Text color={"text.secondary"}>Temperature in Living Room</Text>
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicGaugeComponent antares={antares} type="temperature" />
          </Suspense>
        </Flex>
        <Flex
          p={"5"}
          bg={"foreground"}
          rounded={"xl"}
          justify={"center"}
          align={"center"}
          shadow={"lg"}
          direction={"column"}
        >
          <Text color={"text.secondary"}>Humidity in Living Room</Text>
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicGaugeComponent antares={antares} type="humidity" />
          </Suspense>
        </Flex>
      </SimpleGrid>
    </Stack>
  );
}
