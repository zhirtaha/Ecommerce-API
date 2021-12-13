import joi from "joi";

const productValidate = joi.object({
  name: joi.string().min(3).max(40).required(),
  description: joi.string().required(),
  price: joi.number().required(),
  category: joi.string().required(),
  quantity: joi.number().required(),
  image: joi.string().required(),
});

export default productValidate;
