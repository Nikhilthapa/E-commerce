const ApiError = require("../../errorHandling");
const Product = require("../../model/category/product");
// const mens = require("../../model/subcatagory/manclothing");

const getproduct = async (req, res) => {
  try {
    let { sellerId, Gender } = req.body;
    if (!sellerId) throw new ApiError("Bad request", 404);
    if (!Gender) throw new ApiError("gender not present", 404);
    let product = await Product.find({ sellerId, Gender });
    if (!product) throw new ApiError("product not found", 404);
    res.status(200).json({
      message: "product details",
      data: product,
    });
    return res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = getproduct;
