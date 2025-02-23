const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
};

module.exports = { connect };
