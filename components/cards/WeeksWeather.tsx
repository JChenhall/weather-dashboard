import Image from "next/image";
import { getWeatherData } from "../../app/api/WeatherApi";
import { getWeekday } from "@/utils/GetWeekDay";

export default async function WeeksWeather() {
  const forecastDays = await getWeatherData();

  //the slice cuts off the current day. inspiration from https://www.weatherapi.com/weather/
  return (
    <div className="col-span-3 row-span-2 m-2">
      <div className=" rounded-md grid md:grid-cols-6 grid-cols-3 w-100 gap-3">
        {forecastDays.slice(6).map((day) => (
          <div
            className="   text-white rounded-lg bg-slate-200 bg-opacity-30 backdrop-blur-xl drop-shadow-2xl"
            key={day.id}
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title drop-shadow-lg">
                {getWeekday(day.date)}
              </h2>
              <p className="drop-shadow-lg">{day.day.avgtemp_c} °C</p>

              <Image
                src={`https:${day.day.condition.icon}`}
                alt={"icon"}
                width={65}
                height={65}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
