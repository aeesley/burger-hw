// Import MySQL connection.
var connection = require("../config/connection.js");

// Creating functions that will be necessary to execute the MYSQL commands in the controllers. These will help us retrieve and store data from the database.
function selectAll();
function insertOne();
function updateOne();

// Export the orm object for the model (cat.js).
module.exports = orm;