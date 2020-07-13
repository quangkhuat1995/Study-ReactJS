import React from "react";

export default function FunctionProps(props) {
  return (
    <div>
      <h3>Function Props</h3>
      {/* <div>
        Hello {props.name} - {props.lop}
      </div> */}
      <div>{props.children}</div>
    </div>
  );
}
