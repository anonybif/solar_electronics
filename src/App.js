import React, { Component } from "react";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import About from "./components/AboutComponent";
import Category from "./components/CategoryComponent";
import Contact from "./components/ContactComponent";
import Footer from "./components/FooterComponent";
import Header from "./components/HeaderComponent";
import Home from "./components/HomeComponent";
import Product from "./components/ProductComponent";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='home' element={<Home />} />
            <Route path='product' element={<Product />} />
            <Route path='category' element={<Category />} />
            <Route path='aboutus' element={<About />} />
            <Route path='contactus' element={<Contact />} />
            <Route path='*' element={<Navigate to="home" replace />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
