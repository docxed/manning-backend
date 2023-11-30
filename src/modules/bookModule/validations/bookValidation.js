const Joi = require('joi')

const bookSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
})

module.exports = {
  validateBook: (data) => bookSchema.validate(data),
}
