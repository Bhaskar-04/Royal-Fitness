import React, { useState } from 'react'
import "./Testimonials.css"
import {testimonialsData} from "../../data/testimonialsData.js"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import {motion} from "framer-motion"


const Testimonials = () => {

  const [idx, setIdx] = useState(0)

  const handleClick = (dir)=>{
    let lastIndex = testimonialsData.length-1;
    if(dir === "left"){
      if( idx === 0){
        setIdx(lastIndex)
      }else{
        setIdx((value)=>value-1)
      }
    }else{
      if(dir === "right"){
        if( idx === lastIndex){
          setIdx(0)
        }else{
          setIdx((value)=>value+1)
        }
      }
    }
  }

  return (
    <div className="testimonials-container" id='testimonials'>
      <div className="t-left">
        <span>Testimonials</span>
        <span className='stroke-text'>what they</span>
        <span>say about us</span>
        <motion.span
        key={idx}
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:100}}
        transition={{
          duration:2,
          type:'tween'
        }}
        >{testimonialsData[idx].review}</motion.span>
          <span style={{
            color: "var(--orange)"
          }}>{testimonialsData[idx].name}</span>
          <span>- {testimonialsData[idx].status}</span>
        <span>{"  "}</span>
      </div>
      <div className="t-right">
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{
          duration:2,
          type:'tween'
        }}
        >
        </motion.div>
        <motion.div
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{
          duration:2,
          type:'tween'
        }}
        >
        </motion.div>
        <motion.img
        key={idx}
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:100}}
        transition={{
          duration:2,
          type:'tween'
        }}
        src={testimonialsData[idx].image} alt="" />
        <div className="arrow">
          <img onClick={()=>handleClick("left")} src={leftArrow} alt="" />
          <img onClick={()=>handleClick("right")} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
