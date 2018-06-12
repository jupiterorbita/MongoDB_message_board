var mongoose = require('mongoose');
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// #### server start
const server = app.listen(5000);
// console.log("SERVER ===========> ", server)
console.log('listening on port: 5000');

//session
const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.get('/', function(req, res){
    console.log('=========> "/" <=========');
    res.render('index');
})