const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    min: 5,
    required: true,
  },
  password: {
    type: String,
    min: 5,
    required: true,
  },
  isCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("User", userSchema);
