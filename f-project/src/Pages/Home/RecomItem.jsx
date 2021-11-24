/** @format */

import React from "react";
import ItemDetails from "./ItemDetails";
import "./RecomItem.css";

const RecomItem = (props) => {
  const product = props.itemImage;
  return (
    <div>
      <div className="recom-row">
        <div className="recom-col recom-img">
          <img className="img1" src={product} />
        </div>
        <div className="recom-col recom-col-background">
          <h1> Our recommendatios:</h1>
          <p>{props.recom1}</p>
          <p>{props.recom2}</p>
          <p>{props.recom3}</p>
        </div>
      </div>

      <button className="recom-btn">Buy me</button>
      <div>
        <ItemDetails />
      </div>
    </div>
  );
};

export default RecomItem;
