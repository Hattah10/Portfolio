import React from "react";
import StackCardLink from "./StackCardLink";
import ToolTag from "./ToolTag";
import { useTransform, motion } from "motion/react";
import { Tooltip } from "react-tooltip";

export default function StackCard({ props, i, progress, range, target }) {
  const scale = useTransform(progress, range, [1, target]);
  const isSmallScreen = window.innerWidth < 375;
  return (
    <motion.div
      style={{
        top: isSmallScreen
          ? `calc(20px + ${i * 20}px)`
          : `calc(60px + ${i * 25}px)`,
        scale,
      }}
      className="lg:h-dvh   z-20 sticky  xs:top-12 "
    >
      {" "}
      <div className="flex flex-col lg:flex-row rounded-3xl shadow-2xl  w-full h-auto lg:min-h-[450px] border-2 bg-white">
        <div className="w-full lg:w-1/2 flex flex-col justify-end">
          {" "}
          <div className=" w-full h-[350px]  hidden  md:block ">
            <img
              src={props.image}
              alt=""
              className="w-full h-full object-cover object-left   rounded-tr-3xl border-t-4 border-r-4 border-gray-100"
            />
          </div>
        </div>
        <div className="flex-1 w-full px-5 py-8 relative rounded-bl-3xl lg:rounded-bl-none  rounded-rl-3xl lg:rounded-rl-none rounded-tr-3xl rounded-br-3xl bg-white ">
          <h1 className="text-3xl font-bold font-montserrat">
            {props.title}{" "}
            <span
              data-tooltip-id="client"
              className="font-normal text-xl text-gray-500"
            >
              ({props.client})
            </span>{" "}
            <Tooltip
              className="tooltip "
              id="client"
              place="top"
              variant="info"
              content="Client"
            />
          </h1>
          <span className=" font-medium text-darkBlue tracking-widest">
            {props.role}{" "}
          </span>
          <p className="font-inter mt-5">{props.description}</p>
          <div className="flex flex-wrap my-4 gap-2 ">
            {props.tools.map((item) => (
              <ToolTag toolName={item} />
            ))}
          </div>

          <div className=" absolute bottom-4 right-4 ">
            <StackCardLink props={props} />{" "}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
