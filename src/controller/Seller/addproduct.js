const ApiError = require("../../errorHandling");
const Product = require("../../model/category/product");

const addproduct = async (req, res) => {
  try {
    let { sellerId, productName, productType, Gender, price, quantity } =
      req.body;
    if (!sellerId) throw new ApiError("Seller not present", 404);
    if (!productType) throw new ApiError("type id not valid", 404);
    if (!productName) throw new ApiError("product not present", 404);
    if (!Gender) throw new ApiError("Gender not present", 404);
    if (!price) throw new ApiError("price not entered", 404);
    if (!quantity) throw new ApiError("Quantity is wrong", 404);
    let product = await Product.create({
      sellerId,
      productName,
      productType,
      Gender,
      price,
      quantity,
    });
    res.status(200).json({
      message: "product entered",
      data: product,
    });
    return res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = addproduct;
