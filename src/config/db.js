const mongoose = require("mongoose");

function connectTODB() {
  mongoose.connect(
    process.env.MONGO_URI).then(() => {
      console.log("Server is connected to database");
    }).catch((err) => {
      console.log("error",err);
      process.exit(1)
    })
}


module.exports = connectTODB
