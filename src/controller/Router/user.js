const authenticateUser = require("../../middleware/user");
const login = require("../Auth/Login");
const signUp = require("../Auth/SingUp");
const userbooking = require("../booking/userBooking");
const usercart = require("../cart/usercart");
const token = require("../payment/addcard");
const payment = require("../payment/addcard");
const createUser = require("../payment/createuser");
const paymentpage = require("../payment/paymentpage");
const searchproduct = require("../product/searchproduct");
const Allproduct = require("../product/userproduct");

const userRouter = require("express").Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);
userRouter.post("/product", authenticateUser, Allproduct);
userRouter.post("/cart", authenticateUser, usercart);

userRouter.post("/search", searchproduct);
userRouter.post("/booking", userbooking);

userRouter.post("/create", createUser);
userRouter.post("/payment", payment);
userRouter.get("/ping", paymentpage);
module.exports = userRouter;
