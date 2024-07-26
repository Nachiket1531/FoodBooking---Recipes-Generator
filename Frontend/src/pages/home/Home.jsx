import React, { useState, useEffect } from "react";
import Hero from "../../components/header/Hero";
import "../../components/header/hero.css";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import FoodDisplay from "../../components/food_display/FoodDisplay";
import Noodle from "../../assets/noodle.gif";
import ai from "../../assets/ai.png"
import { Link } from "react-router-dom";

function Home() {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div id="home">
        <Hero />
      </div>

      <div className="ai_home">
        <div className="title">
          <h3>Smart Recipe Suggestions Powered by AI</h3>
        </div>
        <p>
          Experience personalized recipe suggestions tailored to your
          preferences with our AI-powered recipe generator. Simply input a food
          category or dish, and receive detailed, healthy recipe ideas complete
          with ingredients, step-by-step instructions, and calorie counts per
          serving. Explore nutritious meal options effortlessly!
        </p>
        <Link to="/foodAi">
        <button className="AIbtn">Food AI <img src={ai} alt="" /></button>
        </Link>
      </div>
      
      <div className="section ">
        <div className="title">
          <h3>What's on your mind?</h3>
        </div>
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>
      <hr />

      {/* <Search/> */}
      <div className="section">
        <div className="title">
          <h3>Top dishes near you</h3>
          <img src={Noodle} alt="" />
        </div>
        <FoodDisplay category={category} />
      </div>
    </>
  );
}

export default Home;
