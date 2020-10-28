'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');    // used for enabling cors cross origin policy
const bodyParser = require('body-parser');

var app = express();
app.use(cors()); // setting it to allow-access-origin: * which means request can originate from any domain
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
require('./routes');
var port = 3000;
app.listen(port || process.env.PORT,(err)=>{
  if(err){
    console.log(err);
  }
  console.log(`Your server is up & running at ${port}`);
})