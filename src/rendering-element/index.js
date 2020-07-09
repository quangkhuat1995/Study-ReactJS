import React, { Component } from "react";

export default class RenderingElements extends Component {
  username = "Cybersoft";
  lop = "FE42";

  renderInfo = () => {
    return (
      <p>
        Username: {this.username} - Lop: {this.lop}
      </p>
    );
  };

  render() {
    return (
      <div>
        <h3 className="title">Rendering Elements</h3>
        {this.renderInfo()}
      </div>
    );
  }
}
