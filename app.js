import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import categoryrouter from "./src/routes/categoryRoutes.js";
import productrouter from "./src/routes/productRoutes.js";

//setup express app
const app = express();

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

  //listening for requests
  app.listen(process.env.PORT, () => {
    console.log(`listening for requests on port ${process.env.PORT}`);
  });
}

main();
