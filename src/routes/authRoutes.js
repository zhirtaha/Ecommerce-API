import { Router } from "express";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import userValidate from "../validations/userValidate.js";
import bcrypt from "bcrypt";
const authrouter = Router();

//register
authrouter.post("/register", async (req, res) => {
  try {
    await userValidate.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json(error.message);
  }
  //hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  });
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
