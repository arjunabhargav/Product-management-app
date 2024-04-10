// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; // Import the Navigation component
import Products from './components/products'; // Import the Products component
import AboutUs from './components/aboutUs'; // Import the AboutUs component
import Greet from './components/Greet';
import Home from './components/Home';
import { Parent } from './components/Parent';
import { Child } from './components/Child';
import { Login } from './components/Login';
import { UseFormHook } from './components/UseFormHook';
import { UsecontextDemo } from './components/UsecontextDemo';
import { ProductDetails } from './components/ProductDetails';

import Headers from './components/Headers';
import { Tests } from './components/Tests';
import AddProducts from './components/AddProducts';
import Registeration from './components/Registeration';
import Admin from './components/Admin';
import EditProduct from './components/EditProduct';
import User from './components/User';


function App() {
  return (
    
    <>
    
    <Router>
      <div className="App">
      
        <Headers></Headers>
        <Navigation /> {/* Render the Navigation component */}
        <Routes>
          <Route path="/home/:id/:name" element={<Home />} />
          <Route path="/AddProducts" element={<AddProducts />} /> {/* Corrected path */}
          <Route path="/Greet" element={<Greet />} />
          <Route path="/UseFormHook" element={<UseFormHook />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registeration" element={<Registeration />} />
          <Route path="/product" element={<Products />} />
          <Route path="/ProductDetails/:id/:name/:price" element={<ProductDetails />} />
          <Route path="/EditProduct/:id" element={<EditProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </Router><div>
      
      
      </div></>
  );
}

export default App;
