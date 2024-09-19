const Joi = require("joi");

const schema = Joi.object({
    value: Joi.number().positive().required(),
    currency: Joi.string().min(3).max(3).required(),
    to_currency: Joi.string().min(3).max(3).required()
});

module.exports = schema;