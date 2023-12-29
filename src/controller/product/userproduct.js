const Product = require("../../model/category/product");

const Allproduct = async (req, res) => {
  try {
    let product = await Product.find();
    res.status(200).json({
      messsage: "All products",
      data: product,
    });
    return res.end();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = Allproduct;
