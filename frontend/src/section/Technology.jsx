import React from "react";
import TechnologyContainer from "../component/TechnologyContainer";

export default function Technology() {
  return (
    <section className="max-w-screen-lg overflow-x-hidden  mx-6 md:mx-16 lg:mx-auto">
      <div className=" py-10">
        <h3 className=" text-2xl font-semibold text-black mb-5 text-center">
          Technologies I used
        </h3>
        <div className="flex flex-col gap-5">
          {" "}
          <TechnologyContainer
            row={1}
            fromDirection={0}
            toDirection={"-100%"}
          />
          <TechnologyContainer
            row={2}
            fromDirection={"-100%"}
            toDirection={0}
          />
        </div>
      </div>
    </section>
  );
}
