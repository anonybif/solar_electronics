import React from "react";
import { Card, CardBody, Form, Button } from "reactstrap";

function Contact() {
    return (
        <div className="container background ">
            <div className="col-11 offset-1">
                <div className="row">
                    <h3 id="contact-title" className="mt-5 mb-5">Contact Us</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-11 col-md-5 offset-1">
                    <Card className="contact-card">
                        <CardBody>
                            <h6 className="contact-type">Support and Sales</h6>
                            <h5 id="contact-num">(255) 352-6258</h5>
                            <h6 className="contact-type mt-4">Email</h6>
                            <a href="mailto:anony.bif24@gmail.com" className="link">
                                solar@electronics.net</a>
                            <h6 className="contact-type mt-4">Shop</h6>
                            <p>1234 Divi St. #1000 San Francisco, CA 33945</p>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-10 offset-1 col-md-5 offset-md-0">
                    <Form>
                        <input type='textfield' name="name" placeholder="Name" className="col-12 txtfield"></input>
                        <input type='textfield' name="email" placeholder="Email Address" className="col-12 txtfield"></input>
                        <textarea rows={4} name="message" placeholder="Message" className="col-12 txtfield"></textarea>
                        <Button type="submit" className="submit-btn col-3 offset-9 btn-primary">Submit</Button>
                    </Form>
                </div>
            </div>
            <div className="row mt-5">
                <h1 className="col-11 offset-1 mt-5"><strong>FAQ</strong></h1>
                <div className="col-11 col-md-5 offset-1 mt-4">
                    <h5><strong>
                        Curabitur aliquet ispum dolor amet sit pellentesqu?
                    </strong></h5>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                    <h5><strong>
                        Pellentesque in ipsum id orci porta dapibus?
                    </strong></h5>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                    <h5><strong>
                        Nulla porttitor accumsan tincidunt?
                    </strong></h5>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                </div>

                <div className="col-11 col-md-5 offset-1 mt-md-4">
                    <h5><strong>
                        Lorem ipsum dolor sit amet, consectetur?
                    </strong></h5>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                    <h5><strong>
                        Curabitur non nulla sit amet nisl tempus?
                    </strong></h5>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                    <h5><strong>
                        Potenti neque scelerisque augue nec phasellus?
                    </strong></h5>
                    <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;