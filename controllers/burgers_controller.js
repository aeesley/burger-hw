var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
      var burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });

});

router.post("/api/addnew", function(req, res) {

  console.log("hit the route!", req.body)
  burger.create(['burger_name', "devoured"],[req.body.name, false],function(data) {
    res.send('were done!!!')
  });
  
});

router.put("/api/devoured/:burgerId", function(req, res) {

  console.log("hit the devoured route!", req.params)
  burger.update({devoured: true}," id = " + req.params.burgerId,function(data) {
    res.send('were done!!!')
  });
  
});



module.exports = router