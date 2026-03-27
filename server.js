require("dotenv").config(); //use to serve env file in server
const app = require("./src/app");
const connectTODB = require("./src/config/db");

connectTODB();

app.listen(3000, () => {
  console.log("Server is Running");
});
