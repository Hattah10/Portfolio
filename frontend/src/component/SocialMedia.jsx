import React from "react";

export default function SocialMedia() {
  const icons = [
    {
      icon: "bx bxl-github",
      route: "https://github.com/Hattah10",
    },
    {
      icon: "bx bxl-instagram",
      route: "https://www.instagram.com/hattatah5/",
    },
    {
      icon: "bx bxl-linkedin",
      route: "",
    },
  ];
  return (
    <div className=" fixed bottom-0 left-20 flex flex-col items-center gap-5">
      <div className=" text-4xl flex flex-col gap-3 text-darkBlue">
        {icons.map((item) => (
          <a href={item.route ?? ""} target="_blank" rel="noopener noreferrer">
            <i
              class={`${item.icon} cursor-pointer hover:-translate-y-2 duration-700`}
            ></i>
          </a>
        ))}
      </div>
      <hr className="w-[2px] h-40 bg-normalBlue" />
    </div>
  );
}
