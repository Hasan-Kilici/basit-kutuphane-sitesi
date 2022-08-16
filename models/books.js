const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  token: {
    type: String,
    require: true,
  },
  photo:{
    type: String,
    require: true,
  }
},{timestamps: true});

let book = mongoose.model("Book", bookSchema);
module.exports = book;
