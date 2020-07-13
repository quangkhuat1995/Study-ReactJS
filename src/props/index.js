import React, { Component } from "react";
import ClassProps from "./classProps";
import FunctionProps from "./functionProps";

export default class Props extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "quang",
      lop: "FE42",
    };
  }

  render() {
    const { username, lop } = this.state;
    return (
      <div>
        <h3 className="title">Props</h3>
        <ClassProps name={username} lop={lop} />
        <ClassProps name="Cybersoft" lop="FE43" />
        {/* <FunctionProps name={username} lop={lop} /> */}
        <FunctionProps>
          <h3>Hello CyberSoft</h3>
          <p>Duy Quang</p>
        </FunctionProps>
      </div>
    );
  }
}
