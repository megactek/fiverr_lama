import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
const Slide = ({ children, slidesToSHow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToSHow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
