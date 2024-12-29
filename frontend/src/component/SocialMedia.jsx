import React from "react";
import { Tooltip } from "react-tooltip";

export default function SocialMedia() {
  const icons = [
    {
      id: "github",
      icon: "bx bxl-github",
      route: "https://github.com/Hattah10",
    },
    {
      id: "instagram",

      icon: "bx bxl-instagram",
      route: "https://www.instagram.com/hattatah5/",
    },
    {
      id: "linkedin",

      icon: "bx bxl-linkedin",
      route: "",
    },
  ];
  return (
    <div className="  h-auto fixed bottom-0 left-20 hidden lg:block ">
      {" "}
      <div className=" max-w-screen-2xl flex flex-col items-center gap-5">
        <div className="  flex flex-col gap-3 text-darkBlue">
          {icons.map((item) => (
            <>
              {" "}
              <a
                data-tooltip-id={item.id}
                href={item.route ?? ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class={`${item.icon} cursor-pointer hover:-translate-y-2 duration-700 text-4xl`}
                ></i>
              </a>
              <Tooltip
                className="tooltip"
                id={item.id}
                place="right"
                variant="info"
                content={item.id}
              />
            </>
          ))}
        </div>

        <hr className="w-[2px] h-40 bg-normalBlue" />
      </div>
    </div>
  );
}
