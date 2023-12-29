const mongoose = require("mongoose");
const Seller = mongoose.Schema({
  sellerName: {
    type: String,
    require: true,
  },
  sellerPhone: {
    type: Number,
    require: true,
  },
  sellerEmail: {
    type: String,
    required: true,
  },
  sellerCompany: {
    type: String,
  },
  Password: {
    type: String,
  },
});
const seller = mongoose.model("Seller", Seller);
module.exports = seller;
