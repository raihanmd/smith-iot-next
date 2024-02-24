import { TData } from "@/types";

const fetchGET = async (): Promise<TData> => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: "GET",
      headers: {
        "X-M2M-Origin": process.env.NEXT_PUBLIC_ACCESS_KEY || "",
        "Content-Type": "application/json;ty=4",
        Accept: "application/json",
      },
    });

    const json = await res.json();
    return JSON.parse(json["m2m:cin"].con);
  } catch (error) {
    throw error;
  }
};

export default fetchGET;
