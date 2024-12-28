import React from "react";
import ToolTag from "./ToolTag";
import StackCardLink from "./StackCardLink";

export default function AcademicProjectCard(props) {
  return (
    <div className="w-full min-h-[400px] rounded-xl shadow-blue px-3 py-5 flex flex-col justify-between">
      <header className="grid gap-3">
        <div className="flex items-center justify-between">
          <i class="bx bx-folder text-4xl text-darkBlue"></i>
          <StackCardLink props={props} />{" "}
        </div>
        <h3 className="text-2xl  font-medium">{props.title}</h3>
        <p className="text-sm">{props.description}</p>
      </header>
      <footer className="flex flex-wrap gap-2 my-4">
        {props.tools.map((item) => (
          <ToolTag toolName={item} />
        ))}
      </footer>
    </div>
  );
}
