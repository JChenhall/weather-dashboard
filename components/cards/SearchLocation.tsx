import { getWeatherLocationData } from "../../app/api/WeatherApi";

export default async function SearchLoaction() {
  const weatherLocation = await getWeatherLocationData();
  return (
    <div className="flex flex-col items-center text-center col-start-3 row-span-1">
      <div className="flex flex-row ">
        <h2 className="card-title">
          IP location: {weatherLocation.location.name}
        </h2>
        <h2 className="card-normal flex justify-end ml-5 items-end">
          {weatherLocation.location.country}
        </h2>
      </div>
      <div className="join bg-transparent w-full justify-end pr-14 ">
        <input
          className="input input-bordered  bg-white bg-opacity-50 drop-shadow-lg join-item "
          placeholder="Location"
        />
        <button className="btn btn-primary join-item rounded-r-lg">
          Search
        </button>
      </div>
    </div>
  );
}
