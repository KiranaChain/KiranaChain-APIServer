const express = require('express');
const logger = require('logger');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

function KiranaApp(config){
  this.app = express();
  this.config = config;
}

KiranaApp.prototype.loadMiddlewares = function (){
  this.app.use(logger('dev'));
  this.app.use(bodyParser.json());
  this.app.use(bodyParser.urlencoded({extended: false}));
  this.app.use(cookieParser());
}

KiranaApp.prototype.load = function () {
  this.loadMiddlewares();
  return this.app;
}

const port = process.env.PORT || 5279;

this.app.listen(port, (err)=>{
  if(err) console.log('Error connecting to server');
  console.log('Server created successfully');
})

module.exports = KiranaApp;
