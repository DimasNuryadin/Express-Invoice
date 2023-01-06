const dbPool = require('../config/database')

const getAllDescrptions = () => {
  const SQLQuery = `SELECT * FROM descriptions`

  return dbPool.execute(SQLQuery)
}

const createNewDescriptions = (body) => {
  const SQLQuery = `INSERT INTO descriptions (id_invoices, description, qty, rate) VALUES (${body.id_invoices}, '${body.description}', ${body.qty}, ${body.rate})`;

  return dbPool.execute(SQLQuery);
}

const updateDescriptions = (body, id) => {
  const SQLQuery = `UPDATE descriptions SET description='${body.description}', qty=${body.qty}, rate=${body.rate} WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
}

const deleteDescriptions = (id) => {
  const SQLQuery = `DELETE FROM descriptions WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllDescrptions,
  createNewDescriptions,
  updateDescriptions,
  deleteDescriptions
}