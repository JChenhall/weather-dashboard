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

type ForcastWeatherDataType = {
  id: number;
  date: string;
  day: {
    condition: { text: string; icon: string };
    avgtemp_c: number;
    uv: string;
    precip_mm: number;
    avghumidity: number;
    cloud: number;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
  };
};

type WeatherLocationDataType = {
  location: { name: string; country: string };
};

export const getIp = async () => {
  const res = await fetch(`https://freeipapi.com/api/json/`);
  if (!res.ok) {
    throw new Error("failed to fetch IP");
  }
  const data = await res.json();
  return data;
};

export const getCurrentWeatherData =
  async (): Promise<TodaysWeatherDataType> => {
    const awaitIp = await getIp();
    const ip = awaitIp.ipAddress;
    const lat = awaitIp.latitude;
    const lon = awaitIp.longitude;
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

export const getForcastWeatherData = async (): Promise<
  ForcastWeatherDataType[]
> => {
  const awaitIp = await getIp();
  const ip = awaitIp.ipAddress;
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?q=${ip}&days=7&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("failed to fetch");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await res.json();
  console.log("owap", data);
  return data.forecast.forecastday;
};
