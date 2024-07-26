import React, { useContext } from "react";
import "../food_display/food_display.css";
import { StoreContext } from "../../Context/StoreCotext"; // Importing StoreContext to access global state
import FoodItem from "./FoodItem";

function FoodDisplay({ category }) {
  // console.log(category);

  const { food_list } = useContext(StoreContext); // Accessing the food_list from the StoreContext

  console.log(food_list);

  return (
    <>
      <div className="food_display" id="food_display">
        {food_list.map((item, index) => {
          // Looping through the food_list array to display food items
          if (category === "All" || category === item.category) {
            // Checking if the category matches or if "All" is selected
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                rating={item.rating}
              /> // passing the props to foodItem components
            );
          }
        })}
      </div>
    </>
  );
}

export default FoodDisplay; // Exporting FoodDisplay component for use in other parts of the app
