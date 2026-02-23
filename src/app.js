const express = require("express");
const { connectDB } = require("./config/database");
const User = require('./models/user')

const app = express();

app.use(express.json())

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  try{
res.send("user added successfully");
  }
  catch(err) {
    res.status(404).send('error found')
  }
  
});

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
