"use client";
import React, { useEffect, useMemo, useRef } from "react";
import StackCard from "../component/StackCard";
import AcademicProjectCard from "../component/AcademicProjectCard";
import { academicProject, recentProject } from "../data/Project";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export default function Project() {
  const projectRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  return (
    <section
      ref={projectRef}
      id="project"
      className="max-w-screen-2xl 3xl:m-auto min-h-screen px-6 md:px-16 lg:px-48  py-20 relative "
    >
      <motion.div
        style={{ scale, opacity }}
        className=" sticky flex justify-start w-full top-5 lg:top-8 pb-12 lg:pb-20 -z-10"
      >
        <h1 className="text-5xl lg:text-7xl font-semibold text-black text-left">
          Recent Project
        </h1>
      </motion.div>
      <div className=" flex flex-col gap-y-10 xs:gap-y-40 lg:gap-y-0 ">
        {" "}
        {recentProject.map((item, i) => {
          const targetScale = 1 - (recentProject.length - i) * 0.08;

          return (
            <StackCard
              key={i}
              props={item}
              i={i}
              progress={scrollYProgress}
              range={[1 * 0.25, 1]}
              target={targetScale}
            />
          );
        })}
      </div>
      <div className=" flex flex-col gap-3 items-center justify-center py-14 lg:py-0 lg:pb-14 ">
        <h1 className="text-3xl font-semibold text-black">Academic Projects</h1>
        <hr className=" w-60 border-2 rounded-[100px]  border-normalBlue" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   z-10">
        {academicProject.map((item, index) => {
          return <AcademicProjectCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
}
