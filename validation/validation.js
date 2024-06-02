import Joi from "joi";

const contactValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const favoriteValidation = Joi.object({
  favorite: Joi.bool().required(),
});

const signupValidation = Joi.object({
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .messages({
      "any.required": "Missing required email field",
      "string.email": "Invalid email format",
    }),
  password: Joi.string().required().min(6).max(16).messages({
    "any.required": "Missing required password field",
    "string.min": "Password must be at least {#limit} characters long",
    "string.max": "Password cannot be longer than {#limit} characters",
  })
});

const subscriptionValidation = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

export { contactValidation, favoriteValidation, signupValidation, subscriptionValidation };