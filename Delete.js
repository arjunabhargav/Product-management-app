import React from 'react';
import axios from 'axios';

const DeleteProduct = ({ id, onDelete }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/Products/${id}`)
      .then(() => {
        onDelete(id); // Notify the parent component that the product has been deleted
        console.log('Product deleted successfully');
      })
      .catch(error => console.log(error));
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
  );
};

export default DeleteProduct;
