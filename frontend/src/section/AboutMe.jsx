import React from "react";

import Profile from "../component/Profile";
export default function AboutMe() {
  return (
    <section
      id="about"
      className="max-w-screen-2xl w-full 3xl:m-auto px-6 md:px-16 lg:px-48 overflow-hidden "
    >
      <div className="flex flex-col lg:flex-row gap-20 pt-20 pb-16">
        <div className="w-full lg:w-3/4">
          <div data-aos="fade-right" className="flex items-center gap-10">
            <h1 className=" text-4xl lg:text-5xl font-semibold text-black">
              About Me
            </h1>
            <hr className="flex-1 w-full border-2 rounded-lg border-lightBlue" />
          </div>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center lg:hidden my-12"
          >
            <Profile />
          </div>
          <div
            data-aos="fade-up"
            className="grid gap-2 mt-10 text-pretty text-lg "
          >
            {" "}
            <p>
              <strong>
                "Hello! I’m Norhata Sampaco – Full Stack Developer."
              </strong>
            </p>
            <p>
              I specialize in bringing ideas to life through functional,
              user-friendly, and accessible websites. From planning to
              deployment, I love every step of creating web applications that
              meet client needs while ensuring an excellent user experience.
            </p>
            <p>
              In 2024, I gained valuable hands-on experience as a Web
              Development Intern, where I contributed to building and optimizing
              web applications for real-world projects. During the same year, I
              also worked on freelance projects, collaborating with clients to
              create tailored websites that matched their business goals. These
              experiences deepened my understanding of the development process,
              enhanced my technical skills, and strengthened my ability to
              communicate with clients effectively.
            </p>
            {/* <p>
              Additionally, I have a keen interest in working with Arduino
              projects, as I enjoy creating practical solutions that can be
              useful in our home.
            </p>
            <p>Simply put, I love programming!</p> */}
          </div>
        </div>
        <div className="flex-1 hidden lg:block ">
          <div
            data-aos="fade-left"
            className="flex items-center justify-center  "
          >
            <Profile />
          </div>
        </div>
      </div>
    </section>
  );
}
