import React, { useState } from "react";
import "../../components/sign_in/login.css";
import { IoClose } from "react-icons/io5";
import axios from "axios"; // Import axios for HTTP requests
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation
import { toast } from "react-toastify"; // Import toast for notifications

function Login({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login"); // State to track whether the form is for login or sign up
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  }); // State to store form input data

  const [error, setError] = useState(null); // State to store error messages
  const [loading, setLoading] = useState(false); // State to track loading state

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle input changes and clear errors when user starts typing
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    setError(null); // Clear error when user starts typing
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null); // Clear previous errors
    setLoading(true); // Set loading state

    if (currentState === "Sign Up") {
      try {
        const userInfo = {
          fullname: data.username,
          email: data.email,
          password: data.password,
        };
        const res = await axios.post(
          "http://localhost:5000/user/signup",
          userInfo
        );
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate("/", { replace: true });
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }
      } catch (err) {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      } finally {
        setLoading(false); // Clear loading state
      }
    } else {
      await onSubmit(data);
      setLoading(false); // Clear loading state
    }
  }

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:5000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in Successfully");
          setShowLogin(false);
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login_container">
        <div className="login_title">
          <h2>{currentState}</h2>
          <IoClose
            onClick={() => setShowLogin(false)}
            className="close"
            aria-label="Close login form"
          />{" "}
          {/* Close login form */}
        </div>
        <div className="login_input">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Enter your name... "
              name="username"
              value={data.username}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            placeholder="Enter email... "
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Enter password... "
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          />
          {error && (
            <p className="error" aria-live="polite">
              {error}
            </p>
          )}{" "}
          {/* Display error messages */}
          <button
            type="submit"
            disabled={loading}
            aria-label={currentState === "Sign Up" ? "Create account" : "Login"}
          >
            {loading
              ? "Loading..."
              : currentState === "Sign Up"
              ? "Create account"
              : "Login"}
          </button>
          <div className="login_condition">
            {currentState === "Login" ? (
              <p>
                Create a new account?{" "}
                <span onClick={() => setCurrentState("Sign Up")}>
                  Click here
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={() => setCurrentState("Login")}>Login here</span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
