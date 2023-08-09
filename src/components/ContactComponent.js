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
                        What products does your electronics shop offer?
                    </strong></h5>
                    <p>Our shop offers a wide range of electronic devices, including smartphones, laptops, tablets, gaming consoles, televisions, cameras, audio systems, wearable devices, and various accessories.
                    </p>
                    <h5><strong>
                        Are your products brand new or refurbished?
                    </strong></h5>
                    <p>We sell both brand new and refurbished products. Refurbished items go through a rigorous testing process to ensure they meet high-quality standards before being offered for sale.
                    </p>
                    <h5><strong>
                        What payment methods do you accept?
                    </strong></h5>
                    <p>We accept various payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and cash payments at our physical store (if applicable).
                    </p>
                </div>

                <div className="col-11 col-md-5 offset-1 mt-md-4">
                    <h5><strong>
                        Do you offer warranty for your products?
                    </strong></h5>
                    <p>Yes, all brand new electronics come with a standard manufacturer's warranty. Refurbished items may also have a limited warranty provided by our shop. Please check the product listings or speak to our customer support for specific warranty details.
                    </p>
                    <h5><strong>
                        How can I contact your customer support for further assistance?
                    </strong></h5>
                    <p>You can reach our customer support via phone, email, or through the contact form on our website. Our dedicated support team is ready to assist you with any queries or concerns you may have.
                    </p>
                    <h6>
                        Remember, if you have any specific questions or need further assistance, feel free to reach out to us directly.</h6>
                </div>
            </div>
        </div>
    );
}

export default Contact;