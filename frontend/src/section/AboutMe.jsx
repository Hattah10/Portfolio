import React from "react";

export default function AboutMe() {
  const technology = ["HTML", "CSS", "Javascript", "tailwind", "bostsrap"];
  return (
    <section className="border-t-2 ">
      <div className="flex gap-20 pt-20 pb-16">
        <div className="w-1/2">
          <div className="">
            <h1 className=" text-5xl font-semibold text-normalBlue">
              About Me
            </h1>
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
        <div className="flex-1 flex items-center ">
          <img
            src=""
            alt=""
            className="border rounded-tl-3xl rounded-br-3xl w-[300px] h-[350px]"
          />
        </div>
      </div>
      <div className="px-10 border">
        <h3 className=" text-2xl font-semibold text-darkBrown mb-5 text-center">
          Technologies I used
        </h3>
        <div className="">
          {" "}
          <div className="flex justify-center gap-5 flex-wrap">
            {technology.map((item, index) => (
              <div
                key={index}
                className=" capitalize px-3 py-2 bg-lightBlue rounded-xl font-medium tracking-widest font-montserrat text-darkBlue"
              >
                {item}
              </div>
            ))}
          </div>{" "}
          <div className="flex justify-center gap-5 flex-wrap mt-3">
            {technology.map((item, index) => (
              <div
                key={index}
                className=" capitalize px-3 py-2 bg-lightBlue rounded-xl font-medium tracking-widest font-montserrat text-darkBlue"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
