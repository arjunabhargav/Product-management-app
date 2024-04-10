import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Products List:</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img src={product.img_url} className="card-img-top" alt="company" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <Link to={`/ProductDetails/${product.id}/${product.name}/${product.price}`} className="btn btn-primary mr-2">View Product</Link>
                <button className="btn btn-success" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
