const dbPool = require('../config/database');

const getAllDownPayments = () => {
  const SQLQuery = `SELECT * FROM down_payments`

  return dbPool.execute(SQLQuery)
}

const createNewDownPayments = (body) => {
  const SQLQuery = `INSERT INTO down_payments (id_invoices, date, qty) VALUES (${body.id_invoices}, '${body.date}', ${body.qty})`;


  return dbPool.execute(SQLQuery);
}

const updateDownPayments = (body, id) => {
  const SQLQuery = `UPDATE down_payments SET date='${body.date}', qty='${body.qty}' WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
}

const deleteDownPayments = (id) => {
  const SQLQuery = `DELETE FROM down_payments WHERE id=${id}`

  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllDownPayments,
  createNewDownPayments,
  updateDownPayments,
  deleteDownPayments
}