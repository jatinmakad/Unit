import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import Content from "./Content";
import CardContent from "./CardCont";
import TabCont from "./TabCont";
import Swit from "./Swit";
import Together from "./Together";
import Icon from "./Icon";
import Footer from "./Footer";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <CardContent />
      <TabCont />
    
      <Swit />
      <Together />
      <Icon />
      <Footer/>
    </div>
  );
}

export default App;

