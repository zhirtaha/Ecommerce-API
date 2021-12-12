import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import categoryrouter from "./src/routes/categoryRoutes.js";
import productrouter from "./src/routes/productRoutes.js";
import userrouter from "./src/routes/userRoutes.js";
import authrouter from "./src/routes/authRoutes.js";

//setup express app
const app = express();

//setup cors
app.use(cors());

//setup env file
dotenv.config("dotenv");

async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection failed");
  }

  //work with json
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //calling our routes
  app.use(categoryrouter);
  app.use(productrouter);
  app.use(userrouter);
  app.use(authrouter);

  //listening for requests
  app.listen(process.env.PORT, () => {
    console.log(`listening for requests on port ${process.env.PORT}`);
  });
}

main();
