import React from "react";
import StackCardLink from "./StackCardLink";
import ToolTag from "./ToolTag";

export default function StackCard(props) {
  return (
    <div
      key={props.title}
      className="lg:h-screen flex  justify-center items-center "
    >
      <div className="flex flex-col lg:flex-row rounded-3xl shadow-2xl  w-full h-auto lg:h-[450px]">
        <div className="w-full lg:w-1/2 h-[300px] lg:h-full  ">
          <img
            src={props.image}
            alt=""
            className="w-full h-full object-cover rounded-tl-3xl lg:rounded-tr-none rounded-tr-3xl lg:rounded-s-3xl"
          />
        </div>
        <div className="flex-1 w-full px-5 py-10 relative">
          <h1 className="text-3xl font-bold font-montserrat">
            {props.title}{" "}
            <span className="font-normal text-xl text-gray-500">
              ({props.client})
            </span>
          </h1>
          <span className=" font-medium text-darkBlue tracking-widest">
            {props.role}{" "}
          </span>
          <p className="font-inter mt-5">{props.description}</p>
          <div className="flex flex-wrap my-8 gap-2 ">
            {props.tools.map((item) => (
              <ToolTag toolName={item} />
            ))}
          </div>

          <div className=" absolute bottom-4 right-4 ">
            <StackCardLink props={props} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
