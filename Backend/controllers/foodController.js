// backend/controllers/foodController.js

const Food = require("../models/Food");

const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFood = async (req, res) => {
  const {
    name,
    price,
    description,
    description2,
    category,
    rating,
    ingredients,
    home_recipe,
  } = req.body;
  const image = req.file.filename;

  const newFood = new Food({
    name,
    image,
    price,
    description,
    description2,
    category,
    rating,
    ingredients: ingredients.split(","),
    home_recipe,
  });

  try {
    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getFoods, createFood };
