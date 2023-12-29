const ApiError = require("../../errorHandling");
const seller = require("../../model/seller");
const bcrypt = require("bcrypt");
const sellerform = async (req, res) => {
  try {
    let { sellerName, sellerPhone, sellerEmail, sellerCompany, Password } =
      req.body;

    // console.log(sellerName, sellerPhone, sellerEmail, sellerCompany, Password);
    if (!sellerCompany) throw new ApiError("company required", 400);
    if (!sellerEmail) throw new ApiError("email required", 400);
    if (!sellerName) throw new ApiError("Name required", 400);
    if (!sellerPhone) throw new ApiError("Phone required", 400);
    if (!Password) throw new ApiError("password required", 400);
    let email = await seller.findOne({ sellerEmail });
    if (email) throw new ApiError("email already exist", 400);
    let phone = await seller.findOne({ sellerPhone });
    if (phone) throw new ApiError("Phone already exist", 400);
    let salt = await bcrypt.genSalt(10);
    let hashpassword = await bcrypt.hash(Password, salt);
    // console.log(hashpassword);
    let sellerData = await seller.create({
      sellerName,
      sellerPhone,
      sellerEmail,
      sellerCompany,
      Password: hashpassword,
    });
    res.status(200).json({
      Messge: "user created",
      data: { sellerData },
    });
    return res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = sellerform;
