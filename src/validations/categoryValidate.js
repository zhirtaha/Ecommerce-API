import joi from "joi";

const categoryValidate = joi.object({
  name: joi.string().min(3).max(40).required(),
  description: joi.string().required(),
});

export default categoryValidate;
