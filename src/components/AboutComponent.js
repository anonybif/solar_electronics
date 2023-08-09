import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faComments, faShoppingCart, faUserFriends } from "@fortawesome/free-solid-svg-icons";


function About() {
    return (
        <div className="container background">
            <div className="row">
                <div className="col-12 col-lg-5 offset-lg-1 mt-5">
                    <Card className="main-card">
                        <CardBody>
                            <CardTitle id="about-title">
                                We Are Solar
                            </CardTitle>
                            <CardSubtitle >
                                At Solar Electronics, we are committed to bringing you the latest and greatest in high-quality electronic devices and solutions. With a focus on sustainable and eco-friendly technology, we aim to provide innovative products that harness the power of the sun.<br /> As the world transitions towards renewable energy, we recognize the importance of solar-powered electronics in reducing our carbon footprint.</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-lg-5 mt-lg-5">
                    <Card className="main-card">
                        <CardBody>
                            <p>Our goal is to offer a wide range of solar-powered gadgets, appliances, and solutions that not only meet your technological needs but also contribute to a greener future.</p>
                            <p>Whether you're looking for solar-powered chargers, lights, outdoor gear, or even home automation systems, our extensive selection has you covered. We curate products from renowned manufacturers, ensuring durability, efficiency, and exceptional performance.</p>
                            <p>At Solar Electronics, we believe in not only providing top-notch products but also delivering outstanding customer service. Our knowledgeable and friendly staff members are always ready to assist you in finding the perfect solar-powered device for your specific requirements.</p>
                            <br />
                            <p>Thank you for choosing Solar Electronics.</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-10 offset-1 mt-4">
                    <YoutubeEmbed embedId="pi5mdw9kq7o" />
                </div>
            </div>
            <div className="row mt-5 abt-row">
                <div className="col-12 col-md-5 col-lg-3">
                    <FontAwesomeIcon icon={faUserFriends} size="7x" color="#34ebae" />
                    <h6 className="mt-4"><strong>Family Owned & Operated</strong></h6>
                    <p>
                        We prioritize delivering personalized service and high-quality products to our valued customers.
                    </p>
                </div>
                <div className="col-12 col-md-5 col-lg-3">
                    <FontAwesomeIcon icon={faComments} size="7x" color="#ebc634" />
                    <h6 className="mt-4"><strong>Real People, Real Service</strong></h6>
                    <p>
                        Experience personalized assistance and expert advice from our dedicated team of tech enthusiasts.
                    </p>
                </div>
                <div className="col-12 col-md-5 col-lg-3">
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="7x" color="#3e00a1" />
                    <h6 className="mt-4"><strong>Expert Support & Care</strong></h6>
                    <p>
                        Our team of experts are always ready to assist you with any questions or concerns you may have.
                    </p>
                </div>
                <div className="col-12 col-md-5 col-lg-3">
                    <FontAwesomeIcon icon={faShoppingCart} size="7x" color="#c43e04" />
                    <h6 className="mt-4"><strong>Free Returns</strong></h6>
                    <p>
                        We offer hassle-free returns on all purchases, ensuring your satisfaction with our products.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;