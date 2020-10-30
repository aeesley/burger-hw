var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../server.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burgers.all(function(data) {
      var burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });