const Product = require("../../model/category/product");

const searchproduct = async (req, res) => {
  try {
    let { page, limit, productName, productType, Gender } = req.query;
    page = page ? page : "1";
    limit = limit ? limit : "4";
    let findcondition = {};
    if (productName)
      findcondition.productName = { $regex: new RegExp(productName, "i") };
    if (productType)
      findcondition.productType = { $regex: new RegExp(productType, "i") };
    if (Gender) findcondition.Gender = { $regex: new RegExp(Gender, "i") };
    let product = await Product.find(findcondition)
      .skip(page * limit - limit)
      .limit(limit);
    // console.log(product.length);
    // let finalproduct = product[0].productType;
    // console.log(finalproduct);
    res.status(200).json({
      message: "all Data fetch sucessfully",
      data: product,
    });
    return res.end();
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = searchproduct;
