import { Router } from "express";
import Gender from "../models/genderModel.js";
import genderValidate from "../validations/genderValidate.js";
const genderrouter = Router();

//get all genders
genderrouter.get("/genders", async (req, res) => {
  const gender = await Gender.find();
  res.json(gender);
});

//create a new gender to DB
genderrouter.post("/genders", async (req, res) => {
  try {
    genderValidate.validateAsync(req.body);
  } catch (error) {
    res.status(400).json(error.message);
  }
  const gender = new Gender(req.body);
  await gender.save();
  res.json(gender);
});

export default genderrouter;

