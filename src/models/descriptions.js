const dbPool = require('../config/database')

const getDescriptions = (id_invoices) => {
  const SQLQuery = `SELECT * FROM descriptions WHERE id_invoices=${id_invoices}`

  return dbPool.execute(SQLQuery);
}

const createNewDescriptions = (body) => {
  const SQLQuery = `INSERT INTO descriptions (id_invoices, description, qty, rate) VALUES (${body.id_invoices}, '${body.description}', ${body.qty}, ${body.rate})`;

  return dbPool.execute(SQLQuery);
}

const deleteDescriptions = (id_invoices) => {
  const SQLQuery = `DELETE FROM descriptions WHERE id=${id_invoices}`

  return dbPool.execute(SQLQuery)
}

module.exports = {
  getDescriptions,
  createNewDescriptions,
  deleteDescriptions,
}