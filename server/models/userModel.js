const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  companyName: { type: String },
  companyEmail: { type: String },
  conpanyPhone: { type: String },
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
