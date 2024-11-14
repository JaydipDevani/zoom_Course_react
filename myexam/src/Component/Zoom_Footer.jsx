import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Facebook, Twitter, YouTube, Pinterest, Instagram, Phone, Email, LocationOn } from '@mui/icons-material';
// import { Zoom } from '@mui/material';
import Zoom_logo from '../Images/Zoom_logo.png';
import { Link} from 'react-router-dom';

const Zoom_Footer = () => {
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: "#eee" }}>
                <div className="py-5">
                    {/* <div className="container"> */}
                    <div className="row justify-content-between">
                    
                            <div className="col-12 col-md-3 mb-4">
                                {/* <h2 className="h5 fw-bold mb-3">ZOOM!</h2> */}
                                <Link to="/">
                                    <img src={Zoom_logo} alt="" className='mb-3' />
                                </Link>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="d-flex mt-3">
                                    <Link to="#" className="text-primary me-1"><Facebook fontSize="large" className='icon-hover-blue' /></Link>
                                    <Link to="#" className="text-info me-1"><Twitter fontSize="large" className='icon-hover-blue' /></Link>
                                    <Link to="#" className="text-danger me-1"><YouTube fontSize="large" className='icon-hover-blue' /></Link>
                                    <Link to="#" className="text-danger me-1"><Pinterest fontSize="large" className='icon-hover-blue' /></Link>
                                    <Link to="#" className="text-danger"><Instagram fontSize="large" className='icon-hover-blue' /></Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-2 mb-4">
                                <h3 className="h6 fw-bold mb-3">INFORMATION</h3>
                                <ul className="list-unstyled text-muted">
                                    <li className='mb-2'><Link to="/terms-conditions" className='text-decoration-none' style={{ color: "#666" }}>Terms & Conditions</Link></li>
                                    <li className='mb-2'><Link to="/information" className='text-decoration-none' style={{ color: "#666" }}>Information</Link></li>
                                    <li className='mb-2'><Link to="/about-us" className='text-decoration-none' style={{ color: "#666" }}>About Us</Link></li>
                                    <li className='mb-2'><Link to="/privacy-policy" className='text-decoration-none' style={{ color: "#666" }}>Privacy Policy</Link></li>
                                    <li className='mb-2'><Link to="/faq" className='text-decoration-none' style={{ color: "#666" }}>FAQ</Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-2 mb-4">
                                <h3 className="h6 fw-bold mb-3">EXTRAS</h3>
                                <ul className="list-unstyled text-muted">
                                    <li className='mb-2'><Link to="/brand" className='text-decoration-none' style={{ color: "#666" }}>Brand</Link></li>
                                    <li className='mb-2'><Link to="/gift-certificates" className='text-decoration-none' style={{ color: "#666" }}>Gift Certificates</Link></li>
                                    <li className='mb-2'><Link to="/affiliate" className='text-decoration-none' style={{ color: "#666" }}>Affiliate</Link></li>
                                    <li className='mb-2'><Link to="/search" className='text-decoration-none' style={{ color: "#666" }}>Search</Link></li>
                                    <li className='mb-2'><Link to="/faq" className='text-decoration-none' style={{ color: "#666" }}>FAQ</Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-2 mb-4">
                                <h3 className="h6 fw-bold mb-3">ACCOUNT</h3>
                                <ul className="list-unstyled text-muted">
                                    <li className='mb-2'><Link to="/affiliate" className='text-decoration-none' style={{ color: "#666" }}>My Account</Link></li>
                                    <li className='mb-2'><Link to="/specialoffers" className='text-decoration-none' style={{ color: "#666" }}>Specials</Link></li>
                                    <li className='mb-2'><Link to="/affiliate" className='text-decoration-none' style={{ color: "#666" }}>Order History</Link></li>
                                    <li className='mb-2'><Link to="/affiliate" className='text-decoration-none' style={{ color: "#666" }}>Newsletter</Link></li>
                                    <li className='mb-2'><Link to="/contact-us" className='text-decoration-none' style={{ color: "#666" }}>Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-3">
                                <h3 className="h6 fw-bold mb-3">CONTACT US</h3>
                                <ul className="list-unstyled text-muted">
                                    <li className='mb-3'><Phone className='me-2' style={{ color: "#1a466e" }} /><Link to="#" className='text-decoration-none' style={{ color: "#666" }}>+91 123456789</Link></li>
                                    <li className='mb-3'><Email className='me-2' style={{ color: "#1a466e" }} /><Link to="#" className='text-decoration-none' style={{ color: "#666",fontSize:"15px" }}>demoexample@gmail.com</Link></li>
                                    <li className='mb-3'><LocationOn className='me-2' style={{ color: "#1a466e" }} /><Link to="#" className='text-decoration-none' style={{ color: "#666" }}>4005,Silver Business Point India</Link></li>
                                </ul>
                            </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Zoom_Footer
