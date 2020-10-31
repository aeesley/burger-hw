var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Adding route for grabbing burgers from database
router.get("/", function(req, res) {
  burger.all(function(data) {
      var burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });

});
// Adding route for grabbing new burgers created
router.post("/api/addnew", function(req, res) {

  console.log("hit the route!", req.body)
  burger.create(['burger_name', "devoured"],[req.body.name, false],function(data) {
    // Makes page auto refresh once we are done
    res.send('were done!!!')
  });
  
});
// Adding route for grabbing info about wether devoured is true or false
router.put("/api/devoured/:burgerId", function(req, res) {

  console.log("hit the devoured route!", req.params)
  burger.update({devoured: true}," id = " + req.params.burgerId,function(data) {
    res.send('were done!!!')
  });
  
});



module.exports = router