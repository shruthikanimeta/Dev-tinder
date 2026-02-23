const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log('Handling the route user 1')
    // res.send("Response 1");
    next();
  },
  (req, res) => {
    console.log('Handling the route user 2')
    res.send("response 2");
  },
  (req, res) => {
    console.log('Handling the route user 3')
    res.send("response 3");
  },
  (req, res) => {
    console.log('Handling the route user 4')
    res.send("response 4");
  },
);

app.listen(3000, () => {
  console.log("app is successfully listening to port");
});
