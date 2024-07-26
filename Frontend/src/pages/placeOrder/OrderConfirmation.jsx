import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../../Context/StoreCotext";
import "../placeOrder/place_order.css";
import route from "../../assets/route.gif";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderConfirmation() {
  const location = useLocation();
  const { formData, cartTotal } = location.state;
  const { cartItem, food_list } = useContext(StoreContext);

  const food = food_list.find((item) => item._id === cartItem._id);
  console.log(food);

  useEffect(() => {
    window.scroll(0, 0);
    toast.success("Your order will be delivered soon!.");
  }, []);
  return (
    <>
      <h2>Order Confirmation</h2>
      <div className="confirmation_container">
        <div className="order_details">
          <h3>Delivery Information</h3>
          <p>
            <span> Name:</span> {formData.firstName + " " + formData.lastName}
          </p>
          <p className="para">
            <span>Address:</span> {formData.street + " " + formData.city}
          </p>

          <div className="payment_details">
            <h3> Payment</h3>
            <p>Total : ₹ {cartTotal * 8 + 20}/-</p>
          </div>
        </div>

        <div className="soon">
          <h3>Your order will be delivered soon!</h3>
          <img src={route} alt="" />
        </div>
      </div>
    </>
  );
}

export default OrderConfirmation;
