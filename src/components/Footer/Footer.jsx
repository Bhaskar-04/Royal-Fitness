import React from 'react'
import "./Footer.css"
import instagran from "../../assets/instagram.png"
import logo from "../../assets/final-logo-removebg-preview.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="blur f-blur-1"></div>
      <div className="blur f-blur-2"></div>
        <hr />
        <div className="footer">
            <div className="socials">
                <img src={instagran} alt="" />
                <img src={logo} alt="" />
            </div>
        </div>
        

    </div>
  )
}

export default Footer