import React from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import NewProductForm from "./NewProductForm";
// import Product from "./Product";

class ProductController extends React.Component {
  constructor() {
    super();
    this.state = {
      mainProductList: [],
      pageShowing: 0
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

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({mainProductList: newMainProductList, pageShowing: 1});
  }

  render() {
    let pageShowing = this.state.pageShowing;
    let buttonText = null;
    const currentProductList = this.state.mainProductList;
    if (this.state.pageShowing === 1) {
      pageShowing =  <ProductList currentProductList={currentProductList} />
      buttonText = "Create new product"
    } else if (this.state.pageShowing === 2) {
      pageShowing = <NewProductForm  onNewProductCreation={this.handleAddingNewProductToList} />
      buttonText = "Go back"
    } else {
      pageShowing = <ProductDetails />
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
