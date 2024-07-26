// backend/models/Food.js

const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String,
  description2: String,
  category: String,
  rating: Number,
  ingredients: [String],
  home_recipe: String,
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
