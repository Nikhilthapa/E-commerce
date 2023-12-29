const mongoose = require("mongoose");
const iteam = new mongoose.Schema({
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const cart = mongoose.Schema({
  items: [iteam],
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Cart = mongoose.model("cart", cart);
module.exports = Cart;
