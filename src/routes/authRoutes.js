import { Router } from "express";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import userValidate from "../validations/userValidate.js";

const authrouter = Router();

//register
authrouter.post("/register", async (req, res) => {
  try {
    await userValidate.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json(error.message);
  }
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

//login
authrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const token = jwt.sign(JSON.stringify(user), process.env.JWT_KEY);
    res.json(token);
  } else {
    res.status(400).json({ error: "authentication failed" });
  }
});

export default authrouter;
