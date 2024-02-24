import { fetchGET } from "@/utils/fetchGET";
import MainContent from "./_libs/components/MainContent";

export default async function page() {
  const data = await fetchGET();
  return (
    <>
      {JSON.stringify(data)}
      <MainContent data={data} />
    </>
  );
}
