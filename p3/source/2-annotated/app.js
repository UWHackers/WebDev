
/**
 * Module dependencies.
 */

// node modules and our own modules to include
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

// create the express app
var app = express();

// all environments
// app.set sets an environment variable
// app.use makes the app use a middleware
// ORDER MATTERS!

// read port from .env file
app.set('port', process.env.PORT || 8888);
// locate the views folder
app.set('views', __dirname + '/views');
// we are using jade templating engine
app.set('view engine', 'jade');
// the favicon to use for our app
app.use(express.favicon(path.join(__dirname, 'public/images/favicon.ico')));
// watch network requests to express in realtime
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
// faux HTTP requests - PUT or DELETE
app.use(express.methodOverride());
// sign the cookies, so we know if they have been changed
app.use(express.cookieParser('your secret here'));
// setup cookie session, cookie expires in 1 day (in ms)
app.use(express.session());
// invokes the routes' callbacks
app.use(app.router);
// every file <file> in /public is served at example.com/<file>
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// pattern match routes to route handlers
app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
