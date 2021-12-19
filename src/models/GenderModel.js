import mongoose from "mongoose";

//create a schema for category
const genderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//create a model
const Gender = mongoose.model("gender", genderSchema);

export default Gender;