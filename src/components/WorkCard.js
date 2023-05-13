import "./WorkCardStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    // <div className="work-container">
    //     <h1 className="project-heading">Projects</h1>
    //     <div className="project-container">
    //         <div className="project-card">
    //             <img src={pro1} alt="imagee" />
    //             <h2 className="project-title">Project Title</h2>
    //             <div className="pro-details"></div>
    //               <p>This is text.</p>
    //               <div className="pro-btns">
    //                 <NavLink to="url.com" className="btn">View</NavLink>
    //                 <NavLink to="url.com" className="btn">Source</NavLink>
    //               </div>
    //         </div>
    //     </div>
    // </div>
    <div className="project-card">
                <img src={props.imgsrc} alt="imagee" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details"></div>
                  <p>{props.text}</p>
                  <div className="pro-btns">
                    <NavLink to="{props.view}" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                  </div>
            </div>
  )
}

export default WorkCard