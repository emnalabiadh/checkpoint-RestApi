/**const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("data base connected ...");
  } catch (error) {
    console.error(`connection to DB failed !!! ${error}`);
  }
};

module.exports = connectDB;**/
// mongoose
const mongoose = require("mongoose");

// connect DB
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("data base connected ...");
  } catch (error) {
    console.error(`connection to DB failed !!! $(error)`);
  }
};

module.exports = connectDB;
