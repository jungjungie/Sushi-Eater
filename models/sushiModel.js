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
    update: function(col3, val3, col1, val1, cb) {
      orm.updateOne('sushi', col3, val3, col1, val1, function(res) {
        cb(res);
      });
    },
    delete: function(col, val, cb) {
      orm.deleteOne('sushi', col, val, function (res) {
        cb(res);
      })
    }
  };
  
  // Exports database functions for use in sushi_controllers.js
  module.exports = sushi;