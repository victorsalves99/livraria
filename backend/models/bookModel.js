const mongoose = require("../db/db");

const Schema = mongoose.Schema;

const Book = mongoose.model(
  "Books",
  new Schema(
    {
      title: {
        type: String,
        require: true,
      },
      cover: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      size: {
        type: String,
        require: true,
      },
      src: {
        type: String,
        require: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Book;
