const verifyacesstoken = require("../controller/utils/verifytoken");
const ApiError = require("../errorHandling");
const seller = require("../model/seller");

const authenticateseller = async (req, res, next) => {
  try {
    let Authheader = await req.header("Authorization");
    let token = Authheader.split(" ")[1];
    let acesstoken = verifyacesstoken(token);
    // console.log(acesstoken);
    let sellerAuth = await seller.findById(acesstoken.id);
    if (!sellerAuth) throw new ApiError("Not acessable", 400);
    req.seller = sellerAuth;
    req.token = token;
    next();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = authenticateseller;
