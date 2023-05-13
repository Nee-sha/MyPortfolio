import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>
               I am a react developer. I create responsive secure websites for my clients
            </p>
            <div>
              <Link to="https://drive.google.com/file/d/12qNw3m1GawDSZOaeQx4sjJKDnqL4tTiC/view?usp=share_link" className="btn">Resume</Link>
              <Link to="/contact" className="btn btn-light">Contact</Link>
           </div>
            {/* <Link to="/contact">
               <button className="btn">Contact</button>
            </Link> */}
            
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent