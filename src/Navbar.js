import React, { useState } from "react";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Comp from "./Co/Comp";
import Comp2 from "./Co/Comp2";
import Comp3 from "./Co/Comp3";
import Comp4 from "./Co/Comp4";
import Comp5 from "./Co/Comp5";
import Comp6 from "./Co/Comp6";

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);

  return (
    <>
   
      <div className="navbar">
        <div className="first">
          <img
            src="https://unity3d.com/profiles/unity3d/themes/unity/images/pages/branding_trademarks/unity-masterbrand-black.png"
            alt=""
          />
        </div>
        <ul className="middle">
          <li
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            Products
          </li>
          <li
            onMouseEnter={() => setIsShown2(true)}
            onMouseLeave={() => setIsShown2(false)}
          >
            Solution{" "}
          </li>
          <li
            onMouseEnter={() => setIsShown3(true)}
            onMouseLeave={() => setIsShown3(false)}
          >
            Learning
          </li>
          <li
            onMouseEnter={() => setIsShown4(true)}
            onMouseLeave={() => setIsShown4(false)}
          >
            Supports & Services
          </li>
          <li
            onMouseEnter={() => setIsShown5(true)}
            onMouseLeave={() => setIsShown5(false)}
          >
            Community
          </li>
          <li
            onMouseEnter={() => setIsShown6(true)}
            onMouseLeave={() => setIsShown6(false)}
          >
            Developer Tools{" "}
          </li>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </ul>
        <div className="last">
          <SearchIcon />
          <DragIndicatorIcon />
          <AccountCircleIcon />
        </div>

      </div>
     
      {isShown && <Comp />}
      {isShown2 && <Comp2 />}
      {isShown3 && <Comp3 />}
      {isShown4 && <Comp4 />}
      {isShown5 && <Comp5 />}
      {isShown6 && <Comp6 />}
      
    </>
    
  );
}

export default Navbar;
