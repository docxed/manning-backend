const knex = require('@/db')

module.exports = {
  getAllBooks: async () => {
    return await knex('books').select('*')
  },
  createBook: async (book) => {
    return await knex('books').insert(book).returning('*')
  },
}
