import React from "react";
import TechnologyCard from "../component/TechnologyCard";
import profile from "../assets/images/profile.jpg";
import Profile from "../component/Profile";
export default function AboutMe() {
  return (
    <section
      id="about"
      className="max-w-screen-2xl 3xl:m-auto px-6 md:px-16 lg:px-48  "
    >
      <div className="flex flex-col lg:flex-row gap-20 pt-20 pb-16">
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-10">
            <h1 className=" text-4xl lg:text-5xl font-semibold text-black">
              About Me
            </h1>
            <hr className="flex-1 w-full h-1 rounded-lg bg-lightBlue" />
          </div>
          <div className="flex items-center justify-center lg:hidden my-12">
            <Profile />
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
        <div className="flex-1 hidden lg:block ">
          <div className="flex items-center justify-center ">
            <Profile />
          </div>
        </div>
      </div>
      <div className="lg:px-10 py-10">
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
    </section>
  );
}
