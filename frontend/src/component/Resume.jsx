import React from "react";

export default function Resume() {
  const handleOpenPDF = () => {
    window.open("/resume.pdf", "_blank");
  };
  return (
    <button
      onClick={handleOpenPDF}
      className="border-2 px-3 py-1 font-bold tracking-widest rounded-lg border-white text-white border-b-4 border-r-4 hover:scale-105 "
    >
      Resume
    </button>
  );
}
