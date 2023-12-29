const ApiError = require("../../errorHandling");
const User = require("../../model/user");
const bcrypt = require("bcrypt");
const signUp = async (req, res) => {
  try {
    let { Name, Email, Phone, Password } = req.body;
    if (!Name) throw new ApiError("Name is required", 400);
    let EmailF = await User.findOne({ Email });
    if (EmailF) throw new ApiError("Email already exist", 400);
    if (!Email) throw new ApiError("email required", 400);
    if (isNaN(Phone)) throw new ApiError("number should be numeric", 400);
    let Phone1 = await User.findOne({ Phone });
    if (Phone1) throw new ApiError("phone number already exist", 400);
    let salt = await bcrypt.genSalt(10);
    let hashpassword = await bcrypt.hash(Password, salt);
    let user = await User.create({
      Name,
      Email,
      Phone,
      Password: hashpassword,
    });
    res
      .status(200)
      .json({ status: true, message: "user signup sucessful", data: user });
    return res.end();
  } catch (error) {
    console.log("error", error.message);
  }
};
module.exports = signUp;
