import mongoose from "mongoose";

//create a schema for brand
const brandSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//create a model
const Brand = mongoose.model("brand", brandSchema);

export default Brand;