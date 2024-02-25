import { TAntares } from "@/types";

export type DynamicGaugeProps = {
  antares: TAntares | null;
  type: "temperature" | "humidity";
};
