import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProductForm(props) {
  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value,
      id: product.id,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProductFormSubmission}
        buttonText="Update Product"
      />
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  ticket: PropTypes.object,
  onEditProduct: PropTypes.func,
};

export default EditProductForm;
