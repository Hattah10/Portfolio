import React from "react";

export default function InputContainer({ id, placeholder, type }) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      className="w-full  rounded p-2 border-2 border-gray-200 focus:outline-none focus:shadow-blue "
      placeholder={placeholder}
      required
    />
  );
}
