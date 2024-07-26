import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreCotext";
import Ratting from "../../assets/ratting.png";
import "./../singlei_tem/single_page.css";
import ai from "../../assets/ai.png";

function SinglePage() {
  // Retrieve the `id` parameter from the URL
  const { id } = useParams();
  // useParams() simplifies the process of accessing URL parameters within React components rendered by React Router DOM.

  // Destructure `food_list` and `addTocart` from `StoreContext`
  const { food_list, addTocart } = useContext(StoreContext);

  // Find the food item in `food_list` that matches the `id`
  const food = food_list.find((item) => item._id === id);
  console.log(food);

  // Use useEffect to scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="single_food">
        <div className="single_food_left">
          {/* Display the image of the food item */}
          <img src={food?.image} alt={food?.name} />
        </div>

        <div className="single_food_right">
          {/* Display the name of the food item */}
          <h1>{food?.name}</h1>
          {/* Display the category of the food item */}
          <p>{food?.category}</p>
          <div className="single_food_ratting">
            {/* Display the rating image */}
            <img src={Ratting} alt="ratting" />
            {/* Display the rating value */}
            <span>{food?.rating}</span>
          </div>
          {/* Display the detailed description of the food item */}
          <p>{food?.description2}</p>
          <div className="rate">
            <h3>Price:</h3> <span>Rs {food?.price * 8}</span>{" "}
            {/* Display the price of the food item */}
          </div>
          {/* Button to add the food item to the cart */}
          <button
            onClick={() => addTocart(food._id)}
            className="single_food_btn"
          >
            Add to bag
          </button>
        </div>
      </div>

      <div className="single_bottom">
        <div className="recipe">
          <h2>Recipe</h2>
          {/* Display the home recipe of the food item */}
          <p>{food?.home_recipe}</p>
        </div>

        <div className="ingredients">
          <h2>Food Ingredients</h2>
          {/* Display the ingredients of the food item */}
          <ul>
            {food?.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>; // List each ingredient
            })}
          </ul>
        </div>

        <div className="ai_home">
          <div className="title">
            <h3>Get A Smart Recipe Suggestions</h3>
          </div>
          <p>
            Experience personalized recipe suggestions tailored to your
            preferences with our AI-powered recipe generator. Simply input a
            food category or dish, and receive detailed, healthy recipe ideas
            complete with ingredients, step-by-step instructions, and calorie
            counts per serving. Explore nutritious meal options effortlessly!
          </p>
          {/* Link to the Food AI page */}
          <Link to="/foodAi">
            <button className="AIbtn">
              Food AI <img src={ai} alt="AI icon" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
