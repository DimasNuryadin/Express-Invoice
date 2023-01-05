// Config Database
const mysql = require('mysql2');
const dbpool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Asynchronous Export promise()
module.exports = dbpool.promise();