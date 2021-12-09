/** @format */

import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import "./HomeHeader.css";

const HomeHeader = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        className="carousel-container"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            id="header-img"
            className="d-block w-100"
            src="https://media.cntraveler.com/photos/5f84939a5f9755e5951db3f4/master/pass/WhitefishMountainResort-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="caption-h4">
              Our <strong>ski size calculator</strong> is designed to help you
              choose the perfect gear to make one of the most popular winter
              activities even more enjoyable!
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="header-img"
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/133703.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="caption-h4">
              Knowing <strong>how to size skis</strong> can make a real
              difference to your experience.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="header-img"
            className="d-block w-100"
            src="https://newyorkrentalbyowner.com/blog/wp-content/uploads/2019/09/Skiing-in-Upstate-New-York-10-Best-Ski-Resorts-For-Your-Winter-Vacation.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="caption-h4">
              As you probably know, the skis are not just some strips of plastic
              that you can randomly wear.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="header-img"
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/950359.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="caption-h4" id="adding-color">
              Choosing skis can be daunting, but we're here to help you!
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="header-img"
            className="d-block w-100"
            src="http://res.cloudinary.com/simpleview/image/upload/v1597924305/clients/norway/alpine_voss_resort_vestland_fjord_norway_credits_hunnalvatn_media_2_1_2df89176-d7c8-4bb7-b7f4-88cd1ba7daf4.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="caption-h4">
              Picking the right skis begins at the most basic level by knowing
              what <strong>length</strong> is appropriate for you.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="header-img"
            className="d-block w-100"
            src="https://wallpaperbat.com/img/279094-download-wallpaper-1920x1080-les-trois-vallees-ski-resort-three.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4 className="caption-h4">
              Finding your perfect skis is strongly influenced by your{" "}
              <strong>ability level</strong> but also by your{" "}
              <strong>riding style</strong> and <strong>terrain choice</strong>.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="header-img"
            className="d-block w-100"
            src="https://img1.goodfon.com/wallpaper/nbig/3/6f/yamagata-zao-onsen-ski-resort.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4 className="caption-h4">
              <strong>Let us guide you through the process below!</strong>
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeHeader;
