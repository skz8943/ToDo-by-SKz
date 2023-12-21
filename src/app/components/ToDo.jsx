import { Silkscreen } from "next/font/google";
import React from "react";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400", "700"] });

const ToDo = () => {
  return (
    <div className="grid grid-cols-4">
      <div className=" h-[50rem] w-[30rem] m-20 bg-neutral-500 rounded-md p-5 backdrop-filter backdrop-blur-xl bg-opacity-20 border border-1 border-gray-600">
        <span className={`${silkscreen.className} font-bold text-9xl`}>
          ToDo
        </span>
      </div>
    </div>
  );
};

export default ToDo;
