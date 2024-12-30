import React from "react";
import profile from "../assets/images/profile.jpg";
import StackCard from "../component/StackCard";
import StackCardLink from "../component/StackCardLink";
import ToolTag from "../component/ToolTag";
import AcademicProjectCard from "../component/AcademicProjectCard";
export default function Project() {
  const recentProject = [
    {
      title: "POS Inventory System",
      client: "GPIH",
      role: "FullStack Developer",
      description:
        "Developed a real-time collaboration platform enabling seamless communication and data sharing. The project included features like live chat using Socket.IO, a responsive UI built with React and Tailwind, and integration with third-party APIs to enhance functionality.",
      tools: ["react", "tailwind", "API", "socket.io"],
      image: profile,
      github: "Http",
      externalLink: "",
    },
    {
      title: "Online Job System",
      client: "Pyschology Student",
      role: "FullStack Developer",
      description:
        "Developed a real-time collaboration platform enabling seamless communication and data sharing. The project included features like live chat using Socket.IO, a responsive UI built with React and Tailwind, and integration with third-party APIs to enhance functionality.",
      tools: ["react", "tailwind", "API", "socket.io"],
      image: profile,
      github: "Http",
      externalLink: ".",
    },
  ];

  const academicProject = [
    {
      title: "POS Inventory System",
      client: "GPIH",
      role: "FullStack Developer",
      description:
        "Developed a real-time collaboration platform enabling seamless communication and data sharing. The project included features like live chat using Socket.IO, a responsive UI built with React and Tailwind, and integration with third-party APIs to enhance functionality.",
      tools: ["react", "tailwind", "API", "socket.io"],
      image: profile,
      github: "Http",
      externalLink: "",
    },
    {
      title: "Online Job System",
      client: "Pyschology Student",
      role: "FullStack Developer",
      description:
        "Developed a real-time collaboration platform enabling seamless communication and data sharing. The project included features like live chat using Socket.IO, a responsive UI built with React and Tailwind, and integration with third-party APIs to enhance functionality.",
      tools: ["react", "tailwind", "API", "socket.io"],
      image: profile,
      github: "Http",
      externalLink: ".",
    },
  ];
  return (
    <div className="max-w-screen-2xl 3xl:m-auto  px-6 md:px-16 lg:px-48 py-20 ">
      {" "}
      <h1 className=" text-4xl lg:text-5xl font-semibold text-black pb-10">
        Recent Project
      </h1>
      {recentProject.map((item, index) => {
        return <StackCard key={index} {...item} />;
      })}
      <div className=" flex flex-col gap-3 items-center justify-center py-14">
        <h1 className="text-3xl font-semibold text-black">Academic Projects</h1>
        <hr className=" w-60 border-2 rounded-[100px]  border-normalBlue" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {academicProject.map((item, index) => {
          return <AcademicProjectCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
}
