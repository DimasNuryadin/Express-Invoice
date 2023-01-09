const dbPool = require('../config/database')

const today = new Date();
const date = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const now = `${year}-${month + 1}-${date}`;
// console.log("now : ", now)

const getAllInvoices = () => {
  const SQLQuery = 'SELECT * FROM invoices';
  return dbPool.execute(SQLQuery);
}

const getInvoices = (idInvoices) => {
  const SQLQuery = `SELECT * FROM invoices WHERE id=${idInvoices}`;

  return dbPool.execute(SQLQuery);
}

const createNewInvoices = (body) => {
  const SQLQuery = `INSERT INTO invoices (alamat_perusahaan, no_invoice, company, invoice_date, due_date, latest_update) VALUES ('${body.alamat_perusahaan}', '${body.no_invoice}', '${body.company}', '${body.invoice_date}', '${body.due_date}', '${now}')`;

  return dbPool.execute(SQLQuery)
}

const updateInvoiceStep1 = (body, idInvoices) => {
  const SQLQuery = `UPDATE invoices SET 
                    alamat_perusahaan='${body.alamat_perusahaan}', 
                    no_invoice='${body.no_invoice}', 
                    company='${body.company}', 
                    invoice_date='${body.invoice_date}', 
                    due_date='${body.due_date}', 
                    latest_update='${now}' 
                    WHERE id=${idInvoices}`;

  return dbPool.execute(SQLQuery);
}

const updateInvoiceStep2 = (body, idInvoices) => {
  const SQLQuery = `UPDATE invoices SET 
                    payment_instruction='${body.payment_instruction}', 
                    discount='${body.discount}', 
                    tax='${body.tax}', 
                    shipping='${body.shipping}', 
                    latest_update='${now}' 
                    WHERE id=${idInvoices}`;

  return dbPool.execute(SQLQuery);
}

const deleteInvoices = (idInvoices) => {
  const SQLQuery = `DELETE FROM invoices WHERE id=${idInvoices}`;

  return dbPool.execute(SQLQuery)
}

module.exports = {
  getAllInvoices,
  getInvoices,
  createNewInvoices,
  updateInvoiceStep1,
  updateInvoiceStep2,
  deleteInvoices
}