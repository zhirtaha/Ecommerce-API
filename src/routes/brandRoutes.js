import { Router } from "express";
import Brand from "../models/brandModel.js";
import brandValidate from "../validations/brandValidate.js";
const brandrouter = Router();

//get all brands
brandrouter.get("/brands", async (req, res) => {
  const brand = await Brand.find();
  res.json(brand);
});

//create a new brand to DB
brandrouter.post("/brands", async (req, res) => {
  try {
    brandValidate.validateAsync(req.body);
  } catch (error) {
    res.status(400).json(error.message);
  }
  const brand = new Brand(req.body);
  await brand.save();
  res.json(brand);
});

//update brand in DB
brandrouter.put("/brands/:id", async (req, res) => {
  await Brand.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "brand updated in DB" });
});

//delete brand in DB
brandrouter.delete("/brands/:id", async (req, res) => {
  await Brand.findByIdAndRemove(req.params.id);
  res.json({ message: "brand deleted in DB" });
});

export default brandrouter;
