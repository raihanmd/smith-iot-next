import { fetchGET } from "@/utils/fetchGET";

export default async function page() {
  const data = await fetchGET();
  return <div>{JSON.stringify(data)}</div>;
}
