require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})