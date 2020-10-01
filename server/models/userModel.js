const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  date: { type: Date, default: Date.now },
  id: { type: Number, min: 0 },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
