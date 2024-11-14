import React from "react";
import Slider from "react-slick";
import slidergirlimg1 from '../Images/slidergirlimg1.png';
import slidergirlimg2 from '../Images/slidergirlimg2.png';
import slidergirlimg3 from '../Images/slidergirlimg3.png';
import slidergirlimg4 from '../Images/slidergirlimg4.png';

function ZoomThreegirl() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings} >
        <div className="pe-3">
                <img src={slidergirlimg1} alt="" className="img-fluid" />
        </div>
        <div className="pe-3">
                <img src={slidergirlimg2} alt="" className="img-fluid" />
        </div>
        <div className="pe-3">
                <img src={slidergirlimg3} alt="" className="img-fluid" />
        </div>
        <div className="pe-3">
                <img src={slidergirlimg4} alt="" className="img-fluid" />
        </div>
      </Slider>
    </div>
  );
}

export default ZoomThreegirl;
