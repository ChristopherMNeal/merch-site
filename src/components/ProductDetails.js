import React from "react";
import PropTypes from "prop-types";

function ProductDetails(props) {
  return (
    <React.Fragment>
      <h3>
        {props.name}
      </h3>
      <p>price: {props.price}</p>
      <p>quantity: {props.quantity}</p>
      <p>{props.description}</p> 
    </React.Fragment>
  );
}

ProductDetails.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  description: PropTypes.string
};

export default ProductDetails;
