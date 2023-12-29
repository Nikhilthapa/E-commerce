const Jwt = require("jsonwebtoken");
const ApiError = require("../../errorHandling");
const bcrypt = require("bcrypt");
const seller = require("../../model/seller");
require("dotenv").config();
let { Secret_key } = process.env;
const sellerlogin = async (req, res) => {
  try {
    const { sellerEmail, password } = req.body;
    if (!sellerEmail) throw new ApiError("email required", 400);
    if (!password) throw new ApiError("passoword is required", 400);
    let Seller = await seller.findOne({ sellerEmail });
    if (!Seller) throw new ApiError("seller not found", 400);
    const sellerpassword = await bcrypt.compare(password, Seller.Password);
    if (!sellerpassword) throw new ApiError("paasword id wrong", 404);
    const token = Jwt.sign(
      { id: Seller._id, passowrd: Seller.password },
      Secret_key
    );
    res.status(200).json({
      message: "user login",
      data: {
        selleraccount: Seller,
        SellerToken: token,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = sellerlogin;
