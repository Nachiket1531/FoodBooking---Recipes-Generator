import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Order from "../pages/placeOrder/Order";
import Menu from "../pages/menu/Menu";
import SinglePage from "../components/singlei_tem/SinglePage";
import OrderConfirmation from "../pages/placeOrder/OrderConfirmation";
import FoodAi from "../components/Ai/FoodAi";
import FoodForm from "../pages/adminPage/admin";

function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleItem/:id" element={<SinglePage />} />{" "}
        {/*defines a dynamic segment (:id). This means that whatever value is provided after /singleItem/ in the URL will be captured by id.*/}
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<Order />} />
        <Route path="/orderConfirmation" element={<OrderConfirmation />} />
        <Route path="/foodAi" element={<FoodAi />} />
        <Route path="/admin" element={<FoodForm />} />
      </Routes>
    </>
  );
}

export default Routers;
