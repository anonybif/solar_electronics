import React from "react";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";

function Home() {

    return (
        <div className="container background">
            <div className="row">
                <div className="col-12 col-md-5 offset-md-1 mt-4">
                    <Card className="main-card">
                        <CardBody>
                            <CardTitle className="main-title">
                                Solar Electronics Store
                            </CardTitle>
                            <CardSubtitle >
                                Power your world with Solar: Illuminating Future Tech!
                            </CardSubtitle>
                            <Button id="shop_btn">Shop Now</Button>
                        </CardBody>
                    </Card>

                </div>
                <div className="col-12 col-md-6" >
                    <Card>
                        <CardImg src="assets/images/gadget_2.webp" alt="Gadgets" />
                    </Card>
                </div>
            </div>
            <div className="row row2">
                <div className="col-12 col-md-5 offset-md-1" >
                    <Card id="card_1">
                        <CardImg src="assets/images/joystick_1.webp" alt="Joystick" id="img_1" />
                        <CardBody className="card-body_1">
                            <CardTitle>
                                New Gaming Accessory Arrivals
                            </CardTitle>
                            <Button outline id="game_btn">Shop Gaming</Button>
                        </CardBody>
                    </Card>

                </div>
                <div className="col-12 col-md-5" >
                    <Card id="card_2">
                        <CardImg src="assets/images/cam_1.webp" alt="security camera" id="img_2" />
                        <CardBody className="card-body_1">
                            <CardTitle>
                                10% Off All Security Accessories
                            </CardTitle>
                            <Button outline id="sec_btn">Shop Security</Button>
                        </CardBody>
                    </Card>

                </div>
            </div>
            <div className="row row3">
                <div className="col-12 col-md-4" >
                    <Card id="card_3">
                        <CardImg src="assets/images/drone.webp" alt="Gadgets" id="img_3" />
                        <CardBody className="card-body_2">
                            <CardTitle>
                                Camera Drones
                            </CardTitle>
                            <Button outline id="btn_3">Shop Now</Button>
                        </CardBody>
                    </Card>

                </div>
                <div className="col-12 col-md-4" >
                    <Card id="card_4">
                        <CardImg src="assets/images/camera.webp" alt="Gadgets" id="img_4" />
                        <CardBody className="card-body_2">
                            <CardTitle>
                                Camera Accessories
                            </CardTitle>
                            <Button outline id="btn_4">Shop Now</Button>
                        </CardBody>
                    </Card>

                </div>
                <div className="col-12 col-md-4" >
                    <Card id="card_5">
                        <CardImg src="assets/images/headphone.webp" alt="Gadgets" id="img_5" />
                        <CardBody className="card-body_2">
                            <CardTitle>
                                Portable Audio
                            </CardTitle>
                            <Button outline id="btn_5">Shop Now</Button>
                        </CardBody>
                    </Card>

                </div>
            </div>
            <div className="row row4">
                <h1 className="col-12">
                    Shop By Brand
                </h1>
            </div>
            <div className="row row5">
                <div className="col-3 col-md offset-1">
                    <img src="assets/images/hp.webp" alt="hp" className="brand_img" id="hp_logo" />
                </div>
                <div className="col-3 col-md">
                    <img src="assets/images/sony.png" alt="sony" className="brand_img" />
                </div>
                <div className="col-3 col-md">
                    <img src="assets/images/samsung.webp" alt="samsung" className="brand_img" />
                </div>
                <div className="col-3 col-md offset-1 offset-md-0">
                    <img src="assets/images/intel.webp" alt="intel" className="brand_img" />
                </div>
                <div className="col-3 col-md">
                    <img src="assets/images/dell.png" alt="dell" className="brand_img" />
                </div>
                <div className="col-3 col-md">
                    <img src="assets/images/lg.webp" alt="lg" className="brand_img" />
                </div>
            </div>
        </div>
    );
}

export default Home;

