import React from 'react'
import { Home } from '@mui/icons-material';
import Zoom_Header from './Zoom_Header';
import Zoom_Footer from './Zoom_Footer';
import { Link} from 'react-router-dom';

// images
import fashion_img1 from '../Images/fashion_img1.jpg';
import fashion_img2 from '../Images/fashion_img2.jpg';
import fashion_img3 from '../Images/fashion_img3.jpg';
import fashion_img4 from '../Images/fashion_img_4.jpg';
import fashion_img5 from '../Images/fashion_img_5.jpg';
import fashion_img6 from '../Images/fashion_img_6.jpg';
import fashion_img7 from '../Images/fashion_img_7.jpg';
import fashion_img8 from '../Images/fashion_img_8.jpg';
import fashion_img9 from '../Images/fashion_img_9.jpg';

// icons
import { FilterList } from '@mui/icons-material/esm/index.js';
import Grid from '@mui/icons-material/ViewCompact';

// ratting
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Zoom_Collection = () => {
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
                                <li className="ms-2 text-black">| Collection</li>
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
                                <p className="mb-0 h4 fw-bold mb-3">COLLECTION</p>
                                <div className="d-flex justify-content-between align-items-center mb-4 py-2 px-3" style={{ backgroundColor: "#eee" }}>
                                    <div className="d-flex align-items-center mb-2">
                                        <i className="text-secondary me-2"><Grid /></i>
                                        <span>Product Compare (0)</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="me-4 d-flex">
                                            <span style={{ fontSize: "11px" }}>Sort By:</span>
                                            <select className="form-select form-select-sm ms-2 bg-transparent border-secondary">
                                                <option>Default</option>
                                            </select>
                                        </div>
                                        <div className='d-flex'>
                                            <span>Show:</span>
                                            <select className="form-select form-select-sm ms-2 bg-transparent border-secondary">
                                                <option>10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {products1.map(product => (
                                        <div key={product.id} className="col-lg-4 col-sm-12 col-md-6 text-center">
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-3" style={{ backgroundColor: "#eee" }}>
                                <p className="text-secondary m-0">Showing 1 to 2 of 2 (1 Pages)</p>
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

export default Zoom_Collection    
