import React from "react";
import "../header/hero.css"
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero_content">
          <h1>
            Order your favourite food here!
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dolore, temporibus?
          </p>
         <Link to="/menu"> <button className="btn">Let's Order</button></Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
