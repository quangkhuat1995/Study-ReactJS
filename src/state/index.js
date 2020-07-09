import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      userName: "Quang",
    };
  }

  checkLogin = () => {
    this.setState({
      isLogin: true,
    });
  };

  renderHTML = () => {
    return this.state.isLogin ? (
      <p>Hello {this.state.userName}</p>
    ) : (
      <button className="btn btn-success" onClick={this.checkLogin}>
        Login
      </button>
    );
  };

  render() {
    return (
      <div>
        <h3 className="title">State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
