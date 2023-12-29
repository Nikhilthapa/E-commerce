const mongoose = require("mongoose");
const booking = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  product: [
    {
      productName: { type: String },
      productType: { type: String },
      Gender: { type: String },
      price: { type: String },
      quantity: { type: Number },
    },
  ],
  address: {
    type: String,
    required: true,
  },
  bookingstatus: {
    type: Boolean,
    default: "false",
  },
});
const Booking = mongoose.model("Booking", booking);
module.exports = Booking;
