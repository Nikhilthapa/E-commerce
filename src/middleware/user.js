const verifyacesstoken = require("../controller/utils/verifytoken");
// const verifyacesstoken = require("../controller/utils/verifytoken");
const ApiError = require("../errorHandling");
const User = require("../model/user");

const authenticateUser = async (req, res, next) => {
  try {
    let Authheader = await req.header("Authorization");
    let token = Authheader.split(" ")[1];
    let acesstoken = verifyacesstoken(token);
    let UserAuth = await User.findById(acesstoken.id);
    // console.log(UserAuth);
    if (!UserAuth) throw new ApiError("Not acessable", 400);
    req.seller = UserAuth;
    req.token = token;
    next();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = authenticateUser;
