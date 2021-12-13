import { Router } from "express";
import Product from "../models/productModel.js";
import productValidate from "../validations/productValidate.js";
const productrouter = Router();

//get all products
productrouter.get("/products", async (req, res) => {
  const product = await Product.find();
  res.json(product);
});

//get a single product
productrouter.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

//create a new product to DB
productrouter.post("/products", async (req, res) => {
  try {
    await productValidate.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json(error.message);
  }
  const product = new Product(req.body);
  try {
    await product.save();
  } catch (error) {
    res.status(500).json("unknown error happened");
  }
  res.json(product);
});

//update product in DB
productrouter.put("/products/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "product updated in the DB" });
});

//delete product in DB
productrouter.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({ message: "product deleted in the DB" });
});

export default productrouter;
