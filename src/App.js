import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Product from './Pages/Product.js';
import Layout from './nav.js';
import React from 'react';
import ReatDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
