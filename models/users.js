const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  admin: {
    type: String,
    require: true,
  },
  token: {
    type: String,
    require: true,
  },
});

let user = mongoose.model("User", userSchema);
module.exports = user;
