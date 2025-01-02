import React from "react";
import { TechnologyData } from "../data/Technology";

export default function TechnologyCard({ row }) {
  return (
    <>
      {TechnologyData.filter((item) => item.row === row).map((item, index) => (
        <div
          key={index}
          className="capitalize w-full  px-3 py-2 bg-lightBlue rounded-xl font-medium tracking-widest font-montserrat text-gray-700 flex items-center gap-1 "
        >
          {item.icon ? (
            <i className={`${item.icon} text-4xl text-normalBlue`}></i>
          ) : item.image ? (
            <div className=" w-10 h-10 flex-shrink">
              {" "}
              <img
                src={item.image}
                className=" w-full h-full  object-cover object-center"
              />
            </div>
          ) : null}

          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
}
