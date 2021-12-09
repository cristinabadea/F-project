/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./RecomItem.css";
import { ImageContext } from "../../Contexts/ImageContext";

const RecomItem = (props) => {
  const imageContext = useContext(ImageContext);
  var product = props.itemImage;
  return (
    <div>
      <div className="recom-row">
        <div className="recom-col recom-img">
          <img className="img1" src={product} />
          <Link to="/cart">
            <button className="recom-btn">Buy me!</button>
          </Link>
        </div>
        <div className="recom-col recom-col-background">
          <h1> Our recommendatios:</h1>
          <p>{props.recom1}</p>
          <p>{props.recom2}</p>
          <p>{props.recom3}</p>
        </div>
      </div>
    </div>
  );
};

export default RecomItem;
