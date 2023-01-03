// GET ALL invoices
const getAllInvoices = (req, res) => {
  res.json({
    message: 'GET all invoices success'
  })
}

// CREATE invoices
const createNewInvoices = (req, res) => {
  res.json({
    message: 'CREATE invoices success'
  })
}

module.exports = {
  getAllInvoices,
  createNewInvoices
}