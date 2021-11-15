
import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./GiftForSkiers.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function GiftsForSkiers() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="blog-page-title">
        <h1>The Best Gifts for Skiers This Season</h1>
        <h4>Black diamond presents for on-piste and off</h4>
      </div>
      <Carousel
        className="container"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            id="gift-image"
            className="d-block w-100"
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1570724429-8d6879c8-f21d-468c-85a5-ec1d0e101e30.jpg?crop=1xw:1xh;center,top&resize=768:*"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="description-div">
              <h3>3 Antler Candelabra</h3>
              <p>
                Achieve instant mountain vibes with this naturally shed antler
                candle holder.
              </p>

              <Link to="/">
                <Button className="buy-button"> See on site!</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="gift-image"
            className="d-block w-100"
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1605222714-screen-shot-2020-11-12-at-6-11-00-pm-1605222670.png?crop=0.9147920927062031xw:1xh;center,top&resize=768:*"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="description-div">
              <h3>Fox Fur-Trimmed Cashmere Wrap</h3>
              <p>
                You'll be the most fabulously dressed for après ski cocktails.
              </p>
              <Link to="/">
                <Button className="buy-button"> See on site!</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="gift-image"
            className="d-block w-100"
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1570730639-wyoming-whiskey-1570730631.jpg?crop=1xw:1xh;center,top&resize=768:*"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="description-div">
              <h3>Wyoming Whiskey Outryder</h3>
              <p>
                The ideal bridge between the smooth finish of bourbon and
                moderate spice of rye, Outryder is the result of marrying two
                distinctive mash bills that use corn, rye, and malted barley.
              </p>
              <Link to="/">
                <Button className="buy-button"> See on site!</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="gift-image"
            className="d-block w-100"
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1605222227-465dcb8b-87e6-48ac-8974-8900638abef7.jpg?crop=1xw:1xh;center,top&resize=768:*"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="description-div">
              <h3>Shearling Backpack</h3>
              <p>
                The perfect accessory to complete that snow bunny chic look.{" "}
              </p>
              <Link to="/">
                <Button className="buy-button"> See on site!</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="gift-image"
            className="d-block w-100"
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1570723722-2ac02160-df64-4225-a8d5-9f95deff0b2a.jpg?crop=0.888xw:1xh;center,top&resize=768:*"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="description-div">
              <h3>Marker Ski Mug</h3>
              <p>
                Get pumped for the slopes with your first sip of morning coffee
                and even your mold wine.
              </p>
              <Link to="/">
                <Button className="buy-button"> See on site!</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="gift-image"
            className="d-block w-100"
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1570725759-REDBL.jpg?crop=0.667xw:1xh;center,top&resize=768:*"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="description-div">
              <h3>Wakayama Glove</h3>
              <p>
                A gorgeous, retro-inspired cowhide glove with wool terry lining
                and paracord wrist adjustment.{" "}
              </p>
              <Link to="/">
                <Button className="buy-button"> See on site!</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            id="gift-image"
            className="d-block w-100"
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1570725121-690459cf-621f-42ac-8426-f9ea022c41f0.jpg?crop=0.888xw:1xh;center,top&resize=300:*"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="description-div">
              <h3>Austria Race Ski Socks</h3>
              <p>
                Socks would normally be a terrible gift but these high-end ski
                racing socks by legendary German base layer brand Falke are some
                of the best on the market.
              </p>
              <Link to="/">
                <Button className="buy-button"> See on site!</Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default GiftsForSkiers;
