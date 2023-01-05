const InvoicesModel = require('../models/invoices')

// GET ALL invoices
const getAllInvoices = async (req, res) => {
  try {
    // const [rows, field] = await InvoicesModel.getAllInvoices();
    const [data] = await InvoicesModel.getAllInvoices();

    res.json({
      message: 'GET all invoices success',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }

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
    data: {
      id: id,
      ...req.body
    }
  })
}

// DELETE invoices
const deleteInvoice = (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'DELETE invoices success',
    data: {
      id: id,
      alamat_perusahaan: "JL Bandung",
      no_invoice: "123",
      bill_to: "PT Indah Karya",
      invoice_date: "12 Nov 2022",
      due_date: "1 Jan 2022",
      payment_instruction: "Rekening BCA"
    }
  })
}

module.exports = {
  getAllInvoices,
  createNewInvoices,
  updateInvoice,
  deleteInvoice
}