import React from "react";
import { Button } from "react-bootstrap";
import "./Button.css";

const MyButton = () => {
  return (
    <div className="container">
      <button type="button" id="my-button">
        Height
      </button>
      <button type="button" id="my-button">
        Weight
      </button>
      <button type="button" id="my-button">
        Gender
      </button>
      <button type="button" id="my-button">
        Ability level
      </button>
      <button type="button" id="my-button">
        Riding style
      </button>
    </div>
  );
};

export default MyButton;
