import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiShoppingBasket, CiUser } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import "../nav/navbar.css";
import { StoreContext } from "../../Context/StoreCotext"; // Ensure the correct import path
import ai from "../../assets/ai.png";
import { toast } from "react-toastify";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, setUser, cartTotal, handleLogout } = useContext(StoreContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Users"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, [setUser]);

  return (
    <header>
      <Link to="/" className="logo">
        <h2>Food.com</h2>
      </Link>

      <ul className={isMobileMenuOpen ? "nav_links mobile_menu" : "nav_links"}>
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)}>
            Menu
          </Link>
        </li>
        <li
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => setMenu("contact-us")}
        >
          <a href="#contact-us" onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </a>
        </li>
      </ul>

      <div className="nav_right">
        <Link to="/foodAi" className="aiPng">
          AI
          <img src={ai} alt="AI" />
        </Link>
        <div className="cart">
          <Link to="/cart">
            <CiShoppingBasket className="icon" />
          </Link>
          <div className={cartTotal() === 0 ? "" : "dot"}></div>
        </div>
        {user ? (
          <div className="user_info">
            <button className="nav_btn">
              <CiUser className="icon" />{" "}
              <span className="username">{user.displayName}</span>
            </button>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="nav_btn" onClick={() => setShowLogin(true)}>
            <CiUser className="icon" /> Sign In
          </button>
        )}
        <div className="toggle_bar" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
