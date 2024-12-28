import React from "react";
import arduino from "../assets/images/arduino2.svg";
import laravel from "../assets/images/laravel.svg";

export default function TechnologyCard({ row }) {
  const technology = [
    { row: 1, name: "HTML", icon: "bx bxl-html5" },
    { row: 1, name: "CSS", icon: "bx bxl-css3" },
    { row: 1, name: "Tailwind", icon: "bx bxl-tailwind-css" },

    { row: 1, name: "Bootsrap", icon: "bx bxl-bootstrap" },
    { row: 1, name: "Javascript", icon: "bx bxl-javascript" },

    { row: 2, name: "Python", icon: "bx bxl-python" },
    { row: 2, name: "PHP", icon: "bx bxl-php" },
    { row: 2, name: "Laravel", image: laravel },
    { row: 2, name: "Django", icon: "bx bxl-django" },
    { row: 2, name: "React", icon: "bx bxl-react" },
    { row: 2, name: "Github", icon: "bx bxl-git" },
    { row: 2, name: "Arduino", image: arduino },

    { row: 1, name: "Firebase", icon: "bx bxl-firebase" },
  ];

  return (
    <>
      {technology
        .filter((item) => item.row === row)
        .map((item, index) => (
          <div
            key={index}
            className="capitalize  px-3 py-2 bg-lightBlue rounded-xl font-medium tracking-widest font-montserrat text-gray-700 flex items-center gap-1"
          >
            {item.icon ? (
              <i className={`${item.icon} text-4xl text-normalBlue`}></i>
            ) : item.image ? (
              <img src={item.image} alt="icon" className="w-10 h-10" />
            ) : null}

            <span>{item.name}</span>
          </div>
        ))}
    </>
  );
}
