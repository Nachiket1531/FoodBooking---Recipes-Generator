import React, { useContext , useEffect } from "react";
import "../cart/cart.css";
import {StoreContext} from "../../Context/StoreCotext"
import { CiTrash } from "react-icons/ci";
import { FaCircleMinus } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function Cart() {
  const { food_list, cartItem, removeFromItem, addTocart, cartTotal } = useContext(StoreContext);
  // console.log(cartItem);

  const navigate = useNavigate()

  useEffect(()=>{
    window.scroll(0,0)
},[])

  // Check if the cart is empty
  const isCartEmpty = !food_list.some(item => cartItem[item._id] > 0);
  if (isCartEmpty) {
    return <div className="empty_cart_message">Your cart is empty!</div>;
  }

  return (
    <>
      <div className="Add_cart">
        <h2 className="cart_heading">Your Cart</h2>
        <table className="cart_table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {food_list.map((item, index) => {
              if (cartItem[item._id] > 0) {
                return (
                  <tr key={index} className="cart_item">
                    <td className="cart_img">
                      <img src={item.image} alt={item.name} />
                    </td>
                    <td className="cart_item_title">
                      <h2>{item.name}</h2>
                    </td>
                    <td className="cart_item_price">
                      <p>₹ {item.price * 8}</p>
                    </td>
                    <td className="cart_item_quantity">
                      <div className="cart_counter">
                        <FaCircleMinus className="minus" onClick={() => removeFromItem(item._id)} />
                        <p>{cartItem[item._id]}</p>
                        <IoAddCircleSharp className="add" onClick={() => addTocart(item._id)} />
                      </div>
                    </td>
                    <td className="cart_item_total">
                      <p>₹ {item.price * cartItem[item._id] * 8}</p>
                    </td>
                    <td className="cart_item_del">
                      <p onClick={() => removeFromItem(item._id)}><CiTrash /></p>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>

        <div className="cart_total">
          <div className="cart_total_left">
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>₹ {cartTotal() * 8}</p>
            </div>
            <div className="cart_total_details">
              <p>Delivery</p>
              <p>₹ {20}</p>
            </div>
            <div className="cart_total_details total">
              <p>Total</p>
              <p>₹ {cartTotal() * 8 + 20}/-</p>
            </div>
            <button onClick={(()=>navigate("/placeOrder"))} className="cart_btn">Proceed To Checkout</button>
          </div>

          <div className="cart_total_promo">
            <p>Apply Promo Code.</p>
            <input type="text" placeholder="promo code..." />
            <input type="submit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
