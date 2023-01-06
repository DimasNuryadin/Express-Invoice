const dbPool = require('../config/database')

const loginUser = (body) => {
  const SQLQuery = `SELECT * FROM users WHERE username='${body.username}' AND password='${body.password}'`

  return dbPool.execute(SQLQuery);
}

module.exports = {
  loginUser
}