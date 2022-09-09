import React, { Component } from "react";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Product from "./ProductComponent";

class Main extends Component {

    render() {
        return (
            <div >
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path='home' element={<Home />} />
                        <Route path='product' element={<Product />} />
                        <Route path='aboutus' element={<About />} />
                        <Route path='contactus' element={<Contact />} />
                        <Route path='*' element={<Navigate to="home" replace />}
                        />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}
export default Main;