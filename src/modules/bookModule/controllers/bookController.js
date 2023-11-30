const bookService = require('../services/bookService')

module.exports = {
  getAllBooks: async (req, res) => {
    try {
      const books = await bookService.getAllBooks()
      res.json(books)
    } catch (err) {
      next(err)
    }
  },
  createBook: async (req, res, next) => {
    try {
      const book = await bookService.createBook(req.body)
      res.status(201).json(book)
    } catch (err) {
      next(err)
    }
  },
}
