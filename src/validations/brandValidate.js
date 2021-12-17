import joi from "joi";

const brandValidate = joi.object({
  type: joi.string().min(3).max(40).required(),
  image: joi.string().required(),
});

export default brandValidate;
