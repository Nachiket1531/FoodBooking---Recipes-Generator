import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreCotext";
import { FaCircleMinus } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";

function FoodItem({ id, name, description, price, image, rating }) {
  const { cartItem, addTocart, removeFromItem } = useContext(StoreContext);
  return (
    <>
      <div className="food_card " id={id}>
        <div className="food_img">
          <Link>
            <img src={`http://localhost:5000/uploads/${image}`} alt="" />{" "}
          </Link>
          {!cartItem[id] ? (
            <div className="food_item_addcounter">
              <img
                className="add"
                src={assets.add_icon_white}
                onClick={() => addTocart(id)}
              />
            </div>
          ) : (
            <div className="food_item_counter">
              <span className="minus" onClick={() => removeFromItem(id)}>
                <FaCircleMinus />
              </span>
              <p>{cartItem[id]}</p>
              <span className="add" onClick={() => addTocart(id)}>
                <IoAddCircleSharp />
              </span>
            </div>
          )}
        </div>
        <div className="food_card_contend">
          <div className="food_card_name">
            <Link to={`/singleItem/${id}`}>
              <h3>{name}</h3>{" "}
            </Link>
            <span>
              <FaStar className="star" />
              {rating}
            </span>
          </div>
          <p>{description}</p>
        </div>
        <div className="food_card_flex">
          <p>₹ {price * 8}</p>
          <button onClick={() => addTocart(id)} className="food_cart_btn">
            Add to bag
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
