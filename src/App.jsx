import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Enquiries from "./pages/Enquiries";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import MobileApp from "./pages/MobileApp";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/enquiries" element={<Enquiries/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/mobile-app" element={<MobileApp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    
     
    </div>
  );
}

export default App;
