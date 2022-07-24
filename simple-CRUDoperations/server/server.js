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
app.get("/getUsers", (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

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

app.put("/updateUser", async (req, res) => {
  const id = req.body.id;
  const newUserName = req.body.newUserName;

  try {
    await userModel.findById(id, (err, updateUser) => {
      updateUser.user = newUserName;
      updateUser.save();
      res.send("update");
    });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await userModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(3001, () => {
  console.log("up and running");
});
