import Image from "next/image";
import {
  getCurrentWeatherData,
  getForcastWeatherData,
} from "@/app/api/WeatherApi";
import { getWeekday } from "@/utils/GetWeekDay";

export default async function TodaysWeather() {
  const weatherData = await getCurrentWeatherData();
  const forecastData = await getForcastWeatherData();
  const todaysforcastWeatherData = forecastData[0]; //used to get info not in the current weather data

  return (
    <>
      <div
        className=" flex flex-col justify-center items-center h-full w-full p-3 z-30 bg-base-200 rounded-lg"
        key={todaysforcastWeatherData.id}
      >
        <div className=" flex flex-row w-full">
          <h1 className="card-title items-start drop-shadow-lg text-2xl font-bold">
            {getWeekday(todaysforcastWeatherData.date)}
          </h1>
          <p className="flex justify-end ml-5 items-end text-lg">
            {weatherData.temp_c} °C
          </p>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <Image
            src={`https:${weatherData.condition.icon}`}
            alt={"icon"}
            width={600}
            height={600}
            className="h-20 w-20 "
          />
        </div>
        <p className="drop-shadow-lg">{weatherData.condition.text}</p>
      </div>
    </>
  );
}
