var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// var session = require('express-session');
// var FileStore = require('session-file-store')(session);
var passport = require('passport');
var config = require('./config');
// var ejs = require('ejs')

const url = config.mongoUrl;
// const connectionParams={
//   useNewUrlParser:true,
//   useUnifiedTopology:true
// }
const connect = mongoose.connect(url);
connect.then((db)=>{
  console.log("Connected correctly to server");

},err=>{
  console.log(err);
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var electronicRouter = require('./routes/electronicRouter');
var stationaryRouter = require('./routes/stationaryRouter');
var refreshmentRouter = require('./routes/refreshmentRouter');
var inventoryRouter = require('./routes/inventoryRouter');
var salesRouter = require('./routes/salesRouter');
var orderRouter = require('./routes/orderRouter');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/electronics',electronicRouter);
// app.use('/stationaries',stationaryRouter);
// app.use('/refreshments',refreshmentRouter);
app.use('/Inventory',inventoryRouter);
app.use('/Sales',salesRouter);
app.use('/Orders',orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
