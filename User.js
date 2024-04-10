import React, { useState, useEffect } from 'react';
import Products from './products';
import Cart from './Cart'; // Assuming you have a Cart component
import axios from 'axios'; // Import axios for making HTTP requests
import './User.css'; // Import CSS file for styling

const User = () => {
  // State to manage the cart items
  const [cartItems, setCartItems] = useState([]);
  // State to toggle cart visibility
  const [showCart, setShowCart] = useState(false); // Ensure that showCart state is declared here
  // State to store products fetched from the server
  const [products, setProducts] = useState([]);
  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');
  // State to store search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch products from the server
  useEffect(() => {
    axios.get('http://localhost:5000/Products')
      .then(response => {
        setProducts(response.data);
        setSearchResults(response.data); // Initialize search results with all products
      })
      .catch(error => console.log(error));
  }, []);

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search button click
  const handleSearch = () => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="user-dashboard">
      <h1 className="dashboard-title">User Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="cart-toggle">
        <button className="btn btn-primary" onClick={toggleCart}>
          {showCart ? 'Hide Cart' : 'View Cart'}
        </button>
      </div>
      {showCart && (
        <div className="cart-container">
          <h2>Cart</h2>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      )}
      <div className="products-container">
        <h2>Products</h2>
        <Products products={searchResults} addToCart={addToCart} />
      </div>
    </div>
  );
};

export default User;
