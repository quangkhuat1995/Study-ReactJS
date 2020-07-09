import React, { Component } from "react";

export default class ExampleHanlingEvent extends Component {
  isLogin = false;
  userName = "Quang";

  checkLogin = () => {
    this.isLogin = true;
  };

  renderHTML = () => {
    return this.isLogin ? (
      <p>Hello {this.userName}</p>
    ) : (
      <button className="btn btn-success" onClick={this.checkLogin}>
        Login
      </button>
    );
  };

  render() {
    return (
      <div>
        <h3 className="title">ExampleHandlingEvent</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
