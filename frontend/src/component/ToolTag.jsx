import React from "react";

export default function ToolTag({ toolName }) {
  return (
    <>
      <span className="px-3 py-1 rounded-[100px] bg-lightBlue text-gray-500 border border-lightBlue text-sm">
        {toolName}
      </span>
    </>
  );
}
