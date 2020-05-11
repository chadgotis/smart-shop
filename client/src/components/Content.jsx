import React from "react";
import DishList from "./DishList";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};
const Content = () => {
  return (
    <div className="main-content">
      <div className="slide">
        <Slider {...settings}>
          <div>
            <h1>Burger Queen Pares</h1>
            <p>Lorem Ipsum dolor sit amet</p>
          </div>
          <div>
            <h1>Burger Ace Pares</h1>
            <p>Lorem Ipsum dolor sit amet</p>
          </div>
          <div>
            <h1>Burger Jack Pares</h1>
            <p>Lorem Ipsum dolor sit amet</p>
          </div>
        </Slider>
        {/* <div className="burger"></div>
        <div className="slide-text">
          <h1>Burger King Pares</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <i className="arrow las la-angle-right"></i>
        </div> */}
      </div>
      <main>
        <DishList />
      </main>
    </div>
  );
};

export default Content;
