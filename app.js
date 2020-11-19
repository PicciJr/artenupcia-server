var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var nodemailer = require('nodemailer')
var cors = require('cors')
var bodyParser = require('body-parser')


var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var port = 8000
var app = express()

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.get('/send-email', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'jquediprueba@gmail.com',
      pass: 'Contrasena1234',
    },
    /* host: "smtp.ethereal.email",
    post: 587,
    secure: false,
    auth: {
      user:"laury.wilderman@ethereal.email",
      pass: "PR7uAm11wdU8RngrAg",
    },*/
  })

  var mailOptions = {
    from: 'Remitente',
    to: 'jquedi@hotmail.com',
    subject: 'Enviado desde nodemailer',
    text: 'Hola mundo',
    html: '<button>Twitter</button>',
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message)
    } else {
      console.log('Email enviado')
      res.status(200).jsonp(req.body)
    }
  })
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
  res.render('error')
})

// start the server
app.listen(port, function () {
  console.log('Servidor arrancado en puerto ', port)
})

module.exports = app
