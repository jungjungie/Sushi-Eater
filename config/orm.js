// Imports MySQL connection
const connection = require('../config/connection.js');

// ORM object for SQL functions
const orm = {
    selectAll: function(table, cb) {
        connection.query('SELECT * FROM ??', [table], function(err, res) {
            if (err) throw err;
            
            cb(res);
        }
        )},
    insertOne: function(table, col2, val, cb) {
        connection.query('INSERT INTO ?? (??) VALUES (?)', [table, col2, val], function (err, res) {
            if (err) throw err;

            cb(res);
        })
    },
    updateOne: function(table, col3, val3, col1, val1, cb) {
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [table, col3, val3, col1, val1], function (err, res) {
            if (err) throw err;

            cb(res);
        })
    },
    deleteOne: function(table, col, val, cb) {
        connection.query('DELETE from ?? where ?? = ?', [table, col, val], function (err,res) {
          if (err) throw err;
    
          cb(res);
        })
      }
}

// Exports the orm object for use in sushi model
module.exports = orm;
