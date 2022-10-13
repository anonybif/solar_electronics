import React, { Component } from "react";
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import '../styles.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: true
        }

        this.toggleNav = this.toggleNav.bind(this);

    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        var elevation = {
            boxShadow: "1px 1px 40px 10px #262626"
        }
        return (
            <div style={elevation} id="nav-container">
                <Navbar dark expand='md' id="navbar" fixed="top">
                    {/* <div className="container "> */}

                    <NavbarBrand className='logo' href="/">
                        <img src="assets/images/logo_v3.png" height='45' width='150' alt='Solar Electronics' id="logo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} className='navbar-toggler' />
                    <Collapse isOpen={this.state.isNavOpen} navbar className="flex-column align-items-end ">
                        <Nav navbar id="nav-item-container">
                            <NavItem className="nav-item">
                                <NavLink to="/home" onClick={this.state.isNavOpen ? this.toggleNav : null} className='nav-link' >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/product" onClick={this.state.isNavOpen ? this.toggleNav : null} className='nav-link'>Product</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/category" onClick={this.state.isNavOpen ? this.toggleNav : null} className='nav-link'>Category</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/aboutus" onClick={this.state.isNavOpen ? this.toggleNav : null} className='nav-link'>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contactus" onClick={this.state.isNavOpen ? this.toggleNav : null} className='nav-link'>Contact</NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        );
    }
}

export default Header;