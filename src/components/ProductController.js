import React from "react";
import ProductList from "./ProductList";
import { v4 } from "uuid";
import ProductDetails from "./ProductDetails";
import NewProductForm from "./NewProductForm";
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
      pageShowing: 1 
    };
  }

  handleClick = () => {
    if (this.state.pageShowing < 2) {
      this.setState(prevState => ({
        pageShowing: 2
      }));
    } else {
      this.setState(prevState => ({
        pageShowing: 1
      }));
    }
  }

  /*
Product details - 0 - button => Form(2)
Product list page - 1 -> button => Form(2), (LATER: button=> ech product)
New Product Form - 2 -> button => List(1)
  */


  render() {
    let pageShowing = this.state.pageShowing;
    let buttonText = null;
    const currentProductList = this.state.mainProductList;
    if (this.state.pageShowing === 1) {
      pageShowing =  <ProductList currentProductList={currentProductList} />
      buttonText = "Create new product"
    } else if (this.state.pageShowing === 2) {
      pageShowing = <NewProductForm />
      buttonText = "Go back"
    } else {
      pageShowing = <ProductDetails   
      name={currentProductList[0].name}
      price={currentProductList[0].price}
      quantity={currentProductList[0].quantity}
      description={currentProductList[0].description}
      />
      buttonText = "Create new product"
    }
    return (
      <React.Fragment>
        {pageShowing}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ProductController;
