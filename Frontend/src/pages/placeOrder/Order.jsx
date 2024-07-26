import React, { useState, useContext , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import "../placeOrder/place_order.css";
import money from "../../assets/money.gif";
import { StoreContext } from "../../Context/StoreCotext";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Order() {
  const { cartTotal, user } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      // Navigate to the order confirmation page
      navigate("/orderConfirmation", { state: { formData, cartTotal: cartTotal() } });
    } else {
      toast.warn("Please log in to proceed to payment.");
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="order_container">
      <div className="delivery_info">
        <h3>Delivery Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="input_flex">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
          />
          <div className="input_flex">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input_flex">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip code"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <button type="submit" className="cart_btn">
            Proceed To Payment <img src={money} alt="Proceed to Payment" />
          </button>
        </form>
        <Link to="/cart">
          <button className="back_btn">
            <IoMdArrowBack />
            Back To Cart
          </button>
        </Link>
      </div>

      <div>
        <h3>Payment Information</h3>
        <div className="order_total">
          <div className="total_details">
            <h2>Subtotal</h2>
            <p>₹ {cartTotal() * 8}</p>
          </div>
          <div className="total_details">
            <h2>Delivery</h2>
            <p>₹ 20</p>
          </div>
          <div className="total_details total">
            <h2>Total</h2>
            <p>₹ {cartTotal() * 8 + 20}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
