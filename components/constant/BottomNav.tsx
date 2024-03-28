import React from "react";
import {
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
type Props = {};

const BottomNav = (props: Props) => {
  return (
    <div className=" w-full h-20 absolute inset-x-0 bottom-0 z-40 shadow-2xl">
      <div className="w-full h-full bg-secondary-content rounded-t-2xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 shadow-lg">
        <div className="relative flex h-full w-full 0 justify-center items-center">
          <div className="w-[90%] h-[90%] justify-between items-center flex">
            <button className="btn-circle btn-md hover:bg-slate-300  drop-shadow-2xl">
              <SunIcon className="p-2 text-white" />
            </button>
            <button className="btn-circle btn-md hover:bg-slate-300 ">
              <CalendarDaysIcon className="p-2 text-white" />
            </button>
            <button className="btn-circle btn-md hover:bg-slate-300 ">
              <MagnifyingGlassIcon className="p-2 text-white" />
            </button>
            <button className="btn-circle btn-md hover:bg-slate-300 ">
              <MapIcon className="p-2 text-white" />
            </button>
            <button className="btn-circle btn-md hover:bg-slate-300">
              <AdjustmentsHorizontalIcon className="p-2 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
