import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">PRODUCT MANAGEMENT SYSTEM</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Home/23/arjun">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Products</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">About Us</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Registeration">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AddProducts">Add Products</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/contactUs">Contact Us</Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/admin">admin</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/user">User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
