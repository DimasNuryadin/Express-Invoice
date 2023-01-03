// GET ALL invoices
const getAllInvoices = (req, res) => {
  const data = {
    id: '1',
    alamat_perusahaan: "JL Bandung",
    no_invoice: "123",
    bill_to: "PT Indah Karya",
    invoice_date: "12 Nov 2022",
    due_date: "1 Jan 2022",
    payment_instruction: "Rekening BCA"
  }

  res.json({
    message: 'GET all invoices success',
    data: data
  })
}

// CREATE invoices
const createNewInvoices = (req, res) => {
  // console.log(req.body)
  res.json({
    message: 'CREATE invoices success',
    data: req.body
  })
}

// UPDATE invoices
const updateInvoice = (req, res) => {
  const { id } = req.params
  // console.log('id invoices', id)
  res.json({
    message: 'UPDATE invoices success',
    data: req.body
  })
}

module.exports = {
  getAllInvoices,
  createNewInvoices,
  updateInvoice
}