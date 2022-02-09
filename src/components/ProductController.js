import React from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Product from "./Product";

class ProductController extends React.Component {
  constructor() {
    super();
    this.state = {
      mainProductList: [],
      showProductDetails: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Product />
      </React.Fragment>
    );
  }
}

export default ProductController;
