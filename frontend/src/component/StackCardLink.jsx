import React from "react";
import { Tooltip } from "react-tooltip";

export default function StackCardLink({ props }) {
  return (
    <div className="flex mr-5 text-3xl gap-2">
      {props.externalLink ? (
        <>
          <a data-tooltip-id="External Link" href={props.externalLink}>
            <i className="bx bx-link-external hover:text-darkBlue cursor-pointer"></i>
          </a>{" "}
          <Tooltip
            className="tooltip "
            id="External Link"
            place="bottom"
            variant="info"
            content="External Link"
          />
        </>
      ) : null}
      {props.github ? (
        <>
          <a data-tooltip-id="github2" href={props.github}>
            <i className="bx bxl-github hover:text-darkBlue cursor-pointer"></i>
          </a>
          <Tooltip
            className="tooltip "
            id="github2"
            place="bottom"
            variant="info"
            content="Github"
          />
        </>
      ) : null}
    </div>
  );
}
