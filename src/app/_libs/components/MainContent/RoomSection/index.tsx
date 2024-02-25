"use client";

import dynamic from "next/dynamic";
import { Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRootContext } from "@/contexts/RootContext";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
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
          <GaugeComponent
            id="gauge-component-1"
            type="semicircle"
            arc={{
              gradient: false,
              width: 0.15,
              subArcs: [
                {
                  limit: 19,
                  color: "#0495fb",
                  showTick: true,
                  tooltip: {
                    text: "Cold ❄️",
                    style: {
                      backgroundColor: "var(--chakra-colors-foreground)",
                      color: "var(--chakra-colors-text-primary)",
                      textShadow: "none",
                      borderRadius: "8px",
                      border: "none",
                    },
                  },
                },
                {
                  limit: 35,
                  color: "#47b854",
                  showTick: true,
                  tooltip: {
                    text: "Ideal 🍃",
                    style: {
                      backgroundColor: "var(--chakra-colors-foreground)",
                      color: "var(--chakra-colors-text-primary)",

                      textShadow: "none",
                      borderRadius: "8px",
                      border: "none",
                    },
                  },
                },
                {
                  limit: 45,
                  color: "#c74638",
                  showTick: true,
                  tooltip: {
                    text: "Hot 🔥",
                    style: {
                      backgroundColor: "var(--chakra-colors-foreground)",
                      color: "var(--chakra-colors-text-primary)",

                      textShadow: "none",
                      borderRadius: "8px",
                      border: "none",
                    },
                  },
                },
              ],
            }}
            pointer={{ color: "var(--chakra-colors-secondary)" }}
            labels={{
              valueLabel: {
                formatTextValue(value) {
                  return value + "°C";
                },
                style: {
                  fill: "var(--chakra-colors-text-primary)",
                  textShadow: "none",
                },
              },
            }}
            value={antares?.temperature}
            maxValue={45}
          />
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
          <GaugeComponent
            id="gauge-component-2"
            type="semicircle"
            arc={{
              gradient: false,
              width: 0.15,
              subArcs: [
                {
                  limit: 40,
                  color: "#c74638",
                  showTick: true,
                  tooltip: {
                    text: "Dry 🌵",
                    style: {
                      backgroundColor: "var(--chakra-colors-foreground)",
                      color: "var(--chakra-colors-text-primary)",
                      textShadow: "none",
                      borderRadius: "8px",
                      border: "none",
                    },
                  },
                },
                {
                  limit: 70,
                  color: "#47b854",
                  showTick: true,
                  tooltip: {
                    text: "Normal 🌿",
                    style: {
                      backgroundColor: "var(--chakra-colors-foreground)",
                      color: "var(--chakra-colors-text-primary)",

                      textShadow: "none",
                      borderRadius: "8px",
                      border: "none",
                    },
                  },
                },
                {
                  limit: 100,
                  color: "#0495fb",
                  showTick: true,
                  tooltip: {
                    text: "Wet 💧",
                    style: {
                      backgroundColor: "var(--chakra-colors-foreground)",
                      color: "var(--chakra-colors-text-primary)",

                      textShadow: "none",
                      borderRadius: "8px",
                      border: "none",
                    },
                  },
                },
              ],
            }}
            pointer={{ color: "var(--chakra-colors-secondary)" }}
            labels={{
              valueLabel: {
                formatTextValue(value) {
                  return value + "% RH";
                },
                style: {
                  fill: "var(--chakra-colors-text-primary)",
                  textShadow: "none",
                },
              },
            }}
            value={antares?.humidity}
            maxValue={100}
          />
        </Flex>
      </SimpleGrid>
    </Stack>
  );
}
