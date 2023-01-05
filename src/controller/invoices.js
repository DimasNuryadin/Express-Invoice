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
const createNewInvoices = async (req, res) => {
  // Destructuring dari req.body
  const { body } = req;
  try {
    const [data] = await InvoicesModel.createNewInvoices(body);
    res.json({
      message: 'CREATE invoices success',
      data: {
        id: data.insertId,
        ...body
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }


}

// UPDATE invoices
const updateInvoice = async (req, res) => {
  const { idInvoices } = req.params
  console.log('id invoices', idInvoices)
  const { body } = req;
  try {
    await InvoicesModel.updateInvoices(body, idInvoices);
    res.json({
      message: 'CREATE invoices success',
      data: {
        id: idInvoices,
        ...body
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

// DELETE invoices
const deleteInvoice = async (req, res) => {
  const { idInvoices } = req.params;
  try {
    await InvoicesModel.deleteInvoices(idInvoices)
    res.json({
      message: 'CREATE invoices success',
      data: {
        id: idInvoices,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error
    })
  }
}

module.exports = {
  getAllInvoices,
  createNewInvoices,
  updateInvoice,
  deleteInvoice
}