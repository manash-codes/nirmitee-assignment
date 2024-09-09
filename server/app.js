require('dotenv').config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')

require('./util/db')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: false }))
app.use(helmet())

const eventRoutes = require('./routes/event')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/events', eventRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})