import React from "react";
import "./Tab.css";
import Button from "@material-ui/core/Button";

function Tab({ image, text, par, b1, b2 }) {
  return (
    <div className="tab">
      <img src={image} alt="" />
      <h1>{text}</h1>
      <p>{par}</p>
      <div className="bt">
        <Button variant="contained" color="primary">
          {b1}
        </Button>
        <Button href="#text-buttons" color="primary">
          {b2}
        </Button>
      </div>
    </div>
  );
}

export default Tab;
