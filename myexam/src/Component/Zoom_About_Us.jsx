import React from 'react'
import { Home } from '@mui/icons-material';
import Zoom_Header from './Zoom_Header';
import Zoom_Footer from './Zoom_Footer';
import about_us_img1 from '../Images/about_us_img1.png';
import about_us_img2 from '../Images/about_us_img2.png';
import { Link } from 'react-router-dom';

const Zoom_About_Us = () => {
  return (
    <div>
      <div className="">
        <Zoom_Header />
      </div>
      <div className="container-fluid">
        <div className="breadcrumb-container" style={{ height: '140px' }}>
          <div className="py-5 text-center d-flex align-items-center justify-content-center">
            <ul className='list-unstyled d-flex align-items-center justify-content-center'>
              <li><Home /></li>
              <li className="ms-2 text-black">| About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="container-fluid">
        <h3 className="text-center mb-3">About Us</h3>
        <div className="row justify-content-center align-items-center bg-white">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <img src={about_us_img1} alt="A folded white t-shirt, a pair of gray jeans, and a pair of brown boots" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <h2 className="h3 fw-bold mb-3">We Have Everything You Need?</h2>
            <p className="text-muted mb-3">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
            <h3 className="h5 fw-bold mb-3">Sample Unordered List</h3>
            <ul className="text-muted mb-4">
              <li>Lorem ipsum, or lipsum as it is sometimes known</li>
              <li>Dummy text used in laying out print, graphic or web designs</li>
              <li>The passage is attributed to.</li>
              <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
              <li>Dummy text used in laying out print, graphic or web designs</li>
            </ul>
            <Link to="/about-us" className="btn btncolor text-white rounded-0 px-4 py-2">CONTACT US</Link>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="container-fluid bg-white p-4 rounded-lg d-flex align-items-center flex-column flex-md-row">
          <div className="mb-4 mb-md-0 md-w-50 pr-md-4">
            <h1 className="h3 fw-bold mb-4">We Have Everything You Need?</h1>
            <p className="text-muted mb-4">
              Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!
            </p>
            <h2 className="h5 fw-bold mb-2">Sample Unordered List</h2>
            <ul className="text-muted mb-4">
              <li>Lorem ipsum, or lipsum as it is sometimes known</li>
              <li>Dummy text used in laying out print, graphic or web designs</li>
              <li>The passage is attributed to.</li>
              <li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>
              <li>Dummy text used in laying out print, graphic or web designs</li>
            </ul>
            <Link to="/about-us" className="btn btncolor text-white rounded-0 px-4 py-2">CONTACT US</Link>
          </div>
          <div className="d-flex justify-content-center md-w-50">
            <img src={about_us_img2} alt="A stack of folded clothes on a white chair" className="img-fluid" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Zoom_About_Us
