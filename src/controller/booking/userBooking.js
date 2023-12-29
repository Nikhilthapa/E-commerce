const ApiError = require("../../errorHandling");
const Booking = require("../../model/booking");

const userbooking = async (req, res) => {
  try {
    const { userid, product, address, bookingstatus } = req.body;
    if (!userid) throw new ApiError("userid is invalid", 404);
    if (!product) throw new ApiError("product is invalid", 404);
    if (!address) throw new ApiError("userid is invalid", 404);
    if (!bookingstatus) throw new ApiError("userid is invalid", 404);
    const book = await Booking.create({
      userid,
      product,
      address,
      bookingstatus,
    });
    res.status(200).json({
      message: "Data inserted",
      data: book,
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = userbooking;
