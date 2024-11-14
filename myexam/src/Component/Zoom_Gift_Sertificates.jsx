import React from 'react'
import { Home } from '@mui/icons-material';
import { Link} from 'react-router-dom';

// images
import fashion_img4 from '../Images/fashion_img_4.jpg';
import fashion_img5 from '../Images/fashion_img_5.jpg';
import fashion_img6 from '../Images/fashion_img_6.jpg';
import fashion_img7 from '../Images/fashion_img_7.jpg';
import fashion_img8 from '../Images/fashion_img_8.jpg';

// ratting
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Zoom_Footer from './Zoom_Footer';
import Zoom_Header from './Zoom_Header';

const Zoom_Gift_Sertificates = () => {
    const products = [
        { name: "iMac", price: "$122.00", image: fashion_img6 },
        { name: "Canon EOS 5D", price: "$122.00", image: fashion_img5 },
        { name: "Samsung SyncMaster 941BW", price: "$242.00", image: fashion_img8 },
        { name: "HTC Touch HD", price: "$122.00", image: fashion_img7 }
    ];
    const products1 = [
        { id: 1, name: "Apple Cinema 30\"", price: "$122.00", image: fashion_img4, rating: 0 },
        { id: 2, name: "Canon EOS 5D", price: "$122.00", image: fashion_img5, rating: 0 },
    ];
    const ProductCard = ({ product }) => (
        <div className="p-3">
            <div className='border border-2 mb-2 pt-3'>
                <img src={product.image} alt={product.name} className="img-fluid mb-3 " style={{ height: '200px', objectFit: 'cover' }} />
                <Stack spacing={1} className='mb-2'>
                    <Rating name="half-rating" defaultValue={5} className='m-auto' />
                </Stack>
            </div>
            <h3 className="text-center h6 fw-semibold mb-2">{product.name}</h3>
            <p className="text-center text-secondary mb-2">
                {product.oldPrice && <span className="text-decoration-line-through me-2">{product.oldPrice}</span>}
                {product.price}
            </p>
        </div>
    );
    return (
        <div>
            <div className="">
                <Zoom_Header />
            </div>
            <div className="pb-5">
            <div className="container-fluid">
                <div className="breadcrumb-container" style={{ height: '140px' }}>
                    <div className="py-5 text-center d-flex align-items-center justify-content-center">
                        <ul className='list-unstyled d-flex align-items-center justify-content-center'>
                            <li><Home /></li>
                            <li className="ms-2 text-black">| Gift Certificates</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="border border-secondary w-100" style={{ maxWidth: '400px' }}>
                            <div className="p-3" style={{ backgroundColor: "#eee" }}>
                                <h2 className="fw-semibold h5 mb-0">CATEGORIES</h2>
                            </div>
                            <div className="px-4">
                                <ul className="mt-2 list-unstyled d-flex flex-column">
                                    <Link to='/fashion-page' className="text-decoration-none text-black">
                                        Fashion (9) <i className=""></i>
                                        <ul className="ms-3 mt-1 list-unstyled">
                                            <li>- Shoes (3)</li>
                                            <li>- Tops (5)</li>
                                            <li>- Dresses (3)</li>
                                        </ul>
                                    </Link>
                                    <Link to='/accessories-page' className="text-decoration-none text-black mt-2">Accessories (7)</Link>
                                    <Link to='/catagory-page' className="text-decoration-none text-black mt-2">Category (8)</Link>
                                    <Link to='/collection-page' className="text-decoration-none text-black mt-2">Collection (2)</Link>
                                    <Link to='/outfits-page' className="text-decoration-none text-black mt-2">Outfits (7)</Link>
                                </ul>
                            </div>
                        </div>
                        {/* second box */}
                        <div className="container max-w-xs p-0 my-4 border border-secondary">
                            <h2 className="h5 p-4 mb-4" style={{ backgroundColor: "#eee" }}>Latest</h2>
                            <div className="px-4">
                                {products.map((product, index) => (
                                    <div key={index} className="d-flex align-items-center mb-4">
                                        <img src={product.image} alt={product.name} className="img-fluid border p-1 me-3" style={{ width: '64px', height: '64px' }} />
                                        <div>
                                            <div className="small fw-semibold">{product.name}</div>
                                            <div className="small">{product.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-6 col-sm-12">
                        <div className="container">
                            <h1 className="h2 fw-bold mb-3">Gift Certificate</h1>
                            <p className="mb-4">This gift certificate will be emailed to the recipient after your order has been paid for.</p>
                            <form className="needs-validation" noValidate>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="recipient-name">* Recipient's Name</label>
                                    <input type="text" id="recipient-name" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="recipient-email">* Recipient's e-mail</label>
                                    <input type="email" id="recipient-email" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="your-name">* Your Name</label>
                                    <input type="text" id="your-name" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="your-email">* Your e-mail</label>
                                    <input type="email" id="your-email" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">* Gift Certificate Theme</label>
                                    <div>
                                        <div className="form-check">
                                            <input type="radio" id="birthday" name="theme" className="form-check-input" required />
                                            <label htmlFor="birthday" className="form-check-label">Birthday</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" id="christmas" name="theme" className="form-check-input" required />
                                            <label htmlFor="christmas" className="form-check-label">Christmas</label>
                                        </div>
                                        <div className="form-check">
                                            <input type="radio" id="general" name="theme" className="form-check-input" required />
                                            <label htmlFor="general" className="form-check-label">General</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea id="message" className="form-control" rows="5"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="amount">* Amount</label>
                                    <input type="number" id="amount" className="form-control" defaultValue="1" required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" id="non-refundable" className="form-check-input" required />
                                    <label htmlFor="non-refundable" className="form-check-label">I understand that gift certificates are non-refundable</label>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btncolor text-white rounded-0">CONTINUE</button>
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

export default Zoom_Gift_Sertificates    
