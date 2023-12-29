const authenticateseller = require("../../middleware/seller");
const addproduct = require("../Seller/addproduct");
const getproduct = require("../Seller/getproduct");
const sellerlogin = require("../Seller/sellerlogin");
const sellerform = require("../Seller/sllerform");

const sellerrouter = require("express").Router();
sellerrouter.post("/form", sellerform);
sellerrouter.post("/sellerlogin", sellerlogin);
sellerrouter.post("/addproduct", authenticateseller, addproduct);
sellerrouter.get("/getproduct", authenticateseller, getproduct);
module.exports = sellerrouter;
