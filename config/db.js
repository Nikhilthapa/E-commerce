const mongoose = require("mongoose");
require("dotenv").config();
const { mongo_url } = process.env;
const connectToDb = async () => {
  try {
    await mongoose.connect(mongo_url);
    console.log("Db connected :)");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectToDb;
