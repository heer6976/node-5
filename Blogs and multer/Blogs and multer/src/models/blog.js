const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title : {
      type : String,
      lowercase : true , 
      minLength : 5,
      trim : true,
      required : true,
    },
    content : {
      type : String,
      lowercase : true,
      trim : true,
    },
    image : {
      type : String,
      default : "",
    },
    user : {
      type : mongoose.Types.ObjectId,
      ref : "User",
    },
  },
  {
    timestamps : true,
  }
);

const Blog = mongoose.model('Blog' , blogSchema);

module.exports = Blog;