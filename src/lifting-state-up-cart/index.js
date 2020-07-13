import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: [],
    };
  }

  handleDetailProduct = (product) => {
    this.setState({
      detailProduct: product,
    });
  };

  handleAddCart = (product) => {
    let listCart = [...this.state.listCart];
    //check if there is any id match
    let isInside = listCart.some((item) => product.maSP === item.maSP);
    //if match: increase amount
    if (isInside) {
      product.soLuong++;
    } else {
      //else init amount and add to listCart
      product.soLuong = 1;
      listCart = [...this.state.listCart, product];
    }
    // console.log(listCart);
    // console.log(product.soLuong);

    this.setState({
      listCart,
    });
  };

  getTotalAmount = () => {
    return this.state.listCart.reduce((total, item) => total + item.soLuong, 0);
  };

  handleDeleteCart = (product) => {
    console.log(product);
    console.log(this.state.listCart);
    //return lai mang moi ma ko co ID trung
    let listCart = this.state.listCart.filter(
      (item) => item.maSP !== product.maSP
    );
    this.setState({
      listCart,
    });
  };

  handleAmountProduct = (product, n) => {
    const { listCart } = this.state;

    //cap nhat so luong moi cho product, xet dk neu <1 thi luon hien =1, neu lon hon thi cap nhat

    let amount = product.soLuong;
    console.log("old" + amount);
    if (amount <= 1 && n < 0) {
      amount = 1;
    } else {
      amount += n;
    }
    product.soLuong = amount;
    console.log("new" + product.soLuong);

    /* sao cho nay viet lai nhu tren ma chay khong dung nhi?*/

    //product.soLuong = product.soLuong + n;
    // product.soLuong = product.soLuong <= 1 && n < 0 ? 1 : product.soLuong + n;

    // console.log(product);
    // console.log(this.state.listCart.indexOf(product));

    //lay index de xac dinh vi tri xoa product cu, add lai product voi so luong moi cap nhat
    let productIndex = this.state.listCart.indexOf(product);
    listCart.splice(productIndex, 1, product);

    this.setState({
      listCart,
    });
  };

  render() {
    const { listProduct, detailProduct, listCart } = this.state;

    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.getTotalAmount()})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={listProduct}
          detailProduct={this.handleDetailProduct}
          addCart={this.handleAddCart}
        />
        <Modal
          listCart={listCart}
          delCart={this.handleDeleteCart}
          adjustAmount={this.handleAmountProduct}
        />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
