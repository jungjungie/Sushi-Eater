const orm = require('../config/orm.js');

let sushi = {
    all: function(cb) {
      orm.all('sushi', function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays
    create: function(cols, vals, cb) {
      orm.create('sushi', cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update('sushi', objColVals, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Exports database functions for the controller (sushi_controllers.js).
  module.exports = sushi;