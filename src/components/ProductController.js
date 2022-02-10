import React from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import NewProductForm from "./NewProductForm";
import EditProductForm from "./EditProductForm";

class ProductController extends React.Component {
  constructor() {
    super();
    this.state = {
      mainProductList: [],
      pageShowing: 1,
      currentProductInDetails: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.editing) {
      this.setState((prevState) => ({
        editing: false,
      }));
    } else if (this.state.pageShowing === 0) {
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

  handleDeletingProduct = (id) => {
    const newMainProductList = this.state.mainProductList.filter(
      (product) => product.id !== id
    );
    this.setState({
      mainProductList: newMainProductList,
      currentProductInDetails: null,
      pageShowing: 1,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingProductInList = (productToEdit) => {
    const editedMainProductList = this.state.mainProductList
      .filter((product) => product.id !== this.state.currentProductInDetails.id)
      .concat(productToEdit);
    this.setState({
      mainProductList: editedMainProductList,
      editing: false,
      currentProductInDetails: null,
      pageShowing: 1
    });
  };

  render() {
    let currentPage = null;
    let buttonText = null;
    const currentProductList = this.state.mainProductList;
    if (this.state.editing) {
      currentPage = (
        <EditProductForm
          product={this.state.currentProductInDetails}
          onEditProduct={this.handleEditingProductInList}
        />
      );
      buttonText = "Return to Ticket List";
    } else if (this.state.currentProductInDetails != null) {
      currentPage = (
        <ProductDetails
          product={this.state.currentProductInDetails}
          onClickingDelete={this.handleDeletingProduct}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Go back";
    } else if (this.state.pageShowing === 1) {
      currentPage = (
        <ProductList
          currentProductList={currentProductList}
          onProductClick={this.handleChangingDetailView}
        />
      );
      buttonText = "Create new product";
    } else if (this.state.pageShowing === 2) {
      currentPage = (
        <NewProductForm
          onNewProductCreation={this.handleAddingNewProductToList}
        />
      );
      buttonText = "Go back";
    }
    return (
      <React.Fragment>
        {currentPage}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ProductController;
