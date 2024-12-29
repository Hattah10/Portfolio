import React from "react";
import profile from "../assets/images/profile.jpg";
export default function Profile() {
  return (
    <div className=" w-[300px] h-[350px] rounded-tl-[40px] rounded-br-[40px]  shadow-2xl  ">
      {" "}
      <img
        src={profile}
        alt=""
        className="w-full h-full object-cover object-center   rounded-tl-[40px] rounded-br-[40px] hover:rounded-none duration-500"
      />
    </div>
  );
}
