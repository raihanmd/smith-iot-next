import type { ChildrenProps, TAntares, TWeather } from "@/types";
import { RootWrapper } from "@/contexts/RootContext";
import fetchWeather from "@/utils/fetchWeather";
import fetchAntares from "@/utils/fetchAntares";

let antares: TAntares;
let weather: TWeather;

async function getAntares() {
  antares = await fetchAntares();
}
async function getWeather() {
  weather = await fetchWeather();
}

getAntares();
getWeather();

export default function RootProvider({ children }: ChildrenProps) {
  return <RootWrapper data={{ antares, weather }}>{children}</RootWrapper>;
}
