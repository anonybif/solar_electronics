import React from "react";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";

function Product() {
    return (
        <div className="container background">
            <div className="row">
                {/* product-row" style={{ backgroundImage: 'url(assets/images/background2.jpg)' }} */}
                <div className="col-12 col-md-5 offset-md-1">
                    <Card className="main-card">
                        <CardBody>
                            <CardTitle className="main-title">
                                The Brand New Dji
                            </CardTitle>
                            <CardSubtitle >
                                A cutting-edge aerial device that combines advanced technology and user-friendly features for an exceptional flying experience.
                            </CardSubtitle>
                            <Button id="shop_btn">Shop</Button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-6 mt-5">
                    <Card id="dji">
                        <img src="assets/images/dji.png" alt="dji drone" />
                    </Card>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-5 offset-md-1">
                    <Card>
                        <CardImg src="assets/images/5kcam.png" alt="Gadgets" />
                    </Card>
                </div>
                <div className="col-12 col-md-5">
                    <Card className="card_2">
                        <CardBody>
                            <CardTitle className="card-title_1">
                                Introducing 5k Video
                            </CardTitle>
                            <CardSubtitle >
                                An impressive and advanced capability that allows users to capture stunning high-resolution videos with exceptional clarity and detail. With a resolution of 5120 x 2880 pixels, the 5k video feature ensures that every frame is packed with incredible sharpness and vibrant colors.
                            </CardSubtitle>
                            <div className="row mt-4">
                                <div className="col-1">
                                    <i className="fa fa-cloud icons" ></i>
                                </div>
                                <div className="col">
                                    <h6><strong>Cloud Upload</strong></h6>
                                    <p>Simplifies seamless data transfer and analysis, revolutionizing aerial operations.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1">
                                    <i className="fa fa-compass icons" ></i>
                                </div>
                                <div className="col">
                                    <h6><strong>GPS</strong></h6>
                                    <p>Ensures precise navigation, unlocking seamless autonomous flight and accurate location tracking.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1">
                                    <i className="fa fa-gear icons" ></i>
                                </div>
                                <div className="col">
                                    <h6><strong>Programmable Paths</strong></h6>
                                    <p>Unleash the power of autonomous flight with precision and control at your fingertips.</p>
                                </div>
                            </div>
                            <Button id="shop_btn">Pre Order Now</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row sub-row">
                <div className="col-10 col-md-6 offset-1 offset-md-3">
                    <Card className="subscribe-card">
                        <CardBody className="subscribe-card_body">
                            <CardTitle className="sub-title">
                                AVAILABLE JULY
                            </CardTitle>
                            <CardSubtitle className="sub-subtitle">
                                Subscribe to The Newsletter For Realtime Updates
                            </CardSubtitle>
                            <Button id="preOrder_btn">Preorder Today</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Product;