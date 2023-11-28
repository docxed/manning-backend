const knex = require('./db')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5001

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.get('/', async (req, res) => {
  const rows = await knex.table('books').select('*')
  res.json(rows)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
