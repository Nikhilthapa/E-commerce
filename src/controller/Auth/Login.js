const ApiError = require("../../errorHandling");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../model/user");
require("dotenv").config();
const { Secret_key } = process.env;
const login = async (req, res) => {
  try {
    const { Email, password } = req.body;
    if (!Email) throw new ApiError("email not present", 404);
    if (!password) throw new ApiError("password not present", 404);
    let user = await User.findOne({ Email });
    if (!user) throw new ApiError("user not found", 404);
    let Userpassword = await bcrypt.compare(password, user.Password);
    if (!Userpassword) throw new ApiError("invalid password", 404);
    const token = jwt.sign(
      {
        id: user._id,
        password: user.Password,
      },
      Secret_key
    );
    res.status(200).json({
      message: "login sucessfull",
      userDate: token,
    });
    return res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = login;
