import React from "react";

const Banner = ({ TotalTask, totalResolved }) => {
  return (
    <div className="w-11/12 mx-auto lg:flex gap-5 py-20">
      <div className="md:w-2xl h-56 linear-bg text-white flex flex-col justify-center items-center rounded-xl mb-6 lg:mb-0">
        <p className="text-2xl">In-Progress</p>
        <span className="font-semibold text-6xl">{TotalTask}</span>
      </div>
      <div className="linear-bg-2 md:w-2xl h-56  text-white flex flex-col justify-center items-center rounded-xl">
        <p className="text-2xl">Resolved</p>
        <span className="font-semibold text-6xl">{totalResolved}</span>
      </div>
    </div>
  );
};

export default Banner;
