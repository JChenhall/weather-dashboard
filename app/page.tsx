import React from "react";
import BottomNav from "../components/constant/BottomNav";
import { getCurrentWeatherData } from "./api/WeatherApi";
import TodaysWeather from "@/components/cards/TodaysWeather";
import Humidity from "@/components/cards/Humidity";
import {
  ChanceOfRain,
  ChanceOfSnow,
} from "@/components/cards/ExtraWeatherFacts";

export default async function Home() {
  const test = getCurrentWeatherData();
  console.log(test);
  //md:bg-phone6 bg-phone7 bg-no-repeat bg-cover
  return (
    <main className="flex min-w-screen min-h-[100dvh]">
      <section className="grid grid-cols-4 gap-4 w-full mb-24 mt-8 px-4 ">
        <div className="relative border border-accent shadow-xl rounded-lg flex flex-col gap-1 md:col-span-1 col-span-2 row-span-1">
          <div className=" w-full h-full bg-gradient-to-b from-accent to-primary blur-sm hover:blur-md rounded-md absolute z-0 top-0 right-0" />
          <div className="w-full h-full relative">
            <TodaysWeather />
          </div>
        </div>

        <div className=" relative border border-accent shadow-xl rounded-lg md:flex hidden flex-col gap-1 col-span-3 row-span-2">
          <div className=" w-full h-full bg-gradient-to-b from-accent to-primary blur-sm hover:blur-md rounded-md absolute z-0 top-0 right-0" />
          graph
        </div>

        <div className=" relative border border-accent shadow-xl rounded-lg flex flex-col gap-1 md:col-span-1 col-span-2 row-span-1">
          <div className=" w-full h-full bg-gradient-to-b from-accent to-primary blur-sm hover:blur-md rounded-md absolute z-0 top-0 right-0" />
          <Humidity />
        </div>

        <div className=" relative border border-accent shadow-xl rounded-lg md:flex hidden flex-col gap-1 col-span-2 row-span-1">
          <div className=" w-full h-full bg-gradient-to-b from-accent to-primary blur-sm hover:blur-md rounded-md absolute z-0 top-0 right-0" />
          <ChanceOfRain />
        </div>

        <div className=" relative border border-accent shadow-xl rounded-lg md:flex hidden flex-col gap-1 col-span-2 row-span-1">
          <div className=" w-full h-full bg-gradient-to-b from-accent to-primary blur-sm hover:blur-md rounded-md absolute z-0 top-0 right-0" />
          <ChanceOfSnow />
        </div>

        <div className=" relative border border-accent shadow-xl rounded-lg flex flex-col gap-1 md:col-span-2 col-span-4 row-span-2">
          <div className=" w-full h-full bg-gradient-to-b from-accent to-primary blur-sm hover:blur-md rounded-md absolute z-0 top-0 right-0" />
          map
        </div>

        <div className=" relative border border-accent shadow-xl rounded-lg md:flex hidden flex-col gap-1 col-span-1 row-span-1">
          <div className=" w-full h-full bg-gradient-to-b from-accent to-primary blur-sm hover:blur-md rounded-md absolute z-0 top-0 right-0" />
          <span className="text-[16px] w-full h-full rounded-lg bg-base-200 z-20">
            other
          </span>
        </div>

        <div className=" relative border border-accent shadow-xl rounded-lg md:flex hidden flex-col gap-1 col-span-1 row-span-1">
          <div className=" w-full h-full bg-gradient-to-b from-accent to-primary blur-sm hover:blur-md rounded-md absolute z-0 top-0 right-0" />
          <span className="text-[16px] w-full h-full rounded-lg bg-base-200 z-20">
            other
          </span>
        </div>

        <div className=" relative border border-accent shadow-xl rounded-lg flex  flex-col gap-1 md:col-span-2 col-span-4 row-span-1">
          <div className=" w-full h-full bg-gradient-to-b from-accent to-primary blur-sm hover:blur-md rounded-md absolute z-0 top-0 right-0" />
          weeks weather
        </div>
      </section>
      {/* bottombar */}
      <BottomNav />
    </main>
  );
}
