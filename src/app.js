const express = require("express");
const { connectDB } = require("./config/database");

const app = express();

connectDB()
  .then(() => {
    console.log("Database connected successfully..");
    app.listen(3000, () => {
      console.log("app is successfully listening to port");
    });
  })
  .catch((err) => {
    console.error("Database connection failed!!");
  });
