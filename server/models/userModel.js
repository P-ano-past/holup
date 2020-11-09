const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  userPassword: { type: String },
  userEmail: { type: String },
  userPhone: { type: String },
  date: { type: Date, default: Date.now },
  queue: {
    firstName: { type: String },
    firstInitial: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    time: { type: String },
    date: { type: Date, default: Date.now },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
