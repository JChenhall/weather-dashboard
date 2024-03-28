import { getIp } from "../get-ip/route";

type TodaysWeatherDataType = {
  condition: { text: string; icon: string };
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
};

export const getCurrentWeatherData =
  async (): Promise<TodaysWeatherDataType> => {
    const ip = await getIp();
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${ip}&days=7&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );

    if (!res.ok) {
      throw new Error("failed to fetch");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await res.json();

    return data.current;
  };
