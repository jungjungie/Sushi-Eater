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
    // updateOne: function() {

    // }
}

// Exports the orm object for the model (sushiModel.js)
module.exports = orm;
