// const Instance = require("..");

const Razorpay = require("razorpay");
const Payment = require("../model/payment");
require("dotenv").config();
const { keyid, keySecret } = process.env;
const Instance = new Razorpay({
  key_id: keyid,
  key_secret: keySecret,
});
const createOrder = async (req, res) => {
  try {
    // const { amount, currency, receipt, notes } = req.body;
    let options = {
      amount: 10000000,
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    let order_id = await Instance.orders.create(options);
    // let user = await Payment.create({ order_id: order_id.id });
    res.status(200).json({ order_id });
    res.end();
  } catch (error) {
    console.log("====>.>>>" + error.message);
  }
};
module.exports = createOrder;
