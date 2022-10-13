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
                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar blandit aliquet elit eget tincidunt
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
                                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Mauris bla
                            </CardSubtitle>
                            <div className="row mt-4">
                                <div className="col-1">
                                    <i className="fa fa-cloud icons" ></i>
                                </div>
                                <div className="col">
                                    <h6><strong>Cloud Upload</strong></h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1">
                                    <i className="fa fa-compass icons" ></i>
                                </div>
                                <div className="col">
                                    <h6><strong>GPS</strong></h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1">
                                    <i className="fa fa-gear icons" ></i>
                                </div>
                                <div className="col">
                                    <h6><strong>Programmable Paths</strong></h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
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