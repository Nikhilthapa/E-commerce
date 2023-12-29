const verifyHook = async (req, res) => {
  try {
    const order = req.body;
    console.log(order);
    console.log(order.payload.payment.entity);
    console.log(order.payload.order.entity);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = verifyHook;
