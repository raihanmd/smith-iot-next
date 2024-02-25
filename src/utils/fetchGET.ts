import { TAntares } from "@/types";
import headers from "./headers.api";

const fetchAntares = async (): Promise<TAntares> => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: "GET",
      headers,
      next: { revalidate: 10 },
    });

    const json = await res.json();
    return JSON.parse(json["m2m:cin"].con);
  } catch (error) {
    throw error;
  }
};

export default fetchAntares;
