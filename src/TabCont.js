import React from "react";
import Tab from "./Tab";
import "./TabCont.css";
import Button from "@material-ui/core/Button";

function TabCont() {
  return (
    <>
      <div className="feature">
        <h1>Featured Product</h1>
        <Button variant="outlined" color="primary">
          See all product
        </Button>
      </div>
      <div className="tabCont">
        <Tab
          image="https://unity.com/sites/default/files/styles/product_card_small/public/2020-11/product-thumbnail-unity-pro%201%20%281%29.png?itok=3Sr1rOPh"
          text="Unity Pro"
          par="The complete solutions for professionals to create and operate."
          b1="Subscribe"
          b2="Learn more"
        />

        <Tab
          image="https://unity.com/sites/default/files/styles/product_card_small/public/2021-04/reflect-review-logo.png?itok=ge162M9i"
          text="Unity Reflect Review"
          par="Facilitate interactive design reviews in AR and VR."
          b1="Subscribe"
          b2="Learn more"
        />

        <Tab
          image="https://unity.com/sites/default/files/styles/product_card_small/public/icon-2020-05/ArtEngine-Logo.png?itok=eYSlq8fH"
          text="Unity ArtEngine"
          par="Create ultra-realistic materials using AI-assisted artistry to accelerate your workflow. Windows OS required."
          b1="Get Discount"
          b2="Learn more"
        />

        <Tab
          image="https://unity.com/sites/default/files/styles/product_card_small/public/2021-03/Industrial-collection_0.png?itok=3EedAMmI"
          text="Unity Industrial Collection"
          par="Bring CAD and 3D data into AR, VR and more with real-time 3D product visualization tools."
          b1="Subscribe"
          b2="Learn more"
        />
      </div>
    </>
  );
}

export default TabCont;
