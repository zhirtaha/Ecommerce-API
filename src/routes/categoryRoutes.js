import { Router } from "express";
import Category from "../models/categoryModel.js";

const categoryrouter = Router();

//get all categories
categoryrouter.get("/categories", async (req, res) => {
  const category = await Category.find();
  res.json(category);
});

//create a new category to DB
categoryrouter.post("/categories", async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.json(category);
});

//update category in DB
categoryrouter.put("/categories/:id", async (req, res) => {
  await Category.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "category updated in the DB" });
});

//delete category in DB
categoryrouter.delete("/categories/:id", async (req, res) => {
  await Category.findByIdAndRemove(req.params.id);
  res.json({ message: "category deleted in the DB" });
});

export default categoryrouter;
