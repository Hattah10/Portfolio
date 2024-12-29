import React from "react";

export default function HeadingSection({ heading, style }) {
  return <h1 className={` font-semibold text-black ${style}`}>{heading}</h1>;
}
