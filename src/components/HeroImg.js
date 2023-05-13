import "./HeroImgStyles.css";
import React from 'react'
// import IntroImg from "../assets/ales.jpg";
import IntroImg from "../assets/Group 112.png";

import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
           <p>HI, I AM A WEB DESIGNER AND</p>
           <h1>Web Developer.</h1>
           <div>
              <Link to="/project" className="btn">Projects</Link>
              <Link to="/contact" className="btn btn-light">Contact</Link>
           </div>
        </div>
    </div>
  )
}

export default HeroImg