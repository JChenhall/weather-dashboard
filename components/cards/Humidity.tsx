import {
  getCurrentWeatherData,
  getForcastWeatherData,
} from "@/app/api/WeatherApi";
import { PieChart } from "../graphs/PieChart";

export default async function Humidity() {
  const weatherData = await getCurrentWeatherData();
  const forecastData = await getForcastWeatherData();
  const todaysforcastWeatherData = forecastData[0]; //used to get info not in the current weather data
  const calculatedHumidity = () => {
    let difference = 100 - weatherData.humidity;

    return difference;
  };

  const humidityData = [
    {
      id: `humidity`,
      label: "humidity",
      value: `${weatherData.humidity}`,
      color: "hsl(20%, 70%, 50%)",
    },
    {
      id: ``,
      label: ".",
      value: `${calculatedHumidity()}`,
      color: "hsla(360, 100%, 100%, 0)",
    },
  ];

  return (
    <>
      <div
        className=" flex flex-col justify-center items-center h-full w-full p-3 z-30 bg-base-200 rounded-lg"
        key={todaysforcastWeatherData.id}
      >
        <h1 className="card-title items-start drop-shadow-lg text-2xl font-bold">
          Humidity
        </h1>
        <div className=" flex flex-col w-full h-1/2 justify-center items-center">
          <PieChart data={humidityData} />
          {/* {weatherData.humidity}% */}
        </div>
      </div>
    </>
  );
}
