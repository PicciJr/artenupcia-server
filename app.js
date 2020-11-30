var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var nodemailer = require('nodemailer')
var cors = require('cors')
var bodyParser = require('body-parser')
require('dotenv').config({
  path: '.env',
})
const helmet = require('helmet')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var port = 8000
var app = express()

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
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.ARTENUPCIA_EMAIL,
      pass: process.env.ARTENUPCIA_PASS,
    },
  })

  var mailOptions = {
    from: 'Artenupcia - Invitaciones de Boda para el recuerdo',
    to: req.body.email,
    subject: '¡Bienvenido a Artenupcia!',
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->

    <style>
    /* CONFIG STYLES Please do not delete and edit CSS styles below */
    /* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
    #outlook a {
        padding: 0;
    }
    
    .ExternalClass {
        width: 100%;
    }
    
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
        line-height: 100%;
    }
    
    .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
    }
    
    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }
    
    .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }
    
    /*
    END OF IMPORTANT
    */
    s {
        text-decoration: line-through;
    }
    
    html,
    body {
        width: 100%;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    
    table {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        border-collapse: collapse;
        border-spacing: 0px;
    }
    
    table td,
    html,
    body,
    .es-wrapper {
        padding: 0;
        Margin: 0;
    }
    
    .es-content,
    .es-header,
    .es-footer {
        table-layout: fixed !important;
        width: 100%;
    }
    
    img {
        display: block;
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
    }
    
    table tr {
        border-collapse: collapse;
    }
    
    p,
    hr {
        Margin: 0;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5 {
        Margin: 0;
        line-height: 120%;
        mso-line-height-rule: exactly;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
    }
    
    p,
    ul li,
    ol li,
    a {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
        mso-line-height-rule: exactly;
    }
    
    .es-left {
        float: left;
    }
    
    .es-right {
        float: right;
    }
    
    .es-p5 {
        padding: 5px;
    }
    
    .es-p5t {
        padding-top: 5px;
    }
    
    .es-p5b {
        padding-bottom: 5px;
    }
    
    .es-p5l {
        padding-left: 5px;
    }
    
    .es-p5r {
        padding-right: 5px;
    }
    
    .es-p10 {
        padding: 10px;
    }
    
    .es-p10t {
        padding-top: 10px;
    }
    
    .es-p10b {
        padding-bottom: 10px;
    }
    
    .es-p10l {
        padding-left: 10px;
    }
    
    .es-p10r {
        padding-right: 10px;
    }
    
    .es-p15 {
        padding: 15px;
    }
    
    .es-p15t {
        padding-top: 15px;
    }
    
    .es-p15b {
        padding-bottom: 15px;
    }
    
    .es-p15l {
        padding-left: 15px;
    }
    
    .es-p15r {
        padding-right: 15px;
    }
    
    .es-p20 {
        padding: 20px;
    }
    
    .es-p20t {
        padding-top: 20px;
    }
    
    .es-p20b {
        padding-bottom: 20px;
    }
    
    .es-p20l {
        padding-left: 20px;
    }
    
    .es-p20r {
        padding-right: 20px;
    }
    
    .es-p25 {
        padding: 25px;
    }
    
    .es-p25t {
        padding-top: 25px;
    }
    
    .es-p25b {
        padding-bottom: 25px;
    }
    
    .es-p25l {
        padding-left: 25px;
    }
    
    .es-p25r {
        padding-right: 25px;
    }
    
    .es-p30 {
        padding: 30px;
    }
    
    .es-p30t {
        padding-top: 30px;
    }
    
    .es-p30b {
        padding-bottom: 30px;
    }
    
    .es-p30l {
        padding-left: 30px;
    }
    
    .es-p30r {
        padding-right: 30px;
    }
    
    .es-p35 {
        padding: 35px;
    }
    
    .es-p35t {
        padding-top: 35px;
    }
    
    .es-p35b {
        padding-bottom: 35px;
    }
    
    .es-p35l {
        padding-left: 35px;
    }
    
    .es-p35r {
        padding-right: 35px;
    }
    
    .es-p40 {
        padding: 40px;
    }
    
    .es-p40t {
        padding-top: 40px;
    }
    
    .es-p40b {
        padding-bottom: 40px;
    }
    
    .es-p40l {
        padding-left: 40px;
    }
    
    .es-p40r {
        padding-right: 40px;
    }
    
    .es-menu td {
        border: 0;
    }
    
    .es-menu td a img {
        display: inline-block !important;
    }
    
    /* END CONFIG STYLES */
    a {
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        font-size: 14px;
        text-decoration: underline;
    }
    
    h1 {
        font-size: 30px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
    }
    
    h1 a {
        font-size: 30px;
    }
    
    h2 {
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
    }
    
    h2 a {
        font-size: 24px;
    }
    
    h3 {
        font-size: 20px;
        font-style: normal;
        font-weight: normal;
        color: #333333;
    }
    
    h3 a {
        font-size: 20px;
    }
    
    p,
    ul li,
    ol li {
        font-size: 14px;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        line-height: 150%;
    }
    
    ul li,
    ol li {
        Margin-bottom: 15px;
    }
    
    .es-menu td a {
        text-decoration: none;
        display: block;
    }
    
    .es-wrapper {
        width: 100%;
        height: 100%;
        background-image: ;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-wrapper-color {
        background-color: #f6f6f6;
    }
    
    .es-content-body {
        background-color: #ffffff;
    }
    
    .es-content-body p,
    .es-content-body ul li,
    .es-content-body ol li {
        color: #333333;
    }
    
    .es-content-body a {
        color: #2cb543;
    }
    
    .es-header {
        background-color: transparent;
        background-image: ;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-header-body {
        background-color: #ffffff;
    }
    
    .es-header-body p,
    .es-header-body ul li,
    .es-header-body ol li {
        color: #333333;
        font-size: 14px;
    }
    
    .es-header-body a {
        color: #1376c8;
        font-size: 14px;
    }
    
    .es-footer {
        background-color: transparent;
        background-image: ;
        background-repeat: repeat;
        background-position: center top;
    }
    
    .es-footer-body {
        background-color: #ffffff;
    }
    
    .es-footer-body p,
    .es-footer-body ul li,
    .es-footer-body ol li {
        color: #333333;
        font-size: 14px;
    }
    
    .es-footer-body a {
        color: #ffffff;
        font-size: 14px;
    }
    
    .es-infoblock,
    .es-infoblock p,
    .es-infoblock ul li,
    .es-infoblock ol li {
        line-height: 120%;
        font-size: 12px;
        color: #cccccc;
    }
    
    .es-infoblock a {
        font-size: 12px;
        color: #cccccc;
    }
    
    .es-button-border {
        border-style: solid solid solid solid;
        border-color: #2cb543 #2cb543 #2cb543 #2cb543;
        background: #2cb543;
        border-width: 0px 0px 2px 0px;
        display: inline-block;
        border-radius: 30px;
        width: auto;
    }
    
    /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
    @media only screen and (max-width: 600px) {
    
        p,
        ul li,
        ol li,
        a {
            font-size: 16px !important;
            line-height: 150% !important;
        }
    
        h1 {
            font-size: 30px !important;
            text-align: center;
            line-height: 120% !important;
        }
    
        h2 {
            font-size: 26px !important;
            text-align: center;
            line-height: 120% !important;
        }
    
        h3 {
            font-size: 20px !important;
            text-align: center;
            line-height: 120% !important;
        }
    
        h1 a {
            font-size: 30px !important;
        }
    
        h2 a {
            font-size: 26px !important;
        }
    
        h3 a {
            font-size: 20px !important;
        }
    
        .es-menu td a {
            font-size: 16px !important;
        }
    
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
            font-size: 16px !important;
        }
    
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
            font-size: 16px !important;
        }
    
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
            font-size: 12px !important;
        }
    
        *[class="gmail-fix"] {
            display: none !important;
        }
    
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
            text-align: center !important;
        }
    
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
            text-align: right !important;
        }
    
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
            text-align: left !important;
        }
    
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
            display: inline !important;
        }
    
        .es-button-border {
            display: block !important;
        }
    
        .es-btn-fw {
            border-width: 10px 0px !important;
            text-align: center !important;
        }
    
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
            width: 100% !important;
        }
    
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
            width: 100% !important;
            max-width: 600px !important;
        }
    
        .es-adapt-td {
            display: block !important;
            width: 100% !important;
        }
    
        .adapt-img {
            width: 100% !important;
            height: auto !important;
        }
    
        .es-m-p0 {
            padding: 0px !important;
        }
    
        .es-m-p0r {
            padding-right: 0px !important;
        }
    
        .es-m-p0l {
            padding-left: 0px !important;
        }
    
        .es-m-p0t {
            padding-top: 0px !important;
        }
    
        .es-m-p0b {
            padding-bottom: 0 !important;
        }
    
        .es-m-p20b {
            padding-bottom: 20px !important;
        }
    
        .es-mobile-hidden,
        .es-hidden {
            display: none !important;
        }
    
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
        }
    
        tr.es-desk-hidden {
            display: table-row !important;
        }
    
        table.es-desk-hidden {
            display: table !important;
        }
    
        td.es-desk-menu-hidden {
            display: table-cell !important;
        }
    
        .es-menu td {
            width: 1% !important;
        }
    
        table.es-table-not-adapt,
        .esd-block-html table {
            width: auto !important;
        }
    
        table.es-social {
            display: inline-block !important;
        }
    
        table.es-social td {
            display: inline-block !important;
        }
    
        a.es-button,
        button.es-button {
            font-size: 20px !important;
            display: block !important;
            border-width: 10px 0px 10px 0px !important;
        }
    }
    
    /* END RESPONSIVE STYLES */
    a.es-button,
    button.es-button {
        border-style: solid;
        border-color: #31cb4b;
        border-width: 10px 20px 10px 20px;
        display: inline-block;
        background: #31cb4b;
        border-radius: 30px;
        font-size: 18px;
        font-family: arial, 'helvetica neue', helvetica, sans-serif;
        font-weight: normal;
        font-style: normal;
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;
        width: auto;
        text-align: center;
    }
    </style>


    </head>
    
    <body>
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#f6f6f6"></v:fill>
          </v:background>
        <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="esd-footer-popover es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left" bgcolor="#fff" style="background-color: #ffffff;">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://noioxn.stripocdn.email/content/guids/CABINET_f38dfdec5b1d7bfa6722bb47a0df1771/images/28001606678713862.png" alt="logo_artenupcia" style="display: block;" height="150" title="logo_artenupcia"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="es-m-p0r esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text">
                                                                                            <p style="font-family: arial, 'helvetica neue', helvetica, sans-serif; line-height: 150%;">¡Hemos recibido vuestra&nbsp;solicitud!<br><br>Estamos muy felices de que nos hayas contactado para ayudarte con las invitaciones de vuestra boda.&nbsp;Mientras hacemos el presupuesto para vuestras invitaciones únicas y personalizadas os invitamos a que le ehéis&nbsp;un vistazo a nuestras redes sociales donde podréis coger ideas y saber más sobre nosotros.<br><br>En breves te llegará tu presupuesto, por favor revisa tu bandeja de spam por si acaso.<br><br>¡Ante cualquier duda por favor ponte en contacto con nosotros que estaremos encantados de atenderte!</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l esdev-adapt-off" align="left">
                                                            <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="174" align="left" class="esd-container-frame">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://www.facebook.com/Artenupcia-Papeler%C3%ADa-de-boda-101667711683772/"><img src="https://noioxn.stripocdn.email/content/guids/CABINET_f38dfdec5b1d7bfa6722bb47a0df1771/images/69181606671627716.jpg" alt="logo_facebook" style="display: block;" width="48" title="logo_facebook"></a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td width="NaN"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="173" align="left" class="esd-container-frame">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://www.instagram.com/artenupcia/"><img src="https://noioxn.stripocdn.email/content/guids/CABINET_f38dfdec5b1d7bfa6722bb47a0df1771/images/64401606671637859.jpg" alt="logo_instagram" style="display: block;" width="48" title="logo_instagram"></a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                        <td width="NaN"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td class="esdev-mso-td" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td width="173" align="left" class="esd-container-frame">
                                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://www.pinterest.es/artenupcia/"><img src="https://noioxn.stripocdn.email/content/guids/CABINET_f38dfdec5b1d7bfa6722bb47a0df1771/images/54551606671656520.jpg" alt="logo_pinterest" style="display: block;" width="48" title="logo_pinterest"></a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20" align="left">
                                                            <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="280" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="280" class="esd-container-frame es-m-p20b" align="left">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr class="es-mobile-hidden">
                                                                                        <td align="left" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://noioxn.stripocdn.email/content/guids/CABINET_f38dfdec5b1d7bfa6722bb47a0df1771/images/53751606671401439.png" alt="flor_izq" style="display: block;" width="200" title="flor_izq"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="0"></td><td width="280" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="280" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr class="es-mobile-hidden">
                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://noioxn.stripocdn.email/content/guids/CABINET_f38dfdec5b1d7bfa6722bb47a0df1771/images/75941606671288292.png" alt="flor_dcha" style="display: block;" width="200" title="flor_dcha"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    </html>`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('error nodemailer', error)
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
