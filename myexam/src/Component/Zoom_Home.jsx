import React from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Zoom_Header from './Zoom_Header';
import capimg1 from '../Images/cap1.jpg';
import capimg2 from '../Images/cap2.jpeg';
import capimg3 from '../Images/cap3.jpeg';
import capimg4 from '../Images/cap4.jpeg';
import tshirt1 from '../Images/t-shirt1.jpg';
import tshirt2 from '../Images/t-shirt2.jpg';
import tshirt3 from '../Images/t-shirt3.jpg';
import tshirt4 from '../Images/t-shirt4.jpg';
import pant1img from '../Images/pant1.jpg';
import pant2img from '../Images/pant2.jpg';
import pant3img from '../Images/pant3.jpg';
import pant4img from '../Images/pant4.jpg';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// Images
import service1img from '../Images/services-1-50x120.png'
import service2img from '../Images/services-2-50x120.png'
import service3img from '../Images/services-3-50x120.png'
import seperatorimg from '../Images/seperator.png'
import featuredbanner from '../Images/featurebanner.png'
import featuredbannerimg1 from '../Images/featureimage1.png'
import featuredbannerimg2 from '../Images/featureimage2.png'
import featuredbannerimg3 from '../Images/featureimage3.png'
import dealbanner1img from '../Images/dealbanner1.png';
import dealbanner2img from '../Images/dealbanner2.png';
import beltbandimg from '../Images/belt.jpg';
import curlypantimg from '../Images/curly_pant.jpg';
import latestproduct_watch from '../Images/watch.jpg';
import latestproduct_cap from '../Images/latestproduct_cap.jpg';
import catagory_1_img from '../Images/Category-1-img.png';
import catagory_2_img from '../Images/Category-2-img.png';
import catagory_3_img from '../Images/Category-3-img.png';
import catagory_4_img from '../Images/Category-4-img.png';
import trendy_collection_1_img from '../Images/trendy-collection-1-img.png';
import trendy_collection_2_img from '../Images/trendy-collection-2-img.png';
import testimonial_1_img from '../Images/testimonial-1-img.png';
import testimonial_2_img from '../Images/testimonial-2-img.png';
import testimonial_3_img from '../Images/testimonial-3-img.png';
import ourgallery_1_img from '../Images/ourgallery-1-img.png';
import ourgallery_2_img from '../Images/ourgallery-2-img.png';
import ourgallery_3_img from '../Images/ourgallery-3-img.png';
import ourgallery_4_img from '../Images/ourgallery-4-img.png';
import ourblog_1_img from '../Images/ourblog-1-img.png';
import ourblog_2_img from '../Images/ourblog-2-img.jpg';
import ourblog_3_img from '../Images/ourblog-3-img.png';
import ourblog_4_img from '../Images/ourblog-4-img.png';
import ourblog_5_img from '../Images/ourblog-5-img.png';
import ourblog_6_img from '../Images/ourblog-6-img.png';
import brandslide_1_img from '../Images/Brand-Logo-1-img.png';
import brandslide_2_img from '../Images/Brand-Logo-2-img.png';
import brandslide_3_img from '../Images/Brand-Logo-3-img.png';
import brandslide_4_img from '../Images/Brand-Logo-4-img.png';
import brandslide_5_img from '../Images/Brand-Logo-5-img.png';

// slider
import Slider from "react-slick";
import { alignProperty } from '@mui/material/styles/cssUtils';
import zIndex from '@mui/material/styles/zIndex';
import { getOpacity } from '@mui/material/styles/createColorScheme';
import shadows from '@mui/material/styles/shadows';


import Zoom_Footer from './Zoom_Footer';
import ZoomThreegirl from './ZoomThreegirl';

const Zoom_Home = () => {

    let [btncolor, setbtncolor] = useState([1, 0, 0]);

    let featuredcarddata = [
        {
            name: "Apple Cinema 30",
            image: capimg1,
            catagory: "cap",
            price: "$122.00"
        },
        {
            name: "Apple Cinema 30",
            image: capimg2,
            catagory: "cap",
            price: "$122.00"
        },
        {
            name: "Apple Cinema 30",
            image: capimg3,
            catagory: "cap",
            price: "$122.00"
        },
        // {
        //     name: "Apple Cinema 30",
        //     image: capimg4,
        //     catagory: "cap",
        //     price: "$122.00"
        // },
        {
            name: "Apple Cinema 30",
            image: tshirt1,
            catagory: "t-shirt",
            price: "$122.00"
        },
        {
            name: "Apple Cinema 30",
            image: tshirt2,
            catagory: "t-shirt",
            price: "$122.00"
        },
        {
            name: "Apple Cinema 30",
            image: tshirt3,
            catagory: "t-shirt",
            price: "$122.00"
        },
        // {
        //     name: "Apple Cinema 30",
        //     image: tshirt4,
        //     catagory: "t-shirt",
        //     price: "$122.00"
        // },
        {
            name: "Apple Cinema 30",
            image: pant1img,
            catagory: "pant",
            price: "$122.00"
        },
        {
            name: "Apple Cinema 30",
            image: pant2img,
            catagory: "pant",
            price: "$122.00"
        },
        {
            name: "Apple Cinema 30",
            image: pant3img,
            catagory: "pant",
            price: "$122.00"
        },
        // {
        //     name: "Apple Cinema 30",
        //     image: pant4img,
        //     catagory: "pant",
        //     price: "$122.00"
        // },
    ]
    let [catagory, setcatagroy] = useState("cap");

    function Setcatagory(cate, index) {
        let copy = catagory;
        copy = cate;
        setcatagroy(copy);

        let Btncopy = [...btncolor];
        Btncopy[index] = Btncopy[index] == 0 ? 1 : 0;
        setbtncolor(Btncopy);
        if (index == 1) {
            Btncopy[2] = Btncopy[0] = 0;
        }
        if (index == 0) {
            Btncopy[1] = Btncopy[2] = 0;
        }
        if (index == 2) {
            Btncopy[0] = Btncopy[1] = 0;
        }
    }

    //for latest product girl card
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    // for our catagory card slider
    const catagorycard = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const blogcard = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const centermode = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 2.35,
        speed: 500,
    };

    var auto = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    };

    const autoslides = [
        { id: 1, content: <><img alt="Woman in a grey patterned coat" className="img-fluid img-hover-scale" src={ourgallery_1_img} /></> },
        { id: 2, content: <><img alt="Woman in a grey patterned coat" className="img-fluid img-hover-scale" src={ourgallery_2_img} /></> },
        { id: 3, content: <><img alt="Woman in a grey patterned coat" className="img-fluid img-hover-scale" src={ourgallery_4_img} /></> },
        { id: 4, content: <><img alt="Woman in a grey patterned coat" className="img-fluid img-hover-scale" src={ourgallery_3_img} /></> },
    ];

    var brandauto = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
    };

    const brandsslide = [
        { id: 1, content: <><img src={brandslide_1_img} className='img-fluid' alt="" /></> },
        { id: 2, content: <><img src={brandslide_2_img} className='img-fluid' alt="" /></> },
        { id: 3, content: <><img src={brandslide_3_img} className='img-fluid' alt="" /></> },
        { id: 4, content: <><img src={brandslide_4_img} className='img-fluid' alt="" /></> },
        { id: 5, content: <><img src={brandslide_5_img} className='img-fluid' alt="" /></> },
    ];

    // for ratting
    const [value, setValue] = React.useState(5);
    // ratting end

    return (
        <div>
            <div className="">
                <Zoom_Header />
            </div>
            <div>
                <ZoomThreegirl />
            </div>
            <div style={{ backgroundColor: "#eee" }}>
                <Container>
                    <Row className="mt-5 py-5">
                        <Col md={4}>
                            <Card>
                                <Card.Body style={{ padding: "35px 12px" }}>
                                    <div className="d-flex justify-content-center" style={{}}>
                                        <div style={{ backgroundColor: "#eee", padding: "15px", borderRadius: "50%" }}>
                                            <Image src={service1img} height={64} />
                                        </div>
                                    </div>
                                    <Card.Title className="text-center mt-3">Free Shipping</Card.Title>
                                    <Card.Text className="text-center poppins">Lorem ipsum dolor sit amet, consectetur adipiscing.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body style={{ padding: "35px 12px" }}>
                                    <div className="d-flex justify-content-center">
                                        <div style={{ backgroundColor: "#eee", padding: "15px", borderRadius: "50%" }}>
                                            <Image src={service2img} height={64} />
                                        </div>
                                    </div>
                                    <Card.Title className="text-center mt-3">Payment Process</Card.Title>
                                    <Card.Text className="text-center poppins">Lorem ipsum dolor sit amet, consectetur adipiscing.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body style={{ padding: "35px 12px" }}>
                                    <div className="d-flex justify-content-center">
                                        <div style={{ backgroundColor: "#eee", padding: "15px", borderRadius: "50%" }}>
                                            <Image src={service3img} height={64} />
                                        </div>
                                    </div>
                                    <Card.Title className="text-center mt-3">Return Policy</Card.Title>
                                    <Card.Text className="text-center poppins">Lorem ipsum dolor sit amet, consectetur adipiscing.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <div>
                    <div className='position-relative' style={{ padding: "0px 12px", textAlign: "center" }}>
                        <img src={seperatorimg} alt="" className='position-absolute' style={{ left: "0", right: "0", justifySelf: "center" }} />
                        <h3 className='position-relative text-center mb-2'>Trending Now</h3>
                        <p className='text-center m-0' style={{ color: "#666", fontWeight: "400", fontSize: "15px", marginBottom: "22px" }}>We have thousands of new accessories  for men and women in zoom store.</p>
                    </div>
                </div>
                {/* <div>
                    <Router>
                        <div className='container-fluid'>
                            <Row className="mt-5">
                                <div className='w-100 d-flex justify-content-center gap-2 mb-3'>
                                    <button onClick={() => Setcatagory("cap", 0)} className={`text-decoration-none ${btncolor[0] == 1 ? 'btncolor text-light' : ''}`} style={{ color: "black", border: "2px solid #f4f4f4", padding: "9px 20px" }}>Featured</button>
                                    <button onClick={() => Setcatagory("t-shirt", 1)} className={`text-decoration-none ${btncolor[1] == 1 ? 'btncolor text-light' : ''}`} style={{ color: "black", border: "2px solid #f4f4f4", padding: "9px 20px" }}>Best Sellers</button>
                                    <button onClick={() => Setcatagory("pant", 2)} className={`text-decoration-none ${btncolor[2] == 1 ? 'btncolor text-light' : ''}`} style={{ color: "black", border: "2px solid #f4f4f4", padding: "9px 20px" }}>New Arrivals</button>
                                </div>
                                <Col md={12}>
                                    <nav className='d-flex justify-content-center'>
                                        <ul className='list-unstyled d-flex gap-2'>
                                            {
                                                featuredcarddata.map((el, i) => {
                                                    return el.catagory == catagory ? <Container>
                                                        <Row>
                                                            <Col>
                                                                <Card>
                                                                    <div className='d-flex justify-content-center'>
                                                                        <Card.Img variant="top" src={el.image} className='w-100 h-auto' />
                                                                    </div>
                                                                    <Card.Body className='text-center'>
                                                                        <Card.Title>{el.name}</Card.Title>
                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                            <Rating
                                                                                name="simple-controlled"
                                                                                value={value}
                                                                                onChange={(event, newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                            />
                                                                        </Box>
                                                                        <Card.Text className="fw-bold">
                                                                            {el.price}
                                                                        </Card.Text>
                                                                        <Button className="bg-secondary border border-2 border-dark" variant="primary">Add to Cart</Button>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Container> : ""
                                                })
                                            }
                                        </ul>
                                    </nav>
                                </Col>
                            </Row>
                        </div>
                    </Router>
                </div> */}
                <div>
                    <Router>
                        <div className='container-fluid'>
                            <Row className="mt-5">
                                {/* Button Row */}
                                <div className='w-100 d-flex justify-content-center gap-2 mb-3'>
                                    <button
                                        onClick={() => Setcatagory("cap", 0)}
                                        className={`text-decoration-none ${btncolor[0] == 1 ? 'btncolor text-light' : ''}`}
                                        style={{ color: "black", border: "2px solid #f4f4f4", padding: "9px 20px" }}
                                    >
                                        Featured
                                    </button>
                                    <button
                                        onClick={() => Setcatagory("t-shirt", 1)}
                                        className={`text-decoration-none ${btncolor[1] == 1 ? 'btncolor text-light' : ''}`}
                                        style={{ color: "black", border: "2px solid #f4f4f4", padding: "9px 20px" }}
                                    >
                                        Best Sellers
                                    </button>
                                    <button
                                        onClick={() => Setcatagory("pant", 2)}
                                        className={`text-decoration-none ${btncolor[2] == 1 ? 'btncolor text-light' : ''}`}
                                        style={{ color: "black", border: "2px solid #f4f4f4", padding: "9px 20px" }}
                                    >
                                        New Arrivals
                                    </button>
                                </div>

                                {/* Product Display Section */}
                                <Col md={12}>
                                    <nav className='d-flex justify-content-center'>
                                        <ul className='list-unstyled d-flex flex-wrap justify-content-center gap-3'>
                                            {
                                                featuredcarddata.map((el, i) => {
                                                    return el.catagory == catagory ? (
                                                        <li key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                                            <Container>
                                                                <Row>
                                                                    <Col>
                                                                        <Card>
                                                                            <div className='d-flex justify-content-center'>
                                                                                <Card.Img variant="top" src={el.image} className='w-100 h-auto' />
                                                                            </div>
                                                                            <Card.Body className='text-center'>
                                                                                <Card.Title>{el.name}</Card.Title>
                                                                                <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                                    <Rating
                                                                                        name="simple-controlled"
                                                                                        value={value}
                                                                                        onChange={(event, newValue) => {
                                                                                            setValue(newValue);
                                                                                        }}
                                                                                    />
                                                                                </Box>
                                                                                <Card.Text className="fw-bold">
                                                                                    {el.price}
                                                                                </Card.Text>
                                                                                <Button className="bg-secondary border border-2 border-dark" variant="primary">
                                                                                    Add to Cart
                                                                                </Button>
                                                                            </Card.Body>
                                                                        </Card>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </li>
                                                    ) : null;
                                                })
                                            }
                                        </ul>
                                    </nav>
                                </Col>
                            </Row>
                        </div>
                    </Router>
                </div>


                <div className='container-fluid'>
                    <div className="row align-items-center">
                        <div className='col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className="position-relative" style={{ padding: "0px 12px" }}>
                                <p className='d-inline-block position-relative' style={{ letterSpacing: "5px", padding: "10px 29px", color: "#666", border: "1px solid #777" }}>NEW ARRIVALS</p>
                                <div>
                                    <img src={seperatorimg} alt="" className='position-absolute' />
                                </div>
                                <h3 className='mb-2 d-inline-block position-relative' style={{ fontSize: "40px", fontWeight: "700", margin: "0 0 20px" }}>Best Collection Of 2021!</h3>
                                <p className='mb-2' style={{ fontSize: "15px", color: "#666", fontWeight: "400" }}>Lorem ipsum dolor sit amet, consecte hiu tur adipiscing elit, sed do eiusmod tempor</p>
                                <Link to="#" className='text-white btncolor text-decoration-none' style={{ fontSize: "14px", fontWeight: "400", padding: "11px 20px", border: "1px solid #1a466e" }}>SHOP NOW</Link>
                            </div>
                        </div>
                        <div className='col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                            <div className="row align-items-center">
                                <div className='col-xl-8 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                                    <img src={featuredbanner} alt="" className='img-fluid' />
                                </div>
                                <div className='col-xl-4 col-lg-5 col-md-12 col-sm-12 col-xs-12 pe-1'>
                                    <div className='d-block' style={{ marginBottom: "30px" }}>
                                        <Link to="" className='d-flex align-items-center justfy-content-center mb-2 text-decoration-none'>
                                            <div className='position-relative d-inline-block order-2 w-75 h-75'>
                                                <span className='position-relative d-inline-block w-75 h-75' style={{ backgroundColor: "transparent", backgroundPosition: "center" }}>
                                                    <img src={featuredbannerimg1} alt="" style={{ borderRadius: "50%" }} className='w-100' />
                                                </span>
                                            </div>
                                            <div className='d-inline-block order-1'>
                                                <div className='' style={{ fontSize: "18px", fontWeight: "400", color: "black" }}>Women Top Collection</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='d-block' style={{ marginBottom: "30px" }}>
                                        <Link to="" className='d-flex align-items-center justfy-content-center mb-2 text-decoration-none'>
                                            <div className='position-relative d-inline-block order-2 w-75 h-75'>
                                                <span className='position-relative d-inline-block w-75 h-75' style={{ backgroundColor: "transparent", backgroundPosition: "center" }}>
                                                    <img src={featuredbannerimg2} alt="" style={{ borderRadius: "50%" }} className='w-100' />
                                                </span>
                                            </div>
                                            <div className='d-inline-block order-1'>
                                                <div className='' style={{ fontSize: "18px", fontWeight: "400", color: "black" }}>Men & Women Jeans</div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='d-block' style={{ marginBottom: "30px" }}>
                                        <Link to="" className='d-flex align-items-center justfy-content-center mb-2 text-decoration-none'>
                                            <div className='position-relative d-inline-block order-2 w-75 h-75'>
                                                <span className='position-relative d-inline-block w-75 h-75' style={{ backgroundColor: "transparent", backgroundPosition: "center" }}>
                                                    <img src={featuredbannerimg3} alt="" style={{ borderRadius: "50%" }} className='w-100' />
                                                </span>
                                            </div>
                                            <div className='d-inline-block order-1'>
                                                <div className='' style={{ fontSize: "18px", fontWeight: "400", color: "black" }}>Men’s Shirt Collection</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* latest product girl */}
            <div className='container-fluid py-5'>
                <div className="row align-items-center" style={{ marginBottom: "80px" }}>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 position-relative'>
                        <div>
                            <img src={dealbanner1img} alt="" className='img-fluid' />
                        </div>
                        <div className='specialbanner-data position-absolute md-absolute-none'>
                            <div>
                                <p className='text-center mb-2' style={{ fontSize: "30px", fontWeight: "700" }}>Women’sTrendy Fashion</p>
                                <div className='my-4 text-center' data-countdowntime="2025-09-01 00:00:00">
                                    <div className="d-inline-block" style={{ margin: "0px 5px" }}>
                                        <div className="day312 align-content-center">312</div>
                                        <div className="d-block text-center" style={{ fontWeight: "400", fontSize: "16px", color: "#666" }}>Days</div>
                                    </div>
                                    <div className="d-inline-block" style={{ margin: "0px 5px" }}>
                                        <div className="day312 align-content-center">03</div>
                                        <div className="d-block text-center" style={{ fontWeight: "400", fontSize: "16px", color: "#666" }}>Hours</div>
                                    </div>
                                    <div className="d-inline-block" style={{ margin: "0px 5px" }}>
                                        <div className="day312 align-content-center">37</div>
                                        <div className="d-block text-center" style={{ fontWeight: "400", fontSize: "16px", color: "#666" }}>Mins</div>
                                    </div>
                                    <div className="d-inline-block" style={{ margin: "0px 5px" }}>
                                        <div className="day312 align-content-center">60</div>
                                        <div className="d-block text-center" style={{ fontWeight: "400", fontSize: "16px", color: "#666" }}>Secs</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="#" className="d-inline-block btncolor text-decoration-none text-white" style={{ fontSize: "14px", fontWeight: "400", padding: "11px 20px", border: "1px solid #1a466e" }}>SHOP NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 '>
                        <div className="position-relative text-center" style={{ padding: "0px 12px" }}>
                            <div className='d-inline-block'>
                                <img src={seperatorimg} alt="" className='position-absolute text-center' style={{ right: "42%" }} />
                                <h3 className='mb-1' style={{ fontSize: "34px" }}>Latest Product</h3>
                            </div>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div>
                                        <div className="d-block">
                                            <div className="position-relative">
                                                <div className="position-relative" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all", width: "128px" }}>
                                                    <div style={{ width: "306.834px" }}>
                                                        <div className="p-1">
                                                            <div className="text-center d-block position-relative">
                                                                <Link to="#">
                                                                    <img src={beltbandimg} alt="" className='img-fluid' style={{ border: "1px solid #eee" }} />
                                                                </Link>
                                                                <div className='text-center position-absolute d-flex bg-white shadow-sm px-4 top-50' style={{ padding: "7px 5px", margin: "0px auto", left: "10%", gap: "30px" }}>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>52</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Days</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>03</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Hours</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>23</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Min</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>60</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Sec</span>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: "15px 15px 10px" }}>
                                                                    <div>
                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                            <Rating
                                                                                name="simple-controlled"
                                                                                value={value}
                                                                                onChange={(event, newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                            />
                                                                        </Box>
                                                                    </div>
                                                                    <h4 className='d-inline-block mb-1' style={{ fontSize: "16px", fontWeight: "400" }}>iPod Shuffle</h4>
                                                                    <p className='d-flex fw-bold justify-content-center'>
                                                                        <span className='text-decoration-line-through me-2' style={{ color: "#666" }}>$122.00</span>
                                                                        <span>$44</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-block">
                                            <div className="position-relative">
                                                <div className="position-relative" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all", width: "128px" }}>
                                                    <div style={{ width: "306.834px" }}>
                                                        <div className="p-1">
                                                            <div className="text-center d-block position-relative">
                                                                <Link to="#">
                                                                    <img src={curlypantimg} alt="" className='img-fluid' style={{ border: "1px solid #eee" }} />
                                                                </Link>
                                                                <div className='text-center position-absolute d-flex bg-white shadow-sm px-4 top-50' style={{ padding: "7px 5px", margin: "0px auto", left: "10%", gap: "30px" }}>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>52</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Days</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>03</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Hours</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>23</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Min</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>60</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Sec</span>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: "15px 15px 10px" }}>
                                                                    <div>
                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                            <Rating
                                                                                name="simple-controlled"
                                                                                value={value}
                                                                                onChange={(event, newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                            />
                                                                        </Box>
                                                                    </div>
                                                                    <h4 className='d-inline-block mb-1' style={{ fontSize: "16px", fontWeight: "400" }}>iPod Shuffle</h4>
                                                                    <p className='d-flex fw-bold justify-content-center'>
                                                                        <span className='text-decoration-line-through me-2' style={{ color: "#666" }}>$122.00</span>
                                                                        <span>$44</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-block">
                                            <div className="position-relative">
                                                <div className="position-relative" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all", width: "128px" }}>
                                                    <div style={{ width: "306.834px" }}>
                                                        <div className="p-1">
                                                            <div className="text-center d-block position-relative">
                                                                <Link to="#">
                                                                    <img src={latestproduct_watch} alt="" className='img-fluid' style={{ border: "1px solid #eee" }} />
                                                                </Link>
                                                                <div className='text-center position-absolute d-flex bg-white shadow-sm px-4 top-50' style={{ padding: "7px 5px", margin: "0px auto", left: "10%", gap: "30px" }}>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>52</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Days</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>03</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Hours</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>23</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Min</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>60</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Sec</span>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: "15px 15px 10px" }}>
                                                                    <div>
                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                            <Rating
                                                                                name="simple-controlled"
                                                                                value={value}
                                                                                onChange={(event, newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                            />
                                                                        </Box>
                                                                    </div>
                                                                    <h4 className='d-inline-block mb-1' style={{ fontSize: "16px", fontWeight: "400" }}>iPod Shuffle</h4>
                                                                    <p className='d-flex fw-bold justify-content-center'>
                                                                        <span className='text-decoration-line-through me-2' style={{ color: "#666" }}>$122.00</span>
                                                                        <span>$44</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-block">
                                            <div className="position-relative">
                                                <div className="position-relative" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all", width: "128px" }}>
                                                    <div style={{ width: "306.834px" }}>
                                                        <div className="p-1">
                                                            <div className="text-center d-block position-relative">
                                                                <Link to="#">
                                                                    <img src={latestproduct_cap} alt="" className='img-fluid' style={{ border: "1px solid #eee" }} />
                                                                </Link>
                                                                <div className='text-center position-absolute d-flex bg-white shadow-sm px-4 top-50' style={{ padding: "7px 5px", margin: "0px auto", left: "10%", gap: "30px" }}>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>52</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Days</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>03</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Hours</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>23</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Min</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>60</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Sec</span>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: "15px 15px 10px" }}>
                                                                    <div>
                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                            <Rating
                                                                                name="simple-controlled"
                                                                                value={value}
                                                                                onChange={(event, newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                            />
                                                                        </Box>
                                                                    </div>
                                                                    <h4 className='d-inline-block mb-1' style={{ fontSize: "16px", fontWeight: "400" }}>iPod Shuffle</h4>
                                                                    <p className='d-flex fw-bold justify-content-center'>
                                                                        <span className='text-decoration-line-through me-2' style={{ color: "#666" }}>$122.00</span>
                                                                        <span>$44</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 '>
                        <div className="position-relative text-center" style={{ padding: "0px 12px" }}>
                            <div className='d-inline-block'>
                                <img src={seperatorimg} alt="" className='position-absolute text-center' style={{ right: "42%" }} />
                                <h3 className='mb-1' style={{ fontSize: "34px" }}>Featured Product</h3>
                            </div>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div>
                                        <div className="d-block">
                                            <div className="position-relative">
                                                <div className="position-relative" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all", width: "128px" }}>
                                                    <div style={{ width: "306.834px" }}>
                                                        <div className="p-1">
                                                            <div className="text-center d-block position-relative">
                                                                <Link to="#">
                                                                    <img src={beltbandimg} alt="" className='img-fluid' style={{ border: "1px solid #eee" }} />
                                                                </Link>
                                                                <div className='text-center position-absolute d-flex bg-white shadow-sm px-4 top-50' style={{ padding: "7px 5px", margin: "0px auto", left: "10%", gap: "30px" }}>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>52</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Days</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>03</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Hours</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>23</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Min</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>60</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Sec</span>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: "15px 15px 10px" }}>
                                                                    <div>
                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                            <Rating
                                                                                name="simple-controlled"
                                                                                value={value}
                                                                                onChange={(event, newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                            />
                                                                        </Box>
                                                                    </div>
                                                                    <h4 className='d-inline-block mb-1' style={{ fontSize: "16px", fontWeight: "400" }}>iPod Shuffle</h4>
                                                                    <p className='d-flex fw-bold justify-content-center'>
                                                                        <span className='text-decoration-line-through me-2' style={{ color: "#666" }}>$122.00</span>
                                                                        <span>$44</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-block">
                                            <div className="position-relative">
                                                <div className="position-relative" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all", width: "128px" }}>
                                                    <div style={{ width: "306.834px" }}>
                                                        <div className="p-1">
                                                            <div className="text-center d-block position-relative">
                                                                <Link to="#">
                                                                    <img src={curlypantimg} alt="" className='img-fluid' style={{ border: "1px solid #eee" }} />
                                                                </Link>
                                                                <div className='text-center position-absolute d-flex bg-white shadow-sm px-4 top-50' style={{ padding: "7px 5px", margin: "0px auto", left: "10%", gap: "30px" }}>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>52</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Days</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>03</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Hours</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>23</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Min</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>60</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Sec</span>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: "15px 15px 10px" }}>
                                                                    <div>
                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                            <Rating
                                                                                name="simple-controlled"
                                                                                value={value}
                                                                                onChange={(event, newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                            />
                                                                        </Box>
                                                                    </div>
                                                                    <h4 className='d-inline-block mb-1' style={{ fontSize: "16px", fontWeight: "400" }}>iPod Shuffle</h4>
                                                                    <p className='d-flex fw-bold justify-content-center'>
                                                                        <span className='text-decoration-line-through me-2' style={{ color: "#666" }}>$122.00</span>
                                                                        <span>$44</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-block">
                                            <div className="position-relative">
                                                <div className="position-relative" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all", width: "128px" }}>
                                                    <div style={{ width: "306.834px" }}>
                                                        <div className="p-1">
                                                            <div className="text-center d-block position-relative">
                                                                <Link to="#">
                                                                    <img src={latestproduct_watch} alt="" className='img-fluid' style={{ border: "1px solid #eee" }} />
                                                                </Link>
                                                                <div className='text-center position-absolute d-flex bg-white shadow-sm px-4 top-50' style={{ padding: "7px 5px", margin: "0px auto", left: "10%", gap: "30px" }}>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>52</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Days</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>03</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Hours</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>23</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Min</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>60</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Sec</span>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: "15px 15px 10px" }}>
                                                                    <div>
                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                            <Rating
                                                                                name="simple-controlled"
                                                                                value={value}
                                                                                onChange={(event, newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                            />
                                                                        </Box>
                                                                    </div>
                                                                    <h4 className='d-inline-block mb-1' style={{ fontSize: "16px", fontWeight: "400" }}>iPod Shuffle</h4>
                                                                    <p className='d-flex fw-bold justify-content-center'>
                                                                        <span className='text-decoration-line-through me-2' style={{ color: "#666" }}>$122.00</span>
                                                                        <span>$44</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-block">
                                            <div className="position-relative">
                                                <div className="position-relative" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all", width: "128px" }}>
                                                    <div style={{ width: "306.834px" }}>
                                                        <div className="p-1">
                                                            <div className="text-center d-block position-relative">
                                                                <Link to="#">
                                                                    <img src={latestproduct_cap} alt="" className='img-fluid' style={{ border: "1px solid #eee" }} />
                                                                </Link>
                                                                <div className='text-center position-absolute d-flex bg-white shadow-sm px-4 top-50' style={{ padding: "7px 5px", margin: "0px auto", left: "10%", gap: "30px" }}>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>52</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Days</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>03</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Hours</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>23</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Min</span>
                                                                    </div>
                                                                    <div className='d-inline-block text-center position-relative' style={{ fontWeight: "500", cursor: "pointer" }}>
                                                                        <span className="h-25" style={{ fontWeight: "500", fontSize: "18px", margin: "0 auto" }}>60</span>
                                                                        <span className="d-block" style={{ fontSize: "13px", color: "#666", fontWeight: "400" }}>Sec</span>
                                                                    </div>
                                                                </div>
                                                                <div style={{ padding: "15px 15px 10px" }}>
                                                                    <div>
                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                                            <Rating
                                                                                name="simple-controlled"
                                                                                value={value}
                                                                                onChange={(event, newValue) => {
                                                                                    setValue(newValue);
                                                                                }}
                                                                            />
                                                                        </Box>
                                                                    </div>
                                                                    <h4 className='d-inline-block mb-1' style={{ fontSize: "16px", fontWeight: "400" }}>iPod Shuffle</h4>
                                                                    <p className='d-flex fw-bold justify-content-center'>
                                                                        <span className='text-decoration-line-through me-2' style={{ color: "#666" }}>$122.00</span>
                                                                        <span>$44</span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 position-relative'>
                        <div>
                            <img src={dealbanner2img} alt="" className='img-fluid' />
                        </div>
                        <div className='specialbanner-data position-absolute md-absolute-none'>
                            <div>
                                <p className='text-center mb-2' style={{ fontSize: "30px", fontWeight: "700" }}>Luxurious Trendy Fashion</p>
                                <div className='my-4 text-center' data-countdowntime="2025-09-01 00:00:00">
                                    <div className="d-inline-block" style={{ margin: "0px 5px" }}>
                                        <div className="day312 align-content-center">312</div>
                                        <div className="d-block text-center" style={{ fontWeight: "400", fontSize: "16px", color: "#666" }}>Days</div>
                                    </div>
                                    <div className="d-inline-block" style={{ margin: "0px 5px" }}>
                                        <div className="day312 align-content-center">03</div>
                                        <div className="d-block text-center" style={{ fontWeight: "400", fontSize: "16px", color: "#666" }}>Hours</div>
                                    </div>
                                    <div className="d-inline-block" style={{ margin: "0px 5px" }}>
                                        <div className="day312 align-content-center">37</div>
                                        <div className="d-block text-center" style={{ fontWeight: "400", fontSize: "16px", color: "#666" }}>Mins</div>
                                    </div>
                                    <div className="d-inline-block" style={{ margin: "0px 5px" }}>
                                        <div className="day312 align-content-center">60</div>
                                        <div className="d-block text-center" style={{ fontWeight: "400", fontSize: "16px", color: "#666" }}>Secs</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="#" className="d-inline-block btncolor text-decoration-none text-white" style={{ fontSize: "14px", fontWeight: "400", padding: "11px 20px", border: "1px solid #1a466e" }}>SHOP NOW</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* our catagories */}
            <div className='py-5' style={{ backgroundColor: "#eee" }}>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-sx-12 position-relative align-content-center">
                            <div>
                                <img src={seperatorimg} alt="" className='position-absolute' />
                            </div>
                            <h3 className='fw-bold d-inline-block position-relative' style={{ fontSize: "40px", margin: "0 0 20px" }}>Our Categories</h3>
                            <p className='mb-4' style={{ fontSize: "15px", color: "#666", fontWeight: "400", letterSpacing: "0.54px" }}>We have thousands of new accessories  for men  and women in zoom store.</p>
                            <Link to="#" className='text-white btncolor text-decoration-none' style={{ fontSize: "14px", fontWeight: "400", padding: "11px 20px", border: "1px solid #1a466e" }}>SHOP NOW</Link>
                        </div>
                        <div className="col-lg-9 col-md-6 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="slider-container">
                                    <Slider {...catagorycard} >
                                        <div className="col-lg-3">
                                            <div className='me-3'>
                                                <div className="position-relative">
                                                    <div>
                                                        <img src={catagory_1_img} alt="" className='img-fluid' />
                                                    </div>
                                                    <div className="position-absolute py-2 text-center" style={{ bottom: "20px", left: "20px", right: "20px", backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                                                        <Link to="#" className='text-decoration-none d-flex flex-column'>
                                                            <span className='text-black mb-2' style={{ fontSize: "18px" }}>Regular fit desized jeans !</span>
                                                            <span className='' style={{ color: "#1a466e", textDecoration: "underline", textDecorationColor: "#1a466e" }}>SHOP NOW</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='me-3'>
                                                <div className="position-relative">
                                                    <div>
                                                        <img src={catagory_2_img} alt="" className='img-fluid' />
                                                    </div>
                                                    <div className="position-absolute py-2 text-center" style={{ bottom: "20px", left: "20px", right: "20px", backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                                                        <Link to="#" className='text-decoration-none d-flex flex-column'>
                                                            <span className='text-black mb-2' style={{ fontSize: "18px" }}>Regular fit desized jeans !</span>
                                                            <span className='' style={{ color: "#1a466e", textDecoration: "underline", textDecorationColor: "#1a466e" }}>SHOP NOW</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='me-3'>
                                                <div className="position-relative">
                                                    <div>
                                                        <img src={catagory_3_img} alt="" className='img-fluid' />
                                                    </div>
                                                    <div className="position-absolute py-2 text-center" style={{ bottom: "20px", left: "20px", right: "20px", backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                                                        <Link to="#" className='text-decoration-none d-flex flex-column'>
                                                            <span className='text-black mb-2' style={{ fontSize: "18px" }}>Regular fit desized jeans !</span>
                                                            <span className='' style={{ color: "#1a466e", textDecoration: "underline", textDecorationColor: "#1a466e" }}>SHOP NOW</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className='me-3'>
                                                <div className="position-relative">
                                                    <div>
                                                        <img src={catagory_4_img} alt="" className='img-fluid' />
                                                    </div>
                                                    <div className="position-absolute py-2 text-center" style={{ bottom: "20px", left: "20px", right: "20px", backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                                                        <Link to="#" className='text-decoration-none d-flex flex-column'>
                                                            <span className='text-black mb-2' style={{ fontSize: "18px" }}>Regular fit desized jeans !</span>
                                                            <span className='' style={{ color: "#1a466e", textDecoration: "underline", textDecorationColor: "#1a466e" }}>SHOP NOW</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-6">
                            <div className="position-relative d-inline-block text-center">
                                <Link to="#" className='position-relative'>
                                    <div>
                                        <img src={trendy_collection_1_img} alt="" className='img-fluid trendy-collection-img' />
                                    </div>
                                    <div className="position-absolute d-inline-block set-trendy-box" style={{ top: "20%", right: "120%", width: "max-content" }}>
                                        <span className='mb-2 d-inline-block' style={{ color: "#666", border: "1px solid rgba(102, 102, 102, 0.2)", padding: "5px 30px", letterSpacing: "1px" }}>Trendy Collection</span>
                                        <p className='fs-4 text-black' style={{ fontWeight: "500" }}>GET 20% OFF</p>
                                        <div>
                                            <Link to="#" className='text-decoration-none text-white btncolor' style={{ padding: "9px 16px", fontSize: "14px" }}>SHOP NOW</Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-6">
                            <div className="position-relative d-inline-block text-center">
                                <Link to="#" className='position-relative'>
                                    <div>
                                        <img src={trendy_collection_2_img} alt="" className='img-fluid trendy-collection-img' />
                                    </div>
                                    <div className="position-absolute d-inline-block set-trendy-box" style={{ top: "20%", right: "120%", width: "max-content" }}>
                                        <span className='mb-2 d-inline-block' style={{ color: "#666", border: "1px solid rgba(102, 102, 102, 0.2)", padding: "5px 30px", letterSpacing: "1px" }}>Trendy Collection</span>
                                        <p className='fs-4 text-black' style={{ fontWeight: "500" }}>TRENDY DENIM</p>
                                        <div>
                                            <Link to="#" className='text-decoration-none text-white btncolor' style={{ padding: "9px 16px", fontSize: "14px" }}>SHOP NOW</Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Testimonials */}
            <div className="container-fluid py-5">
                <div className="position-relative px-1 text-center mb-5">
                    <img src={seperatorimg} alt="" className='position-absolute' style={{ left: "0", right: "0", justifySelf: "center" }} />
                    <h2 className="fw-bold position-relative d-inline-block" style={{ margin: "0 0 20px" }}>Our Testimonials</h2>
                    <p className="mb-2" style={{ fontWeight: "400", fontSize: "15px", color: "#666", letterSpacing: "0.54px" }}>We have thousands of new accessories for men and women in zoom store.</p>
                </div>
                <div>
                    <div className="slider-container">
                        <Slider {...centermode}>
                            <div>
                                <div style={{ width: "auto", backgroundColor: "#fafafa" }}>
                                    <div className='text-center' style={{ padding: "54px 22px" }}>
                                        <div className='d-flex justify-content-center mb-3' >
                                            <img src={testimonial_2_img} alt="" className='d-inline-block rounded-circle shadow-sm' />
                                        </div>
                                        <div className='text-center'>
                                            <span className="" style={{ fontSize: "15px", letterSpacing: "0.5px", color: "#666", margin: "0px auto 25px" }} >"Lorem ipsum dolor sit amet, consecr adipiscing elit. Nibh proin libero, amet, is aenean commodo neque”roin libero, amet, is aenean commet, consecr adipiscing elit. Nibh proin libero, amet, is aenodo"</span>
                                            <div className="mb-1">
                                                <span className="d-inline-block me-1" style={{ fontSize: "24px", fontWeight: "500" }}>Luies Charls</span>
                                                <span className="d-inline-block" style={{ fontSize: "15px", color: "#1a466e" }}>(Web designer)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "auto", backgroundColor: "#fafafa" }}>
                                    <div className='text-center' style={{ padding: "54px 22px" }}>
                                        <div className='d-flex justify-content-center mb-3' >
                                            <img src={testimonial_1_img} alt="" className='d-inline-block rounded-circle shadow-sm' />
                                        </div>
                                        <div className='text-center'>
                                            <span className="" style={{ fontSize: "15px", letterSpacing: "0.5px", color: "#666", margin: "0px auto 25px" }} >"Lorem ipsum dolor sit amet, consecr adipiscing elit. Nibh proin libero, amet, is aenean commodo neque”roin libero, amet, is aenean commet, consecr adipiscing elit. Nibh proin libero, amet, is aenodo"</span>
                                            <div className="mb-1">
                                                <span className="d-inline-block me-1" style={{ fontSize: "24px", fontWeight: "500" }}>Luies Charls</span>
                                                <span className="d-inline-block" style={{ fontSize: "15px", color: "#1a466e" }}>(Web designer)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "auto", backgroundColor: "#fafafa" }}>
                                    <div className='text-center' style={{ padding: "54px 22px" }}>
                                        <div className='d-flex justify-content-center mb-3' >
                                            <img src={testimonial_3_img} alt="" className='d-inline-block rounded-circle shadow-sm' />
                                        </div>
                                        <div className='text-center'>
                                            <span className="" style={{ fontSize: "15px", letterSpacing: "0.5px", color: "#666", margin: "0px auto 25px" }} >"Lorem ipsum dolor sit amet, consecr adipiscing elit. Nibh proin libero, amet, is aenean commodo neque”roin libero, amet, is aenean commet, consecr adipiscing elit. Nibh proin libero, amet, is aenodo"</span>
                                            <div className="mb-1">
                                                <span className="d-inline-block me-1" style={{ fontSize: "24px", fontWeight: "500" }}>Luies Charls</span>
                                                <span className="d-inline-block" style={{ fontSize: "15px", color: "#1a466e" }}>(Web designer)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <div className='' style={{ backgroundColor: "#fafafa", padding: "70px 0px" }}>
                <div className="d-flex justify-content-center align-items-center min-vh-100">
                    <div className='container-fluid'>
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={4} className="text-left mb-4 align-content-center">
                                <p className="text-muted mb-2">Get 10% Off On Order</p>
                                <h1 className="fw-bold mb-4 text-black">Our Gallery.</h1>
                                <p className="text-secondary mb-6 poppins" style={{ fontWeight: "400", fontSize: "15px" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                </p>
                                <Button className="px-4 py-2 btncolor rounded-0">SHOP NOW</Button>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={8} className="gap-3">
                                <div className="slider-container">
                                    <Slider {...auto}>
                                        {/* <div>
                                        <img
                                            alt="Woman in a grey patterned coat"
                                            className="img-fluid"
                                            src={ourgallery_1_img}
                                        />                                    
                                    </div>
                                    <div>
                                        <img
                                            alt="Woman in a grey patterned coat"
                                            className="img-fluid"
                                            src={ourgallery_2_img}
                                        />                                    
                                    </div>
                                    <div>
                                        <img
                                            alt="Woman in a grey patterned coat"
                                            className="img-fluid"
                                            src={ourgallery_4_img}
                                        />                                    
                                    </div>
                                    <div>
                                        <img
                                            alt="Woman in a grey patterned coat"
                                            className="img-fluid"
                                            src={ourgallery_3_img}
                                        />                                    
                                    </div> */}
                                        {autoslides.map((slide, index) => (
                                            <div key={slide.id} className={index % 2 == 1 ? 'mt-3' : ''}>
                                                {slide.content}
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            {/* our blog */}
            <div style={{ padding: "70px 0px" }}>
                <div className="container-fluid mb-5">
                    <div className='position-relative d-flex justify-content-center'>
                        <img src={seperatorimg} alt="" className='position-absolute' />
                        <h3 className="position-relative d-inline-block mb-4 fw-bold" style={{ fontSize: "40px" }}>Our Blog</h3>
                    </div>
                    <p className="text-center mb-4" style={{ color: "#666", letterSpacing: "0.54px", fontWeight: "400" }}>We have thousands of new accessories for men and women in zoom store.</p>
                    <div className="py-6">
                        <Row className="g-4">
                            <div className="slider-container">
                                <Slider {...blogcard}>
                                    {[
                                        {
                                            imgSrc: ourblog_1_img,
                                            altText: "Woman in a black and white dress standing",
                                            title: "Scelerisque vestibulum urna",
                                            comments: 4,
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac. Lorem ipsum dolor sit am..."
                                        },
                                        {
                                            imgSrc: ourblog_2_img,
                                            altText: "Man in a denim jacket smiling",
                                            title: "Viderer voluptatum te eum",
                                            comments: 0,
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac. Lorem ipsum dolor sit am..."
                                        },
                                        {
                                            imgSrc: ourblog_3_img,
                                            altText: "Woman in a red jacket and black hat",
                                            title: "Proin faucibus massa tristique",
                                            comments: 0,
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac. Lorem ipsum dolor sit am..."
                                        },
                                        {
                                            imgSrc: ourblog_4_img,
                                            altText: "Woman in a red jacket and black hat",
                                            title: "Proin faucibus massa tristique",
                                            comments: 0,
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac. Lorem ipsum dolor sit am..."
                                        },
                                        {
                                            imgSrc: ourblog_5_img,
                                            altText: "Woman in a red jacket and black hat",
                                            title: "Proin faucibus massa tristique",
                                            comments: 0,
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac. Lorem ipsum dolor sit am..."
                                        },
                                        {
                                            imgSrc: ourblog_6_img,
                                            altText: "Woman in a red jacket and black hat",
                                            title: "Proin faucibus massa tristique",
                                            comments: 0,
                                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac. Lorem ipsum dolor sit am..."
                                        },
                                    ].map((card, index) => (
                                        <div className='px-2 d-flex justify-content-center' key={index}>
                                            <Card className="shadow-sm" style={{ width: '100%', maxWidth: '390px' }}>
                                                <Card.Img
                                                    variant="top"
                                                    src={card.imgSrc}
                                                    alt={card.altText}
                                                    height="280px"
                                                />
                                                <Card.Body>
                                                    <Card.Title className="h5">{card.title}</Card.Title>
                                                    <Card.Text className="text-primary">{card.comments} Comments</Card.Text>
                                                    <Card.Text className="text-secondary">
                                                        {card.description}
                                                    </Card.Text>
                                                    <Button variant="link" className="text-black">
                                                        READ MORE
                                                    </Button>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Row>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="slider-container">
                        <Slider {...brandauto}>
                            {brandsslide.map((slide, index) => (
                                <div key={slide.id}>
                                    {slide.content}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className="btncolor text-white px-4 py-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <h1 className="mb-4 mb-md-0">Subscribe to Our Newsletter</h1>
                    <div className="d-flex justify-content-end w-md-auto">
                        <div className="bg-light w-100 w-md-75 d-flex p-1" style={{ maxWidth: '500px' }}>
                            <input
                                type="email"
                                placeholder="Your E-Mail"
                                className="form-control rounded-0 bg-transparent"
                            />
                            <button className="btn btncolor text-white rounded-0">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Zoom_Footer />
            </div>

        </div>
    )
}

export default Zoom_Home
