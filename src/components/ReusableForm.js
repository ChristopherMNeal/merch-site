import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const styledElements = {
    marginBottom: "15",
    border: "2 red",
  };
  return (
    <form onSubmit={props.formSubmissionHandler}>
      {/* styles are not working, not sure why */}
      <div style={styledElements}>
        <label htmlFor="price">Product Price</label>
        <br />
        <input type="text" name="name" placeholder="Product Name" />
      </div>
      <br />
      <div style={styledElements}>
        <label htmlFor="quantity">Current Product Qty</label>
        <br />
        <input type="number" name="price" min="0" />
      </div>
      <br />
      <div style={styledElements}>
        <input type="number" name="quantity" min="0" />
      </div>
      <br />
      <div style={styledElements}>
        <textarea name="description" placeholder="Product Description" />
        <br />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
