import mongoose from "mongoose";

//create a schema for category
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

//create a model
const Category = mongoose.model("category", categorySchema);

export default Category;
