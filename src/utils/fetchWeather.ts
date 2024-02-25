import { TWeather } from "@/types";
import headers from "./headers.api";

const fetchWeather = async (): Promise<TWeather> => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_WEATHER_URL as string, {
      method: "GET",
      headers,
      next: { revalidate: 10 },
    });

    const json = await res.json();

    const data = {
      temperature: json.main.temp - 273,
      humidity: json.main.humidity,
      main: json.weather[0].main,
      icon: json.weather[0].icon,
      wind_force: json.wind.speed,
    };

    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchWeather;
