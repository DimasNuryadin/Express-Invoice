const dbPool = require('../config/database');

const getDownPayments = (id_invoices) => {
  const SQLQuery = `SELECT * FROM down_payments WHERE id_invoices=${id_invoices}`

  return dbPool.execute(SQLQuery)
}

const createNewDownPayments = (body) => {
  const SQLQuery = `INSERT INTO down_payments (id_invoices, date, rate) VALUES (${body.id_invoices}, '${body.date}', ${body.rate})`;


  return dbPool.execute(SQLQuery);
}

const deleteDownPayments = (id_invoices) => {
  const SQLQuery = `DELETE FROM down_payments WHERE id_invoices=${id_invoices}`

  return dbPool.execute(SQLQuery);
}

module.exports = {
  getDownPayments,
  createNewDownPayments,
  deleteDownPayments
}