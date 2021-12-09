import mongoose from "mongoose";

//create a schema for category
const categorySchema = mongoose.Schema({
  name: String,
  description: String,
});

//create a model
const Category = mongoose.model("category", categorySchema);

export default Category;
