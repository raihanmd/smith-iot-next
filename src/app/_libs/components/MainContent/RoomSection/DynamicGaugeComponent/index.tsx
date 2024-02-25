import dynamic from "next/dynamic";

import { DynamicGaugeProps } from "@/app/_libs/types";
import GaugeComponentLoader from "@/app/_libs/loaders/GaugeComponent.loader";

const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  loading: () => <GaugeComponentLoader />,
  ssr: false,
});

const DynamicGaugeComponent = ({ antares, type }: DynamicGaugeProps) => {
  const gaugeConfig: { [key: string]: any } = {
    temperature: {
      type: "semicircle",
      arc: {
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
      },
      pointer: { color: "var(--chakra-colors-secondary)" },
      labels: {
        valueLabel: {
          formatTextValue(value: number) {
            return value + "°C";
          },
          style: {
            fill: "var(--chakra-colors-text-primary)",
            textShadow: "none",
          },
        },
      },
      maxValue: 50,
    },
    humidity: {
      type: "semicircle",
      arc: {
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
      },
      pointer: { color: "var(--chakra-colors-secondary)" },
      labels: {
        valueLabel: {
          formatTextValue(value: number) {
            return value + "% RH";
          },
          style: {
            fill: "var(--chakra-colors-text-primary)",
            textShadow: "none",
          },
        },
      },
    },
  };

  const gaugeProps = gaugeConfig[type];

  return (
    <GaugeComponent
      id={`gauge-component-${type}`}
      {...gaugeProps}
      value={type === "temperature" ? antares?.temperature : antares?.humidity}
    />
  );
};

export default DynamicGaugeComponent;
