const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  popularity: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Dish = mongoose.model("dish", DishSchema);
