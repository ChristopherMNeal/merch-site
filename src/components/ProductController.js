import React from "react";
import ProductList from "./ProductList";
import { v4 } from "uuid";
import ProductDetails from "./ProductDetails";
// import Product from "./Product";

class ProductController extends React.Component {
  constructor() {
    super();
    this.state = {
      mainProductList: [
        {
          name: "cat toy",
          price: 3.55,
          quantity: 15,
          description: "a string",
          key: v4(),
        },
        {
          name: "dog toy",
          price: 4,
          quantity: 5,
          description: "a ball",
          key: v4(),
        },
        {
          name: "turtle toy",
          price: 9,
          quantity: 25,
          description: "a tiny jetski",
          key: v4(),
        },
      ],
      showProductDetails: false,
    };
  }

  render() {
    const currentProductList = this.state.mainProductList;
    return (
      <React.Fragment>
        <ProductList currentProductList={currentProductList} />
        <ProductDetails
          name={currentProductList[0].name}
          price={currentProductList[0].price}
          quantity={currentProductList[0].quantity}
          description={currentProductList[0].description}
        />
      </React.Fragment>
    );
  }
}

export default ProductController;
