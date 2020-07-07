import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListProduct from "./listProduct";
import Promotion from "./promotion";

export default function Baitap3() {
  return (
    <div className="bg-dark">
      <Header />
      <Carousel />
      <ListProduct />
      <Promotion />
    </div>
  );
}
