import { fetchGET } from "@/utils/fetchGET";

export default async function page() {
  let data: any;
  try {
    data = await fetchGET();
  } catch (e) {
    console.log(e);
  }
  return (
    <div>
      <h1>Proximity: {data.proximity}</h1>
      <h1>Temp: {data.temperature}</h1>
      <h1>Humidity: {data.humidity}</h1>
    </div>
  );
}
