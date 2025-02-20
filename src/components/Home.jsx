import React from "react";
import backgroundImage from "../../public/image.jpg";
import { Link } from "react-router-dom";
import '../componentsStyles/Home.css'
import Special from "./Special";

function Home() {
  return (
    <>
    <div className="main">
  
      <div className="backgroundImage">
        <img src={backgroundImage} alt="Restaurant Background" />
      </div>

      <div className="info">
        <div className="textInfo">
          <h1>Welcome to Little Lemon, hurry up and reserve your table</h1>
        </div>
        <div className="homeButton">
        <Link to="/reservation" ><button className="btn">Reserve Now</button></Link>
        </div>
      </div>
    </div>
    <Special/>
    </>
  );
}

export default Home;
