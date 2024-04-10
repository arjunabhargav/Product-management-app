import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteProduct from './Delete'; // Import the DeleteProduct component

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/Products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id)); // Remove the deleted product from the products state
  };

  return (
    <div className="text-center">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/ProductDetails/${product.id}/${product.name}/${product.price}`} className="btn btn-primary">View Product</Link>
                {' '}
                <Link to={`/EditProduct/${product.id}`} className="btn btn-success">Edit</Link>
                {' '}
                <DeleteProduct id={product.id} onDelete={handleDelete} /> {/* DeleteProduct component */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center mt-3">
        <Link to={"/AddProducts"} className="btn btn-primary">Add Product</Link>
      </div>
    </div>
  );
};

export default Admin;
