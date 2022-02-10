import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewProductForm(props){

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({name: event.target.name.value, price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), description: event.target.description.value, id: v4()})
    };


  // event.target.names.value,
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewProductFormSubmission}
        buttonText="Create"/>
    </React.Fragment>
  )
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};


export default NewProductForm;