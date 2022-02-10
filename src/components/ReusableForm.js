import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <input type="text" name="name" placeholder="Product Name" />
      <label htmlFor="price">Product Price</label>
      <input type="number" name="price" min="0" />
      <label htmlFor="quantity">Current Product Qty</label>
      <input type="number" name="quantity" min="0" />
      <textarea name="description" placeholder="Product Description" />
      <button type="submit">Create</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
