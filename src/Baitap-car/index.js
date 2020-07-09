import React, { Component } from "react";

export default class BaitapCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "./img/imgRedCar.jpg",
    };
  }
  changeImg = (src) => {
    let img = "";
    switch (src) {
      case "red":
        img = "./img/imgRedCar.jpg";
        break;
      case "black":
        img = "./img/imgBlackCar.jpg";
        break;
      case "silver":
        img = "./img/imgSilverCar.jpg";

        break;
    }
    this.setState({
      img,
    });
  };

  render() {
    return (
      <div>
        <h3 className="title">Bai tap Car</h3>
        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid" src={this.state.img} />
          </div>
          <div className="col-sm-6">
            <button
              className="btn btn-danger mr-2"
              onClick={() => {
                this.changeImg("red");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-secondary mr-2"
              onClick={() => {
                this.changeImg("silver");
              }}
            >
              Silver
            </button>
            <button
              className="btn btn-dark mr-2"
              onClick={() => {
                this.changeImg("black");
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}
