'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'psa_db1'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;