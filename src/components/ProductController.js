import React from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import NewProductForm from "./NewProductForm";

class ProductController extends React.Component {
  constructor() {
    super();
    this.state = {
      mainProductList: [],
      pageShowing: 1,
      currentProductInDetails: null,
    };
  }

  handleClick = () => {
    if (this.state.pageShowing === 0) {
      this.setState((prevState) => ({
        pageShowing: 1,
        currentProductInDetails: null,
      }));
    } else if (this.state.pageShowing === 1) {
      this.setState((prevState) => ({
        pageShowing: 2,
      }));
    } else {
      this.setState((prevState) => ({
        pageShowing: 1,
      }));
    }
  };

  /*
Product details - 0 - button => Form(2)
Product list page - 1 -> button => Form(2), (LATER: button=> ech product)
New Product Form - 2 -> button => List(1)
  */

  handleAddingNewProductToList = (newProduct) => {
    const newMainProductList = this.state.mainProductList.concat(newProduct);
    this.setState({ mainProductList: newMainProductList, pageShowing: 1 });
  };

  handleChangingDetailView = (productKey) => {
    const newProduct = this.state.mainProductList.filter(
      (product) => product.id === productKey
    )[0];
    this.setState({ currentProductInDetails: newProduct, pageShowing: 0 });
  };

  render() {
    let pageShowing = this.state.pageShowing;
    let buttonText = null;
    const currentProductList = this.state.mainProductList;
    if (this.state.currentProductInDetails != null) {
      pageShowing = (
        <ProductDetails
          name={this.state.currentProductInDetails.name}
          price={this.state.currentProductInDetails.price}
          quantity={this.state.currentProductInDetails.quantity}
          description={this.state.currentProductInDetails.description}
        />
      );
      buttonText = "Go back";
    } else if (this.state.pageShowing === 1) {
      pageShowing = (
        <ProductList
          currentProductList={currentProductList}
          onProductClick={this.handleChangingDetailView}
        />
      );
      buttonText = "Create new product";
    } else if (this.state.pageShowing === 2) {
      pageShowing = (
        <NewProductForm
          onNewProductCreation={this.handleAddingNewProductToList}
        />
      );
      buttonText = "Go back";
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
