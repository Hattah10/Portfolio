import React from "react";
import DesktopWave from "../component/wave/DesktopWave";
import MobileWave from "../component/wave/MobileWave";

export default function Home() {
  return (
    <section
      id="home"
      className="max-w-screen-2xl 3xl:m-auto min-h-screen flex items-center  px-6 md:px-16 lg:px-48 pt-28 md:pt-32 lg:pt-[80px]"
    >
      {/* wave */}
      <div className="w-full absolute lg:-top-5 -top-5 md:-top-24 left-0 right-0 -z-10">
        {/*desktop  */}
        <DesktopWave />
        {/* mobile */}
        <MobileWave />
      </div>
      {/* content */}
      <div data-aos="fade-right" className="flex flex-col xs:gap-6 ">
        {" "}
        <div className="flex items-center gap-3">
          <hr className="w-5 lg:w-10 border-2 rounded-xl border-darkBrown" />{" "}
          <span className=" xs:text-2xl font-montserrat font-medium text-darkBrown">
            Hi, my name is
          </span>
        </div>{" "}
        <div className=" ">
          <h1 className=" leading-normal tracking-tighter md:tracking-normal text-3xl xs:text-4xl md:text-6xl lg:text-5xl 2xl:text-7xl font-bold">
            Norhata Sampaco.
          </h1>
          <h3 className=" text-2xl xs:text-4xl  2xl:text-6xl font-semibold tracking-tighter text-normalBlue">
            I bring ideas to life on the web.
          </h3>
        </div>
        <p className="mt-4 xs:text-xl md:pe-[140px] 2xl:pe-80 ">
          I am a passionate web developer who specializes in turning creative
          designs into functional, user-friendly websites and applications. With
          a focus on clean code and seamless user experiences.
        </p>
        <div className="mt-8">
          {" "}
          <button
            onClick={() => (window.location.href = "#contact")}
            type="button"
            className="border-2 border-darkBlue text-darkBlue px-4 py-2 rounded-md text-lg font-semibold"
          >
            Get in Touch
          </button>
        </div>{" "}
      </div>
    </section>
  );
}
