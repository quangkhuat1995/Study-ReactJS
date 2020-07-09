import React, { Component } from "react";

export default class HandlingEvent extends Component {
  handleOnClick = () => {
    console.log("haha");
  };

  handleOnClickParam = (name, tuoi) => {
    console.log(`Xin chao ${name}, ${tuoi} tuoi`);
  };

  render() {
    return (
      <div>
        <h3 className="title">Handling Events</h3>
        <button className="btn btn-success" onClick={this.handleOnClick}>
          Event No param
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            this.handleOnClickParam("quang", 18);
          }}
        >
          Event with param
        </button>
      </div>
    );
  }
}
