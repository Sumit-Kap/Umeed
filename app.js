"use strict";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.PORT = process.env.PORT || 3000;

const express = require("express");
const cors = require("cors"); // used for enabling cors cross origin policy
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
var app = express();
app.use(morgan("dev"));

app.use(cors()); // setting it to allow-access-origin: * which means request can originate from any domain
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./routes")(app);
// require('./schemas')(app);
// require('./models')(app);
// require('./helpers')(app);
app.get("/", (req, res) => {
  res.send("Welcome to umeed back-end");
});
// app._router.stack.forEach(function (routeObject) {
//   if (!routeObject || !routeObject.route || !routeObject.route.path || routeObject.route.path === '*') return;
//   for (let method in routeObject.route.methods) {
//     app[method](routeObject.route.path, ApiOutputRenderer.render);
//   }
// });
var port = 3000;
app.listen(port || process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Your server is up & running at ${port}`);
});
