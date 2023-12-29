const Cart = require("../../model/cart");

const usercart = async (req, res) => {
  try {
    const { items, userid } = req.body;
    const cart = await Cart.create({
      items,
      userid,
    });
    res.status(200).json({
      message: "product add to the cart",
      data: cart,
    });
    return res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = usercart;
