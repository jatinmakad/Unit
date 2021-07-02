import React, { useEffect, useState } from "react";
import "./Swit.css";
import Button from "@material-ui/core/Button";

function Swit() {
  const [ground, setGround] = useState(
    "https://wallpapercave.com/wp/wp2994123.jpg"
  );
  useEffect(() => {
    setGround(ground);
  },[ground]);

  const myStyle = {
    backgroundImage: `url(${ground})`,
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="swit" style={myStyle}>
      <div className="car">
        <div className="head">
          <h1>Made with Unity</h1>
          <p>
            Discover inspiring stories from creators
            <br /> who chose Unity to bring their projects to life.
          </p>
          <Button variant="contained" color="primary">
            More Stories
          </Button>
        </div>
        <div className="last">
          <div
            className="car1"
            onMouseEnter={() =>
              setGround("https://wallpapercave.com/wp/wp2994123.jpg")
            }
          >
            <h1>
              Pharos AR
              <br />
              <span>by Childish Gambino,wof + Rothsthis,and MediaMonk </span>
            </h1>
            <div className="hide">
              <p>
                Enter childish Gambino's mystical world in the world's first
                multi-platform ,mulit-player AR music experincae.
              </p>
              <Button color="primary">Learn more</Button>
            </div>
          </div>

          <div
            className="car1"
            onMouseEnter={() =>
              setGround("https://wallpapercave.com/wp/wp2296378.jpg")
            }
          >
            <h1>
              Praey for the gods
              <br /> <span>by no Matter studios</span>
            </h1>
            <div className="hide">
              <p>
                A gaint of winter survival game from a small , highly talented
                studio.
              </p>
              <Button color="primary">Learn more</Button>
            </div>
          </div>

          <div
            className="car1"
            onMouseEnter={() =>
              setGround("https://wallpapercave.com/wp/wp2514488.jpg")
            }
          >
            <h1>
              How to create a configurable car in unity HDRP
              <br /> <span>by Edward Martin </span>
            </h1>
            <div className="hide">
              <p>An inside look at real-time rendering for automotive.</p>
              <Button color="primary">Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swit;
