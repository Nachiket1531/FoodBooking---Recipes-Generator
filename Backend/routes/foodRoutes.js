// backend/routes/foodRoutes.js

const express = require("express");
const multer = require("multer");
const path = require("path");
const { getFoods, createFood } = require("../controllers/foodController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/", getFoods);
router.post("/", upload.single("image"), createFood);

module.exports = router;
