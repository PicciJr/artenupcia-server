const email = require('./email')
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config({
  path: '.env',
})
const helmet = require('helmet')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const port = 8000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())

app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

/** Send email function */
app.post('/send-email', (req, res, next) => {
  email.sendEmail(req, res, next)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
    error: err,
  })
})

// start the server
app.listen(port, function () {
  console.log('Servidor arrancado en puerto ', port)
})

module.exports = app
