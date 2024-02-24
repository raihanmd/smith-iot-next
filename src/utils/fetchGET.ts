import { TData } from "@/types";
import headers from "./headers.api";

export const fetchGET = async (): Promise<TData> => {
  try {
    const res = await fetch(
      //@ts-ignore
      process.env.NEXT_PUBLIC_API_URL,
      {
        method: "GET",
        headers,
        next: { revalidate: 10 },
      }
    );

    const json = await res.json();
    console.log(json);

    return JSON.parse(json["m2m:cin"].con) as TData;
  } catch (error) {
    throw error;
  }
};
