import mongoose from "mongoose";

//create a schema for product
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    price: String,
    category: String,
    quantity: String,
    image: String,
  },
  { timestamps: true }
);

//create a model
const Product = mongoose.model("product", productSchema);

export default Product;
