import React from "react";
import TechnologyCard from "../component/TechnologyCard";
import profile from "../assets/images/profile.jpg";
export default function AboutMe() {
  return (
    <div className=" px-48 ">
      <div className="flex gap-20 pt-20 pb-16">
        <div className="w-1/2">
          <div className="flex items-center gap-10">
            <h1 className=" text-5xl font-semibold text-black">About Me</h1>
            <hr className="flex-1 w-full h-1 rounded-lg bg-lightBlue" />
          </div>
          <div className="grid gap-5 text-lg mt-10 text-pretty ">
            {" "}
            <p>
              My name is Norhata T. Sampaco. I recently graduated with a
              Bachelor of Science in Information Technology, specializing in
              Databases. Programming is one of my passions because I find it
              both fun and rewarding, especially after solving challenges and
              seeing the results of my efforts.
            </p>
            <p>
              Additionally, I have a keen interest in working with Arduino
              projects, as I enjoy creating practical solutions that can be
              useful in our home.
            </p>
            <p>Simply put, I love programming!</p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <div className=" w-[300px] h-[350px] rounded-tl-[40px] rounded-br-[40px]  shadow-2xl ">
            {" "}
            <img
              src={profile}
              alt=""
              className="w-full h-full object-cover object-center   rounded-tl-[40px] rounded-br-[40px] hover:rounded-none duration-500"
            />
          </div>
        </div>
      </div>
      <div className="px-10 py-10">
        <h3 className=" text-2xl font-semibold text-black mb-5 text-center">
          Technologies I used
        </h3>
        <div className="">
          {" "}
          <div className="flex justify-center gap-5 flex-wrap">
            <TechnologyCard row={1} />
          </div>{" "}
          <div className="flex justify-center gap-5 flex-wrap mt-3">
            {" "}
            <TechnologyCard row={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
