import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <React.Fragment>
    {props.productList.map((product) => (
      <Product
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        />
    ))}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
};

export default ProductList;