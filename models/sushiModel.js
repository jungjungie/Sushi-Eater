// Imports ORM
const orm = require('../config/orm.js');

let sushi = {
    all: function(cb) {
      orm.selectAll('sushi', function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.insertOne('sushi', cols, vals, function(res) {
        cb(res);
      });
    },
    // update: function(objColVals, condition, cb) {
    //   orm.update('sushi', objColVals, condition, function(res) {
    //     cb(res);
    //   });
    // }
  };
  
  // Exports database functions for the controller (sushi_controllers.js).
  module.exports = sushi;