import React from "react";
// import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewProductForm(props){

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    console.log({
      names: event.target.name.value, 
      prices: event.target.price.value,
      quantities: event.target.quantity.value,
      description: event.target.description.value
    });
  }

  // event.target.names.value,
  return (
    <form onSubmit={handleNewProductFormSubmission}>
      <input
        type='text'
        name='name'
        placeholder='Product Name'/>
      <label htmlFor="price">Product Price</label>
      <input
        type='number'
        name='price'/>
      <label htmlFor="quanity">Current Product Qty</label>
      <input
        type='number'
        name='quantity'/>
      <textarea
        name='description'
        placeholder='Product Description'/>
      <button type='submit'>Create</button>
    </form>
  )

}

export default NewProductForm;