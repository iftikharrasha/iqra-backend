const dotenv = require('dotenv').config();
const mongooseConnect = require('./src/utils/mongooseConnect.js');

const app = require("./app");

const port = process.env.PORT || 5000;

mongooseConnect()
  .then(() => {
    console.log("Database connected successfully.");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
