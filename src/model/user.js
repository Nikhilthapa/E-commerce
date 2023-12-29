const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: {
      createdAt: "craeted_At",
      updatedAt: "updated_At",
    },
  }
);
const User = mongoose.model("user", user);
module.exports = User;
