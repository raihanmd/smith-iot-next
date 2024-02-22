"use client";

import { fetchGET } from "@/utils/fetchGET";

export default async function Home() {
  const data = await fetchGET();

  return <main>{JSON.stringify(data["m2m:cin"].con)}</main>;
}
