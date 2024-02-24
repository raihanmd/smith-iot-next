"use client";

import { ChildrenProps, RootContent } from "@/types";
import { fetchGET } from "@/utils/fetchGET";
import { createContext, useContext, useEffect, useState } from "react";

export const RootContext = createContext<RootContent>({
  action: 0,
  humidity: 0,
  proximity: 0,
  temperature: 0,
});

export function useRootContext() {
  return useContext(RootContext);
}

export const RootWrapper = async ({ children }: ChildrenProps) => {
  const [data, setData] = useState<RootContent>({
    action: 0,
    humidity: 0,
    proximity: 0,
    temperature: 0,
  });
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetchGET();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  });

  return <RootContext.Provider value={data}>{children}</RootContext.Provider>;
};
