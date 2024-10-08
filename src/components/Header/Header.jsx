import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/final-logo-removebg-preview.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {open === false && mobile === true ? (
        <div style={{
          top: "1rem",
          right: "1rem",
          position: "fixed",
          backgroundColor: "var(--appColor)",
          padding: "0.4rem",
          borderRadius: "5px",
          zIndex:"10"
        }}
        
        onClick={()=>setOpen(true)}
        
        >
          <img src={Bars} alt="" style={{
            height: "1.2rem",
            width: "1.7rem"
          }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li >
            <Link 
            to="home"
            smooth={true}
            onClick={()=>setOpen(false)}
            >Home
            </Link>
          </li>
          <li>
          <Link 
            to="programs"
            smooth={true}
            onClick={()=>setOpen(false)}
            >Programs
            </Link>
          </li>
          <li>
          <Link 
            to="reasons"
            smooth={true}
            onClick={()=>setOpen(false)}
            >Why Us
            </Link>
          </li>
          <li>
          <Link 
            to="plan"
            smooth={true}
            spy={true}
            onClick={()=>setOpen(false)}
            >Plans
            </Link>
          </li>
          <li>
          <Link 
            to="testimonials"
            smooth={true}
            onClick={()=>setOpen(false)}
            >Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
