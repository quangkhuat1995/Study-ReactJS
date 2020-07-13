import React, { Component } from "react";

export default class classProps extends Component {
  render() {
    return (
      <div>
        <h3>Class Props</h3>
        <div>
          Hello {this.props.name} - {this.props.lop}
        </div>
      </div>
    );
  }
}
