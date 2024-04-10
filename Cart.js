import React, { useState } from 'react';
import './CartDetails.css'; // Import CSS file for styling

const CartDetails = ({ cartItems }) => {
  const [quantities, setQuantities] = useState(cartItems.map(item => 1));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item, index) => {
      return total + item.price * quantities[index];
    }, 0);
  };

  return (
    <div className="cart-details-container">
      <h2>Cart Details</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => handleDecrement(index)}>-</button>
                {quantities[index]}
                <button onClick={() => handleIncrement(index)}>+</button>
              </td>
              <td>${item.price * quantities[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total-price">Total Price: ${getTotalPrice()}</p>
    </div>
  );
};

export default CartDetails;
