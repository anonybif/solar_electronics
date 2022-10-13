import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';

function Footer() {
    return (
        <div className="container footer">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled" >
                        <li><Link to='/home' className="link">Home</Link></li>
                        <li><Link to='/product' className="link">Product</Link></li>
                        <li><Link to='/category' className="link">Category</Link></li>
                        <li><Link to='/aboutus' className="link">About</Link></li>
                        <li><Link to='/contactus' className="link">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address className="address">
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        +852 1234 5678<br />
                        +852 8765 4321<br />
                        <a href="mailto:solar@electronics.net" className="link">
                            solar@electronics.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 socialmedia" >
                    <h5 id="follow">Follow</h5>
                    <div>
                        <a className="btn" href="http://google.com/+"><i className="fa fa-google-plus" ></i></a>
                        <a className="btn" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn" href="mailto:"><i className="fa fa-envelope o"></i></a>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2022 Solar Electronics</p>
                </div>
            </div>
        </div>
    );
}

export default Footer