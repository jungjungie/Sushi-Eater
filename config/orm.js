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
    // insertOne: function() {
    //     connection.query('INSERT INTO sushi (sushi_name) VALUES ()')
    // },
    // updateOne: function() {

    // }
}

// Exports the orm object for the model (sushiModel.js)
module.exports = orm;
