const ApiError = require("../../errorHandling");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Secret_key } = process.env;
const verifyacesstoken = (token) => {
  try {
    if (!token) throw new ApiError("token not found");
    return jwt.verify(token, Secret_key);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = verifyacesstoken;
