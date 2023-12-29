require("dotenv").config();
const { Publishable_key, Secret_key } = process.env;
const stripe = require("stripe")(Secret_key);
const os = require("os");
const payment = async (req, res) => {
  try {
    // console.log("hello");
    const networkInterfaces = os.networkInterfaces();
    // console.log(networkInterfaces);
    let address = networkInterfaces["Wi-Fi"];
    const length = address.length;
    // console.log(length);
    console.log(address[length - 1].address);
    // console.log(address[address - 1]);
    res.status(200).json({ address: address[length - 1].address });
    // const ip = networkInterfaces["eth0"]["address"];
    // console.log(ip)
  } catch (error) {
    console.log(error.message);
  }
};
// const token = async (req, res) => {
//   let user = await stripe.tokens.create({
//     card: {
//       exp_month: "5",
//       exp_year: "2025",
//       cvc: "486",
//       payment_method: "pm_card_visa",
//     },
//     // tos_shown_and_accepted: true;
//   });
//   res.status(200).json({ user });
// };
module.exports = payment;
