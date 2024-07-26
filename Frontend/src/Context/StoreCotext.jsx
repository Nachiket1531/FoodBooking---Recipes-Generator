import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Creating a context for the store
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({}); // State to keep track of items in the cart
  const [user, setUser] = useState(null); // State to keep track of the authenticated user
  const [food_list, setFoodList] = useState([]); // State to keep track of food list

  // Fetching food list from backend API
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/food");
        console.log(response.data);
        setFoodList(response.data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    fetchFoods();
  }, []);

  // Check local storage for user data on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Users"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Function to add an item to the cart
  const addTocart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem({ ...cartItem, [itemId]: 1 }); // Add item to cart if it doesn't exist
      toast.success(`Food Added in bag.`); // Show success toast
    } else {
      setCartItem({ ...cartItem, [itemId]: cartItem[itemId] + 1 }); // Increase quantity if item already in cart
      toast.info(`Increased Food quantity in bag.`); // Show info toast
    }
  };

  // Function to remove an item from the cart
  const removeFromItem = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })); // Decrease quantity of item in cart
    toast.warn(`Removed from the bag.`); // Show warning toast
  };

  // Function to calculate the total cost of items in the cart
  const cartTotal = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item); // Find item info from food list
        totalAmount += itemInfo.price * cartItem[item]; // Calculate total cost
      }
    }
    return totalAmount; // Return total amount
  };

  // Function to log out user
  const handleLogout = () => {
    try {
      setUser(null);
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
      setTimeout(() => {}, 2000);
    }
  };

  // Context value to be provided
  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addTocart,
    removeFromItem,
    cartTotal,
    user,
    setUser,
    handleLogout,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ marginTop: "50px" }}
      />
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
