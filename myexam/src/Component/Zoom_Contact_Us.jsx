import React from 'react'
import { Home, Facebook, Twitter, YouTube, Pinterest, Instagram } from '@mui/icons-material';
import zoom_contact_page_img from '../Images/zoom_contact_page_img.png';
import Zoom_Header from './Zoom_Header';
import Zoom_Footer from './Zoom_Footer';
import { Link} from 'react-router-dom';

const Zoom_Contact_Us = () => {
    return (
        <div>
            <div className="">
                <Zoom_Header />
            </div>
            <div className='pb-5'>
                <div className="container-fluid">
                    <div className="breadcrumb-container" style={{ height: '140px' }}>
                        <div className="py-5 text-center d-flex align-items-center justify-content-center">
                            <ul className='list-unstyled d-flex align-items-center justify-content-center'>
                                <li><Home /></li>
                                <li className="ms-2 text-black">| Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="d-flex flex-column align-items-center py-2">
                        <h1 className="h2 font-weight-bold mb-4">Contact Us</h1>
                        <div className="d-flex flex-column flex-md-row overflow-hidden">
                            <div className="col-md-6">
                                <img src={zoom_contact_page_img} alt="A denim jacket hanging on a white wall" className="img-fluid" />
                            </div>
                            <div className="col-md-6 p-4">
                                <h2 className="h4 font-weight-bold mb-4">GET IN TOUCH</h2>
                                <p className="text-muted mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text ever since the 1500s.</p>
                                <div className="mb-3">
                                    <h3 className="font-weight-bold">Address</h3>
                                    <p className="text-muted">4005, Silver Business Point<br />India</p>
                                </div>
                                <div className="mb-3">
                                    <h3 className="font-weight-bold">Phone</h3>
                                    <p className="text-muted">+91 123456789</p>
                                </div>
                                <div className="mb-3">
                                    <h3 className="font-weight-bold">Email</h3>
                                    <p className="text-muted">demoexample@gmail.com</p>
                                </div>
                                <div className="mb-3">
                                    <h3 className="font-weight-bold">Opening Hours</h3>
                                    <p className="text-muted">We are open: Monday - Saturday (10AM - 5PM) and closed on Sunday.</p>
                                </div>
                                <div>
                                    <h3 className="font-weight-bold">Social Media</h3>
                                    <div className="d-flex mt-2">
                                        <Link to="#" className="text-muted me-3"><Facebook className='icon-hover-blue' /></Link>
                                        <Link to="#" className="text-muted me-3"><Twitter className='icon-hover-blue' /></Link>
                                        <Link to="#" className="text-muted me-3"><YouTube className='icon-hover-blue' /></Link>
                                        <Link to="#" className="text-muted me-3"><Pinterest className='icon-hover-blue' /></Link>
                                        <Link to="#" className="text-muted"><Instagram className='icon-hover-blue' /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* let us know */}
                    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-4">
                        <h1 className="h2 font-weight-bold mb-4 text-center">LET US KNOW WHAT YOU THINK</h1>
                        <p className="text-center text-muted mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry since the 1500s.
                        </p>
                        <form className="w-100 max-w-600">
                            <div className="row mb-4">
                                <div className="col-md-6 mb-3">
                                    <input className="form-control" type="text" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" type="email" placeholder="E-Mail Address" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <textarea className="form-control" rows="5" placeholder="Enquiry"></textarea>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btncolor text-white rounded-0" type="button">
                                    SUBMIT NOW
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Zoom_Footer />
            </div>
        </div>
    )
}

export default Zoom_Contact_Us    
