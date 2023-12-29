const app = require("./src/app");
const connectToDb = require("./config/db");
require("dotenv").config();
// app.use(express.json());
const { PORT } = process.env;
const start = async () => {
  try {
    console.log("server starting....");
    await connectToDb();
    app.listen(PORT, () => {
      console.log(`server runnig on ${PORT}`);
    });
  } catch (error) {
    console.log("error in index.js", error.message);
  }
};
start();
