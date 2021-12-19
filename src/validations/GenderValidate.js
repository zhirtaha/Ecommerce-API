import joi from "joi";

const genderValidate = joi.object({
  name: joi.string().min(3).max(40).required(),
  image: joi.string().required(),
});

export default genderValidate;