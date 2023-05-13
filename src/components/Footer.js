import "./FooterStyles.css"

import {FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
           <div className="left">
               <div className="location">
                <FaHome size={30} style={{color:"#fff", marginRight: "2rem"}}/>
                <div>
                    <p>Samruddhi Developers.</p>
                    <p>Wagholi, Pune.</p>
                </div>
               </div>
               <div className="phone">
                    <h4>
                      <FaPhone 
                       size={20} style={{color:"#fff", marginRight: "2rem"}}

                       />  
                       +91 9834191309
                    </h4>
               </div>
               <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>  
                its.nisha0095@gmail.com</h4>
               </div>
           </div>
           <div className="right">
              <h4>About the company</h4>
              <p>If you are getting spam texts, it's more than likely that whoever is sending you a spam text message is trying to get access to your personal information—bank.</p>
              <div className="socials">
              <a href="https://www.instagram.com/_ng_0905/"><FaInstagram
                  size={30} style={{color:"#fff", marginRight: "1rem"}}
                  />
                </a>
              <a href="https://twitter.com/nisha_gawai"> <FaTwitter 
                  size={30} style={{color:"#fff", marginRight: "1rem"}}
                  />
              </a>    
              <a href="https://www.linkedin.com/mynetwork/"><FaLinkedin
                  size={30} style={{color:"#fff", marginRight: "1rem"}}
                  /> 
              </a>     
              </div>
           </div>
        </div>
    </div>
  )
}

export default Footer