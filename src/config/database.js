// Config Database
const mysql = require('mysql2');
const dbpool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'invoice',
});

// Asynchronous Export promise()
module.exports = dbpool.promise();