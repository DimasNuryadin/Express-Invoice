const dbPool = require('../config/database')

const getAllInvoices = () => {
  const SQLQuery = 'SELECT * FROM invoices';
  return dbPool.execute(SQLQuery);
}

const createNewInvoices = (body) => {
  const SQLQuery = `INSERT INTO invoices (alamat_perusahaan, no_invoice, bill_to, invoice_date, due_date, payment_instruction) VALUES ('${body.alamat_perusahaan}', '${body.no_invoice}', '${body.bill_to}', '${body.invoice_date}', '${body.due_date}', '${body.payment_instruction}')`;

  return dbPool.execute(SQLQuery)
}

const updateInvoices = (body, idInvoices) => {
  const SQLQuery = `UPDATE invoices SET alamat_perusahaan='${body.alamat_perusahaan}', no_invoice='${body.no_invoice}', bill_to='${body.bill_to}', invoice_date='${body.invoice_date}', due_date='${body.due_date}', payment_instruction='${body.payment_instruction}' WHERE id=${idInvoices}`;

  return dbPool.execute(SQLQuery);
}

const deleteInvoices = (idInvoices) => {
  const SQLQuery = `DELETE FROM invoices WHERE id=${idInvoices}`;

  return dbPool.execute(SQLQuery)
}

module.exports = {
  getAllInvoices,
  createNewInvoices,
  updateInvoices,
  deleteInvoices
}