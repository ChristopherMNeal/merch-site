import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <React.Fragment>
      {props.currentProductList.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          key={product.key}
        />
      ))}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
};

export default ProductList;
