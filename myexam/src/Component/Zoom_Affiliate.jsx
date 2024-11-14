import React from 'react'
import { Home, AccountCircle, MailOutline, Lock, List, ShoppingCart, Star, History, FileDownload, Redeem, ArrowBack, Notifications } from '@mui/icons-material';
import Zoom_Header from './Zoom_Header';
import Zoom_Footer from './Zoom_Footer';
import { Link} from 'react-router-dom';


const Zoom_Affiliate = () => {
    return (

        <div>
            <div className="">
                <Zoom_Header />
            </div>
            <div className="bg-light">
                <div className="container my-4">
                    <div className="row g-4">
                        {/* <!-- Sidebar --> */}
                        <div className="col-md-3">
                            <div className="bg-white border rounded p-3">
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">login</span>
                                        <Link to="#" className="text-dark text-decoration-none">Login</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">person_add</span>
                                        <Link to="#" className="text-dark text-decoration-none">Register</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">key</span>
                                        <Link to="#" className="text-dark text-decoration-none">Forgotten Password</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">person</span>
                                        <Link to="#" className="text-dark text-decoration-none">My Account</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">book</span>
                                        <Link to="#" className="text-dark text-decoration-none">Address Book</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">favorite</span>
                                        <Link to="#" className="text-dark text-decoration-none">Wish List</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">history</span>
                                        <Link to="#" className="text-dark text-decoration-none">Order History</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">download</span>
                                        <Link to="#" className="text-dark text-decoration-none">Downloads</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">star</span>
                                        <Link to="#" className="text-dark text-decoration-none">Reward Points</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">undo</span>
                                        <Link to="#" className="text-dark text-decoration-none">Returns</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">swap_horiz</span>
                                        <Link to="#" className="text-dark text-decoration-none">Transactions</Link>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <span className="material-icons me-2">mail</span>
                                        <Link to="#" className="text-dark text-decoration-none">Newsletter</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- New Customer --> */}
                        <div className="col-md-4">
                            <div className="bg-white border rounded p-3">
                                <h2 className="h5">New Customer</h2>
                                <h3 className="h6">Register Account</h3>
                                <p className="text-muted">By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                                <button className="btn btncolor text-white rounded-0">CONTINUE</button>
                            </div>
                        </div>

                        {/* <!-- Returning Customer --> */}
                        <div className="col-md-5">
                            <div className="bg-white border rounded p-3">
                                <h2 className="h5">Returning Customer</h2>
                                <p className="text-muted">I am a returning customer</p>
                                <form>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">E-Mail Address</label>
                                        <input type="email" id="email" className="form-control" placeholder="E-Mail Address" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <a href="#" className="text-dark">Forgotten Password</a>
                                        <button className="btn btncolor text-white rounded-0 mt-2">LOGIN</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <Zoom_Footer />
            </div>
        </div>
    )
}

export default Zoom_Affiliate    
