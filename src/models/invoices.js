const dbPool = require('../config/database')

const getAllInvoices = () => {
  const SQLQuery = 'SELECT * FROM invoices';
  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllInvoices
}