'use strict'
let express = require('express')
let exphbs = require('express-handlebars')
let bodyParser = require('body-parser')

let app = express()
let server = require('http').createServer(app)
let port = process.env.PORT || 8080

// Set up view engine
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./lib/handlebarsHelpers.js').helpers
  }))
app.set('view engine', '.hbs')

// Support for application/json and HTML form data.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Set express to look in folder "public" to static resources
app.use('/', express.static('public', { index: false }))

// Load main route
app.use('/', require('./routes/home.js'))

// Error handling

// Page not found.
app.use(function (request, response, next) {
    response.status(404).render('error/404')
  })

// Internal server error.
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('500/Internal server error.')
})

// Launching the application
server.listen(port, function () {
    console.log('Express app listening on port %s!', port)
})