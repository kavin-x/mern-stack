const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./Models/user");
const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://kavin-x:IVZY7ZoJpYwNSGIt@cluster0.vx2nn.mongodb.net/user?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const name = req.body.user;
  const password = req.body.password;
  const user = new userModel({ user: name, password: password });
  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }
});
app.listen(3001, () => {
  console.log("up and running");
});
