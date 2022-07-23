const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  password: { 
    type: Number, 
    required: true 
  },
});
const user = mongoose.model("userData", userSchema);
module.exports = user;
