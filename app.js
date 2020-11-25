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

app.use(bodyParser.urlencoded({ extended: true }))

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
  })

  var mailOptions = {
    from: 'Artenupcia - Invitaciones de Boda personalizadas',
    to: req.body.email,
    subject: 'Gracias por contactar con Artenupcia',
    html: `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
        .titulo{
          background:blue;
          color:red;
        }

        img {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        </style>
      </head>
      <body>
        <h1 class="titulo">Hola Mundo!</h1>

        <a href="http://twitter.com">
          <img src="http://cdn.pccomponentes.com/img/emails/pccomponentes-minilogo-default-mar18.png" alt="PcComponentes" title="PcComponentes">
        </a>

      </body>
    </html>`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message)
      next(error)
    } else {
      return res.status(200).jsonp(req.body)
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
