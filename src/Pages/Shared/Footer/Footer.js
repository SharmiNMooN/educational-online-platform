import React from 'react';
import {ListGroup, Nav} from "react-bootstrap";
import {FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="m-auto container bg-dark text-white">
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid  text-md-left">
                    <div className="row">
                        <div className="col-md-2 mb-md-0 mb-3">
                            <div className="mt-4">
                                <h5 className="text-center">Menus</h5>
                                <Nav className="flex-column text-center">
                                    <Nav.Link href="/courses">Courses</Nav.Link>
                                    <Nav.Link href="/faq">Faq</Nav.Link>
                                    <Nav.Link href="/blog">BLog</Nav.Link>
                                </Nav>
                            </div>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-6 text-center mt-md-0 mt-3">
                            <h5 className="text-uppercase">Sikkhayon Academy</h5>
                            <p className="mt-2">
                                Online education enables the teacher and the student to set their own learning pace, and there's the added flexibility of setting a schedule that fits everyone's agenda. As a result, using an online educational platform allows for a better balance of work and studies, so there's no need to give anything up</p>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <div className='mt-4'>
                                <h5>Find us on</h5>
                                <ListGroup>
                                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <a href=""> Sikkhayon Academy</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;