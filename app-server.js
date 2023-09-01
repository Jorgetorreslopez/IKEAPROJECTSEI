const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')


/* Middleware */
app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(require('./config/checkToken'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/items', require('./routes/api/items'))
app.use('/api/orders', require('./routes/api/orders'))


app.get('*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
  })

module.exports = app