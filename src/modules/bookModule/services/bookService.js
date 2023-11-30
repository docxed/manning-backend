const bookModel = require('../models/bookModel')
const { createError } = require('@/utils/errorHandler')
const { validateBook } = require('../validations/bookValidation')

module.exports = {
  getAllBooks: async () => {
    return await bookModel.getAllBooks()
  },
  createBook: async (book) => {
    const { error, value } = validateBook(book)
    if (error) throw error

    value.create_date = new Date()
    value.update_date = value.create_date

    return await bookModel.createBook(book)
  },
}
