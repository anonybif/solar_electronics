import React from "react";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from '@fortawesome/fontawesome-free-solid';

function Category() {
    return (
        <div className="container background">
            <div className="row">
                <div className="col-11 offset-1 mt-5">
                    <h1 id="audio-title"><b>Audio</b></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-10 offset-md-1 mt-5">
                    <Card className="audio-card">
                        <div className="row">
                            <CardBody className="audio-cardbody col-12 col-md-5 offset-md-1">
                                <CardTitle id="audio-subtitle">
                                    10% OFF BLUETOOTH HEADPHONES
                                </CardTitle>
                                <CardSubtitle >
                                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                                </CardSubtitle>
                                <Button id="shop_btn">Shop Now</Button>
                            </CardBody>
                            <div className="col-12 col-md-5" >
                                <img src="assets/images/headphone.png" alt="headphone" id="headphone" />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="row">
                <h1 className="col-11 offset-1 mt-5"><b>POPULAR CATEGORIES</b></h1>
            </div>
            <div className="row mt-5">
                <div className="col-5 offset-1 mb-5">
                    <div className="row">
                        <div className="col-4">
                            <Card className="cat-card">
                                <CardImg src="assets/images/camera_2.png" alt="camera"></CardImg>
                                <CardBody>
                                    <CardTitle >
                                        <h5><b>Photo</b></h5>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card className="cat-card">
                                <CardImg src="assets/images/drone_2.png" alt="drone"></CardImg>
                                <CardBody>
                                    <CardTitle >
                                        <h5><b>Drone</b></h5>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card className="cat-card">
                                <CardImg src="assets/images/gamepad.png" alt="gamepad"></CardImg>
                                <CardBody>
                                    <CardTitle >
                                        <h5><b>Gaming</b></h5>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-4">
                            <Card className="cat-card">
                                <CardImg src="assets/images/computer.png" alt="computer"></CardImg>
                                <CardBody>
                                    <CardTitle >
                                        <h5><b>Computers</b></h5>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card className="cat-card">
                                <CardImg src="assets/images/speakers.png" alt="speakers"></CardImg>
                                <CardBody>
                                    <CardTitle >
                                        <h5><b>Audio</b></h5>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-4">
                            <Card className="cat-card">
                                <CardImg src="assets/images/watch.png" alt="watch"></CardImg>
                                <CardBody>
                                    <CardTitle >
                                        <h5><b>Watch</b></h5>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;