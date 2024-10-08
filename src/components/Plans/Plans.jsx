import React from "react";
import "./Plans.css";
import {plansData} from "../../data/plansData.js"
import Tick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" >
      <div className="blur p-blur-1"></div>
      <div className="blur p-blur-2"></div>
      <div className="plans-header" id="plan">
        <span className="stroke-text" >READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      <div className="plans">
        {
          plansData.map((plan,i)=>(
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span> ₹ {plan.price}</span>

              <div className="features">
                {plan.features.map((feature,i)=>(
                  <div className="feature" key={i}>
                    <img src={Tick} alt="" />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
              </div>
                <button className="btn">Contact Us Now !</button>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Plans;
