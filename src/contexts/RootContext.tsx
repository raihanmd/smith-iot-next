"use client";

import { RootContent, RootWrapperProps } from "@/types";
import { createContext, useContext } from "react";

export const RootContext = createContext<RootContent>({
  weather: {
    humidity: 0,
    temperature: 0,
    wind_force: 0,
    icon: "04d",
    main: "",
  },
  antares: {
    action: 0,
    humidity: 0,
    proximity: 0,
    temperature: 0,
  },
});

export function useRootContext() {
  return useContext(RootContext);
}

export function RootWrapper({ children, data }: RootWrapperProps) {
  return <RootContext.Provider value={data}>{children}</RootContext.Provider>;
}
