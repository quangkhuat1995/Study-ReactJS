import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: [
        { id: 1, name: "Iphone X", price: 40000 },
        { id: 2, name: "Samsung", price: 60000 },
        { id: 3, name: "Nokia", price: 20000 },
        { id: 4, name: "Vivo", price: 70000 },
      ],
    };
  }

  renderTable = () => {
    const { listProduct } = this.state;
    return listProduct.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="title">Listkeys</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
