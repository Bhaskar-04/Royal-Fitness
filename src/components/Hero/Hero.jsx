import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion"
import NumberCounter from "number-counter"

const Hero = () => {
  const mobile = window.innerWidth <= 768 ? true : false; 
  return (
    <div className="hero" id="home">
      <div className="blur h-blur" ></div>
      <div className="left">
        <Header />
        <div className="the-ad">
          <motion.div
          initial={{left: mobile ? "150px" : "200px"}}
          whileInView={{left:"8px"}}
          transition={{
            duration:3,
            repeat:Infinity,
            repeatType:"reverse",
          }}
          >

          </motion.div>
          <span>the best fitness club in town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={30} start={17} delay="4" preFix="+"  />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={140} start={100} delay="4" preFix="+"  />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={45} start={36} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-btn">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right">
        <button className="btn">Join Now</button>

        <motion.div className="heart-rate"
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{
          duration:2,
          type:'tween'
        }}
        >
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="hero" className="hero-image" />
        <motion.img 
          initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{
          duration:2,
          type:'tween'
        }}
        src={hero_image_back} className="hero-image-back" />

        <motion.div className="calories"
         initial={{opacity:0, x:-100}}
         whileInView={{opacity:1, x:0}}
         transition={{
           duration:2,
           type:'tween'
         }}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
