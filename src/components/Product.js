import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  // function onClickFunction() {
  //   props.onProductClick(props.id);
  // }

  return (
    <React.Fragment>
      <h3>
        {props.name} - ${props.price}
      </h3>
      {props.quantity === 0 ? <p>Out of Stock</p>
      :<p>quantity: {props.quantity}</p>}
      {/* <button onClick={onClickFunction}>See Details</button> */}
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default Product;
