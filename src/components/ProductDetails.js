import React from "react";
import PropTypes from "prop-types";

function ProductDetails(props) {
  const { product, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h3>
        {product.name}
      </h3>
      <p>price: {product.price}</p>
      <p>quantity: {product.quantity}</p>
      <p>{product.description}</p> 
      <button onClick={() => onClickingDelete(product.id)}>Delete Product</button>
      <button onClick={ onClickingEdit }>Update Ticket</button>
    </React.Fragment>
  );
}

ProductDetails.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  description: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ProductDetails;
