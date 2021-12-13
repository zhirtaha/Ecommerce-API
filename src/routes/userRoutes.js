import { Router } from "express";
import User from "../models/userModel.js";
import userValidate from "../validations/userValidate.js";
import {isAuth} from "../middlewares/authMiddleware.js"
import {isAdmin} from "../middlewares/authMiddleware.js"
const userrouter = Router();

//create a new user
userrouter.post("/users",isAuth,isAdmin, async (req, res) => {
  try {
    await userValidate.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json(error.message);
  }
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

//get all users
userrouter.get("/users",isAuth,isAdmin, async (req, res) => {
  const user = await User.find();
  res.json(user);
});

//update user from DB
userrouter.put("/users/:id",isAuth,isAdmin, async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "user updated in DB" });
});

//delete user from DB
userrouter.delete("/users/:id",isAuth,isAdmin, async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ message: "user deleted in DB" });
});

export default userrouter;
