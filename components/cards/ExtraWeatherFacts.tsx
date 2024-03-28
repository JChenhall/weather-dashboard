import {
  getForcastWeatherData,
  getCurrentWeatherData,
} from "../../app/api/WeatherApi";

export const ChanceOfSnow = async () => {
  const weatherData = await getForcastWeatherData();
  const currentWeather = weatherData[0];
  const snow = currentWeather.day.daily_chance_of_snow;
  const rain = currentWeather.day.daily_chance_of_rain;
  console.log(rain);
  return (
    <div
      className="flex flex-col justify-center items-center h-full w-full p-3 z-30 bg-base-200 rounded-lg"
      data-tip={`${snow}`}
      key={currentWeather.id}
    >
      <p className="w-1/4 drop-shadow-lg">Chance of snow:</p>
      <progress
        className="progress progress-info ml-3 w-3/4 drop-shadow-lg"
        value={snow}
        max="100"
      ></progress>
    </div>
  );
};

export const ChanceOfRain = async () => {
  const weatherData = await getForcastWeatherData();
  const currentWeather = weatherData[0];
  const rain = currentWeather.day.daily_chance_of_rain;
  console.log(rain);
  return (
    <div
      className="flex flex-col justify-center items-center h-full w-full p-3 z-30 bg-base-200 rounded-lg"
      data-tip={`${rain}`}
      key={currentWeather.id}
    >
      <p className="w-1/4 drop-shadow-lg">Chance of rain:</p>
      <progress
        className="progress progress-info ml-3 w-3/4 drop-shadow-lg"
        value={rain}
        max="100"
      ></progress>
    </div>
  );
};
