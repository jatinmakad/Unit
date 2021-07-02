import React from "react";
import "./Content.css";
import Button from "@material-ui/core/Button";

function Content() {
  return (
    <div className="cont">
      <img
        src="https://unity.com/sites/default/files/styles/16_9_s_scale_width/public/2021-04/crash-bandicoot-on-the-run.png?itok=Kb6G6Pj0"
        alt=""
      />
      <div className="text">
        <h1>
          The leading platform for creating interactive, real-time content
        </h1>
        <p>
          Build 2D, 3D and VR games and apps at speed. From artist tools to
          live-ops – everything you need to bring your vision to life today.
        </p>
        <div className="btn">
          <Button variant="contained" color="primary" className="btn1">
            Get  Started
          </Button>
          <Button variant="outlined" className="btn2">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default Content;
