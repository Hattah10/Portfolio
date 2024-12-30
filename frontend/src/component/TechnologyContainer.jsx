import React from "react";
import TechnologyCard from "./TechnologyCard";
import { motion } from "motion/react";

export default function TechnologyContainer({
  fromDirection,
  toDirection,
  row,
}) {
  return (
    <div className="flex gap-5">
      <motion.div
        initial={{ x: `${fromDirection}` }} // Start off-screen to the left
        animate={{ x: `${toDirection}` }} // Animate to the center
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex justify-center gap-5 lg:flex-nowrap  lg:flex-shrink-0"
      >
        <TechnologyCard row={row} />
      </motion.div>{" "}
      <motion.div
        initial={{ x: `${fromDirection}` }} // Start off-screen to the left
        animate={{ x: `${toDirection}` }} // Animate to the center
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex justify-center gap-5 lg:flex-nowrap  lg:flex-shrink-0"
      >
        <TechnologyCard row={row} />
      </motion.div>
    </div>
  );
}
