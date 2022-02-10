import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <React.Fragment>
      {props.currentProductList.map((product) => (
        <Product
          onProductClick={props.onProductClick}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          id={product.id}
          key={product.id}/>
      ))}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductClick: PropTypes.func
};

export default ProductList;
