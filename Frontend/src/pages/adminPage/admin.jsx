import React, { useState } from "react";
import axios from "axios";
import "./admin.css";
import { toast } from "react-toastify";

const FoodForm = () => {
  const initialFormData = {
    name: "",
    image: null,
    price: "",
    description: "",
    description2: "",
    category: "",
    rating: "",
    ingredients: "",
    home_recipe: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/food",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setFormData(initialFormData);
      toast.success("Sucessfull");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <form className="food-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image:
        <input type="file" name="image" onChange={handleFileChange} required />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Detailed Description:
        <textarea
          name="description2"
          value={formData.description2}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          step="0.1"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Ingredients (comma-separated):
        <input
          type="text"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Home Recipe:
        <textarea
          name="home_recipe"
          value={formData.home_recipe}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FoodForm;
