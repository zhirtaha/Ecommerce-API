import joi from "joi";

const userValidate = joi.object({
  firstname: joi.string().min(3).max(255).required(),
  lastname: joi.string().min(3).max(255).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(30).required(),
  role: joi.string().min(3).max(20).required(),
});

export default userValidate;
