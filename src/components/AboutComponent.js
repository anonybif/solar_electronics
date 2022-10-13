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
                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.
                            </CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-lg-5 mt-lg-5">
                    <Card className="main-card">
                        <CardBody>
                            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit tempor elementum ut vulputate vitae, primis nunc vestibulum porttitor felis platea inceptos dui mollis natoque. Vehicula condimentum mollis imperdiet tristique aliquet egestas primis eget, sociis quam convallis tincidunt penatibus volutpat vivamus maecenas, lectus arcu Lorem ipsum dolor sit amet consectetur adipiscing elit tempor elementum ut vulputate vitae, primis nunc vestibulum porttitor felis platea inceptos dui mollis natoque.</p>
                            <p> Vehicula condimentum mollis imperdiet tristique aliquet egestas primis eget, sociis quam convallis tincidunt penatibus volutpat vivamus maecenas, lectus arcu Lorem ipsum dolor sit amet consectetur adipiscing elit tempor elementum ut vulputate vitae, primis nunc vestibulum porttitor felis platea inceptos dui mollis natoque. Vehicula condimentum mollis</p>

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
                        Lorem ipsum dolor sit amet consectetur adipiscing elit tempor elementum ut vulputate
                    </p>
                </div>
                <div className="col-12 col-md-5 col-lg-3">
                    <FontAwesomeIcon icon={faComments} size="7x" color="#ebc634" />
                    <h6 className="mt-4"><strong>Real People, Real Service</strong></h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit tempor elementum ut vulputate
                    </p>
                </div>
                <div className="col-12 col-md-5 col-lg-3">
                    <FontAwesomeIcon icon={faScrewdriverWrench} size="7x" color="#3e00a1" />
                    <h6 className="mt-4"><strong>Expert Support & Care</strong></h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit tempor elementum ut vulputate
                    </p>
                </div>
                <div className="col-12 col-md-5 col-lg-3">
                    <FontAwesomeIcon icon={faShoppingCart} size="7x" color="#c43e04" />
                    <h6 className="mt-4"><strong>Free Returns</strong></h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit tempor elementum ut vulputate
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;