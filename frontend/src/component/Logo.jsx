import React from "react";
import logo from "../assets/images/logo.png";
export default function Logo() {
  return (
    <div className="w-10 h-10">
      {" "}
      <img
        src={logo}
        alt="logo.png"
        srcset="logo.png"
        className="w-full h-full "
      />
    </div>
  );
}
