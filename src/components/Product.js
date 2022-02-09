import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  return (
    <React.Fragment>
      <h3>
        {props.name} - ${props.price}
      </h3>
      <p>quantity: {props.quantity}</p>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default Product;
