require('dotenv').config()
require('module-alias/register')
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5001

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const errorException = require('./middlewares/errorException')
const bookRouter = require('./modules/bookModule/routes/bookRoute')

app.use('/books', bookRouter)

app.use(errorException)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
